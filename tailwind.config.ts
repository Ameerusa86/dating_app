import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(340, 82%, 50%)", // Vibrant pink
          foreground: "hsl(0, 0%, 100%)", // White text
        },
        accent: {
          DEFAULT: "hsl(50, 82%, 60%)", // Gold
          foreground: "hsl(0, 0%, 20%)", // Dark text
        },
        muted: {
          DEFAULT: "hsl(220, 15%, 85%)", // Soft gray
          foreground: "hsl(220, 10%, 40%)", // Dark gray text
        },
        border: "hsl(220, 15%, 75%)",
        input: "hsl(220, 15%, 85%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
