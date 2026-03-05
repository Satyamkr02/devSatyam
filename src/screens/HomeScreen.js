import React from 'react';
import { View } from 'react-native';
import { H1 } from '../components/CustomTags/H1';
import ThemeSwitch from '../components/Common/ThemeSwitch';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemeToggle from '../components/Common/ThemeToggle';

export default function HomeScreen() {
  return (
    // <SafeAreaView className="flex-1">
    <View className="flex-1 items-center justify-center bg-background dark:bg-background-dark">
      <H1 className="text-foreground dark:text-foreground-dark mb-6">
        Theme Demo
      </H1>

      <ThemeToggle />
      {/* <ThemeSwitch /> */}
    </View>
    // </SafeAreaView>
  );
}
