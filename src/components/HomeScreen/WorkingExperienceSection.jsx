import React from 'react';
import { View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { H1 } from '../CustomTags/H1';
import { Body } from '../CustomTags/Body';

const experiences = [
  {
    company: 'Ayuvya',
    role: 'React Native Developer',
    type: 'Full-time',
    mode: 'Remote',
    duration: '2025 — Present',
    tech: ['React Native', 'Firebase', 'REST APIs'],
    description:
      'Building scalable mobile applications and improving user experience with modern React Native architecture.',
  },
  {
    company: 'Imfresh',
    role: 'Freelance Mobile App Developer',
    type: 'Freelance',
    mode: 'Remote',
    duration: '2024 — 2025',
    tech: ['React Native', 'Stripe', 'Realtime DB'],
    description:
      'Developed a production-ready mobile app including authentication, payments and real-time data sync.',
  },
  {
    company: 'KundliTalks',
    role: 'Mobile App Developer',
    type: 'Freelance',
    mode: 'Remote',
    duration: '2024',
    tech: ['React Native', 'Firebase'],
    description:
      'Worked on mobile app development and UI improvements to deliver a smooth and engaging user experience.',
  },
];

export default function WorkingExperienceSection() {
  return (
    <View className="bg-background dark:bg-background-dark px-6">
      {/* SECTION TITLE */}
      <View className="items-center mb-14">
        <H1 className="text-foreground dark:text-foreground-dark text-3xl font-bold mb-4">
          Working Experience
        </H1>

        <Body className="text-muted text-center">
          Companies and teams I’ve worked with to build impactful products.
        </Body>
      </View>

      {/* TIMELINE */}
      <View className="relative">
        {/* Vertical line */}
        <View className="absolute left-3 top-0 bottom-0 w-[2px] bg-border dark:bg-border-dark" />

        {experiences.map((item, index) => (
          <Animated.View
            key={index}
            entering={FadeInUp.delay(index * 200).springify()}
            className="flex-row mb-10"
          >
            {/* DOT */}
            <View className="ml-[1px] w-6 items-center">
              <View className="w-3 h-3 rounded-full bg-primary" />
            </View>

            {/* CONTENT */}
            <View className="flex-1 pl-4">
              {/* ROLE */}
              <H1 className="text-lg font-bold leading-none text-foreground dark:text-foreground-dark pb-2 border-b border-border dark:border-border-dark">
                {item.role}
              </H1>

              {/* COMPANY */}
              <Body className="font-semibold text-black dark:text-primary">
                {item.company}
              </Body>

              {/* META INFO */}
              <View className="flex-row flex-wrap gap-2 mt-1">
                <Body className="text-xs px-2 py-[2px] rounded-lg bg-primary/50 text-black dark:text-primary">
                  {item.type}
                </Body>

                <Body className="text-xs px-2 py-[2px] rounded-lg bg-muted/20 text-muted">
                  {item.mode}
                </Body>
              </View>

              {/* DURATION */}
              <Body className="text-muted text-sm mt-1">{item.duration}</Body>

              {/* DESCRIPTION */}
              <Body className="text-muted leading-6 mt-2">
                {item.description}
              </Body>

              {/* TECH STACK */}
              <View className="flex-row flex-wrap gap-2 mt-2">
                {item.tech.map((tech, i) => (
                  <Body
                    key={i}
                    className="text-xs px-2 py-[2px] rounded bg-border dark:bg-border-dark text-foreground dark:text-foreground-dark"
                  >
                    {tech}
                  </Body>
                ))}
              </View>
            </View>
          </Animated.View>
        ))}
      </View>
    </View>
  );
}
