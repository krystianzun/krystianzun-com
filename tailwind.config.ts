import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Add this line
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
    },
  },
  plugins: [],
};
export default config;
