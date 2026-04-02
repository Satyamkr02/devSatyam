import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import Svg, { Circle } from 'react-native-svg';

function OrbitItem({
  index,
  total,
  radius,
  iconSize,
  rotation,
  reverse,
  children,
}) {
  const angle = (360 / total) * index;
  const rad = (angle * Math.PI) / 180;

  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${reverse ? rotation.value : -rotation.value}deg` }, // counter rotation
      ],
    };
  });

  return (
    <View
      style={{
        position: 'absolute',
        transform: [{ translateX: x }, { translateY: y }],
        width: iconSize,
        height: iconSize,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </View>
  );
}

export function OrbitingCircles({
  children,
  radius = 120,
  iconSize = 40,

  duration = 20000,
  speed = 1,
  reverse = false,

  showPath = true,
  pathColor = 'rgba(0,0,0,0.15)',
  pathWidth = 1,

  className,
  style,
  circleSize,
}) {
  const rotation = useSharedValue(0);

  const size = circleSize || radius * 2;

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: duration / speed,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, [duration, speed, rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${reverse ? -rotation.value : rotation.value}deg`,
        },
      ],
    };
  });

  const total = React.Children.count(children);

  return (
    <Animated.View
      className={className}
      style={[
        {
          position: 'absolute',
          width: size,
          height: size,
          alignItems: 'center',
          justifyContent: 'center',
        },
        animatedStyle,
        style,
      ]}
    >
      {showPath && (
        <Svg width={size} height={size} style={{ position: 'absolute' }}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={pathColor}
            strokeWidth={pathWidth}
            fill="none"
          />
        </Svg>
      )}

      {React.Children.map(children, (child, index) => (
        <OrbitItem
          key={index}
          index={index}
          total={total}
          radius={radius}
          iconSize={iconSize}
          rotation={rotation}
          reverse={reverse}
        >
          {child}
        </OrbitItem>
      ))}
    </Animated.View>
  );
}
