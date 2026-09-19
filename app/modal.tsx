import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>YOUR SPEAKING LAB</Text>
            <Text style={styles.title}>Good morning.</Text>
            <Text style={styles.subtitle}>
              Build confidence, one rep at a time.
            </Text>
          </View>

          <Pressable style={styles.profile}>
            <Text style={styles.profileText}>B</Text>
          </Pressable>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressTop}>
            <View>
              <Text style={styles.progressLabel}>WEEKLY PROGRESS</Text>
              <Text style={styles.progressNumber}>68%</Text>
            </View>

            <View style={styles.streak}>
              <Text style={styles.icon}>🔥</Text>
              <Text style={styles.streakText}>7 day streak</Text>
            </View>
          </View>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          <View style={styles.progressBottom}>
            <Text style={styles.progressSmall}>12 of 18 sessions</Text>
            <Text style={styles.progressSmall}>+3 this week</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Practice</Text>
          <Text style={styles.sectionAction}>VIEW ALL</Text>
        </View>

        <View style={styles.practiceGrid}>
          <Pressable style={styles.practiceCard}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>●</Text>
            </View>
            <Text style={styles.cardTitle}>Record</Text>
            <Text style={styles.cardDescription}>
              Practice your delivery
            </Text>
            <View style={styles.cardArrow}>
              <Text style={styles.arrow}>→</Text>
            </View>
          </Pressable>

          <Pressable style={styles.practiceCard}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>▤</Text>
            </View>
            <Text style={styles.cardTitle}>Read</Text>
            <Text style={styles.cardDescription}>
              Train your expression
            </Text>
            <View style={styles.cardArrow}>
              <Text style={styles.arrow}>→</Text>
            </View>
          </Pressable>

          <Pressable style={styles.practiceCard}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>◖</Text>
            </View>
            <Text style={styles.cardTitle}>Listen</Text>
            <Text style={styles.cardDescription}>
              Study great speakers
            </Text>
            <View style={styles.cardArrow}>
              <Text style={styles.arrow}>→</Text>
            </View>
          </Pressable>

          <Pressable style={styles.practiceCard}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>◉</Text>
            </View>
            <Text style={styles.cardTitle}>Eye Contact</Text>
            <Text style={styles.cardDescription}>
              Improve your presence
            </Text>
            <View style={styles.cardArrow}>
              <Text style={styles.arrow}>→</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.featureAccent} />

          <View style={styles.featureContent}>
            <Text style={styles.featureEyebrow}>TODAY'S CHALLENGE</Text>
            <Text style={styles.featureTitle}>
              Tell a story in 60 seconds.
            </Text>
            <Text style={styles.featureDescription}>
              Hook your audience, build tension, and land your point.
            </Text>

            <Pressable style={styles.startButton}>
              <Text style={styles.startButtonText}>START PRACTICE</Text>
              <Text style={styles.startArrow}>→</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Build your skills</Text>
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

            <Text style={styles.chevron}>›</Text>
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

            <Text style={styles.chevron}>›</Text>
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

            <Text style={styles.chevron}>›</Text>
          </Pressable>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Speaking frameworks</Text>
          <Text style={styles.sectionAction}>EXPLORE</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameworkScroll}
        >
          <Pressable style={styles.frameworkCard}>
            <Text style={styles.frameworkNumber}>01</Text>
            <Text style={styles.frameworkTitle}>PREP</Text>
            <Text style={styles.frameworkDescription}>
              Structure any idea before you speak.
            </Text>
          </Pressable>

          <Pressable style={styles.frameworkCard}>
            <Text style={styles.frameworkNumber}>02</Text>
            <Text style={styles.frameworkTitle}>STAR</Text>
            <Text style={styles.frameworkDescription}>
              Turn experiences into compelling stories.
            </Text>
          </Pressable>

          <Pressable style={styles.frameworkCard}>
            <Text style={styles.frameworkNumber}>03</Text>
            <Text style={styles.frameworkTitle}>PEEL</Text>
            <Text style={styles.frameworkDescription}>
              Make your arguments clear and memorable.
            </Text>
          </Pressable>
        </ScrollView>

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
    paddingTop: Platform.OS === 'ios' ? 64 : 42,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  eyebrow: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.6,
    color: '#777',
    marginBottom: 7,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -1,
    color: '#111',
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },

  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  progressCard: {
    backgroundColor: '#E8E8E3',
    padding: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#DDDDD7',
  },

  progressTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  progressLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: '#777',
    marginBottom: 4,
  },

  progressNumber: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111',
    letterSpacing: -1,
  },

  streak: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  icon: {
    fontSize: 18,
    color: '#111',
    marginRight: 6,
  },

  streakText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111',
  },

  progressBar: {
    height: 7,
    backgroundColor: '#D0D0CA',
    marginTop: 17,
    overflow: 'hidden',
  },

  progressFill: {
    width: '68%',
    height: '100%',
    backgroundColor: '#111',
  },

  progressBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
  },

  progressSmall: {
    fontSize: 11,
    color: '#777',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: -0.5,
    color: '#111',
  },

  sectionAction: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#777',
  },

  practiceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },

  practiceCard: {
    width: '48.5%',
    minHeight: 155,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E5E1',
    padding: 16,
    position: 'relative',
    marginRight: '3%',
    marginBottom: 10,
  },

  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: '#F0F0EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111',
    marginBottom: 5,
  },

  cardDescription: {
    fontSize: 12,
    lineHeight: 17,
    color: '#858585',
    paddingRight: 5,
  },

  cardArrow: {
    position: 'absolute',
    right: 13,
    bottom: 13,
  },

  arrow: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },

  featureCard: {
    backgroundColor: '#111',
    minHeight: 235,
    marginBottom: 34,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  featureAccent: {
    width: 6,
    backgroundColor: '#D7FF4F',
  },

  featureContent: {
    flex: 1,
    padding: 22,
  },

  featureEyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: '#AFAFAF',
    marginBottom: 10,
  },

  featureTitle: {
    fontSize: 25,
    lineHeight: 29,
    fontWeight: '800',
    letterSpacing: -0.7,
    color: '#FFF',
    maxWidth: 290,
  },

  featureDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: '#AFAFAF',
    marginTop: 10,
    maxWidth: 290,
  },

  startButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#D7FF4F',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  startButtonText: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#111',
    marginRight: 10,
  },

  startArrow: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111',
  },

  skillList: {
    marginBottom: 32,
    borderTopWidth: 1,
    borderTopColor: '#E2E2DE',
  },

  skillRow: {
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2DE',
  },

  skillIcon: {
    width: 43,
    height: 43,
    backgroundColor: '#EBEBE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  skillSymbol: {
    fontSize: 22,
    color: '#111',
  },

  skillInfo: {
    flex: 1,
  },

  skillTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111',
    marginBottom: 3,
  },

  skillDescription: {
    fontSize: 12,
    color: '#888',
  },

  chevron: {
    fontSize: 25,
    color: '#999',
    marginLeft: 10,
  },

  frameworkScroll: {
    paddingRight: 20,
  },

  frameworkCard: {
    width: 205,
    height: 145,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E2DE',
    padding: 17,
    marginRight: 10,
  },

  frameworkNumber: {
    fontSize: 10,
    fontWeight: '800',
    color: '#999',
    letterSpacing: 1,
    marginBottom: 15,
  },

  frameworkTitle: {
    fontSize: 19,
    fontWeight: '900',
    color: '#111',
    letterSpacing: 1,
    marginBottom: 7,
  },

  frameworkDescription: {
    fontSize: 12,
    lineHeight: 17,
    color: '#777',
  },

  bottomSpace: {
    height: 50,
  },
});