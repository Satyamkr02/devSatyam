import React from 'react';
import { View, Image } from 'react-native';
import { H1 } from '../CustomTags/H1';
import { Body } from '../CustomTags/Body';
import SpinningText from '../Common/SpinningText';
import LogoMarquee from '../Common/LogoMarquee';

export default function CompaniesSection() {
  const companies = [
    {
      name: 'Ayuvya',
      logo: require('../../assets/images/companies/ayuvya-logo.webp'),
    },
    {
      name: 'Imfresh',
      logo: require('../../assets/images/companies/Imfresh_Logo_Black.webp'),
    },
    {
      name: 'KundliTalks',
      logo: require('../../assets/images/companies/kundli_logo.webp'),
    },
    {
      name: 'MeeTooMeat',
      logo: require('../../assets/images/companies/meeTooMeat_logo.webp'),
    },
    {
      name: 'CareerCreation24/7',
      logo: require('../../assets/images/companies/careerCreation247_logo.webp'),
    },
  ];

  return (
    <View className="bg-background dark:bg-background-dark">
      <View className="items-center">
        <H1 className="text-foreground dark:text-foreground-dark text-3xl font-bold mb-4">
          Companies I've Worked With
        </H1>

        <Body className="text-gray-400 text-center mb-12">
          I've collaborated with these companies through full-time roles and
          freelance projects to deliver impactful products.
        </Body>
      </View>

      <View className="bg-white dark:bg-common-grayLight">
        <LogoMarquee
          data={companies}
          logoWidth={100}
          logoHeight={50}
          gap={16}
        />
      </View>
    </View>
  );
}
