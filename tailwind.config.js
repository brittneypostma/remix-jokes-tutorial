/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sidebar': '200px 1fr'
      },

      fontFamily: {
        'display': ['Baloo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
