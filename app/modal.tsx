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
        <View style={styles.brandBanner}>
          <View style={styles.brandBannerGlow} />

          <View style={styles.brandTop}>
            <View style={styles.brandMark}>
              <View style={styles.brandMarkInner}>
                <Text style={styles.brandMarkText}>M</Text>
              </View>
            </View>

            <Text style={styles.brandLabel}>PUBLIC SPEAKING PLATFORM</Text>

            <Pressable style={styles.profile}>
              <Text style={styles.profileText}>B</Text>
            </Pressable>
          </View>

          <View style={styles.brandMain}>
            <Text style={styles.brandTitle}>PitchDashboard</Text>
            <Text style={styles.brandSubtitle}>
              Speak clearly. Pitch boldly. Be remembered.
            </Text>
          </View>

          <View style={styles.brandBottom}>
            <View style={styles.brandLine}>
              <View style={styles.brandLineFill} />
            </View>

            <Text style={styles.brandStatus}>YOUR SPEAKING LAB</Text>
          </View>
        </View>

        <View style={styles.welcomeRow}>
          <View>
            <Text style={styles.eyebrow}>WELCOME BACK</Text>
            <Text style={styles.title}>Good morning.</Text>
            <Text style={styles.subtitle}>
              Ready for your next speaking rep?
            </Text>
          </View>

          <View style={styles.scoreCircle}>
            <Text style={styles.scoreNumber}>68</Text>
            <Text style={styles.scoreLabel}>SCORE</Text>
          </View>
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroTop}>
            <View style={styles.heroBadge}>
              <Text style={styles.heroBadgeText}>TODAY'S FOCUS</Text>
            </View>

            <Text style={styles.heroStatus}>ACTIVE</Text>
          </View>

          <Text style={styles.heroTitle}>Become harder to ignore.</Text>

          <Text style={styles.heroDescription}>
            Practice your delivery, sharpen your message, and build confidence
            one speaking rep at a time.
          </Text>

          <Pressable style={styles.heroButton}>
            <Text style={styles.heroButtonText}>START A REP</Text>
            <Text style={styles.heroButtonArrow}>→</Text>
          </Pressable>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>DAY STREAK</Text>
            <View style={styles.statLine}>
              <View style={styles.statLineFill} />
            </View>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>REPS DONE</Text>
            <View style={styles.statLine}>
              <View style={styles.statLineFill} />
            </View>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>+18%</Text>
            <Text style={styles.statLabel}>THIS WEEK</Text>
            <View style={styles.statLine}>
              <View style={styles.statLineFill} />
            </View>
          </View>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <View>
              <Text style={styles.progressLabel}>WEEKLY MISSION</Text>
              <Text style={styles.progressTitle}>12 of 18 reps completed</Text>
            </View>

            <Text style={styles.progressPercent}>68%</Text>
          </View>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.progressFooter}>
            <Text style={styles.progressSmall}>6 reps remaining</Text>
            <Text style={styles.progressSmall}>Keep building</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>TRAIN</Text>
            <Text style={styles.sectionTitle}>Practice room</Text>
          </View>

          <Pressable style={styles.viewButton}>
            <Text style={styles.viewButtonText}>VIEW ALL →</Text>
          </Pressable>
        </View>

        <View style={styles.practiceGrid}>
          <Pressable style={styles.practiceCard}>
            <View style={styles.practiceIcon}>
              <Text style={styles.practiceSymbol}>●</Text>
            </View>

            <Text style={styles.cardTitle}>Record</Text>

            <Text style={styles.cardDescription}>
              Practice your delivery and get comfortable on camera.
            </Text>

            <View style={styles.cardBottom}>
              <Text style={styles.cardAction}>OPEN</Text>
              <Text style={styles.cardArrow}>→</Text>
            </View>
          </Pressable>

          <Pressable style={styles.practiceCard}>
            <View style={styles.practiceIcon}>
              <Text style={styles.practiceSymbol}>▤</Text>
            </View>

            <Text style={styles.cardTitle}>Read</Text>

            <Text style={styles.cardDescription}>
              Train your expression with short speaking prompts.
            </Text>

            <View style={styles.cardBottom}>
              <Text style={styles.cardAction}>OPEN</Text>
              <Text style={styles.cardArrow}>→</Text>
            </View>
          </Pressable>

          <Pressable style={styles.practiceCard}>
            <View style={styles.practiceIcon}>
              <Text style={styles.practiceSymbol}>◖</Text>
            </View>

            <Text style={styles.cardTitle}>Listen</Text>

            <Text style={styles.cardDescription}>
              Study techniques used by confident speakers.
            </Text>

            <View style={styles.cardBottom}>
              <Text style={styles.cardAction}>OPEN</Text>
              <Text style={styles.cardArrow}>→</Text>
            </View>
          </Pressable>

          <Pressable style={styles.practiceCard}>
            <View style={styles.practiceIcon}>
              <Text style={styles.practiceSymbol}>◉</Text>
            </View>

            <Text style={styles.cardTitle}>Presence</Text>

            <Text style={styles.cardDescription}>
              Improve eye contact, posture, and audience connection.
            </Text>

            <View style={styles.cardBottom}>
              <Text style={styles.cardAction}>OPEN</Text>
              <Text style={styles.cardArrow}>→</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.challengeCard}>
          <View style={styles.challengeContent}>
            <View style={styles.challengeHeader}>
              <Text style={styles.challengeLabel}>DAILY CHALLENGE</Text>
              <Text style={styles.challengeTime}>01:00</Text>
            </View>

            <Text style={styles.challengeTitle}>
              Tell a story in 60 seconds.
            </Text>

            <Text style={styles.challengeDescription}>
              Hook your audience, build tension, and land your point.
            </Text>

            <Pressable style={styles.challengeButton}>
              <Text style={styles.challengeButtonText}>
                ACCEPT CHALLENGE
              </Text>
              <Text style={styles.challengeButtonArrow}>→</Text>
            </Pressable>
          </View>

          <View style={styles.challengeNumber}>
            <Text style={styles.challengeNumberText}>01</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>LEVEL UP</Text>
            <Text style={styles.sectionTitle}>Build your skills</Text>
          </View>
        </View>

        <View style={styles.skillList}>
          <Pressable style={styles.skillRow}>
            <View style={styles.skillIcon}>
              <Text style={styles.skillSymbol}>◒</Text>
            </View>

            <View style={styles.skillInfo}>
              <Text style={styles.skillTitle}>Voice & Delivery</Text>
              <Text style={styles.skillDescription}>
                Pace, volume, tone and emphasis
              </Text>
            </View>

            <View style={styles.skillArrow}>
              <Text style={styles.chevron}>→</Text>
            </View>
          </Pressable>

          <Pressable style={styles.skillRow}>
            <View style={styles.skillIcon}>
              <Text style={styles.skillSymbol}>◇</Text>
            </View>

            <View style={styles.skillInfo}>
              <Text style={styles.skillTitle}>Body Language</Text>
              <Text style={styles.skillDescription}>
                Posture, gestures and presence
              </Text>
            </View>

            <View style={styles.skillArrow}>
              <Text style={styles.chevron}>→</Text>
            </View>
          </Pressable>

          <Pressable style={styles.skillRow}>
            <View style={styles.skillIcon}>
              <Text style={styles.skillSymbol}>◎</Text>
            </View>

            <View style={styles.skillInfo}>
              <Text style={styles.skillTitle}>Audience Connection</Text>
              <Text style={styles.skillDescription}>
                Engagement, clarity and confidence
              </Text>
            </View>

            <View style={styles.skillArrow}>
              <Text style={styles.chevron}>→</Text>
            </View>
          </Pressable>

          <Pressable style={styles.skillRow}>
            <View style={styles.skillIcon}>
              <Text style={styles.skillSymbol}>✦</Text>
            </View>

            <View style={styles.skillInfo}>
              <Text style={styles.skillTitle}>Pitching & Ideas</Text>
              <Text style={styles.skillDescription}>
                Structure ideas people remember
              </Text>
            </View>

            <View style={styles.skillArrow}>
              <Text style={styles.chevron}>→</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.frameworkHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>YOUR TOOLKIT</Text>
            <Text style={styles.sectionTitle}>Speaking frameworks</Text>
          </View>

          <Pressable style={styles.viewButton}>
            <Text style={styles.viewButtonText}>EXPLORE →</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameworkScroll}
        >
          <Pressable style={styles.frameworkCard}>
            <View style={styles.frameworkTop}>
              <Text style={styles.frameworkNumber}>01</Text>
              <Text style={styles.frameworkSymbol}>+</Text>
            </View>

            <Text style={styles.frameworkTitle}>PREP</Text>

            <Text style={styles.frameworkDescription}>
              Structure any idea before you speak.
            </Text>
          </Pressable>

          <Pressable style={styles.frameworkCard}>
            <View style={styles.frameworkTop}>
              <Text style={styles.frameworkNumber}>02</Text>
              <Text style={styles.frameworkSymbol}>+</Text>
            </View>

            <Text style={styles.frameworkTitle}>STAR</Text>

            <Text style={styles.frameworkDescription}>
              Turn experiences into compelling stories.
            </Text>
          </Pressable>

          <Pressable style={styles.frameworkCard}>
            <View style={styles.frameworkTop}>
              <Text style={styles.frameworkNumber}>03</Text>
              <Text style={styles.frameworkSymbol}>+</Text>
            </View>

            <Text style={styles.frameworkTitle}>PEEL</Text>

            <Text style={styles.frameworkDescription}>
              Make your arguments clear and memorable.
            </Text>
          </Pressable>

          <Pressable style={styles.frameworkCard}>
            <View style={styles.frameworkTop}>
              <Text style={styles.frameworkNumber}>04</Text>
              <Text style={styles.frameworkSymbol}>+</Text>
            </View>

            <Text style={styles.frameworkTitle}>HOOK</Text>

            <Text style={styles.frameworkDescription}>
              Grab attention before your main point.
            </Text>
          </Pressable>
        </ScrollView>

        <View style={styles.footerCard}>
          <View style={styles.footerLine} />

          <View style={styles.footerContent}>
            <Text style={styles.footerTitle}>Your speaking journey</Text>
            <Text style={styles.footerText}>
              Keep practicing. Your confidence is built rep by rep.
            </Text>
          </View>

          <Text style={styles.footerArrow}>→</Text>
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
    paddingTop: Platform.OS === 'ios' ? 20 : 12,
    paddingHorizontal: 20,
  },

  brandBanner: {
    backgroundColor: '#111',
    minHeight: 205,
    marginBottom: 26,
    padding: 20,
    overflow: 'hidden',
    position: 'relative',
  },

  brandBannerGlow: {
    position: 'absolute',
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: '#D7FF4F',
    opacity: 0.12,
    right: -85,
    top: -85,
  },

  brandTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  brandMark: {
    width: 39,
    height: 39,
    borderWidth: 1,
    borderColor: '#D7FF4F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  brandMarkInner: {
    width: 27,
    height: 27,
    backgroundColor: '#D7FF4F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  brandMarkText: {
    color: '#111',
    fontSize: 14,
    fontWeight: '900',
  },

  brandLabel: {
    flex: 1,
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: '#999',
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },

  profileText: {
    color: '#D7FF4F',
    fontSize: 14,
    fontWeight: '900',
  },

  brandMain: {
    marginTop: 31,
  },

  brandTitle: {
    fontSize: 48,
    lineHeight: 50,
    fontWeight: '900',
    letterSpacing: -2,
    color: '#FFF',
  },

  brandSubtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: '#A3A3A3',
    marginTop: 5,
    maxWidth: 280,
  },

  brandBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },

  brandLine: {
    width: 55,
    height: 3,
    backgroundColor: '#333',
    marginRight: 10,
    overflow: 'hidden',
  },

  brandLineFill: {
    width: '65%',
    height: '100%',
    backgroundColor: '#D7FF4F',
  },

  brandStatus: {
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.3,
    color: '#777',
  },

  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },

  eyebrow: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
    color: '#777',
    marginBottom: 6,
  },

  title: {
    fontSize: 29,
    fontWeight: '900',
    letterSpacing: -1,
    color: '#111',
  },

  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  scoreCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 2,
    borderColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7FF4F',
  },

  scoreNumber: {
    fontSize: 17,
    fontWeight: '900',
    color: '#111',
  },

  scoreLabel: {
    fontSize: 6,
    fontWeight: '900',
    letterSpacing: 0.7,
    color: '#555',
    marginTop: 1,
  },

  heroCard: {
    backgroundColor: '#111',
    padding: 23,
    minHeight: 285,
    marginBottom: 12,
    overflow: 'hidden',
  },

  heroTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  heroBadge: {
    backgroundColor: '#202020',
    paddingVertical: 7,
    paddingHorizontal: 10,
  },

  heroBadgeText: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.2,
    color: '#D7FF4F',
  },

  heroStatus: {
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#777',
  },

  heroTitle: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '900',
    letterSpacing: -1,
    color: '#FFF',
    marginTop: 34,
    maxWidth: 320,
  },

  heroDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: '#A7A7A7',
    marginTop: 11,
    maxWidth: 330,
  },

  heroButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D7FF4F',
    paddingVertical: 13,
    paddingHorizontal: 15,
    marginTop: 22,
  },

  heroButtonText: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#111',
    marginRight: 12,
  },

  heroButtonArrow: {
    fontSize: 17,
    fontWeight: '900',
    color: '#111',
  },

  statsRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E4E4DF',
    padding: 14,
    minHeight: 105,
    marginRight: 8,
  },

  statNumber: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111',
    marginTop: 5,
    marginBottom: 4,
  },

  statLabel: {
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.8,
    color: '#888',
  },

  statLine: {
    height: 3,
    backgroundColor: '#ECECE8',
    marginTop: 12,
    overflow: 'hidden',
  },

  statLineFill: {
    width: '70%',
    height: '100%',
    backgroundColor: '#111',
  },

  progressCard: {
    backgroundColor: '#E8E8E3',
    padding: 18,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#DDDDD7',
  },

  progressHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  progressLabel: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.3,
    color: '#777',
    marginBottom: 5,
  },

  progressTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111',
  },

  progressPercent: {
    fontSize: 25,
    fontWeight: '900',
    color: '#111',
  },

  progressBar: {
    height: 8,
    backgroundColor: '#D0D0CA',
    marginTop: 16,
    overflow: 'hidden',
  },

  progressFill: {
    width: '68%',
    height: '100%',
    backgroundColor: '#111',
  },

  progressFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
  },

  progressSmall: {
    fontSize: 10,
    color: '#777',
    fontWeight: '600',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 14,
  },

  frameworkHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 14,
  },

  sectionEyebrow: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.4,
    color: '#858585',
    marginBottom: 3,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: -0.6,
    color: '#111',
  },

  viewButton: {
    paddingVertical: 6,
    paddingLeft: 10,
  },

  viewButtonText: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.8,
    color: '#777',
  },

  practiceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },

  practiceCard: {
    width: '48.5%',
    minHeight: 190,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3DE',
    padding: 15,
    position: 'relative',
    marginRight: '3%',
    marginBottom: 10,
  },

  practiceIcon: {
    width: 43,
    height: 43,
    backgroundColor: '#F0F0EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  practiceSymbol: {
    fontSize: 20,
    color: '#111',
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#111',
    marginBottom: 6,
  },

  cardDescription: {
    fontSize: 11,
    lineHeight: 17,
    color: '#858585',
    paddingRight: 3,
  },

  cardBottom: {
    position: 'absolute',
    left: 15,
    right: 15,
    bottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEA',
    paddingTop: 9,
  },

  cardAction: {
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#777',
  },

  cardArrow: {
    fontSize: 16,
    fontWeight: '900',
    color: '#111',
  },

  challengeCard: {
    backgroundColor: '#111',
    minHeight: 260,
    marginBottom: 32,
    padding: 22,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  challengeContent: {
    flex: 1,
  },

  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 285,
  },

  challengeLabel: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
    color: '#D7FF4F',
  },

  challengeTime: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#777',
  },

  challengeTitle: {
    fontSize: 27,
    lineHeight: 31,
    fontWeight: '900',
    letterSpacing: -0.7,
    color: '#FFF',
    maxWidth: 280,
    marginTop: 12,
  },

  challengeDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: '#999',
    marginTop: 9,
    maxWidth: 285,
  },

  challengeButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D7FF4F',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: 19,
  },

  challengeButtonText: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.8,
    color: '#111',
    marginRight: 10,
  },

  challengeButtonArrow: {
    fontSize: 16,
    fontWeight: '900',
    color: '#111',
  },

  challengeNumber: {
    position: 'absolute',
    right: -8,
    bottom: -25,
  },

  challengeNumberText: {
    fontSize: 115,
    fontWeight: '900',
    color: '#1D1D1D',
  },

  skillList: {
    marginBottom: 32,
    borderTopWidth: 1,
    borderTopColor: '#E2E2DE',
  },

  skillRow: {
    minHeight: 78,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2DE',
  },

  skillIcon: {
    width: 45,
    height: 45,
    backgroundColor: '#EBEBE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  skillSymbol: {
    fontSize: 21,
    color: '#111',
  },

  skillInfo: {
    flex: 1,
  },

  skillTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#111',
    marginBottom: 3,
  },

  skillDescription: {
    fontSize: 11,
    color: '#888',
  },

  skillArrow: {
    width: 32,
    height: 32,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },

  chevron: {
    fontSize: 16,
    color: '#111',
    fontWeight: '800',
  },

  frameworkScroll: {
    paddingRight: 20,
    marginBottom: 30,
  },

  frameworkCard: {
    width: 210,
    height: 165,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E2DE',
    padding: 17,
    marginRight: 10,
  },

  frameworkTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  frameworkNumber: {
    fontSize: 10,
    fontWeight: '900',
    color: '#999',
    letterSpacing: 1,
  },

  frameworkSymbol: {
    fontSize: 20,
    fontWeight: '300',
    color: '#999',
  },

  frameworkTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111',
    letterSpacing: 1,
    marginTop: 22,
    marginBottom: 7,
  },

  frameworkDescription: {
    fontSize: 11,
    lineHeight: 17,
    color: '#777',
  },

  footerCard: {
    backgroundColor: '#E8E8E3',
    minHeight: 88,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDDDD7',
  },

  footerLine: {
    width: 4,
    height: 48,
    backgroundColor: '#D7FF4F',
    marginRight: 14,
  },

  footerContent: {
    flex: 1,
  },

  footerTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#111',
    marginBottom: 3,
  },

  footerText: {
    fontSize: 11,
    lineHeight: 16,
    color: '#777',
  },

  footerArrow: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111',
    marginLeft: 10,
  },

  bottomSpace: {
    height: 50,
  },
});