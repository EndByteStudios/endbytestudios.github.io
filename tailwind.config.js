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
      typography: {
        DEFAULT: {
          css: {
            color: '#e2e8f0',
            a: {
              color: '#a78bfa',
              '&:hover': {
                color: '#c4b5fd',
              },
            },
            h1: {
              color: '#f8fafc',
            },
            h2: {
              color: '#f8fafc',
            },
            h3: {
              color: '#f8fafc',
            },
            h4: {
              color: '#f8fafc',
            },
            strong: {
              color: '#f8fafc',
            },
            code: {
              color: '#f8fafc',
            },
            blockquote: {
              color: '#94a3b8',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};