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
      {/* Section Title */}
      <View className="flex-col items-center gap-2">
        <H1 className="text-foreground dark:text-foreground-dark text-5xl">
          Projects <H1 className="font-bold">Done</H1>
        </H1>

        <Body className="text-muted dark:text-muted-dark text-sm text-center max-w-[260px]">
          A showcase of some of my best works highlighting my skills and
          experience including both personal and client projects.
        </Body>
      </View>

      {/* Project Cards */}
      <View className="flex-col w-full mt-6 gap-5">
        {PROJECTS.map(project => (
          <Pressable
            key={project.id}
            onPress={() =>
              navigation.navigate('ProjectDetails', {
                projectId: project.id,
              })
            }
          >
            <View className="flex-col bg-grayLight/50 border border-border dark:border-primary/50 rounded-2xl overflow-hidden mx-3">
              {/* Project Image */}
              <Image
                source={{ uri: project?.coverImage }}
                className="w-full h-[180px]"
                resizeMode="cover"
              />

              {/* Content */}
              <View className="flex-row justify-between px-4 py-4">
                {/* Left Content */}
                <View className="flex-1 pr-3">
                  <Body className="text-foreground dark:text-foreground-dark text-2xl font-bold">
                    {project.title}
                  </Body>

                  <Body className="text-muted dark:text-muted-dark text-sm mt-1">
                    {project?.shortDescription}
                  </Body>

                  {/* TechStack */}
                  <View className="mt-3 flex-row flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <View
                        key={index}
                        className="bg-primary/90 px-3 py-1 rounded-full"
                      >
                        <Text className="text-xs text-black font-medium">
                          {tech}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>

                {/* Arrow Icon */}
                <View className="w-10 h-10 justify-center items-center rounded-full bg-primary">
                  <MoveUpRight size={18} color={COLORS.common.black} />
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      {/* View All Button */}
      <Pressable className="mt-10 mx-auto flex-row h-[45px] gap-3 items-center justify-center rounded-full bg-primary py-2 px-4">
        <H1 className="text-black font-bold">View All Projects</H1>

        <View className="w-10 h-10 justify-center items-center rounded-full bg-black">
          <MoveUpRight size={18} color={COLORS.primary.light} />
        </View>
      </Pressable>
    </View>
  );
}
