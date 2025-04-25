/**
 * @type {import('tailwindcss').Config} */
module.exports = {
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

