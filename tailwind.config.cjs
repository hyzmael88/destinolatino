/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'squada-one': ["Squada One"],
        'poppins':['Poppins'],
        bones: ["BONES"],
      },
    },
  },
  plugins: [],
}