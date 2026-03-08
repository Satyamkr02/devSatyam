import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useDerivedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import SpinningLetter from './SpinningLetter';

export default function SpinningText({
  children,
  duration = 8,
  reverse = false,
  radius = 80,
  speedMultiplier = 1,
  TextComponent,
  textProps = {},
  className,
}) {
  if (typeof children !== 'string') {
    throw new Error('children must be a string');
  }

  const letters = children.split('');

  const rotation = useSharedValue(0);

  useEffect(() => {
    const finalDuration = (duration * 1000) / speedMultiplier;

    rotation.value = withRepeat(
      withTiming(reverse ? -360 : 360, {
        duration: finalDuration,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, [duration, reverse, speedMultiplier, rotation]);

  // prevent jump
  const smoothRotation = useDerivedValue(() => {
    return rotation.value % 360;
  });

  return (
    <Animated.View className={className}>
      <View
        style={{
          width: radius * 2,
          height: radius * 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {letters.map((letter, index) => (
          <SpinningLetter
            key={index}
            letter={letter}
            index={index}
            total={letters.length}
            radius={radius}
            rotation={smoothRotation}
            TextComponent={TextComponent}
            textProps={textProps}
          />
        ))}
      </View>
    </Animated.View>
  );
}
