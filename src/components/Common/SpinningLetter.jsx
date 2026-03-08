import React from 'react';
import { Text } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

export default function SpinningLetter({
  letter,
  index,
  total,
  radius,
  rotation,
  TextComponent,
  textProps,
}) {
  const baseAngle = (360 / total) * index;

  const animatedStyle = useAnimatedStyle(() => {
    const angle = baseAngle + rotation.value;

    return {
      position: 'absolute',
      transform: [
        { rotate: `${angle}deg` },
        { translateY: -radius },
        { rotate: `${-angle}deg` },
      ],
    };
  });

  const TextTag = TextComponent || Text;

  return (
    <Animated.View style={animatedStyle}>
      <TextTag {...textProps}>{letter}</TextTag>
    </Animated.View>
  );
}
