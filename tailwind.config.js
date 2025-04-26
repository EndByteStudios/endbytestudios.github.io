/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#0f1118',
          800: '#1a1d29',
          700: '#2a2f3f',
          600: '#3e4255',
        },
      },
    },
  },
  plugins: [],
};