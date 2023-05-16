/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        costumeSize1: { raw: "(max-height: 610px),(max-width:1024px)" },
        costumeSize2: { raw: "(max-height: 768px),(max-width:1024px)" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
