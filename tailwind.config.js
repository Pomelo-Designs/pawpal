/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{tsx,ts,js,jsx}",
    "./src/**/*.{tsx,ts,js,jsx}"
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        pink: {
          100: 'rgba(173, 41, 92, 0.11)',
          200: 'rgba(173, 41, 92, 0.14)',
          300: '#FFDBCC',
        },
      }
    },
  },
  plugins: [],
};

// passive transparent
// hover rgba(173, 41, 92, 0.11)

// active #FFDBCC
// hover clicked rgba(173, 41, 92, 0.14)
// active passive #FFDBCC
// active clicked #FFDBCC