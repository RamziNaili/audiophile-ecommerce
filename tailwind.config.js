/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      manrope: ['Manrope'],
    },
    extend: {
      colors: {
        primary: '#D87D4A',
        secondary: '#101010',
        gray: '#F1F1F1',
        light_gray: '#FAFAFA',
        light_orange: '#fbaf85',
      },
    },
  },
  plugins: [],
};
