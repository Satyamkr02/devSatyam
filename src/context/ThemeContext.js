import React, { createContext, useEffect, useState } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY, THEME_OPTIONS } from '../themes/themeConstants';
import { useColorScheme } from 'nativewind';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = useSystemColorScheme();
  const { setColorScheme } = useColorScheme();

  const [theme, setTheme] = useState(THEME_OPTIONS.DARK);
  const [resolvedTheme, setResolvedTheme] = useState('dark');

  useEffect(() => {
    loadTheme();
  }, []);

  useEffect(() => {
    if (theme === THEME_OPTIONS.SYSTEM) {
      setResolvedTheme(systemTheme ?? 'dark');

      // NativeWind follows device theme automatically
      setColorScheme('system');
    } else {
      setResolvedTheme(theme);

      // force dark/light
      setColorScheme(theme);
    }
  }, [theme, systemTheme, setColorScheme]);

  const loadTheme = async () => {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);
    if (saved) setTheme(saved);
  };

  const changeTheme = async value => {
    setTheme(value);
    await AsyncStorage.setItem(STORAGE_KEY, value);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
