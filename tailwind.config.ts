import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#F9F9F9",
        blue: {
          darkest: "#244b67",
          dark: "#93a9ca",
          light: "#b5c4db",
          lightest: "#d7dfec",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
