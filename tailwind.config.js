import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#EEF2F8',
          100: '#D6E0EF',
          200: '#ADC1DF',
          300: '#7E9BC8',
          400: '#4F73AE',
          500: '#2E5294',
          600: '#1E3D78',
          700: '#162F5E',
          800: '#0E2247',
          900: '#0A1A36',
          950: '#06112A',
        },
        gold: {
          300: '#F0CE85',
          400: '#E6B96E',
          500: '#D4A24C',
          600: '#B88638',
        },
        cream: {
          50: '#FBF8F1',
          100: '#F7F1E6',
          200: '#EFE3CF',
          300: '#E4D2B4',
        },
        sky: {
          400: '#5B9BD5',
          500: '#3982C4',
        },
        rose: {
          400: '#E07A87',
          500: '#D05D6C',
        },
      },
      animation: {
        'film-scroll': 'film-scroll 60s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'gentle-bob': 'gentle-bob 3s ease-in-out infinite',
      },
      keyframes: {
        'film-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gentle-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
