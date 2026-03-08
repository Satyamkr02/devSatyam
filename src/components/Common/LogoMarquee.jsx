import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export default function LogoMarquee({
  data = [],
  speed = 3,
  reverse = false,
  logoWidth = 120,
  logoHeight = 40,
  gap = 16,
  opacity = 1,

  containerStyle = {},
}) {
  const translateX = useSharedValue(0);

  const ITEM_WIDTH = logoWidth + gap * 2;
  const contentWidth = ITEM_WIDTH * data.length;

  useEffect(() => {
    const from = reverse ? -contentWidth : 0;
    const to = reverse ? 0 : -contentWidth;

    translateX.value = from;

    translateX.value = withRepeat(
      withTiming(to, {
        duration: 20000 / speed,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, [speed, reverse, contentWidth, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const loopData = [...data, ...data];

  return (
    <View style={[{ overflow: 'hidden', width: '100%' }, containerStyle]}>
      <Animated.View
        style={[
          {
            flexDirection: 'row',
            width: contentWidth * 2,
            alignItems: 'center',
          },
          animatedStyle,
        ]}
      >
        {loopData.map((item, index) => (
          <Image
            key={index}
            source={item.logo}
            resizeMode="contain"
            style={{
              width: logoWidth,
              height: logoHeight,
              marginHorizontal: gap,
              opacity,
            }}
          />
        ))}
      </Animated.View>
    </View>
  );
}
