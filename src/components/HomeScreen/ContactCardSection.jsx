import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { H1 } from '../CustomTags/H1';
import { Body } from '../CustomTags/Body';
import { MoveUpRight, Mail, Github, Linkedin } from 'lucide-react-native';
import { COLORS } from '../../themes/colors';
import { formatINR } from '../../utils/contants';
import FormInput from '../CustomTags/FormInput';

const opportunityTypes = ['Intern', 'Full Time', 'Freelance'];

const budgets = [
  `Less Than ${formatINR(5000)}`,
  `${formatINR(5000)} - ${formatINR(10000)}`,
  `${formatINR(10000)} - ${formatINR(15000)}`,
  `More Than ${formatINR(20000)}`,
];

export default function ContactCardSection() {
  const [selectedType, setSelectedType] = useState('Full Time');
  const [selectedBudget, setSelectedBudget] = useState(null);

  return (
    <View className="">
      <View className="mx-4 bg-card dark:bg-card-dark border border-border dark:border-primary/40 rounded-3xl p-8">
        {/* Heading */}
        <View className="mb-6">
          <H1 className="text-foreground dark:text-foreground-dark text-5xl">
            Let's Work
          </H1>

          <H1 className="text-foreground dark:text-foreground-dark text-5xl font-bold">
            Together
          </H1>

          <Body className="text-muted dark:text-muted-dark mt-3 max-w-[260px]">
            {`Open to Full-time roles,\nInternships and freelance projects.`}
          </Body>
        </View>

        {/* Social Links */}
        <View className="flex-row gap-3 mb-8">
          <Pressable className="w-10 h-10 rounded-full bg-primary items-center justify-center">
            <Mail size={18} color={COLORS.common.grayMedium} />
          </Pressable>

          <Pressable className="w-10 h-10 rounded-full bg-border dark:bg-border-dark items-center justify-center">
            <Github size={18} color={COLORS.common.grayMedium} />
          </Pressable>

          <Pressable className="w-10 h-10 rounded-full bg-border dark:bg-border-dark items-center justify-center">
            <Linkedin size={18} color={COLORS.common.grayMedium} />
          </Pressable>
        </View>

        {/* Email */}
        <View className="mb-6">
          <Body className="text-black dark:text-white mb-2">Your Email</Body>

          <FormInput
            placeholder="Enter your email"
            placeholderTextColor="#6B7280"
            className="border-b border-border dark:border-border-dark text-foreground dark:text-foreground-dark pb-2"
          />
        </View>

        {/* Phone */}
        <View className="mb-6">
          <Body className="text-black dark:text-white mb-2">Phone Number</Body>

          <FormInput
            placeholder="Enter phone number"
            placeholderTextColor="#6B7280"
            maxLength={10}
            keyboardType="number-pad"
            className="border-b border-border dark:border-border-dark text-foreground dark:text-foreground-dark pb-2"
          />
        </View>

        {/* Opportunity Type */}
        <View className="mb-8">
          <Body className="text-black dark:text-white mb-3">
            Opportunity Type
          </Body>

          <View className="flex-row flex-wrap gap-3">
            {opportunityTypes.map((item, index) => {
              const active = selectedType === item;

              return (
                <Pressable
                  key={index}
                  onPress={() => setSelectedType(item)}
                  className={`px-4 py-2 rounded-full border ${
                    active
                      ? 'bg-primary border-primary'
                      : 'border-border dark:border-border-dark'
                  }`}
                >
                  <Text
                    className={`text-sm ${
                      active
                        ? 'text-black'
                        : 'text-foreground dark:text-foreground-dark'
                    }`}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* INTERN FIELDS */}
        {selectedType === 'Intern' && (
          <View className="mb-8">
            <Body className="text-black dark:text-white mb-2">
              Internship Stipend
            </Body>

            <FormInput
              placeholder="Monthly stipend"
              placeholderTextColor="#6B7280"
              className="border-b border-border pb-2 mb-6 text-foreground"
            />

            <Body className="text-black dark:text-white mb-2">Duration</Body>

            <FormInput
              placeholder="Internship duration (e.g. 3 months)"
              placeholderTextColor="#6B7280"
              className="border-b border-border pb-2 text-foreground"
            />
          </View>
        )}

        {/* FULLTIME FIELDS */}
        {selectedType === 'Full Time' && (
          <View className="mb-8">
            <Body className="text-black dark:text-white mb-2">
              Salary Offer
            </Body>

            <FormInput
              placeholder="Expected salary"
              placeholderTextColor="#6B7280"
              className="border-b border-border pb-2 mb-6 text-foreground"
            />

            <Body className="text-black dark:text-white mb-2">
              Joining Timeline
            </Body>

            <FormInput
              placeholder="Immediate / 1 month / etc."
              placeholderTextColor="#6B7280"
              className="border-b border-border pb-2 text-foreground"
            />
          </View>
        )}

        {/* FREELANCE FIELDS */}
        {selectedType === 'Freelance' && (
          <>
            {/* Budget */}
            <View className="flex-row flex-wrap gap-3 mb-8">
              {budgets.map((item, index) => {
                const active = selectedBudget === index;

                return (
                  <Pressable
                    key={index}
                    onPress={() => setSelectedBudget(index)}
                    className={`px-4 py-2 rounded-full border ${
                      active
                        ? 'bg-primary border-primary'
                        : 'border-border dark:border-border-dark'
                    }`}
                  >
                    <Text
                      className={`text-sm ${
                        active
                          ? 'text-black'
                          : 'text-foreground dark:text-foreground-dark'
                      }`}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Project Details */}
            <View className="mb-8">
              <Body className="text-black dark:text-white mb-2">
                Project Details
              </Body>

              <FormInput
                placeholder="Describe the project..."
                multiline
                placeholderTextColor="#6B7280"
                className="border-b border-border pb-2 text-foreground"
              />
            </View>
          </>
        )}

        {/* CTA */}
        <View className="flex-row items-center justify-between gap-3 mt-2">
          <Pressable className="flex-row items-center gap-2 bg-primary rounded-full pl-4 pr-2 py-2 active:opacity-80">
            <Text className="text-black font-semibold">Start Conversation</Text>

            <View className="w-9 h-9 rounded-full bg-black items-center justify-center">
              <MoveUpRight size={16} color={COLORS.primary.light} />
            </View>
          </Pressable>

          <Body className="text-muted dark:text-muted-dark text-[10px]">
            Available for new opportunities
          </Body>
        </View>
      </View>
    </View>
  );
}
