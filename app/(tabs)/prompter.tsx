import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  View as RNView,
} from 'react-native';
import { Text, View } from '@/components/Themed';

export default function PrompterScreen() {
  const [script, setScript] = useState(
    'Good morning everyone.\n\nToday I want to talk about why confidence is built through practice, not perfection.\n\nEvery time we speak, we have an opportunity to make an idea clearer and more memorable.\n\nSo instead of waiting until we feel ready, let us practice until speaking feels natural.'
  );

  const [speed, setSpeed] = useState(130);
  const [currentSection, setCurrentSection] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);

  const sections = useMemo(() => {
    return script
      .split(/\n\s*\n/)
      .map(section => section.trim())
      .filter(Boolean);
  }, [script]);

  const sectionTimes = useMemo(() => {
    return sections.map(section => {
      const words = section.split(/\s+/).filter(Boolean).length;
      return Math.max(3, Math.ceil((words / speed) * 60));
    });
  }, [sections, speed]);

  const totalTime = useMemo(() => {
    return sectionTimes.reduce((total, time) => total + time, 0);
  }, [sectionTimes]);

  useEffect(() => {
    if (!running || sections.length === 0) {
      return;
    }

    if (remaining <= 0) {
      if (currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
        setRemaining(sectionTimes[currentSection + 1] || 3);
      } else {
        setRunning(false);
        setRemaining(0);
      }

      return;
    }

    const timer = setInterval(() => {
      setRemaining(value => Math.max(0, value - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [
    running,
    remaining,
    currentSection,
    sections.length,
    sectionTimes,
  ]);

  useEffect(() => {
    if (!running && sections.length > 0) {
      setRemaining(sectionTimes[currentSection] || 0);
    }
  }, [sectionTimes]);

  const startPrompter = () => {
    if (sections.length === 0) {
      return;
    }

    if (currentSection >= sections.length) {
      setCurrentSection(0);
    }

    setRemaining(sectionTimes[currentSection] || 3);
    setRunning(true);
  };

  const pausePrompter = () => {
    setRunning(false);
  };

  const resetPrompter = () => {
    setRunning(false);
    setCurrentSection(0);
    setRemaining(sectionTimes[0] || 0);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(
      2,
      '0'
    )}`;
  };

  const wordCount = script.split(/\s+/).filter(Boolean).length;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>PitchDash.io / TOOL</Text>
            <Text style={styles.title}>Screen Prompter</Text>
            <Text style={styles.subtitle}>
              Speak naturally while PDi keeps your pace.
            </Text>
          </View>

          <View style={styles.mark}>
            <Text style={styles.markText}>M</Text>
          </View>
        </View>

        <View style={styles.editorCard}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardEyebrow}>YOUR SCRIPT</Text>
              <Text style={styles.cardTitle}>Enter what you want to say</Text>
            </View>

            <Text style={styles.wordCount}>{wordCount} WORDS</Text>
          </View>

          <TextInput
            value={script}
            onChangeText={setScript}
            multiline
            textAlignVertical="top"
            placeholder="Type or paste your speech here..."
            placeholderTextColor="#999"
            style={styles.input}
          />

          <Text style={styles.inputHint}>
            Separate sections with a blank line. Each section will receive its
            own calculated timing.
          </Text>
        </View>

        <View style={styles.settingsCard}>
          <View style={styles.settingsHeader}>
            <View>
              <Text style={styles.cardEyebrow}>TIMING</Text>
              <Text style={styles.cardTitle}>Speaking speed</Text>
            </View>

            <Text style={styles.speedValue}>{speed} WPM</Text>
          </View>

          <View style={styles.speedRow}>
            <Pressable
              style={[
                styles.speedButton,
                speed === 100 && styles.speedButtonActive,
              ]}
              onPress={() => setSpeed(100)}
            >
              <Text
                style={[
                  styles.speedButtonText,
                  speed === 100 && styles.speedButtonTextActive,
                ]}
              >
                SLOW
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.speedButton,
                speed === 130 && styles.speedButtonActive,
              ]}
              onPress={() => setSpeed(130)}
            >
              <Text
                style={[
                  styles.speedButtonText,
                  speed === 130 && styles.speedButtonTextActive,
                ]}
              >
                NATURAL
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.speedButton,
                speed === 160 && styles.speedButtonActive,
              ]}
              onPress={() => setSpeed(160)}
            >
              <Text
                style={[
                  styles.speedButtonText,
                  speed === 160 && styles.speedButtonTextActive,
                ]}
              >
                FAST
              </Text>
            </Pressable>
          </View>

          <View style={styles.timingStats}>
            <View>
              <Text style={styles.timingNumber}>{formatTime(totalTime)}</Text>
              <Text style={styles.timingLabel}>EST. TOTAL</Text>
            </View>

            <View>
              <Text style={styles.timingNumber}>{sections.length}</Text>
              <Text style={styles.timingLabel}>SECTIONS</Text>
            </View>

            <View>
              <Text style={styles.timingNumber}>{speed}</Text>
              <Text style={styles.timingLabel}>WORDS / MIN</Text>
            </View>
          </View>
        </View>

        <View style={styles.prompterCard}>
          <View style={styles.prompterTop}>
            <View>
              <Text style={styles.prompterLabel}>LIVE PROMPTER</Text>
              <Text style={styles.prompterSection}>
                SECTION {sections.length === 0 ? 0 : currentSection + 1} /{' '}
                {sections.length}
              </Text>
            </View>

            <View style={styles.timer}>
              <Text style={styles.timerText}>{formatTime(remaining)}</Text>
            </View>
          </View>

          <RNView style={styles.guideLine} />

          <RNView style={styles.scriptWindow}>
            <Text style={styles.promptText}>
              {sections[currentSection] ||
                'Enter your script above to begin.'}
            </Text>
          </RNView>

          <RNView style={styles.guideLine} />

          <View style={styles.prompterFooter}>
            <Text style={styles.liveStatus}>
              {running ? 'PROMPTER RUNNING' : 'READY TO SPEAK'}
            </Text>

            <View style={styles.progressDots}>
              {sections.map((_, index) => (
                <RNView
                  key={index}
                  style={[
                    styles.progressDot,
                    index === currentSection && styles.progressDotActive,
                    index < currentSection && styles.progressDotComplete,
                  ]}
                />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.controls}>
          <Pressable style={styles.resetButton} onPress={resetPrompter}>
            <Text style={styles.resetText}>RESET</Text>
          </Pressable>

          <Pressable
            style={styles.startButton}
            onPress={running ? pausePrompter : startPrompter}
          >
            <Text style={styles.startText}>
              {running ? 'PAUSE' : 'START PROMPTER'}
            </Text>

            <Text style={styles.startArrow}>
              {running ? 'Ⅱ' : '→'}
            </Text>
          </Pressable>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoNumber}>
            <Text style={styles.infoNumberText}>01</Text>
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>How timing works</Text>
            <Text style={styles.infoText}>
              PDi estimates each section using your word count and selected
              speaking speed. When the timer reaches zero, the next section
              automatically appears.
            </Text>
          </View>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F5',
  },

  content: {
    paddingTop: Platform.OS === 'ios' ? 25 : 18,
    paddingHorizontal: 20,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  eyebrow: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.6,
    color: '#888',
    marginBottom: 5,
  },

  title: {
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: -1,
    color: '#111',
  },

  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  mark: {
    width: 48,
    height: 48,
    backgroundColor: '#D7FF4F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  markText: {
    color: '#111',
    fontSize: 20,
    fontWeight: '900',
  },

  editorCard: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E2DE',
    padding: 20,
    marginBottom: 12,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 14,
  },

  cardEyebrow: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.4,
    color: '#888',
    marginBottom: 4,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#111',
  },

  wordCount: {
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#888',
  },

  input: {
    minHeight: 180,
    backgroundColor: '#F5F5F1',
    borderWidth: 1,
    borderColor: '#E4E4DF',
    padding: 16,
    fontSize: 15,
    lineHeight: 23,
    color: '#111',
    borderRadius: 4,
  },

  inputHint: {
    fontSize: 10,
    lineHeight: 15,
    color: '#999',
    marginTop: 10,
  },

  settingsCard: {
    backgroundColor: '#E8E8E3',
    borderWidth: 1,
    borderColor: '#DDDDD7',
    padding: 18,
    marginBottom: 12,
  },

  settingsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  speedValue: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111',
  },

  speedRow: {
    flexDirection: 'row',
    marginTop: 16,
  },

  speedButton: {
    flex: 1,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7D7D1',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#CECEC8',
  },

  speedButtonActive: {
    backgroundColor: '#111',
    borderColor: '#111',
  },

  speedButtonText: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#666',
  },

  speedButtonTextActive: {
    color: '#D7FF4F',
  },

  timingStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#D1D1CB',
  },

  timingNumber: {
    fontSize: 19,
    fontWeight: '900',
    color: '#111',
  },

  timingLabel: {
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#888',
    marginTop: 3,
  },

  prompterCard: {
    backgroundColor: '#111',
    padding: 22,
    minHeight: 430,
    marginTop: 12,
    marginBottom: 12,
  },

  prompterTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  prompterLabel: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
    color: '#D7FF4F',
  },

  prompterSection: {
    fontSize: 10,
    fontWeight: '800',
    color: '#777',
    marginTop: 5,
  },

  timer: {
    borderWidth: 1,
    borderColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  timerText: {
    fontSize: 19,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 1,
  },

  guideLine: {
    height: 2,
    backgroundColor: '#D7FF4F',
    opacity: 0.7,
    marginTop: 22,
  },

  scriptWindow: {
    minHeight: 270,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },

  promptText: {
    fontSize: Platform.OS === 'web' ? 31 : 26,
    lineHeight: Platform.OS === 'web' ? 44 : 37,
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
  },

  prompterFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },

  liveStatus: {
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: '#777',
  },

  progressDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  progressDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#333',
    marginLeft: 5,
  },

  progressDotActive: {
    width: 20,
    backgroundColor: '#D7FF4F',
  },

  progressDotComplete: {
    backgroundColor: '#777',
  },

  controls: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  resetButton: {
    height: 54,
    width: 100,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  resetText: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#666',
  },

  startButton: {
    flex: 1,
    height: 54,
    backgroundColor: '#D7FF4F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  startText: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#111',
    marginRight: 14,
  },

  startArrow: {
    fontSize: 17,
    fontWeight: '900',
    color: '#111',
  },

  infoCard: {
    backgroundColor: '#111',
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoNumber: {
    width: 42,
    height: 42,
    backgroundColor: '#D7FF4F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  infoNumberText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#111',
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFF',
    marginBottom: 4,
  },

  infoText: {
    fontSize: 11,
    lineHeight: 17,
    color: '#999',
  },

  bottomSpace: {
    height: 50,
  },
});