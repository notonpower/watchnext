import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateY(-20px) translateX(-50%) scale(0.95)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0) translateX(-50%) scale(1)',
            opacity: '1'
          },
        },
        'slide-out': {
          '0%': {
            transform: 'translateY(0) translateX(-50%) scale(1)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(-20px) translateX(-50%) scale(0.95)',
            opacity: '0'
          },
        }
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'slide-out': 'slide-out 0.5s ease-in forwards',
      },
    },
  },
  plugins: [],
}

export default config