import { View, Text } from 'react-native';
import React from 'react';
import { H1 } from '../CustomTags/H1';
import { Body } from '../CustomTags/Body';

export default function CodingStatsSection() {
  return (
    <View className="">
      {/* Heading */}
      <View className="items-center mb-14">
        <H1 className="text-foreground dark:text-foreground-dark text-5xl">
          Coding <H1 className="font-bold">Stats</H1>
        </H1>

        <Body className="text-muted dark:text-muted-dark text-sm text-center max-w-[280px]">
          A snapshot of my coding journey and problem-solving progress.
        </Body>
      </View>

      {/* Grid */}
      <View className="gap-4 px-6">
        {/* Large Top Card */}
        <View className="bg-common-grayLight dark:bg-common-grayDark border border-cardBorder dark:border-cardBorder-dark rounded-3xl p-6 h-[140px] justify-between">
          <Text className="text-muted dark:text-muted-dark text-xs">
            Problem Solving Journey
          </Text>

          <Text className="text-foreground dark:text-foreground-dark text-2xl font-semibold">
            600+ Problems Solved
          </Text>

          <Text className="text-muted dark:text-muted-dark text-xs">
            Across multiple coding platforms
          </Text>
        </View>

        {/* Bottom Row */}
        <View className="flex-row gap-4">
          {/* Highlight Card */}
          <View className="flex-1 bg-primary rounded-3xl p-6 justify-between">
            <Text className="text-black text-xs">LeetCode</Text>

            <Text className="text-black text-4xl font-bold">300+</Text>

            <Text className="text-black text-xs">Problems Solved</Text>
          </View>

          {/* Small Card */}
          <View className="w-[120px] bg-card dark:bg-card-dark rounded-3xl p-6 justify-between">
            <Text className="text-muted dark:text-muted-dark text-xs">
              Projects
            </Text>

            <Text className="text-foreground dark:text-foreground-dark text-3xl font-bold">
              12
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
