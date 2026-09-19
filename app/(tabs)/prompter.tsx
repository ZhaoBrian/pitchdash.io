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
        <View style={styles.topBar}>
          <View>
            <Text style={styles.miniLabel}>MODAL / YOUR JOURNEY</Text>
            <Text style={styles.pageTitle}>Progress</Text>
          </View>

          <View style={styles.profile}>
            <Text style={styles.profileText}>B</Text>
          </View>
        </View>

        <View style={styles.introRow}>
          <View style={styles.introLine} />
          <Text style={styles.introText}>
            Small improvements compound into confident speaking.
          </Text>
        </View>

        <View style={styles.scoreCard}>
          <View style={styles.scoreHeader}>
            <View>
              <Text style={styles.scoreLabel}>CURRENT LEVEL</Text>
              <Text style={styles.levelText}>BUILDING MOMENTUM</Text>
            </View>

            <View style={styles.scoreBadge}>
              <Text style={styles.scoreBadgeText}>68</Text>
            </View>
          </View>

          <View style={styles.scoreMain}>
            <Text style={styles.scoreNumber}>68</Text>

            <View style={styles.scoreDetails}>
              <Text style={styles.scoreTitle}>SPEAKING SCORE</Text>
              <Text style={styles.scoreDescription}>
                Your overall performance across recent practice sessions.
              </Text>

              <View style={styles.changeRow}>
                <View style={styles.changePill}>
                  <Text style={styles.changePillText}>+18%</Text>
                </View>

                <Text style={styles.changeText}>from last week</Text>
              </View>
            </View>
          </View>

          <View style={styles.scoreTrack}>
            <View style={styles.scoreFill} />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeading}>
            <View>
              <Text style={styles.sectionLabel}>SKILL MAP</Text>
              <Text style={styles.sectionTitle}>Your speaking profile</Text>
            </View>

            <Text style={styles.sectionSmall}>4 SKILLS</Text>
          </View>

          <View style={styles.skillsGrid}>
            <View style={styles.skillCard}>
              <View style={styles.skillIcon}>
                <Text style={styles.skillIconText}>V</Text>
              </View>

              <View style={styles.skillTop}>
                <Text style={styles.skillName}>Voice</Text>
                <Text style={styles.skillScore}>72</Text>
              </View>

              <Text style={styles.skillDescription}>
                Pace, tone, volume
              </Text>

              <View style={styles.skillTrack}>
                <View style={[styles.skillFill, { width: '72%' }]} />
              </View>
            </View>

            <View style={styles.skillCard}>
              <View style={styles.skillIcon}>
                <Text style={styles.skillIconText}>B</Text>
              </View>

              <View style={styles.skillTop}>
                <Text style={styles.skillName}>Presence</Text>
                <Text style={styles.skillScore}>61</Text>
              </View>

              <Text style={styles.skillDescription}>
                Posture, gestures
              </Text>

              <View style={styles.skillTrack}>
                <View style={[styles.skillFill, { width: '61%' }]} />
              </View>
            </View>

            <View style={styles.skillCard}>
              <View style={styles.skillIcon}>
                <Text style={styles.skillIconText}>A</Text>
              </View>

              <View style={styles.skillTop}>
                <Text style={styles.skillName}>Audience</Text>
                <Text style={styles.skillScore}>54</Text>
              </View>

              <Text style={styles.skillDescription}>
                Clarity, connection
              </Text>

              <View style={styles.skillTrack}>
                <View style={[styles.skillFill, { width: '54%' }]} />
              </View>
            </View>

            <View style={styles.skillCard}>
              <View style={styles.skillIcon}>
                <Text style={styles.skillIconText}>P</Text>
              </View>

              <View style={styles.skillTop}>
                <Text style={styles.skillName}>Pitching</Text>
                <Text style={styles.skillScore}>48</Text>
              </View>

              <Text style={styles.skillDescription}>
                Structure, impact
              </Text>

              <View style={styles.skillTrack}>
                <View style={[styles.skillFill, { width: '48%' }]} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.streakCard}>
          <View style={styles.streakHeader}>
            <View>
              <Text style={styles.streakLabel}>CURRENT STREAK</Text>
              <Text style={styles.streakTitle}>7 days of showing up.</Text>
            </View>

            <View style={styles.streakNumberBox}>
              <Text style={styles.streakNumber}>7</Text>
              <Text style={styles.streakDays}>DAYS</Text>
            </View>
          </View>

          <View style={styles.daysRow}>
            <View style={styles.day}>
              <View style={styles.dayDone}>
                <Text style={styles.dayDoneText}>✓</Text>
              </View>
              <Text style={styles.dayName}>M</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayDone}>
                <Text style={styles.dayDoneText}>✓</Text>
              </View>
              <Text style={styles.dayName}>T</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayDone}>
                <Text style={styles.dayDoneText}>✓</Text>
              </View>
              <Text style={styles.dayName}>W</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayDone}>
                <Text style={styles.dayDoneText}>✓</Text>
              </View>
              <Text style={styles.dayName}>T</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayDone}>
                <Text style={styles.dayDoneText}>✓</Text>
              </View>
              <Text style={styles.dayName}>F</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayToday}>
                <Text style={styles.dayTodayText}>S</Text>
              </View>
              <Text style={styles.dayName}>S</Text>
            </View>

            <View style={styles.day}>
              <View style={styles.dayEmpty}>
                <Text style={styles.dayEmptyText}>S</Text>
              </View>
              <Text style={styles.dayName}>M</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeading}>
            <View>
              <Text style={styles.sectionLabel}>ACTIVITY</Text>
              <Text style={styles.sectionTitle}>The numbers behind your reps</Text>
            </View>
          </View>

          <View style={styles.statGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>REPS COMPLETED</Text>
              <Text style={styles.statDetail}>+4 this week</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>18</Text>
              <Text style={styles.statLabel}>MINUTES PRACTICED</Text>
              <Text style={styles.statDetail}>+6 this week</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>68</Text>
              <Text style={styles.statLabel}>AVERAGE SCORE</Text>
              <Text style={styles.statDetail}>+8 this week</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statLabel}>SKILLS TRAINED</Text>
              <Text style={styles.statDetail}>All active</Text>
            </View>
          </View>
        </View>

        <View style={styles.milestoneCard}>
          <View style={styles.milestoneTop}>
            <View style={styles.milestoneTag}>
              <Text style={styles.milestoneTagText}>NEXT MILESTONE</Text>
            </View>

            <Text style={styles.milestoneNumber}>75</Text>
          </View>

          <Text style={styles.milestoneTitle}>
            You're 7 points away.
          </Text>

          <Text style={styles.milestoneText}>
            Keep building consistency across your practice sessions to reach
            your next speaking milestone.
          </Text>

          <View style={styles.milestoneTrack}>
            <View style={styles.milestoneFill} />
          </View>

          <View style={styles.milestoneBottom}>
            <Text style={styles.milestoneCurrent}>68 CURRENT</Text>
            <Text style={styles.milestoneGoal}>75 GOAL</Text>
          </View>

          <Pressable style={styles.milestoneButton}>
            <Text style={styles.milestoneButtonText}>KEEP PRACTICING</Text>
            <Text style={styles.milestoneArrow}>→</Text>
          </Pressable>
        </View>

        <View style={styles.quoteCard}>
          <View style={styles.quoteMark}>
            <Text style={styles.quoteMarkText}>“</Text>
          </View>

          <Text style={styles.quote}>
            Confidence isn't something you wait for. It's something you
            practice.
          </Text>

          <Text style={styles.quoteLabel}>MODAL PRINCIPLE / 01</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerBrand}>MODAL</Text>
          <Text style={styles.footerText}>KEEP SHOWING UP.</Text>
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

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },

  miniLabel: {
    color: '#999',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.6,
    marginBottom: 5,
  },

  pageTitle: {
    color: '#111',
    fontSize: 35,
    fontWeight: '900',
    letterSpacing: -1.5,
  },

  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileText: {
    color: '#D7FF4F',
    fontSize: 13,
    fontWeight: '900',
  },

  introRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  introLine: {
    width: 32,
    height: 3,
    backgroundColor: '#D7FF4F',
    marginRight: 10,
  },

  introText: {
    color: '#777',
    fontSize: 11,
    lineHeight: 16,
    flex: 1,
  },

  scoreCard: {
    backgroundColor: '#111',
    padding: 22,
    marginBottom: 30,
  },

  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  scoreLabel: {
    color: '#777',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.4,
  },

  levelText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '900',
    marginTop: 5,
  },

  scoreBadge: {
    width: 48,
    height: 48,
    backgroundColor: '#D7FF4F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scoreBadgeText: {
    color: '#111',
    fontSize: 18,
    fontWeight: '900',
  },

  scoreMain: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    alignItems: Platform.OS === 'web' ? 'center' : 'flex-start',
    marginTop: 22,
  },

  scoreNumber: {
    color: '#FFF',
    fontSize: 72,
    lineHeight: 78,
    fontWeight: '900',
    letterSpacing: -4,
    marginRight: 25,
  },

  scoreDetails: {
    flex: 1,
    maxWidth: 550,
  },

  scoreTitle: {
    color: '#D7FF4F',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.3,
  },

  scoreDescription: {
    color: '#888',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 6,
  },

  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  changePill: {
    backgroundColor: '#292929',
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  changePillText: {
    color: '#D7FF4F',
    fontSize: 9,
    fontWeight: '900',
  },

  changeText: {
    color: '#666',
    fontSize: 9,
    marginLeft: 8,
  },

  scoreTrack: {
    height: 5,
    backgroundColor: '#292929',
    marginTop: 23,
  },

  scoreFill: {
    height: '100%',
    width: '68%',
    backgroundColor: '#D7FF4F',
  },

  section: {
    marginBottom: 28,
  },

  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 12,
  },

  sectionLabel: {
    color: '#999',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginBottom: 4,
  },

  sectionTitle: {
    color: '#111',
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: -0.4,
  },

  sectionSmall: {
    color: '#999',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
  },

  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -8,
  },

  skillCard: {
    width: Platform.OS === 'web' ? '50%' : '100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3DE',
    padding: 18,
    marginBottom: 8,
  },

  skillIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  skillIconText: {
    color: '#D7FF4F',
    fontSize: 11,
    fontWeight: '900',
  },

  skillTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  skillName: {
    color: '#111',
    fontSize: 15,
    fontWeight: '900',
  },

  skillScore: {
    color: '#111',
    fontSize: 21,
    fontWeight: '900',
  },

  skillDescription: {
    color: '#999',
    fontSize: 9,
    marginTop: 3,
  },

  skillTrack: {
    height: 5,
    backgroundColor: '#E8E8E3',
    marginTop: 15,
  },

  skillFill: {
    height: '100%',
    backgroundColor: '#111',
  },

  streakCard: {
    backgroundColor: '#D7FF4F',
    padding: 21,
    marginBottom: 30,
  },

  streakHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  streakLabel: {
    color: '#555',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  streakTitle: {
    color: '#111',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 6,
  },

  streakNumberBox: {
    alignItems: 'center',
  },

  streakNumber: {
    color: '#111',
    fontSize: 35,
    lineHeight: 35,
    fontWeight: '900',
  },

  streakDays: {
    color: '#555',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 2,
  },

  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    borderTopWidth: 1,
    borderTopColor: '#BBD83F',
    paddingTop: 17,
  },

  day: {
    alignItems: 'center',
  },

  dayDone: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dayDoneText: {
    color: '#D7FF4F',
    fontSize: 11,
    fontWeight: '900',
  },

  dayToday: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#111',
  },

  dayTodayText: {
    color: '#111',
    fontSize: 10,
    fontWeight: '900',
  },

  dayEmpty: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#BFD642',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dayEmptyText: {
    color: '#7D9124',
    fontSize: 10,
    fontWeight: '900',
  },

  dayName: {
    color: '#555',
    fontSize: 7,
    fontWeight: '900',
    marginTop: 6,
  },

  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -8,
  },

  statCard: {
    width: Platform.OS === 'web' ? '50%' : '50%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3DE',
    padding: 18,
    marginBottom: 8,
  },

  statNumber: {
    color: '#111',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: -1,
  },

  statLabel: {
    color: '#888',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 5,
  },

  statDetail: {
    color: '#B0B0AA',
    fontSize: 9,
    marginTop: 12,
  },

  milestoneCard: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E2E2DE',
    padding: 21,
    marginBottom: 12,
  },

  milestoneTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  milestoneTag: {
    backgroundColor: '#111',
    paddingHorizontal: 9,
    paddingVertical: 6,
  },

  milestoneTagText: {
    color: '#D7FF4F',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1.1,
  },

  milestoneNumber: {
    color: '#111',
    fontSize: 26,
    fontWeight: '900',
  },

  milestoneTitle: {
    color: '#111',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: -0.7,
    marginTop: 25,
  },

  milestoneText: {
    color: '#888',
    fontSize: 11,
    lineHeight: 17,
    maxWidth: 600,
    marginTop: 7,
  },

  milestoneTrack: {
    height: 7,
    backgroundColor: '#E8E8E3',
    marginTop: 22,
  },

  milestoneFill: {
    height: '100%',
    width: '91%',
    backgroundColor: '#111',
  },

  milestoneBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },

  milestoneCurrent: {
    color: '#999',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
  },

  milestoneGoal: {
    color: '#111',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
  },

  milestoneButton: {
    backgroundColor: '#D7FF4F',
    minHeight: 49,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
    marginTop: 20,
  },

  milestoneButtonText: {
    color: '#111',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  milestoneArrow: {
    color: '#111',
    fontSize: 18,
    fontWeight: '900',
  },

  quoteCard: {
    backgroundColor: '#111',
    padding: 22,
    marginTop: 20,
  },

  quoteMark: {
    width: 35,
    height: 35,
    backgroundColor: '#D7FF4F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  quoteMarkText: {
    color: '#111',
    fontSize: 25,
    lineHeight: 30,
    fontWeight: '900',
  },

  quote: {
    color: '#FFF',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '800',
    letterSpacing: -0.4,
    marginTop: 18,
    maxWidth: 700,
  },

  quoteLabel: {
    color: '#666',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1.2,
    marginTop: 22,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    marginTop: 35,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footerBrand: {
    color: '#111',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1.2,
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