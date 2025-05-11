/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F37433',
        gray: '#939393',
        white: '#FFF',
      },
    },
  },

  plugins: [require('@tailwindcss/line-clamp')],
}
