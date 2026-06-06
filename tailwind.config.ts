import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#183126",
        moss: "#344b3a",
        sage: "#dbe2d3",
        cream: "#f7f4ec",
        sand: "#e9e1d2",
        gold: "#b68b4b",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(24,49,38,.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
