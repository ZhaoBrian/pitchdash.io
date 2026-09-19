import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.brandBar}>
          <View style={styles.brandLeft}>
            <View style={styles.brandMark}>
              <Text style={styles.brandMarkText}>M</Text>
            </View>

            <Text style={styles.brandLabel}>PUBLIC SPEAKING PLATFORM</Text>
          </View>

          <View style={styles.profile}>
            <Text style={styles.profileText}>B</Text>
          </View>
        </View>

        <View style={styles.heroHeader}>
          <View>
            <Text style={styles.eyebrow}>WELCOME BACK</Text>
            <Text style={styles.title}>MODAL</Text>
            <Text style={styles.subtitle}>
              Speak clearly. Think quickly. Be remembered.
            </Text>
          </View>

          <View style={styles.scoreBox}>
            <Text style={styles.scoreNumber}>68</Text>
            <Text style={styles.scoreLabel}>SCORE</Text>
          </View>
        </View>

        <View style={styles.limeLine} />

        <View style={styles.heroCard}>
          <View style={styles.heroTop}>
            <Text style={styles.heroEyebrow}>TODAY'S FOCUS</Text>
            <Text style={styles.heroNumber}>01</Text>
          </View>

          <Text style={styles.heroTitle}>Become harder to ignore.</Text>

          <Text style={styles.heroText}>
            Strong speakers do not just know what to say. They know how to
            make people listen.
          </Text>

          <Pressable style={styles.heroButton}>
            <Text style={styles.heroButtonText}>START TODAY'S SESSION</Text>
            <Text style={styles.heroArrow}>→</Text>
          </Pressable>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>DAY STREAK</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>REPS DONE</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>+18%</Text>
            <Text style={styles.statLabel}>THIS WEEK</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>WEEKLY MISSION</Text>
            <Text style={styles.sectionTitle}>Build your speaking reps.</Text>
          </View>

          <Text style={styles.sectionMeta}>12 / 18</Text>
        </View>

        <View style={styles.missionCard}>
          <View style={styles.missionTop}>
            <Text style={styles.missionText}>
              Complete 18 speaking exercises this week.
            </Text>

            <Text style={styles.missionPercent}>68%</Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.missionBottom}>
            6 more reps to complete the mission
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>PRACTICE ROOM</Text>
            <Text style={styles.sectionTitle}>Choose your rep.</Text>
          </View>
        </View>

        <View style={styles.practiceGrid}>
          <Pressable style={styles.practiceCard}>
            <Text style={styles.practiceNumber}>01</Text>
            <Text style={styles.practiceTitle}>RECORD</Text>
            <Text style={styles.practiceDescription}>
              Practice a response and review your delivery.
            </Text>
            <Text style={styles.practiceArrow}>→</Text>
          </Pressable>

          <Pressable style={styles.practiceCard}>
            <Text style={styles.practiceNumber}>02</Text>
            <Text style={styles.practiceTitle}>READ</Text>
            <Text style={styles.practiceDescription}>
              Work through a prepared speaking prompt.
            </Text>
            <Text style={styles.practiceArrow}>→</Text>
          </Pressable>

          <Pressable style={styles.practiceCard}>
            <Text style={styles.practiceNumber}>03</Text>
            <Text style={styles.practiceTitle}>LISTEN</Text>
            <Text style={styles.practiceDescription}>
              Hear examples and identify what makes them effective.
            </Text>
            <Text style={styles.practiceArrow}>→</Text>
          </Pressable>

          <Pressable style={styles.practiceCard}>
            <Text style={styles.practiceNumber}>04</Text>
            <Text style={styles.practiceTitle}>PRESENCE</Text>
            <Text style={styles.practiceDescription}>
              Train your posture, eye contact, and physical delivery.
            </Text>
            <Text style={styles.practiceArrow}>→</Text>
          </Pressable>
        </View>

        <View style={styles.challengeCard}>
          <View style={styles.challengeHeader}>
            <Text style={styles.challengeEyebrow}>DAILY CHALLENGE</Text>
            <Text style={styles.challengeTime}>2 MIN</Text>
          </View>

          <Text style={styles.challengeTitle}>
            Explain something complicated in the simplest way possible.
          </Text>

          <Text style={styles.challengeDescription}>
            Pick any topic. You have 60 seconds to explain it to someone who
            knows nothing about it.
          </Text>

          <Pressable style={styles.challengeButton}>
            <Text style={styles.challengeButtonText}>TAKE THE CHALLENGE</Text>
          </Pressable>
        </View>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>SKILLS</Text>
            <Text style={styles.sectionTitle}>Your speaking toolkit.</Text>
          </View>
        </View>

        <View style={styles.skillCard}>
          <View style={styles.skillInfo}>
            <Text style={styles.skillTitle}>Voice & Delivery</Text>
            <Text style={styles.skillDescription}>
              Pace, volume, tone, pauses
            </Text>
          </View>

          <View style={styles.skillProgress}>
            <Text style={styles.skillPercent}>72%</Text>
            <View style={styles.smallTrack}>
              <View style={[styles.smallFill, { width: '72%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.skillCard}>
          <View style={styles.skillInfo}>
            <Text style={styles.skillTitle}>Body Language</Text>
            <Text style={styles.skillDescription}>
              Posture, gestures, eye contact
            </Text>
          </View>

          <View style={styles.skillProgress}>
            <Text style={styles.skillPercent}>61%</Text>
            <View style={styles.smallTrack}>
              <View style={[styles.smallFill, { width: '61%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.skillCard}>
          <View style={styles.skillInfo}>
            <Text style={styles.skillTitle}>Audience Connection</Text>
            <Text style={styles.skillDescription}>
              Clarity, empathy, engagement
            </Text>
          </View>

          <View style={styles.skillProgress}>
            <Text style={styles.skillPercent}>54%</Text>
            <View style={styles.smallTrack}>
              <View style={[styles.smallFill, { width: '54%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.skillCard}>
          <View style={styles.skillInfo}>
            <Text style={styles.skillTitle}>Pitching & Ideas</Text>
            <Text style={styles.skillDescription}>
              Structure, persuasion, storytelling
            </Text>
          </View>

          <View style={styles.skillProgress}>
            <Text style={styles.skillPercent}>48%</Text>
            <View style={styles.smallTrack}>
              <View style={[styles.smallFill, { width: '48%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.frameworkSection}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionEyebrow}>FRAMEWORKS</Text>
              <Text style={styles.sectionTitle}>Know your structure.</Text>
            </View>
          </View>

          <View style={styles.frameworkGrid}>
            <View style={styles.frameworkCard}>
              <Text style={styles.frameworkName}>PREP</Text>
              <Text style={styles.frameworkDescription}>
                Point · Reason · Example · Point
              </Text>
            </View>

            <View style={styles.frameworkCard}>
              <Text style={styles.frameworkName}>STAR</Text>
              <Text style={styles.frameworkDescription}>
                Situation · Task · Action · Result
              </Text>
            </View>

            <View style={styles.frameworkCard}>
              <Text style={styles.frameworkName}>PEEL</Text>
              <Text style={styles.frameworkDescription}>
                Point · Evidence · Explain · Link
              </Text>
            </View>

            <View style={styles.frameworkCard}>
              <Text style={styles.frameworkName}>HOOK</Text>
              <Text style={styles.frameworkDescription}>
                Grab attention before giving context
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerBrand}>MODAL</Text>
          <Text style={styles.footerText}>
            PRACTICE UNTIL SPEAKING FEELS NATURAL.
          </Text>
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

  brandBar: {
    backgroundColor: '#111',
    minHeight: 64,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  brandLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  brandMark: {
    width: 36,
    height: 36,
    backgroundColor: '#D7FF4F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  brandMarkText: {
    color: '#111',
    fontSize: 17,
    fontWeight: '900',
  },

  brandLabel: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.4,
  },

  profile: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '900',
  },

  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  eyebrow: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.7,
    color: '#888',
    marginBottom: 5,
  },

  title: {
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: -2,
    color: '#111',
  },

  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 3,
  },

  scoreBox: {
    width: 76,
    height: 76,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scoreNumber: {
    color: '#D7FF4F',
    fontSize: 29,
    fontWeight: '900',
  },

  scoreLabel: {
    color: '#777',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1.2,
  },

  limeLine: {
    height: 3,
    backgroundColor: '#D7FF4F',
    marginTop: 20,
    marginBottom: 14,
  },

  heroCard: {
    backgroundColor: '#111',
    padding: 24,
    minHeight: 260,
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  heroEyebrow: {
    color: '#D7FF4F',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  heroNumber: {
    color: '#555',
    fontSize: 12,
    fontWeight: '900',
  },

  heroTitle: {
    color: '#FFF',
    fontSize: Platform.OS === 'web' ? 38 : 31,
    fontWeight: '900',
    letterSpacing: -1.3,
    marginTop: 40,
  },

  heroText: {
    color: '#999',
    fontSize: 13,
    lineHeight: 20,
    maxWidth: 650,
    marginTop: 12,
  },

  heroButton: {
    backgroundColor: '#D7FF4F',
    minHeight: 48,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },

  heroButtonText: {
    color: '#111',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  heroArrow: {
    color: '#111',
    fontSize: 19,
    fontWeight: '900',
  },

  statsRow: {
    flexDirection: 'row',
    marginBottom: 28,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E2DE',
    padding: 17,
    marginRight: 8,
  },

  statNumber: {
    color: '#111',
    fontSize: 25,
    fontWeight: '900',
  },

  statLabel: {
    color: '#888',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1.1,
    marginTop: 4,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 12,
  },

  sectionEyebrow: {
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
    color: '#999',
    marginBottom: 4,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '900',
    color: '#111',
  },

  sectionMeta: {
    fontSize: 13,
    fontWeight: '900',
    color: '#111',
  },

  missionCard: {
    backgroundColor: '#E8E8E3',
    borderWidth: 1,
    borderColor: '#DADAD4',
    padding: 18,
    marginBottom: 30,
  },

  missionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  missionText: {
    flex: 1,
    fontSize: 12,
    color: '#555',
  },

  missionPercent: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111',
    marginLeft: 12,
  },

  progressTrack: {
    height: 8,
    backgroundColor: '#D0D0CA',
    marginTop: 16,
  },

  progressFill: {
    height: '100%',
    width: '68%',
    backgroundColor: '#111',
  },

  missionBottom: {
    fontSize: 9,
    color: '#888',
    marginTop: 9,
  },

  practiceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -8,
    marginBottom: 28,
  },

  practiceCard: {
    width: Platform.OS === 'web' ? '25%' : '50%',
    minHeight: 190,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E2DE',
    padding: 18,
    marginBottom: 8,
    paddingRight: 16,
  },

  practiceNumber: {
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#AAA',
  },

  practiceTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#111',
    marginTop: 30,
  },

  practiceDescription: {
    fontSize: 10,
    lineHeight: 15,
    color: '#888',
    marginTop: 7,
  },

  practiceArrow: {
    fontSize: 17,
    fontWeight: '900',
    color: '#111',
    marginTop: 20,
  },

  challengeCard: {
    backgroundColor: '#D7FF4F',
    padding: 22,
    marginBottom: 30,
  },

  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  challengeEyebrow: {
    color: '#111',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.4,
  },

  challengeTime: {
    color: '#111',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  challengeTitle: {
    color: '#111',
    fontSize: 25,
    lineHeight: 31,
    fontWeight: '900',
    letterSpacing: -0.6,
    maxWidth: 720,
    marginTop: 28,
  },

  challengeDescription: {
    color: '#444',
    fontSize: 12,
    lineHeight: 18,
    maxWidth: 650,
    marginTop: 10,
  },

  challengeButton: {
    backgroundColor: '#111',
    minHeight: 46,
    paddingHorizontal: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'flex-start',
  },

  challengeButtonText: {
    color: '#D7FF4F',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  skillCard: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E2DE',
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  skillInfo: {
    flex: 1,
  },

  skillTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#111',
  },

  skillDescription: {
    fontSize: 10,
    color: '#999',
    marginTop: 4,
  },

  skillProgress: {
    width: 150,
    marginLeft: 20,
  },

  skillPercent: {
    fontSize: 9,
    fontWeight: '900',
    color: '#111',
    textAlign: 'right',
    marginBottom: 5,
  },

  smallTrack: {
    height: 5,
    backgroundColor: '#E4E4DF',
  },

  smallFill: {
    height: '100%',
    backgroundColor: '#111',
  },

  frameworkSection: {
    marginTop: 25,
  },

  frameworkGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -8,
  },

  frameworkCard: {
    width: Platform.OS === 'web' ? '25%' : '50%',
    backgroundColor: '#111',
    padding: 18,
    minHeight: 120,
    marginBottom: 8,
  },

  frameworkName: {
    color: '#D7FF4F',
    fontSize: 18,
    fontWeight: '900',
  },

  frameworkDescription: {
    color: '#888',
    fontSize: 9,
    lineHeight: 14,
    marginTop: 10,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    marginTop: 35,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  footerBrand: {
    color: '#111',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },

  footerText: {
    color: '#999',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
  },

  bottomSpace: {
    height: 60,
  },
});