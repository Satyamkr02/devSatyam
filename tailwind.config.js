const { COLORS } = require('./src/themes/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],

  theme: {
    extend: {
      fontFamily: {
        heading: ['SpaceGrotesk-Regular'],
        'heading-light': ['SpaceGrotesk-Light'],
        'heading-bold': ['SpaceGrotesk-Bold'],
        'heading-semibold': ['SpaceGrotesk-SemiBold'],

        body: ['Manrope-Regular'],
        'body-light': ['Manrope-Light'],
        'body-bold': ['Manrope-Bold'],
        'body-semibold': ['Manrope-SemiBold'],
      },

      colors: {
        background: {
          DEFAULT: COLORS.background.light,
          dark: COLORS.background.dark,
        },

        border: {
          DEFAULT: COLORS.border.light,
          dark: COLORS.border.dark,
        },

        foreground: {
          DEFAULT: COLORS.foreground.light,
          dark: COLORS.foreground.dark,
        },

        primary: {
          DEFAULT: COLORS.primary.light,
          dark: COLORS.primary.dark,
        },

        muted: {
          DEFAULT: COLORS.muted.light,
          dark: COLORS.muted.dark,
        },
      },
    },
  },

  plugins: [],
};
