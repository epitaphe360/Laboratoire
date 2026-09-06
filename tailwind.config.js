/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F5FB',
          100: '#DCE8F3',
          400: '#5E8FBE',
          500: '#2E5984',
          600: '#1B365D',
          700: '#112744',
          DEFAULT: '#1B365D',
        },
        neutral: {
          50: '#FAFAF7',
          100: '#F4F4EE',
          200: '#E8E8E0',
          300: '#D1D1C7',
          400: '#A8A89E',
          500: '#787872',
          600: '#5C5C55',
          700: '#3E3E38',
          800: '#26261F',
          900: '#1A1A17',
        },
        danger: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#B91C1C',
          600: '#991B1B',
          DEFAULT: '#B91C1C',
        },
      },
    },
  },
  plugins: [],
};
