import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        palette: {
          1: "#fcffe0",
          2: "#bacd92",
          3: "#75a47f",
          4: "#f5dad2",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
