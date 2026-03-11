import { View, Text, Image, ScrollView, Linking } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { PROJECTS } from '../data/projects';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemeToggle from '../components/Common/ThemeToggle';
import { Body } from '../components/CustomTags/Body';
import { H1 } from '../components/CustomTags/H1';
import { StatusBar, useColorScheme } from 'react-native';

export default function ProjectDetailsScreen() {
  const route = useRoute();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { projectId } = route.params;

  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) return null;

  return (
    <SafeAreaView
      edges={['top']}
      className="flex-1"
      style={{ backgroundColor: isDark ? '#000' : '#fff' }}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <View className="absolute right-6 top-20 z-50">
        <ThemeToggle />
      </View>

      <ScrollView className="bg-background dark:bg-background-dark">
        {/* Cover Image */}
        <Image
          source={{ uri: project.coverImage }}
          className="w-full h-[240px]"
        />

        <View className="p-6">
          {/* Title */}
          <H1 className="text-black dark:text-primary text-3xl font-bold">
            {project.title}
          </H1>

          {/* Description */}
          <Body className="text-muted dark:text-muted-dark mt-3">
            {project.shortDescription}
          </Body>

          {/* Tech Stack */}
          <H1 className="text-black dark:text-primary text-xl font-semibold mt-6">
            Tech Stack
          </H1>

          <View className="flex-row flex-wrap mt-3">
            {project.techStack.map((tech, index) => (
              <View
                key={index}
                className="px-3 py-1 bg-primary rounded-full mr-2 mb-2"
              >
                <Body className="text-sm">{tech}</Body>
              </View>
            ))}
          </View>

          {/* Role */}
          <H1 className="text-black dark:text-primary text-xl font-semibold mt-6">
            My Role
          </H1>

          <Body className="text-muted dark:text-muted-dark mt-2">
            {project.role}
          </Body>

          {/* Features */}
          <H1 className="text-black dark:text-primary text-xl font-semibold mt-6">
            Key Features
          </H1>

          {project.features.map((feature, index) => (
            <Body key={index} className="mt-2 text-muted dark:text-muted-dark">
              • {feature}
            </Body>
          ))}

          {/* Screenshots */}
          <H1 className="text-black dark:text-primary text-xl font-semibold mt-6">
            Screenshots
          </H1>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-3"
          >
            {project.screenshots.map((screenshot, index) => (
              <Image
                key={index}
                source={{ uri: screenshot }}
                className="w-[220px] h-[420px] rounded-xl mr-4 bg-common-grayLight"
              />
            ))}
          </ScrollView>

          {/* Buttons */}

          <View className="flex-row mt-8">
            <Pressable
              onPress={() => Linking.openURL(project.projectUrl)}
              className="bg-primary px-5 py-3 rounded-xl mr-4"
            >
              <H1 className="text-black font-semibold">Live Demo</H1>
            </Pressable>

            <Pressable
              onPress={() => Linking.openURL(project.repoUrl)}
              className="border border-primary px-5 py-3 rounded-xl"
            >
              <H1 className="text-black dark:text-primary font-semibold">
                GitHub
              </H1>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
