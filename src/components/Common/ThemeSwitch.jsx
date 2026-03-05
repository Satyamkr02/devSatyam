import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { THEME_OPTIONS } from '../../themes/themeConstants';

export default function ThemeSwitch() {
  const { theme, changeTheme } = useTheme();

  return (
    <View className="flex-row gap-3">
      <Pressable
        onPress={() => changeTheme(THEME_OPTIONS.DARK)}
        className={`px-4 py-2 rounded-lg ${
          theme === 'dark' ? 'bg-primary' : 'bg-gray-300'
        }`}
      >
        <Text>Dark</Text>
      </Pressable>

      <Pressable
        onPress={() => changeTheme(THEME_OPTIONS.LIGHT)}
        className={`px-4 py-2 rounded-lg ${
          theme === 'light' ? 'bg-primary' : 'bg-gray-300'
        }`}
      >
        <Text>Light</Text>
      </Pressable>

      <Pressable
        onPress={() => changeTheme(THEME_OPTIONS.SYSTEM)}
        className={`px-4 py-2 rounded-lg ${
          theme === 'system' ? 'bg-primary' : 'bg-gray-300'
        }`}
      >
        <Text>System</Text>
      </Pressable>
    </View>
  );
}
