import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { H1 } from '../CustomTags/H1';
import { Body } from '../CustomTags/Body';
import { MoveUpRight } from 'lucide-react-native';
import { COLORS } from '../../themes/colors';
import { PROJECTS } from '../../data/projects';
import { useNavigation } from '@react-navigation/native';

export default function ProjectSection() {
  const navigation = useNavigation();
  return (
    <View className="flex">
      <View className="flex-col items-center gap-1">
        <H1 className="text-foreground dark:text-foreground-dark text-5xl">
          Projects <H1 className="font-bold">Done</H1>
        </H1>
        <Body className="text-muted dark:text-muted-dark text-sm text-center max-w-[262px]">
          A showcase of some of my best works,highlighting my skills and
          experience, including both personal and client
        </Body>
      </View>

      <View className="flex-col w-full mt-5 gap-5">
        {PROJECTS.map((project, index) => (
          <Pressable
            key={index}
            onPress={() =>
              navigation.navigate('ProjectDetails', {
                projectId: project.id,
              })
            }
          >
            <View className="flex-col bg-grayLight/50 border border-border dark:border-dark rounded-2xl shadow-xl overflow-hidden mx-3">
              <Image
                source={{ uri: project.image }}
                className="w-full h-[180px]"
              />

              <View className="flex-row justify-between px-4 py-4">
                {/* LEFT CONTENT */}
                <View className="flex-1 flex-col gap-0 pr-3">
                  <Body className="text-foreground dark:text-foreground-dark text-3xl font-bold">
                    {project.title}
                  </Body>

                  <Body className="text-foreground dark:text-foreground-dark text-sm">
                    {project.description}
                  </Body>

                  <View className="mt-2 flex-row flex-wrap gap-1">
                    {project.tags.map((tag, index) => (
                      <View
                        key={index}
                        className="bg-primary px-3 py-1 rounded-full"
                      >
                        <Text className="text-xs text-black">{tag}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                {/* ICON */}
                <View className="w-10 h-10 flex-shrink-0 justify-center items-center rounded-full bg-primary">
                  <MoveUpRight size={18} color={COLORS.common.black} />
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <View className="mt-10 mx-auto flex-row h-[45px] gap-3 items-center justify-center rounded-full bg-primary py-2 px-1">
        <H1 className="ml-4 text-black font-bold">View All Projects</H1>
        <View className="w-10 h-10 flex justify-center items-center rounded-full bg-black overflow-hidden">
          <MoveUpRight size={18} color={COLORS.primary.light} />
        </View>
      </View>
    </View>
  );
}
