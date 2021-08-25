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
          8: '#A6B4D4',
          9: '#D5F0FE'
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
        '5-5': ['5.5rem', '6rem'],
        '5-625': ['5.625rem', '6rem']
      },
      lineHeight: {
        '1-1': '1.1',
        '1-05': '1.05',
        '1-15': '1.15',
        '1-2': '1.2'
      },
      height: {
        '13': '3.25rem',
        '7.5': '1.875rem',
        '12.1': '49px',
        '54': '12.5rem',
        '57': '14.25rem',
        '100': '100px',
        '111': '111px',
        '129': '129px',
        '164': '164.5px',
        '193': '193px',
        '206': '206px',
        '249': '249px',
        '257': '257px',
        '268': '268px',
        '296': '296px',
        '310': '310px',
        '329': '329px',
        '360': '22.5rem',
        '368': '368px',
        '370': '370px',
        '400': '25rem',
        '420': '420px',
        '441': '441px',
        '449': '449px',
        '480': '480px',
        '499': '499px',
        '600': '600px',
        '673': '673px'
      },
      margin: {
        23: '5.875rem',
        "5-5": '1.375rem',
        "7-5": '1.875rem',
        35: '8.75rem'
      },
      spacing: {
        '7.5': '1.875rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '4.5': '1.125rem',
        '7.5': '1.875rem',
        '12.5': '3.125rem'
      },
      width: {
        '20.5': '5.5rem',
        '43': '11.25rem',
        '57': '14.25rem',
        '104': '104px',
        '186': '186px',
        '327': '327px',
        '346': '346px'
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
