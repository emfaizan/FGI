module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          1: '#E9FFF7',
          2: '#CBEDFF',
          3: '#C9DBFF',
          4: '#E0E3FF',
          5: '#B6CDFF',
          6: '#E2F5FF'
        },
        green: {
          1: '#E1FDAC',
          2: '#E5FF9C'
        },
        pink: {
          1: '#F8D5DD'
        },
        gray: {
          1: '#E7E9EB',
        }
      },
      fontFamily: {
        'fakt': ['Fakt']
      },
      fontSize: {
        '1-375': '1.375rem',
        '1-75': '1.75rem',
        '2': '2rem',
        '2-5': '2.5rem',
        '2-75': '2.75rem',
        '3-25': '3.25rem',
        '5': '5rem'
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1440px"
        },
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          lg: '2rem'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
