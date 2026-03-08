import { View, Text, Image } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { PROJECTS } from '../data/projects';

export default function ProjectDetailsScreen() {
  const route = useRoute();
  const { projectId } = route.params;

  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) return null;

  return (
    <View className="flex-1 p-6 bg-background dark:bg-background-dark">
      <Image
        source={{ uri: project.image }}
        className="w-full h-[220px] rounded-xl"
      />

      <Text className="text-2xl font-bold mt-4">{project.title}</Text>

      <Text className="text-muted mt-2">{project.description}</Text>
    </View>
  );
}
