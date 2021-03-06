module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      cWhite: '#FEFEFE',
      cPink: '#E15B7E',
      cGray: '#BABABA',
      cLightBlue: '#EBF5FA',
      cBlack: '#101010',
      cPurple: '#A190FF',
      cBlue: '#1F83B5',
      cOverlay: 'rgba(51, 51, 51, 0.5)',
    },
    boxShadow:{
      'bsRocket': "0px 0px 60px rgba(0, 0, 0, 0.1);",
      'bsModal': "4px 4px 8px 8px rgba(0, 0, 0, 0.15)",
    },
    extend: {
      fontFamily: {
          'sans': ['Nunito', 'sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',],
        },
      },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
