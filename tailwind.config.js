/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
};
