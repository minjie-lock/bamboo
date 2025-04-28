/**
 * @type {import('tailwindcss').Config} */
export default {
  content: [
    './main.{tsx}',
    './src/**/*.{tsx,ts}',
  ],
  presets: [
    require('nativewind/preset'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

