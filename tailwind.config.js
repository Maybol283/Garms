/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
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
  plugins: [require("flowbite/plugin")],
};
