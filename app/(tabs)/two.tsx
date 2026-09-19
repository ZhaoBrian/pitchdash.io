import { CameraView, useCameraPermissions } from 'expo-camera';
import {
  Platform,
  StyleSheet,
  Pressable,
  View as RNView,
  ScrollView,
} 
from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Text, View } from '@/components/Themed';

type SavedRecording = {
  id: string;
  name: string;
  blob: Blob;
  url: string;
  createdAt: string;
};

const DB_NAME = 'PracticeLabDB';
const STORE_NAME = 'recordings';

function openRecordingDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: 'id',
        });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

async function saveRecordingToApp(recording: SavedRecording) {
  const db = await openRecordingDatabase();

  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    store.put({
      id: recording.id,
      name: recording.name,
      blob: recording.blob,
      createdAt: recording.createdAt,
    });

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };

    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
  });
}

async function loadRecordingsFromApp(): Promise<SavedRecording[]> {
  const db = await openRecordingDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      const recordings = request.result
        .sort(
          (a: { createdAt: string }, b: { createdAt: string }) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        )
        .map(
          (recording: {
            id: string;
            name: string;
            blob: Blob;
            createdAt: string;
          }) => ({
            id: recording.id,
            name: recording.name,
            blob: recording.blob,
            url: URL.createObjectURL(recording.blob),
            createdAt: recording.createdAt,
          })
        );

      db.close();
      resolve(recordings);
    };

    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

async function deleteRecordingFromApp(id: string) {
  const db = await openRecordingDatabase();

  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    store.delete(id);

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };

    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
  });
}

export default function PracticeScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const [webReady, setWebReady] = useState(false);
  const [recording, setRecording] = useState(false);
  const [savingRecording, setSavingRecording] = useState(false);
  const [recordings, setRecordings] = useState<SavedRecording[]>([]);

  useEffect(() => {
    if (Platform.OS !== 'web') {
      return;
    }

    let mounted = true;

    const initialize = async () => {
      try {
        const savedRecordings = await loadRecordingsFromApp();

        if (mounted) {
          setRecordings(savedRecordings);
        }

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

    initialize();

    return () => {
      mounted = false;

      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const getSupportedMimeType = () => {
    if (typeof MediaRecorder === 'undefined') {
      return '';
    }

    const types = [
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm',
      'video/mp4',
    ];

    for (const type of types) {
      if (MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }

    return '';
  };

  const startRecording = () => {
    if (
      !streamRef.current ||
      typeof MediaRecorder === 'undefined'
    ) {
      return;
    }

    chunksRef.current = [];

    const mimeType = getSupportedMimeType();

    try {
      const recorder = mimeType
        ? new MediaRecorder(streamRef.current, {
            mimeType,
          })
        : new MediaRecorder(streamRef.current);

      recorder.ondataavailable = event => {
        if (event.data && event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = async () => {
        setSavingRecording(true);

        try {
          const blob = new Blob(chunksRef.current, {
            type: recorder.mimeType || mimeType || 'video/webm',
          });

          if (blob.size === 0) {
            setSavingRecording(false);
            return;
          }

          const id =
            `${Date.now()}-${Math.random()
              .toString(36)
              .substring(2, 9)}`;

          const recording: SavedRecording = {
            id,
            name: `Speaking Practice ${new Date().toLocaleTimeString([], {
              hour: 'numeric',
              minute: '2-digit',
            })}`,
            blob,
            url: URL.createObjectURL(blob),
            createdAt: new Date().toISOString(),
          };

          await saveRecordingToApp(recording);

          setRecordings(previous => [
            recording,
            ...previous,
          ]);
        } catch (error) {
          console.error('Could not save recording:', error);
        } finally {
          chunksRef.current = [];
          setSavingRecording(false);
        }
      };

      recorder.onerror = event => {
        console.error('Recording error:', event);
        setRecording(false);
      };

      recorderRef.current = recorder;

      recorder.start(250);

      setRecording(true);
    } catch (error) {
      console.error('Could not start recording:', error);
    }
  };

  const stopRecording = () => {
    if (!recorderRef.current) {
      return;
    }

    if (recorderRef.current.state !== 'inactive') {
      recorderRef.current.stop();
    }

    recorderRef.current = null;
    setRecording(false);
  };

  const deleteRecording = async (recording: SavedRecording) => {
    try {
      await deleteRecordingFromApp(recording.id);

      URL.revokeObjectURL(recording.url);

      setRecordings(previous =>
        previous.filter(item => item.id !== recording.id)
      );
    } catch (error) {
      console.error('Could not delete recording:', error);
    }
  };

  if (Platform.OS !== 'web') {
    if (!permission) {
      return (
        <View style={styles.center}>
          <Text style={styles.loading}>
            Loading camera...
          </Text>
        </View>
      );
    }

    if (!permission.granted) {
      return (
        <View style={styles.center}>
          <Text style={styles.eyebrow}>
            PRACTICE LAB
          </Text>

          <Text style={styles.title}>
            Camera access needed
          </Text>

          <Text style={styles.description}>
            Allow camera access to practice your speaking and eye contact mannerisms.
          </Text>

          <Pressable
            style={styles.button}
            onPress={requestPermission}
          >
            <Text style={styles.buttonText}>
              ALLOW CAMERA
            </Text>
          </Pressable>
        </View>
      );
    }

    return (
      <ScrollView
        style={styles.page}
        contentContainerStyle={styles.pageContent}
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>
            PRACTICE LAB
          </Text>

          <Text style={styles.title}>
            Ready when you are.
          </Text>
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
          <Text style={styles.infoEyebrow}>
            60 SECOND REP
          </Text>

          <Text style={styles.infoTitle}>
            Tell a story.
          </Text>

          <Text style={styles.infoDescription}>
            Look directly into the camera and tell a short story with a clear
            beginning, middle, and end.
          </Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.pageContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>
          PRACTICE LAB
        </Text>

        <Text style={styles.title}>
          Ready when you are.
        </Text>
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
            <Text style={styles.loading}>
              Starting camera...
            </Text>
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
              {recording ? '● RECORDING' : 'EYE CONTACT'}
            </Text>
          </RNView>

        </RNView>
      </RNView>

      <View style={styles.info}>
        <Text style={styles.infoEyebrow}>
          60 SECOND REP
        </Text>

        <Text style={styles.infoTitle}>
          Tell a story.
        </Text>

        <Text style={styles.infoDescription}>
          Look directly into the camera and tell a short story with a clear
          beginning, middle, and end.
        </Text>

        <Pressable
          style={[
            styles.recordButton,
            recording && styles.stopButton,
          ]}
          onPress={
            recording
              ? stopRecording
              : startRecording
          }
          disabled={savingRecording}
        >
          <View
            style={[
              styles.recordDot,
              recording && styles.stopDot,
            ]}
          />

          <Text
            style={[
              styles.recordText,
              recording && styles.stopRecordText,
            ]}
          >
            {savingRecording
              ? 'SAVING...'
              : recording
                ? 'STOP RECORDING'
                : 'START RECORDING'}
          </Text>
        </Pressable>
      </View>

      {recordings.length > 0 && (
        <View style={styles.recordingsSection}>
          <Text style={styles.recordingsEyebrow}>
            PRACTICE HISTORY
          </Text>

          <Text style={styles.recordingsTitle}>
            Your recordings
          </Text>

          {recordings.map((recording, index) => (
            <View
              key={recording.id}
              style={styles.recordingCard}
            >
              <RNView style={styles.recordingVideoContainer}>
                <video
                  src={recording.url}
                  controls
                  playsInline
                  preload="metadata"
                  style={styles.recordingVideo}
                />
              </RNView>

              <View style={styles.recordingDetails}>
                <View style={styles.recordingHeader}>
                  <View style={styles.recordingNameContainer}>
                    <Text style={styles.recordingNumber}>
                      REP {recordings.length - index}
                    </Text>

                    <Text style={styles.recordingName}>
                      {recording.name}
                    </Text>
                  </View>

                  <Pressable
                    style={styles.deleteButton}
                    onPress={() =>
                      deleteRecording(recording)
                    }
                  >
                    <Text style={styles.deleteButtonText}>
                      DELETE
                    </Text>
                  </Pressable>
                </View>

                <Text style={styles.recordingDate}>
                  {new Date(
                    recording.createdAt
                  ).toLocaleString()}
                </Text>

                <Text style={styles.storedLabel}>
                  STORED IN PRACTICE LAB
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}

      {recordings.length === 0 && !recording && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyEyebrow}>
            NO REPS YET
          </Text>

          <Text style={styles.emptyTitle}>
            Your practice recordings will appear here.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F7F7F5',
  },

  pageContent: {
    paddingBottom: 50,
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
    paddingTop: 28,
    paddingHorizontal: 20,
    paddingBottom: 16,
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
    height: 330,
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
    width: 170,
    height: 220,
    position: 'relative',
  },

  cornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#D7FF4F',
  },

  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#D7FF4F',
  },

  cornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#D7FF4F',
  },

  cornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#D7FF4F',
  },

  cameraLabel: {
    position: 'absolute',
    top: 12,
    left: 12,
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
    paddingTop: 18,
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
    height: 52,
    backgroundColor: '#111',
    marginTop: 16,
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
    borderRadius: 2,
  },

  recordText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  stopRecordText: {
    color: '#111',
  },

  recordingsSection: {
    paddingHorizontal: 20,
    paddingTop: 28,
  },

  recordingsEyebrow: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
    color: '#777',
    marginBottom: 5,
  },

  recordingsTitle: {
    fontSize: 23,
    fontWeight: '800',
    color: '#111',
    marginBottom: 14,
  },

  recordingCard: {
    backgroundColor: '#FFF',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E7E7E3',
  },

  recordingVideoContainer: {
    height: 210,
    backgroundColor: '#111',
    overflow: 'hidden',
  },

  recordingVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  } as any,

  recordingDetails: {
    padding: 14,
  },

  recordingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  recordingNameContainer: {
    flex: 1,
    paddingRight: 12,
  },

  recordingNumber: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.4,
    color: '#888',
    marginBottom: 4,
  },

  recordingName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111',
  },

  recordingDate: {
    fontSize: 11,
    color: '#999',
    marginTop: 7,
  },

  storedLabel: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.1,
    color: '#777',
    marginTop: 12,
  },

  deleteButton: {
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#DDD',
  },

  deleteButtonText: {
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#777',
  },

  emptyState: {
    marginHorizontal: 20,
    marginTop: 25,
    padding: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E7E7E3',
  },

  emptyEyebrow: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.3,
    color: '#999',
    marginBottom: 7,
  },

  emptyTitle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: '#333',
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

  description: {
    fontSize: 13,
    lineHeight: 20,
    color: '#777',
    textAlign: 'center',
    marginTop: 8,
  },
});