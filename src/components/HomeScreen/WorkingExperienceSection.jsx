import React from 'react';
import { View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { H1 } from '../CustomTags/H1';
import { Body } from '../CustomTags/Body';

const experiences = [
  {
    company: 'Ayuvya',
    role: 'Software Developer',
    type: 'Full-time',
    mode: 'Remote',
    duration: 'Jan 2025 — Dec 2025',
    tech: [
      'React Native',
      'Next.js',
      'Firebase',
      'Cashfree',
      'Agora',
      'Android Studio',
      'Git | GitHub',
      'BitBucket',
    ],
    description: [
      'Worked in an **Agile team of 4-6 developers**, participating in **daily stand-ups** to track sprint progress, discuss blockers, and coordinate tasks.',
      'Developed and maintained **20+ mobile app screens** using **React Native** while following **clean and scalable coding** practices.',
      '**Integrated Cashfree** Checkout with **UPI payments**, improving **transaction success rate by ~15%.**',
      '**Implemented real-time video calling** using **Agora SDK** for seamless **low-latency communication**.',
      'Debugged and **resolved 30+ issues** in **React Native CLI projects**, particularly related to **iOS UI rendering** and functionality.',
      '**Proposed** and helped **implement a loyalty reward system** for every purchase, **increasing repeat users and sales by ~18-22%** (currently live on **KundliTalks**).',
      '**Learned Next.js within 2 weeks** and successfully **cloned a fully responsive production website** as a company task, implementing **modern UI components** and **responsive layouts**.',
    ],
  },
  {
    company: 'MeeTooMeat',
    role: 'React-Native App Developer',
    type: 'Freelance',
    mode: 'Remote',
    duration: 'Jan 2026 — Feb 2026',
    tech: ['React Native', 'Firebase', 'NativeWind', 'Stripe', 'Realtime DB'],
    description: [
      'Developed a **cross-platform mobile application** using **React Native**, implementing **15+ responsive screens** with modern UI components.',
      'Implemented **secure authentication and user account management** using **Firebase**, supporting **real-time user sessions** and account data.',
      'Built **real-time data synchronization** using **Firebase Realtime Database**, reducing **data update latency by ~40%.**',
      'Designed **30+ reusable UI components** using **NativeWind** to ensure **consistent styling** and faster development.',
      'Improved **app performance and navigation flow**, reducing **screen load time by ~25%.**',
    ],
  },
  {
    company: 'CareerCreation 24/7',
    role: 'Android Mobile App Developer',
    type: 'Internship',
    mode: 'Remote',
    duration: '2024',
    tech: ['Android Studio', 'Kotlin', 'Firebase', 'XML'],
    description: [
      'Developed an **Android mobile application** by **replicating the CareerCreation 24/7 website UI and functionality.**',
      'Designed and implemented **responsive mobile UI screens** using **XML and Kotlin.**',
      'Integrated **Firebase services** for **data management and real-time updates.**',
      'Built an **Admin panel** to manage **blog content with full CRUD operations (add, update, edit, delete).**',
      'Improved **user experience** by optimizing **UI flow and navigation** within the app.',
    ],
  },
];

export default function WorkingExperienceSection() {
  return (
    <View className="bg-background dark:bg-background-dark px-6">
      {/* SECTION TITLE */}
      <View className="flex-col items-center gap-1 mb-14">
        <H1 className="text-foreground dark:text-foreground-dark text-[36px]">
          Working <H1 className="font-bold">Experience</H1>
        </H1>
        <Body className="text-muted dark:text-muted-dark text-sm text-center max-w-[262px]">
          {`Companies and teams I've worked with to build impactful products.`}
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
              <Body className="text-black dark:text-white text-sm mt-1">
                {item.duration}
              </Body>

              {/* DESCRIPTION */}
              {Array.isArray(item.description) ? (
                item.description.map((point, i) => (
                  <View key={i} className="flex-row gap-2 mt-0.5">
                    <Body className="text-muted dark:text-muted-dark">•</Body>

                    <View className="flex-1 flex-row flex-wrap">
                      {renderBoldText(point)}
                    </View>
                  </View>
                ))
              ) : (
                <Body className="text-muted dark:text-muted-dark text-sm mt-1">
                  {item.description}
                </Body>
              )}

              {/* TECH STACK */}
              <View className="flex-row flex-wrap gap-2 mt-2">
                {item.tech.map((tech, index) => (
                  <Body
                    key={index}
                    className={`text-xs px-2 py-[2px] rounded ${
                      index === 0 ? 'bg-primary' : 'bg-border'
                    } text-black`}
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

const renderBoldText = text => {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <Body className="text-muted dark:text-muted-dark text-sm">
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <Body key={index} className="font-bold">
              {part.replace(/\*\*/g, '')}
            </Body>
          );
        }

        return part;
      })}
    </Body>
  );
};
