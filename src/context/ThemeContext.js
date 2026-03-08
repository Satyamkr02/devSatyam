import React, { createContext, useEffect, useState } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY, THEME_OPTIONS } from '../themes/themeConstants';
import { useColorScheme } from 'nativewind';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const systemTheme = useSystemColorScheme();
  const { setColorScheme } = useColorScheme();

  const [theme, setTheme] = useState(THEME_OPTIONS.DARK);
  const [resolvedTheme, setResolvedTheme] = useState('dark');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadTheme();
  }, []);
  //   useEffect(() => {
  //     if (theme === THEME_OPTIONS.SYSTEM) {
  //       const active = systemTheme ?? 'dark';

  //       setResolvedTheme(active);

  //       // reset override so NativeWind follows system
  //       setColorScheme(undefined);
  //     } else {
  //       setResolvedTheme(theme);

  //       // force theme
  //       setColorScheme(theme);
  //     }
  //   }, [theme, systemTheme]);

  useEffect(() => {
    if (!isLoaded) return;

    let activeTheme;

    if (theme === THEME_OPTIONS.SYSTEM) {
      activeTheme = systemTheme ?? 'dark';
    } else {
      activeTheme = theme;
    }

    setResolvedTheme(activeTheme);
    setColorScheme(activeTheme);
  }, [theme, systemTheme, isLoaded, setColorScheme]);

  const loadTheme = async () => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);

      if (saved) {
        setTheme(saved);
      }

      setIsLoaded(true);
    } catch (e) {
      setIsLoaded(true);
    }
  };

  const changeTheme = async value => {
    setTheme(value);
    await AsyncStorage.setItem(STORAGE_KEY, value);
  };

  if (!isLoaded) return null;

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
