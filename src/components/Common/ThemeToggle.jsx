import React, { useEffect, useRef } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import { Sun, Moon } from 'lucide-react-native';
import { useTheme } from '../../hooks/useTheme';
import { THEME_OPTIONS } from '../../themes/themeConstants';
import { COLORS } from '../../themes/colors';

export default function ThemeToggle() {
  const { theme, changeTheme } = useTheme();

  const isDark = theme === THEME_OPTIONS.DARK;

  const progress = useSharedValue(isDark ? 1 : 0);
  const isAnimating = useRef(false);

  useEffect(() => {
    progress.value = withTiming(isDark ? 1 : 0, { duration: 250 });

    setTimeout(() => {
      isAnimating.current = false;
    }, 250);
  }, [theme, isDark, progress]);

  const toggleTheme = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    changeTheme(isDark ? THEME_OPTIONS.LIGHT : THEME_OPTIONS.DARK);
  };

  /*
  TRACK COLOR
  */

  const backgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [
        '#f59e0b', // light mode
        COLORS.border.dark, // dark mode
      ],
    );

    return { backgroundColor };
  });

  /*
  THUMB
  */

  const knobStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: progress.value * 34 }],
    };
  });

  return (
    <Pressable onPress={toggleTheme}>
      <Animated.View
        style={backgroundStyle}
        className="w-[72px] h-[36px] rounded-full justify-center"
      >
        <Animated.View
          style={knobStyle}
          className="absolute left-[4px] w-[28px] h-[28px] bg-white rounded-full items-center justify-center shadow-md"
        >
          {isDark ? (
            <Moon size={14} color={COLORS.foreground.light} />
          ) : (
            <Sun size={14} color="#f59e0b" />
          )}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}
