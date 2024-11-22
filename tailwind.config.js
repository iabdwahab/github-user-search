// Importing TailwindCSS Colors:
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#141c2f',
        'medium-blue': colors.slate[800],
        'light-blue': colors.blue[600],
        'dark-grey': colors.gray[400],
      },
    },
  },
  plugins: [],
};
