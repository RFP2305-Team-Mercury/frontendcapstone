/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}',
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '192': '48rem'
      }
    },
  },
  darkMode: 'class',
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
