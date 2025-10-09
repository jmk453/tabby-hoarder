/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./popup/**/*.html",
    "./scripts/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4299e1',
        secondary: '#48bb78',
        accent: '#ecc94b',
        background: '#1a202c',
        text: '#cbd5e0',
        surface: '#2d3748',
      }
    }
  },
  plugins: [],
}

