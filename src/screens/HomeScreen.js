import React from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  View,
  Linking,
} from 'react-native';
import { H1 } from '../components/CustomTags/H1';
import { Body } from '../components/CustomTags/Body';
import { COLORS } from '../themes/colors';
import { SOCIAL_LINKS } from '../data/socialLinks';
import ThemeToggle from '../components/Common/ThemeToggle';
import { Globe, MoveUpRight } from 'lucide-react-native';
import ProjectSection from '../components/HomeScreen/ProjectSection';
import HeroSectionImage from '../assets/images/heroSectionImage.jpg';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-background dark:bg-background-dark">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
      >
        {/* HERO IMAGE */}
        <ImageBackground
          source={
            HeroSectionImage
              ? HeroSectionImage
              : {
                  uri: 'https://i.pinimg.com/control1/736x/25/33/8f/25338f488af2c45912c15ebab325e363.jpg',
                }
          }
          className="relative w-full h-[520px] p-6"
          resizeMode="cover"
        >
          <View className="absolute right-10 top-20">
            <ThemeToggle />
          </View>

          <H1 className="text-[60px] mt-[380px] font-bold text-white dark:text-primary ml-auto">
            {`Satyam`}
          </H1>
        </ImageBackground>

        {/* FLOATING CARD */}
        <View className="-mt-12 bg-background dark:bg-background-dark/95 backdrop-blur-lg rounded-t-3xl pt-2 pb-20">
          {/* Handle */}
          <View className="ml-auto mr-auto w-20 h-[4px] bg-muted dark:bg-muted-dark rounded-full mb-6" />

          {/* Intro Row */}
          <View className="px-6 flex-row gap-1 w-full">
            <View className="max-w-[55%]">
              <Body className="text-foreground dark:text-foreground-dark leading-6">
                I'm a
              </Body>

              <Body className="text-primary font-semibold leading-6">
                Mobile App
              </Body>

              <Body className="text-foreground dark:text-foreground-dark leading-6">
                React Native, Web &
              </Body>

              <Body className="text-foreground dark:text-foreground-dark leading-6">
                Software Developer
              </Body>
            </View>

            <View className="ml-auto flex-row gap-2">
              {SOCIAL_LINKS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Pressable
                    key={index}
                    onPress={() => Linking.openURL(item.url)}
                    className="w-10 h-10 rounded-full bg-primary dark:bg-primary-dark items-center justify-center"
                  >
                    <Icon size={16} color={COLORS.common.black} />
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View className="mt-8 px-6">
            <Body className="text-4xl text-foreground dark:text-foreground-dark">
              "I design and code beautifully{' '}
              <Body className="font-bold">
                simple things and i love what i do
              </Body>
              "
            </Body>
          </View>

          <View className="flex-row mt-8 px-6 gap-2 ">
            <View className="flex-row h-[45px] gap-3 items-center justify-center rounded-full bg-primary py-2 px-1">
              <H1 className="ml-4 text-black font-bold">Get Started</H1>
              <View className="w-10 h-10 flex justify-center items-center rounded-full bg-black overflow-hidden">
                <MoveUpRight size={18} color={COLORS.primary.light} />
              </View>
            </View>

            <View className="flex-row h-[45px] gap-3 items-center justify-center rounded-full bg-common-grayLight py-2 px-1">
              <H1 className="ml-4 text-black">My Works</H1>
              <View className="w-10 h-10 flex justify-center items-center rounded-full bg-black overflow-hidden">
                <MoveUpRight size={18} color={COLORS.common.grayLight} />
              </View>
            </View>
          </View>

          <View className="flex-row justify-between mt-5 px-6 gap-2 ">
            <View className="flex-row h-[45px] gap-1 items-center justify-center rounded-full">
              <Globe size={14} color={COLORS.muted.light} />
              <H1 className="text-muted text-sm font-bold">
                Available to{''}{' '}
                <Body className="text-base font-bold">Worldwide</Body>
              </H1>
            </View>

            <View className="flex-row h-[45px] gap-1 items-center justify-center rounded-full">
              <H1 className="text-muted text-sm">Contact Me</H1>
              <MoveUpRight size={14} color={COLORS.muted.light} />
            </View>
          </View>
          <View className="flex w-full mt-[80px]">
            <ProjectSection />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
