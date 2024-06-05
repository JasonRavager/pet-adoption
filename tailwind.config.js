/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        'source': ['"Source Sans 3"', 'sans-serif'],
      },
      colors: {
        'primary': '#001D37',
        'secondary': '#475AFF',
      },
    },
  },
  plugins: [],
}