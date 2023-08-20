/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["*.html", "**/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
