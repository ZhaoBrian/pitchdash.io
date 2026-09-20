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
          title: 'Hone Home',
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
                𖠿
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          title: 'Practice Makes Performative',
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
                ◉
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="prompter"
        options={{
          title: 'Telecommunications\' Teleprompter',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 27,
                height: 27,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#D7FF4F' : '#EEEEEE',
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: '#111111',
                  fontSize: 15,
                  fontWeight: '900',
                }}
              >
                🖥️
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="three"
        options={{
          title: 'Infer Mason',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 27,
                height: 27,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#D7FF4F' : '#EEEEEE',
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: '#111111',
                  fontSize: 15,
                  fontWeight: '900',
                }}
              >
                📈
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}