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
        /*
        DESIGN TOKENS
        */

        background: {
          DEFAULT: '#FFFFFF',
          dark: '#000000',
        },

        border: {
          DEFAULT: '#E5E5E5',
          dark: '#262626',
        },

        foreground: {
          DEFAULT: '#000000',
          dark: '#FFFFFF',
        },

        primary: {
          DEFAULT: '#DEFF00',
          dark: '#DEFF00',
        },

        muted: {
          DEFAULT: '#6B7280',
          dark: '#9CA3AF',
        },
      },
    },
  },

  plugins: [],
};
