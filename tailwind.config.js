/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "major-mono": ["'Major Mono Display'", "monospace"],
        nunito: ["'Nunito'", "sans-serif"],
        "merienda ": ["'Merienda One'", "sans-serif"],
        "raleway  ": ["'Raleway'", "sans-serif"],
      },
      fontSize: {
        xxl: "10rem",
        custom: "7.8rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
