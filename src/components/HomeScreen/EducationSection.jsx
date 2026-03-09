import { View, Text, Image } from 'react-native';
import React from 'react';
import { H1 } from '../CustomTags/H1';
import { Body } from '../CustomTags/Body';

const EDUCATION = [
  {
    id: 1,
    institute: 'Delhi Technological University',
    degree: 'B.Tech in Electronics and Communication Engineering',
    duration: '2021 — 2025',
    cgpa: '7.02 CGPA',
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png',
    description:
      'Focused on problem solving, mobile development and software engineering.',
  },
  {
    id: 2,
    institute: 'V.C.S.G. (Veer Chandra Singh Garhwali) Sarvodaya Bal Vidyalaya',
    degree: 'Class XII (PCM)',
    duration: '2020 — 2021',
    marks: '93%',
    logo: 'https://static.wixstatic.com/media/3302dc_c34cde4524b348298e49028a6aba67dd~mv2.jpg/v1/fill/w_704,h_706,al_c,lg_1,q_85,enc_avif,quality_auto/photo.jpg',
    description:
      'Built strong foundations in mathematics, physics and logical reasoning.',
  },
  {
    id: 3,
    institute: 'V.C.S.G. (Veer Chandra Singh Garhwali) Sarvodaya Bal Vidyalaya',
    degree: 'Class X',
    duration: '2018 — 2019',
    marks: '75%',
    logo: 'https://static.wixstatic.com/media/3302dc_c34cde4524b348298e49028a6aba67dd~mv2.jpg/v1/fill/w_704,h_706,al_c,lg_1,q_85,enc_avif,quality_auto/photo.jpg',
    description:
      'Developed strong academic fundamentals and curiosity for technology.',
  },
];

export default function EducationSection() {
  return (
    <View className="px-6">
      {/* Heading */}
      <View className="items-center mb-10">
        <H1 className="text-foreground dark:text-foreground-dark text-5xl">
          My <H1 className="font-bold">Education</H1>
        </H1>

        <Body className="text-muted dark:text-muted-dark text-sm text-center mt-2 max-w-[260px]">
          My academic journey and the foundation of my technical skills.
        </Body>
      </View>

      {/* Timeline */}
      <View className="flex-col gap-8">
        {EDUCATION.map((item, index) => (
          <View key={item.id} className="flex-row">
            {/* Timeline */}
            <View className="items-center mr-4">
              <View className="w-3 h-3 rounded-full bg-primary" />

              {index !== EDUCATION.length - 1 && (
                <View className="w-[1px] flex-1 bg-border dark:bg-border-dark mt-1" />
              )}
            </View>

            {/* Card */}
            <View className="flex-1 bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-xl p-4">
              {/* Top Row */}
              <View className="flex-row items-center mb-2">
                {/* Logo */}
                <Image
                  source={{ uri: item.logo }}
                  className="w-10 h-10 rounded-lg mr-3"
                />

                <View className="flex-1">
                  <Body className="text-foreground dark:text-foreground-dark font-bold text-base">
                    {item.institute}
                  </Body>

                  <Body className="text-muted dark:text-muted-dark text-sm">
                    {item.degree}
                  </Body>
                </View>
              </View>

              {/* Duration + Marks */}
              <View className="flex-row justify-between items-center mb-2">
                <View className="bg-primary rounded-full px-2 py-1">
                  <Body className="text-black text-xs font-semibold">
                    {item.duration}
                  </Body>
                </View>

                {item.cgpa && (
                  <Body className="text-xs text-foreground dark:text-foreground-dark">
                    {item.cgpa}
                  </Body>
                )}

                {item.marks && (
                  <Body className="text-xs text-foreground dark:text-foreground-dark">
                    {item.marks}
                  </Body>
                )}
              </View>

              {/* Description */}
              <Body className="text-muted dark:text-muted-dark text-xs leading-5">
                {item.description}
              </Body>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
