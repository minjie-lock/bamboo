/**
 * @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './main.{tsx,ts}',
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

