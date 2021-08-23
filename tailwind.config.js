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
          6: '#E2F5FF',
          7: '#7B61FF',
          8: '#A6B4D4'
        },
        yellow: {
          1: "#FFFBDC",
          2: "#FFF2E3"
        },
        green: {
          1: '#E1FDAC',
          2: '#E5FF9C',
          3: '#DCFAA7'
        },
        pink: {
          1: '#F8D5DD'
        },
        purple: {
          1: '#C9C8FF',
        },
        gray: {
          1: '#E7E9EB',
        },
        red: {
          1: '#FF3131'
        }
      },
      padding: {
        '5-5': '1.375rem',
        '6-5': '1.625rem',
        '22': '5.5rem'
      },
      fontFamily: {
        'fakt': ['Fakt']
      },
      fontSize: {
        '1-375': ['1.375rem', '1.5rem'],
        '1-75': ['1.75rem', '2rem'],
        '2': ['2rem', '2.25rem'],
        '2-5': ['2.5rem', '2.75rem'],
        '2-75': ['2.75rem', '3rem'],
        '3-25': ['3.25rem', '3.5rem'],
        '5': ['5rem', '5.5rem'],
        '5-5': ['5.5rem', '6rem']
      },
      lineHeight: {
        '1-1': '1.1'
      },
      height: {
        '54': '12.5rem',
        '111': '111px',
        '129': '129px',
        '193': '193px',
        '249': '249px',
        '268': '268px',
        '310': '310px',
        '360': '22.5rem',
        '370': '370px',
        '400': '25rem',
        '420': '420px',
        '441': '441px',
        '449': '449px',
        '499': '499px',
        '673': '673px'
      },
      width: {
        '104': '104px'
      },
      container: {
        screens: {
          sm: "100%",
          lg: "1400px"
        },
        center: true
      },
      boxShadow: {
        1: "0px 0px 20px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
