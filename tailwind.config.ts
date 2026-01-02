import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './content/**/*.{md,json,ts}',
    './sections/**/*.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#FEEBEC',
          100: '#FCD7DA',
          200: '#F8AEB5',
          500: '#C1121F',
          600: '#A50E18',
          700: '#8C0B14'
        },
        charcoal: '#1F1F21',
        surface: '#F7F7F8'
      },
      boxShadow: {
        soft: '0 12px 40px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
} satisfies Config
