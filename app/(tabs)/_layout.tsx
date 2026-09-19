import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 10,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E1',
        },
        tabBarActiveTintColor: '#111111',
        tabBarInactiveTintColor: '#999999',
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '700',
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 28,
                height: 28,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#D7FF4F' : '#EEEEEA',
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: '#111111',
                  fontSize: 14,
                  fontWeight: '900',
                }}
              >
                M
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          title: 'Practice',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 28,
                height: 28,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#D7FF4F' : '#EEEEEA',
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: '#111111',
                  fontSize: 14,
                  fontWeight: '900',
                }}
              >
                M
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}