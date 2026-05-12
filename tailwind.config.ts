import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        grey: {
          800: "#432818",
          600: "#73574a",
          500: "#9a7a70",
          400: "#c5ada8",
          300: "#d9c8c4",
          200: "#e8ddd9",
        },
        green: {
          available: "#22C55E",
        },
      },
      spacing: {
        "400": "400px",
        "550": "550px",
      },
    },
  },
  plugins: [],
};

export default config;
