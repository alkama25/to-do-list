/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1440px",
      // => @media (min-width: 1440px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
