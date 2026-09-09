/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mincho: ['"Noto Serif JP"', 'serif'],
        sans: ['"Zen Maru Gothic"', '"Hiragino Kaku Gothic ProN"', 'sans-serif'],
        cute: ['"Mochiy Pop One"', '"Zen Maru Gothic"', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#FAF8F3',
          50: '#FDFCFA',
          100: '#FAF8F3',
          200: '#EDE7D9',
        },
        beige: '#EDE7D9',
        gold: {
          400: '#D8BC85',
          500: '#C9A961',
          600: '#A6813C',
          700: '#8A6931',
        },
        ink: {
          900: '#1A1A1A',
          700: '#4A443C',
          500: '#8A8072',
        },
      },
      borderRadius: {
        card: '25px',
        pill: '30px',
      },
      boxShadow: {
        soft: '0 4px 15px rgba(74,74,74,0.08)',
        card: '0 12px 32px rgba(0,0,0,0.15)',
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        appear: 'appear 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
      },
    },
  },
  plugins: [],
};
