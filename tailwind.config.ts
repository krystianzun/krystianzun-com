import type { Config } from "tailwindcss";

const grey = {
  800: "#432818",
  600: "#73574a",
  500: "#9a7a70",
  400: "#c5ada8",
  300: "#d9c8c4",
  200: "#e8ddd9",
};

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
        heading: grey[800],
        primary: grey[600],
        muted: grey[500],
        subtle: grey[400],
        border: grey[300],
        surface: "#faf6f2",
        grey,
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
