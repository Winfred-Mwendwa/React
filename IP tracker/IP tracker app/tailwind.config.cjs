/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#000000'
      }
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    }
  },
  plugins: [],
}