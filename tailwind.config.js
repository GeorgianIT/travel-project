/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mRoad': "url('../src/assets/photoshop.png')",
        'photoshop' : "url('../src/assets/final2.png')",
      },
      fontFamily: {
        custom1: ["Custom-1", "sans-serif"],
        custom2: ["Custom-2", "sans-serif"],
      }
    },
  },
  plugins: [],
}
