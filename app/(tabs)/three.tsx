import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>PitchDash.io / PROGRESS</Text>
            <Text style={styles.title}>Progress</Text>
            <Text style={styles.subtitle}>
              See how your speaking is improving.
            </Text>
          </View>

          <View style={styles.mark}>
            <Text style={styles.markText}>M</Text>
          </View>
        </View>

        <View style={styles.scoreCard}>
          <View>
            <Text style={styles.scoreEyebrow}>OVERALL SPEAKING SCORE</Text>
            <Text style={styles.scoreNumber}>68</Text>
            <Text style={styles.scoreDescription}>
              Your current score across your recent speaking sessions.
            </Text>
          </View>

          <View style={styles.scoreChange}>
            <Text style={styles.changeNumber}>+18%</Text>
            <Text style={styles.changeLabel}>THIS WEEK</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionEyebrow}>PERFORMANCE</Text>
          <Text style={styles.sectionTitle}>Your speaking profile.</Text>
        </View>

        <View style={styles.skillCard}>
          <View style={styles.skillTop}>
            <Text style={styles.skillName}>Voice & Delivery</Text>
            <Text style={styles.skillScore}>72</Text>
          </View>

          <View style={styles.track}>
            <View style={[styles.fill, { width: '72%' }]} />
          </View>

          <Text style={styles.skillDescription}>
            Pace, volume, tone, and purposeful pauses.
          </Text>
        </View>

        <View style={styles.skillCard}>
          <View style={styles.skillTop}>
            <Text style={styles.skillName}>Body Language</Text>
            <Text style={styles.skillScore}>61</Text>
          </View>

          <View style={styles.track}>
            <View style={[styles.fill, { width: '61%' }]} />
          </View>

          <Text style={styles.skillDescription}>
            Posture, gestures, movement, and eye contact.
          </Text>
        </View>

        <View style={styles.skillCard}>
          <View style={styles.skillTop}>
            <Text style={styles.skillName}>Audience Connection</Text>
            <Text style={styles.skillScore}>54</Text>
          </View>

          <View style={styles.track}>
            <View style={[styles.fill, { width: '54%' }]} />
          </View>

          <Text style={styles.skillDescription}>
            Clarity, empathy, engagement, and confidence.
          </Text>
        </View>

        <View style={styles.skillCard}>
          <View style={styles.skillTop}>
            <Text style={styles.skillName}>Pitching & Ideas</Text>
            <Text style={styles.skillScore}>48</Text>
          </View>

          <View style={styles.track}>
            <View style={[styles.fill, { width: '48%' }]} />
          </View>

          <Text style={styles.skillDescription}>
            Structure, persuasion, storytelling, and impact.
          </Text>
        </View>

        <View style={styles.activityCard}>
          <Text style={styles.activityEyebrow}>ACTIVITY</Text>
          <Text style={styles.activityTitle}>Keep the streak alive.</Text>

          <View style={styles.days}>
            <View style={styles.day}>
              <View style={styles.dayCircleActive}>
                <Text style={styles.dayCircleTextActive}>✓</Text>
              </View>
              <Text style={styles.dayLabel}>M</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayCircleActive}>
                <Text style={styles.dayCircleTextActive}>✓</Text>
              </View>
              <Text style={styles.dayLabel}>T</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayCircleActive}>
                <Text style={styles.dayCircleTextActive}>✓</Text>
              </View>
              <Text style={styles.dayLabel}>W</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayCircleActive}>
                <Text style={styles.dayCircleTextActive}>✓</Text>
              </View>
              <Text style={styles.dayLabel}>T</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayCircleActive}>
                <Text style={styles.dayCircleTextActive}>✓</Text>
              </View>
              <Text style={styles.dayLabel}>F</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayCircle}>
                <Text style={styles.dayCircleText}>S</Text>
              </View>
              <Text style={styles.dayLabel}>S</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayCircle}>
                <Text style={styles.dayCircleText}>S</Text>
              </View>
              <Text style={styles.dayLabel}>M</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>TOTAL REPS</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>DAY STREAK</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>18</Text>
            <Text style={styles.statLabel}>MINUTES</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>68</Text>
            <Text style={styles.statLabel}>AVG SCORE</Text>
          </View>
        </View>

        <View style={styles.goalCard}>
          <View>
            <Text style={styles.goalEyebrow}>NEXT MILESTONE</Text>
            <Text style={styles.goalTitle}>Reach a score of 75.</Text>
            <Text style={styles.goalText}>
              Keep practicing to unlock your next speaking milestone.
            </Text>
          </View>

          <Text style={styles.goalNumber}>7</Text>

          <Pressable style={styles.goalButton}>
            <Text style={styles.goalButtonText}>KEEP PRACTICING</Text>
            <Text style={styles.goalArrow}>→</Text>
          </Pressable>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },

  eyebrow: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.6,
    color: '#888',
    marginBottom: 5,
  },

  title: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -1.3,
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

  scoreCard: {
    backgroundColor: '#111',
    padding: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 30,
  },

  scoreEyebrow: {
    color: '#D7FF4F',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  scoreNumber: {
    color: '#FFF',
    fontSize: 62,
    lineHeight: 68,
    fontWeight: '900',
    letterSpacing: -3,
    marginTop: 8,
  },

  scoreDescription: {
    color: '#888',
    fontSize: 11,
    lineHeight: 17,
    maxWidth: 500,
  },

  scoreChange: {
    alignItems: 'flex-end',
  },

  changeNumber: {
    color: '#D7FF4F',
    fontSize: 22,
    fontWeight: '900',
  },

  changeLabel: {
    color: '#666',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 3,
  },

  sectionHeader: {
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

  skillCard: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E2DE',
    padding: 18,
    marginBottom: 8,
  },

  skillTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  skillName: {
    color: '#111',
    fontSize: 14,
    fontWeight: '900',
  },

  skillScore: {
    color: '#111',
    fontSize: 18,
    fontWeight: '900',
  },

  track: {
    height: 7,
    backgroundColor: '#E5E5E0',
    marginTop: 12,
  },

  fill: {
    height: '100%',
    backgroundColor: '#111',
  },

  skillDescription: {
    color: '#999',
    fontSize: 10,
    marginTop: 9,
  },

  activityCard: {
    backgroundColor: '#E8E8E3',
    borderWidth: 1,
    borderColor: '#DCDCD6',
    padding: 20,
    marginTop: 28,
    marginBottom: 28,
  },

  activityEyebrow: {
    color: '#888',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  activityTitle: {
    color: '#111',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 6,
  },

  days: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },

  day: {
    alignItems: 'center',
  },

  dayCircleActive: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dayCircleTextActive: {
    color: '#D7FF4F',
    fontSize: 12,
    fontWeight: '900',
  },

  dayCircle: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#D3D3CD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dayCircleText: {
    color: '#999',
    fontSize: 10,
    fontWeight: '900',
  },

  dayLabel: {
    color: '#777',
    fontSize: 8,
    fontWeight: '900',
    marginTop: 6,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -8,
  },

  statCard: {
    width: Platform.OS === 'web' ? '25%' : '50%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E2DE',
    padding: 17,
    marginBottom: 8,
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
    letterSpacing: 1,
    marginTop: 4,
  },

  goalCard: {
    backgroundColor: '#D7FF4F',
    padding: 21,
    marginTop: 28,
  },

  goalEyebrow: {
    color: '#444',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  goalTitle: {
    color: '#111',
    fontSize: 23,
    fontWeight: '900',
    marginTop: 7,
  },

  goalText: {
    color: '#555',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
    maxWidth: 600,
  },

  goalNumber: {
    color: '#111',
    fontSize: 46,
    fontWeight: '900',
    marginTop: 18,
  },

  goalButton: {
    backgroundColor: '#111',
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    marginTop: 15,
  },

  goalButtonText: {
    color: '#D7FF4F',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  goalArrow: {
    color: '#D7FF4F',
    fontSize: 18,
    fontWeight: '900',
  },

  bottomSpace: {
    height: 60,
  },
});