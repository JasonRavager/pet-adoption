/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export const content = ["./src/**/*.{html, js}"];
export const theme = {
  extend: {
    fontFamily: {
      'source': ['"Source Sans 3"', 'sans-serif'],
    },
    colors: {
      'primary': '#001D37',
      'secondary': '#475AFF',
      'highlight': '#2E40E2',
      'gray': '#9F9F9F',
      'light-gray': '#F3F3F3',
      'medium-gray': '#A2A2A2',
      'footer-gray': '#A6A6A6',
      'hover-gray': '#7d7d7d',
      'dark-gray': '#626262',
      'splash-1': '#D660FF',
      'splash-2': '#6079FF',
    },
  },
};
export const plugins = [
  plugin(function ({ addVariant }) {
    addVariant('current', '&.active');
  })
];