/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bege':
          '#B98875',
        'Bege':
          '#B98875',
        'Fundo':
          '#FAF4EE',
      }
    },
  },
  plugins: [],
}

