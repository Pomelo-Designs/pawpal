/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{tsx,ts,js,jsx}",
    "./src/**/*.{tsx,ts,js,jsx}"
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
