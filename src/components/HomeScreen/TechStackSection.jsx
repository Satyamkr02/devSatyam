import React from 'react';
import { View } from 'react-native';
import IconCloud from '../Common/IconCloud';
import { H1 } from '../CustomTags/H1';
import { Body } from '../CustomTags/Body';

export default function TechStackSection() {
  const icons = [
    'https://cdn.iconscout.com/icon/free/png-256/free-figma-icon-svg-download-png-1912030.png',
    'https://img.icons8.com/color/512/react-native.png',
    'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png',
    'https://images.seeklogo.com/logo-png/44/2/next-js-logo-png_seeklogo-449824.png',
    'https://cdn-icons-png.freepik.com/512/615/615522.png',
    'https://static.vecteezy.com/system/resources/previews/067/565/433/non_2x/tailwind-css-logo-rounded-free-png.png',
    'https://cdn-icons-png.freepik.com/512/919/919827.png',
    'https://cdn-icons-png.freepik.com/512/919/919826.png',
    'https://cdn-icons-png.freepik.com/512/5968/5968292.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Bh8Cgz1HP623XpnVajWfwODcBSa2XC9m8Q&s',
    'https://avatars.githubusercontent.com/u/33639345?s=200&v=4',
    'https://static.vecteezy.com/system/resources/previews/060/194/952/non_2x/kotlin-programming-language-3d-icon-transparent-background-free-png.png',
    'https://img.freepik.com/premium-vector/dsa-letter-logo-design-technology-company-dsa-logo-design-black-white-color-combination-dsa-logo-dsa-vector-dsa-design-dsa-icon-dsa-alphabet-dsa-typography-logo-design_229120-168242.jpg',
    'https://code.visualstudio.com/assets/updates/1_35/logo-stable.png',
    'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    'https://cdn-icons-png.flaticon.com/512/2111/2111432.png',
    'https://cdn-icons-png.flaticon.com/256/6132/6132222.png',
  ];

  return (
    <View className="">
      {/* Section Heading */}
      <View className="flex-col items-center gap-1">
        <H1 className="text-foreground dark:text-foreground-dark text-5xl">
          Tech <H1 className="font-bold">Stack</H1>
        </H1>
        <Body className="text-muted dark:text-muted-dark text-sm text-center max-w-[262px]">
          Technologies and tools I use to design, build, and scale applications.
        </Body>
      </View>

      {/* Icon Globe */}
      <IconCloud
        images={icons}
        radius={130}
        iconSize={40}
        containerSize={360}
        speed={0.005}
        tiltAmplitude={0.18}
        minScale={0.65}
        maxScale={1.35}
        minOpacity={0.45}
        maxOpacity={1}
      />
    </View>
  );
}
