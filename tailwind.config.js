/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orbit: {
          bg: '#050608',
          card: '#0c0e14',
          'card-hover': '#131722',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-bright': 'rgba(52, 211, 153, 0.3)',
          emerald: '#10b981',
          'emerald-glow': '#34d399',
          amber: '#f59e0b',
          'amber-glow': '#fbbf24',
          cyan: '#06b6d4',
          muted: '#8b949e',
          light: '#f0f6fc',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
