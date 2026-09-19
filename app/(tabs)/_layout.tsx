import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hone Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/idk.png')}
              style={{
                width: 26,
                height: 26,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          title: 'Practice',
        }}
      />
    </Tabs>
  );
}