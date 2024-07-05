/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        'custom': '2px 4px 6px black',
      },
      colors:{
        primary:{"matcolor":"rgb(255, 207, 189)"}
      }
    },
  },
  plugins: [],
}