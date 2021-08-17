module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#e2e6e3",
          dark: "#4b5548",
          dark2: "rgb(43, 46, 43)",
        },
        secondary: {
          light: "#f5f5f4",
          dark: "#d1d5d2",
        },
        
      },
      fontFamily:{
        heading: ['Crimson Text'],
      },
      fontSize:{
        'xxs': '0.6rem'
      },
      theme:{
        boxShadow:{
          top: '0px -7px 15px -7px rgba(0,0,0,0.69)',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
