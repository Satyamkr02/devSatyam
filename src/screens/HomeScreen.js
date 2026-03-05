import React from 'react';
import { View, Pressable } from 'react-native';
import { H1 } from '../components/CustomTags/H1';
import { Body } from '../components/CustomTags/Body';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-background dark:bg-background-dark">
      <H1 className="text-3xl font-heading-bold text-foreground dark:text-foreground-dark mb-6">
        Home Screen
      </H1>

      <Pressable
        onPress={() => navigation.navigate('Profile')}
        className="bg-primary px-6 py-3 rounded-xl"
      >
        <Body className="text-black font-body-semibold">Go To Profile</Body>
      </Pressable>
    </View>
  );
}
