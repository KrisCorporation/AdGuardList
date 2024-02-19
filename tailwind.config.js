/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'title':['Rubik'],
        'corp':['Work Sans']
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'primary':'#1B499B',
        'secondary':'#03D28A',
        'secondary-2':'#30C5F1',
        'secondary-3':'#EC519B'
      }
    },
  },
  plugins: [],
}

