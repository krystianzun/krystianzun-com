import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Tight', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        grey: {
          800: '#34343D',
          600: '#696972',
          500: '#8E8E93',
          400: '#ABABB4',
          300: '#CCCCD4',
          200: '#E2E2E8',
        },
        green: {
          available: '#22C55E',
        }
      },
      spacing: {
        '400': '400px',
      },
    },
  },
  plugins: [],
};

export default config;

