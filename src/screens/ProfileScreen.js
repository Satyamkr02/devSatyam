import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold mb-6">Profile Screen</Text>

      <Pressable
        onPress={() => navigation.goBack()}
        className="bg-black px-6 py-3 rounded-xl"
      >
        <Text className="text-white">Go Back</Text>
      </Pressable>
    </View>
  );
}
