/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto']
    },
    colors: {
      black: '#121212',
      white: '#FFFFFF',
      chrome: '#EEEEEE',
      gray: {
        DEFAULT: '#BBBBBB',
        light: '#CCCCCC',
        dark: '#AAAAAA'
      },
      blue: {
        DEFAULT: '#0080FF',
        light: '#41A0FF',
        dark: '#005FBC'
      }
    },
    fontSize: {
      xs: '10px',
      sm: '13px',
      base: '15px',
      xl: '28px'
    }
  },

  plugins: [require('@tailwindcss/forms')]
}
