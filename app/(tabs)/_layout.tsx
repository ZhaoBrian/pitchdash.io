import { Tabs } from 'expo-router';
import { Image } from 'react-native';

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
            <Image
              source={require('../../assets/idk.png')}
              style={{
                width: 26,
                height: 26,
                opacity: focused ? 1 : 0.45,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          title: 'Practice',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/idk.png')}
              style={{
                width: 26,
                height: 26,
                opacity: focused ? 1 : 0.45,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}