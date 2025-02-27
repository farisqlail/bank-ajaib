/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna yang sudah ada
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Warna baru yang ditambahkan
        "primary-main": "#168D71",
        "primary-surface": "#F5FFFD",
        "primary-border": "#B1D9D0",
        "primary-hover": "#0F5E4B",
        "primary-pressed": "#072F26",
        "primary-foces": "rgba(22, 141, 113, 0.20)",

        "neutral-10": "#FFFFFF",
        "neutral-20": "#F5F5F5",
        "neutral-30": "#EDEDED",
        "neutral-40": "#E0E0E0",
        "neutral-50": "#C2C2C2",
        "neutral-60": "#9E9E9E",
        "neutral-70": "#757575",
        "neutral-80": "#616161",
        "neutral-90": "#424242",
        "neutral-100": "#0A0A0A",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
