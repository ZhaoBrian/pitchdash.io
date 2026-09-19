import { CameraView, useCameraPermissions } from 'expo-camera';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function PracticeScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.eyebrow}>PRACTICE LAB</Text>
        <Text style={styles.permissionTitle}>Camera practice</Text>
        <Text style={styles.permissionText}>
          Use your camera to practice eye contact, delivery, and body language.
        </Text>

        <Pressable
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}>ENABLE CAMERA</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>PRACTICE LAB</Text>
          <Text style={styles.title}>Ready when you are.</Text>
        </View>
      </View>

      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          facing="front"
        />

        <View style={styles.cameraOverlay}>
          <View style={styles.target}>
            <View style={styles.targetTopLeft} />
            <View style={styles.targetTopRight} />
            <View style={styles.targetBottomLeft} />
            <View style={styles.targetBottomRight} />
          </View>

          <View style={styles.cameraLabel}>
            <Text style={styles.cameraLabelText}>EYE CONTACT</Text>
          </View>
        </View>
      </View>

      <View style={styles.practiceInfo}>
        <Text style={styles.practiceEyebrow}>60 SECOND REP</Text>
        <Text style={styles.practiceTitle}>Tell a story.</Text>
        <Text style={styles.practiceDescription}>
          Look directly into the camera and tell a short story with a clear
          beginning, middle, and end.
        </Text>

        <Pressable style={styles.recordButton}>
          <View style={styles.recordDot} />
          <Text style={styles.recordText}>START RECORDING</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F5',
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
    marginHorizontal: 20,
    height: 390,
    backgroundColor: '#111',
    overflow: 'hidden',
  },

  camera: {
    flex: 1,
  },

  cameraOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },

  target: {
    width: 190,
    height: 250,
    position: 'relative',
  },

  targetTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 32,
    height: 32,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#D7FF4F',
  },

  targetTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 32,
    height: 32,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#D7FF4F',
  },

  targetBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 32,
    height: 32,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#D7FF4F',
  },

  targetBottomRight: {
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

  practiceInfo: {
    paddingHorizontal: 20,
    paddingTop: 22,
  },

  practiceEyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: '#888',
    marginBottom: 6,
  },

  practiceTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111',
  },

  practiceDescription: {
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

  permissionContainer: {
    flex: 1,
    backgroundColor: '#F7F7F5',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  permissionTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111',
    marginBottom: 10,
  },

  permissionText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#777',
    maxWidth: 330,
  },

  permissionButton: {
    height: 50,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },

  permissionButtonText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
});