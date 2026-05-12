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
        heading: "var(--color-heading)",
        primary: "var(--color-primary)",
        muted: "var(--color-muted)",
        subtle: "var(--color-subtle)",
        border: "var(--color-border)",
        surface: "var(--color-surface)",
      },
    },
  },
  plugins: [],
};

export default config;
