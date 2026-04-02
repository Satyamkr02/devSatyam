import { View, Text, useColorScheme, Pressable } from 'react-native';
import React from 'react';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Pressable
      onPress={handleBack}
      className="bg-foreground dark:bg-foreground-dark rounded-full p-2 shadow-md "
    >
      <ChevronLeft size={21} color={isDark ? '#000' : '#fff'} />
    </Pressable>
  );
}
