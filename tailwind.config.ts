import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#EEF5F4',
          100: '#D4ECEA',
          200: '#B5DAD6',
          300: '#9ECFCA',
          400: '#7BBDB7',
          500: '#5CA8A1',
          600: '#438E88',
          700: '#346E6A',
          800: '#254E4B',
          900: '#162E2C',
        },
        dark: '#2D3748',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.75' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

export default config
