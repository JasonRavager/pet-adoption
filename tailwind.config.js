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
        'splash-1': '#D660FF',
        'splash-2': '#6079FF',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(214,96,255,1) 0%, rgba(0,29,55,0.5) 60%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [],
}