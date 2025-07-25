import { HapticTab } from 'components/HapticTab';
import { IconSymbol } from 'components/ui/IconSymbol';
import BlurTabBarBackground from 'components/ui/TabBarBackground.ios';
import { Colors } from 'constants/Colors';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'hooks/useColorScheme.web';
import React from 'react';
import { Platform } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: BlurTabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
