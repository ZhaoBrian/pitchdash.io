import { useEffect, useRef, useState } from 'react';
import { Platform, StyleSheet, Pressable } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Text, View } from '@/components/Themed';

export default function PracticeScreen() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const [permission, requestPermission] = useCameraPermissions();
  const [webReady, setWebReady] = useState(false);
  const [recording, setRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (Platform.OS !== 'web') {
      return;
    }

    let stream: MediaStream | null = null;

    const startWebCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: 'user',
          },
          audio: true,
        });

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
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startRecording = () => {
    if (Platform.OS === 'web') {
      if (!streamRef.current) {
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
          type: 'video/webm',
        });

        const url = URL.createObjectURL(blob);

        if (recordedUrl) {
          URL.revokeObjectURL(recordedUrl);
        }

        setRecordedUrl(url);
      };

      recorder.start();
      recorderRef.current = recorder;
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (recorderRef.current) {
      recorderRef.current.stop();
      recorderRef.current = null;
      setRecording(false);
    }
  };

  const saveRecording = () => {
    if (!recordedUrl) {
      return;
    }

    const link = document.createElement('a');

    link.href = recordedUrl;
    link.download = `speaking-practice-${Date.now()}.webm`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>PRACTICE LAB</Text>
          <Text style={styles.title}>Ready when you are.</Text>
        </View>

        <View style={styles.cameraContainer}>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scaleX(-1)',
            }}
          />

          {!webReady && (
            <View style={styles.cameraLoading}>
              <Text style={styles.loadingText}>Starting camera...</Text>
            </View>
          )}

          <View style={styles.overlay}>
            <View style={styles.target}>
              <View style={styles.cornerTopLeft} />
              <View style={styles.cornerTopRight} />
              <View style={styles.cornerBottomLeft} />
              <View style={styles.cornerBottomRight} />
            </View>

            <View style={styles.label}>
              <Text style={styles.labelText}>
                {recording ? 'RECORDING' : 'EYE CONTACT'}
              </Text>
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

          {!recording && !recordedUrl && (
            <Pressable
              style={styles.recordButton}
              onPress={startRecording}
            >
              <View style={styles.recordDot} />
              <Text style={styles.recordText}>START RECORDING</Text>
            </Pressable>
          )}

          {recording && (
            <Pressable
              style={styles.stopButton}
              onPress={stopRecording}
            >
              <View style={styles.stopSquare} />
              <Text style={styles.stopText}>STOP RECORDING</Text>
            </Pressable>
          )}

          {recordedUrl && !recording && (
            <View style={styles.recordedArea}>
              <Text style={styles.savedText}>RECORDING READY</Text>

              <Pressable
                style={styles.saveButton}
                onPress={saveRecording}
              >
                <Text style={styles.saveText}>SAVE VIDEO</Text>
              </Pressable>

              <Pressable
                style={styles.againButton}
                onPress={() => {
                  setRecordedUrl(null);
                }}
              >
                <Text style={styles.againText}>RECORD AGAIN</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    );
  }

  if (!permission) {
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Loading camera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.eyebrow}>PRACTICE LAB</Text>

        <Text style={styles.permissionTitle}>
          Camera access needed
        </Text>

        <Text style={styles.description}>
          Allow camera access to practice your speaking and eye contact.
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

  cameraLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingText: {
    fontSize: 15,
    color: '#777',
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

  label: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: '#111',
    paddingVertical: 7,
    paddingHorizontal: 10,
  },

  labelText: {
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

  recordDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D7FF4F',
    marginRight: 9,
  },

  recordText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  stopButton: {
    height: 50,
    backgroundColor: '#D7FF4F',
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  stopSquare: {
    width: 10,
    height: 10,
    backgroundColor: '#111',
    marginRight: 9,
  },

  stopText: {
    color: '#111',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  recordedArea: {
    marginTop: 18,
  },

  savedText: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.3,
    color: '#111',
    marginBottom: 10,
  },

  saveButton: {
    height: 50,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  againButton: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#DDDDD7',
  },

  againText: {
    color: '#777',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },

  permissionTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111',
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    lineHeight: 21,
    color: '#777',
    textAlign: 'center',
    maxWidth: 330,
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