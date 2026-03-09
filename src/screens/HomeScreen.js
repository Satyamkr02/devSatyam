import React from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  View,
  Linking,
} from 'react-native';
import { Alert } from 'react-native';
import { H1 } from '../components/CustomTags/H1';
import { Body } from '../components/CustomTags/Body';
import { COLORS } from '../themes/colors';
import { SOCIAL_LINKS } from '../data/socialLinks';
import ThemeToggle from '../components/Common/ThemeToggle';
import { Globe, Mail, MoveUpRight, Phone } from 'lucide-react-native';
import ProjectSection from '../components/HomeScreen/ProjectSection';
import HeroSectionImage from '../assets/images/heroSectionImage.jpg';
import CompaniesSection from '../components/HomeScreen/CompaniesSection';
import SpinningText from '../components/Common/SpinningText';
import WorkingExperienceSection from '../components/HomeScreen/WorkingExperienceSection';
import TechStackSection from '../components/HomeScreen/TechStackSection';
import CodingStatsSection from '../components/HomeScreen/CodingStatsSection';
import ContactCardSection from '../components/HomeScreen/ContactCardSection';
import EducationSection from '../components/HomeScreen/EducationSection';

export default function HomeScreen() {
  const downloadCV = async () => {
    const url =
      'https://drive.google.com/file/d/1G7M7irlYJfQdQDFiE5WZ6uJ2YKyMncBj/view';

    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert('Error', 'Unable to open CV');
    }
  };

  const hireMe = () => {
    const email = 'mailto:satyamkr8280@email.com';
    const subject = 'Hiring Inquiry';
    const body =
      'Hi Satyam, I would like to discuss a project/opportunity with you.';

    Linking.openURL(`${email}?subject=${subject}&body=${body}`);
  };

  return (
    <View className="flex-1 bg-background dark:bg-background-dark">
      <View className="absolute right-6 top-20 z-50">
        <ThemeToggle />
      </View>
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
          {/* <View className="absolute right-10 top-20">
            <ThemeToggle />
          </View> */}

          <View className="absolute left-6 top-28">
            <SpinningText
              duration={15}
              radius={70}
              TextComponent={Body}
              textProps={{ className: 'text-xs text-black' }}
            >
              Scroll to explore • Mobile App • React Native •
            </SpinningText>
          </View>

          <View className="absolute right-6 bottom-16 items-end gap-2">
            <H1 className="text-[60px] font-bold text-white dark:text-primary bg-black/50 px-4 rounded-3xl">
              Satyam
            </H1>
            <Body className="text-white dark:text-primary bg-black/50 px-4  rounded-3xl">
              DTU'25 • Mobile App Developer
            </Body>
          </View>
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

              <Body className="text-black dark:text-primary font-semibold leading-6">
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

          <View className="mt-6 px-6">
            {/* Primary Actions */}
            <View className="flex-row gap-3">
              {/* Download CV */}
              <Pressable
                onPress={downloadCV}
                className="flex-row items-center justify-between bg-primary rounded-full gap-3 px-4 py-2"
              >
                <H1 className="text-black font-bold">Download CV</H1>

                <View className="w-9 h-9 rounded-full bg-black items-center justify-center">
                  <MoveUpRight size={16} color={COLORS.primary.light} />
                </View>
              </Pressable>

              {/* Hire Me */}
              <Pressable
                onPress={hireMe}
                className="flex-row items-center justify-between bg-common-grayLight dark:bg-border-dark rounded-full gap-3 px-4 py-2"
              >
                <H1 className="text-black dark:text-white">Hire Me</H1>

                <View className="w-9 h-9 rounded-full bg-black items-center justify-center">
                  <MoveUpRight size={16} color={COLORS.common.grayLight} />
                </View>
              </Pressable>
            </View>

            {/* Contact Info */}
            <View className="mt-6 flex-row justify-between gap-4">
              {/* EMAIL */}
              <Pressable
                onPress={() =>
                  Linking.openURL(
                    'mailto:satyamkr8280@email.com?subject=Hiring Inquiry&body=Hi Satyam, I would like to discuss an opportunity with you.',
                  )
                }
                className="flex-row items-center gap-2"
              >
                <Mail size={16} color={COLORS.muted.light} />
                <Body className="text-muted dark:text-muted-dark text-sm">
                  satyamkr8280@email.com
                </Body>
              </Pressable>

              {/* PHONE */}
              <Pressable
                onPress={() => Linking.openURL('tel:+919876543210')}
                className="flex-row items-center gap-2"
              >
                <Phone size={16} color={COLORS.muted.light} />
                <Body className="text-muted dark:text-muted-dark text-sm">
                  +91 9876543210
                </Body>
              </Pressable>
            </View>

            {/* Status Row */}
            <View className="flex-row justify-between items-center mt-6">
              <View className="flex-row items-center gap-2">
                <Globe size={16} color={COLORS.muted.light} />

                <Body className="text-muted dark:text-muted-dark text-sm">
                  Available <Body className="font-semibold">Worldwide</Body>
                </Body>
              </View>

              <Pressable className="flex-row items-center gap-1">
                <Body className="text-muted dark:text-muted-dark text-sm">
                  Contact Me
                </Body>
                <MoveUpRight size={14} color={COLORS.muted.light} />
              </Pressable>
            </View>
          </View>
          <View className="flex w-full mt-[80px]">
            <CompaniesSection />
          </View>
          <View className="flex w-full mt-[80px]">
            <WorkingExperienceSection />
          </View>
          <View className="flex w-full mt-[80px]">
            <ProjectSection />
          </View>
          <View className="flex w-full mt-[80px]">
            <TechStackSection />
          </View>
          {/* <View className="flex w-full mt-[80px]">
            <CodingStatsSection />
          </View> */}
          <View className="flex w-full mt-[80px]">
            <EducationSection />
          </View>
          <View className="flex w-full mt-[80px]">
            <ContactCardSection />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
