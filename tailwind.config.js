/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('../public/img/3d-rendering-cryptocurency-distribution.jpg')",
        bg2: "url('../public/img/72293.jpg')",
        bg3: "url('../public/img/108909.jpg')",
      }
    },
  },
  plugins: [],
}