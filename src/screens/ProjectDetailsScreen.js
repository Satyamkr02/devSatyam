import { View, Image, ScrollView, Linking } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { PROJECTS } from '../data/projects';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemeToggle from '../components/Common/ThemeToggle';
import { Body } from '../components/CustomTags/Body';
import { H1 } from '../components/CustomTags/H1';
import { StatusBar, useColorScheme } from 'react-native';
import TechOrbit from '../components/ProjectDetails/TechOrbit';
import BackButton from '../components/Common/BackButton';
import { Apple, ExternalLink, Github, Smartphone } from 'lucide-react-native';

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
      <View className="absolute left-6 top-20 z-50">
        <BackButton />
      </View>

      <View className="absolute right-6 top-20 z-50">
        <ThemeToggle />
      </View>

      <ScrollView contentContainerClassName="bg-background dark:bg-background-dark pb-32">
        {/* Cover Image */}
        <Image
          source={{ uri: project.coverImage }}
          className="w-full h-[240px]"
        />

        <View className="px-6 pt-6">
          {/* Title */}
          <H1 className="text-black dark:text-primary text-3xl font-bold">
            {project.title}
          </H1>

          {/* Description */}
          <Body className="text-muted dark:text-muted-dark mt-3">
            {project.shortDescription}
          </Body>
        </View>
        <View className="px-6">
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

          {(project?.innerTechStackImages?.length > 0 ||
            project?.outerTechStackImages?.length > 0) && (
            <TechOrbit
              innerOrbitImages={project.innerTechStackImages}
              outerOrbitImages={project.outerTechStackImages}
            />
          )}

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
          <View className="flex-row flex-wrap mt-8 gap-3">
            {project.projectUrl && (
              <Pressable
                onPress={() => Linking.openURL(project.projectUrl)}
                className="flex-row items-center gap-2 bg-primary px-5 py-3 rounded-full"
              >
                <ExternalLink size={18} color="#000" />
                <H1 className="text-black font-semibold">Live Demo</H1>
              </Pressable>
            )}

            {project.repoUrl && (
              <Pressable
                onPress={() => Linking.openURL(project.repoUrl)}
                className="flex-row items-center gap-2 border border-border dark:border-primary px-5 py-3 rounded-full"
              >
                <Github size={18} color={isDark ? '#fff' : '#000'} />
                <H1 className="text-black dark:text-white font-semibold">
                  GitHub
                </H1>
              </Pressable>
            )}

            {project.androidApk && (
              <Pressable
                onPress={() => Linking.openURL(project.androidApk)}
                className="flex-row items-center gap-2 bg-green-600 px-5 py-3 rounded-full"
              >
                <Smartphone size={18} color="#fff" />
                <H1 className="text-white font-semibold">Android APK</H1>
              </Pressable>
            )}

            {project.iosApp && (
              <Pressable
                onPress={() => Linking.openURL(project.iosApp)}
                className="flex-row items-center gap-2 bg-black dark:border dark:border-primary px-5 py-3 rounded-full"
              >
                <Apple size={18} color="#fff" />
                <H1 className="text-white font-semibold">App Store</H1>
              </Pressable>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
