import { CameraView, useCameraPermissions } from 'expo-camera';
import { Platform, StyleSheet, Pressable, View as RNView } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Text, View } from '@/components/Themed';

export default function PracticeScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const [webReady, setWebReady] = useState(false);
  const [recording, setRecording] = useState(false);
  const [recordingUrl, setRecordingUrl] = useState<string | null>(null);

  useEffect(() => {
    if (Platform.OS !== 'web') {
      return;
    }

    let mounted = true;

    const startWebCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (!mounted) {
          stream.getTracks().forEach(track => track.stop());
          return;
        }

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }

        setWebReady(true);
      } catch (error) {
        console.error('Camera error:', error);
      }
    };

    startWebCamera();

    return () => {
      mounted = false;

      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }

      if (recordingUrl) {
        URL.revokeObjectURL(recordingUrl);
      }
    };
  }, []);

  const startRecording = () => {
    if (Platform.OS !== 'web' || !streamRef.current) {
      return;
    }

    chunksRef.current = [];

    const recorder = new MediaRecorder(streamRef.current);

    recorder.ondataavailable = event => {
      if (event.data.size > 0) {
        chunksRef.current.push(event.data);
      }
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, {
        type: recorder.mimeType || 'video/webm',
      });

      const url = URL.createObjectURL(blob);

      setRecordingUrl(url);
    };

    recorderRef.current = recorder;
    recorder.start();

    setRecording(true);
  };

  const stopRecording = () => {
    if (!recorderRef.current) {
      return;
    }

    recorderRef.current.stop();
    setRecording(false);
  };

  if (Platform.OS !== 'web') {
    if (!permission) {
      return (
        <View style={styles.center}>
          <Text style={styles.loading}>Loading camera...</Text>
        </View>
      );
    }

    if (!permission.granted) {
      return (
        <View style={styles.center}>
          <Text style={styles.eyebrow}>PRACTICE LAB</Text>
          <Text style={styles.title}>Camera access needed</Text>
          <Text style={styles.description}>
            Allow camera access to practice your speaking and eye contact mannerisms.
          </Text>

          <Pressable
            style={styles.button}
            onPress={requestPermission}
          >
            <Text style={styles.buttonText}>ALLOW CAMERA</Text>
          </Pressable>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>PRACTICE LAB</Text>
          <Text style={styles.title}>Ready when you are.</Text>
        </View>

        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.camera}
            facing="front"
          />

          <View style={styles.overlay}>
            <View style={styles.target}>
              <View style={styles.cornerTopLeft} />
              <View style={styles.cornerTopRight} />
              <View style={styles.cornerBottomLeft} />
              <View style={styles.cornerBottomRight} />
            </View>
          </View>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoEyebrow}>60 SECOND REP</Text>
          <Text style={styles.infoTitle}>Tell a story.</Text>
          <Text style={styles.infoDescription}>
            Look directly into the camera and tell a short story with a clear
            beginning, middle, and end.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>PRACTICE LAB</Text>
        <Text style={styles.title}>Ready when you are.</Text>
      </View>

      <RNView style={styles.cameraContainer}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={styles.webVideo}
        />

        {!webReady && (
          <RNView style={styles.cameraLoading}>
            <Text style={styles.loading}>Starting camera...</Text>
          </RNView>
        )}

        <RNView style={styles.overlay}>
          <RNView style={styles.target}>
            <RNView style={styles.cornerTopLeft} />
            <RNView style={styles.cornerTopRight} />
            <RNView style={styles.cornerBottomLeft} />
            <RNView style={styles.cornerBottomRight} />
          </RNView>

          <RNView style={styles.cameraLabel}>
            <Text style={styles.cameraLabelText}>
              {recording ? 'RECORDING' : 'EYE CONTACT'}
            </Text>
          </RNView>
        </RNView>
      </RNView>

      <View style={styles.info}>
        <Text style={styles.infoEyebrow}>60 SECOND REP</Text>
        <Text style={styles.infoTitle}>Tell a story.</Text>
        <Text style={styles.infoDescription}>
          Look directly into the camera and tell a short story with a clear
          beginning, middle, and end.
        </Text>

        <Pressable
          style={[
            styles.recordButton,
            recording && styles.stopButton,
          ]}
          onPress={recording ? stopRecording : startRecording}
        >
          <View
            style={[
              styles.recordDot,
              recording && styles.stopDot,
            ]}
          />

          <Text style={styles.recordText}>
            {recording ? 'STOP RECORDING' : 'START REPORTING'}
          </Text>
        </Pressable>
      </View>

      {recordingUrl && (
        <View style={styles.previewSection}>
          <Text style={styles.previewLabel}>YOUR RECORDING</Text>

          <RNView style={styles.previewContainer}>
            <video
              src={recordingUrl}
              controls
              playsInline
              style={styles.previewVideo}
            />
          </RNView>

          <Pressable
            style={styles.saveButton}
            onPress={() => {
              const link = document.createElement('a');
              link.href = recordingUrl;
              link.download = 'speaking-practice.webm';
              link.click();
            }}
          >
            <Text style={styles.saveButtonText}>SAVE RECORDING</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F5',
  },

  center: {
    flex: 1,
    backgroundColor: '#F7F7F5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  loading: {
    fontSize: 14,
    color: '#777',
  },

  header: {
    paddingTop: 58,
    paddingHorizontal: 20,
    paddingBottom: 18,
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: '#777',
    marginBottom: 7,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.8,
    color: '#111',
  },

  cameraContainer: {
    height: 390,
    marginHorizontal: 20,
    backgroundColor: '#111',
    overflow: 'hidden',
    position: 'relative',
  },

  camera: {
    width: '100%',
    height: '100%',
  },

  webVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: [{ scaleX: -1 }],
  } as any,

  cameraLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  target: {
    width: 190,
    height: 250,
    position: 'relative',
  },

  cornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 32,
    height: 32,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#D7FF4F',
  },

  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 32,
    height: 32,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#D7FF4F',
  },

  cornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 32,
    height: 32,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#D7FF4F',
  },

  cornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#D7FF4F',
  },

  cameraLabel: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: '#111',
    paddingVertical: 7,
    paddingHorizontal: 10,
  },

  cameraLabelText: {
    color: '#D7FF4F',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.2,
  },

  info: {
    paddingHorizontal: 20,
    paddingTop: 22,
  },

  infoEyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: '#888',
    marginBottom: 6,
  },

  infoTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111',
  },

  infoDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: '#777',
    marginTop: 7,
  },

  recordButton: {
    height: 50,
    backgroundColor: '#111',
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  stopButton: {
    backgroundColor: '#D7FF4F',
  },

  recordDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D7FF4F',
    marginRight: 9,
  },

  stopDot: {
    backgroundColor: '#111',
  },

  recordText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  previewSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },

  previewLabel: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
    color: '#777',
    marginBottom: 10,
  },

  previewContainer: {
    height: 220,
    backgroundColor: '#111',
    overflow: 'hidden',
  },

  previewVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  } as any,

  saveButton: {
    height: 48,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  saveButtonText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  button: {
    backgroundColor: '#111',
    paddingHorizontal: 22,
    paddingVertical: 15,
    marginTop: 24,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
});