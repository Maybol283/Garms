/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-(\w){3,6}(-[\d]{3})?/,
    },
    {
      pattern: /ring-(\w){3,6}(-[\d]{3})?/,
    },
  ],
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
};
