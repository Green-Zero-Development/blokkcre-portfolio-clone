module.exports = {
  content: [
    "./index.html",
    "./src/**/*.njk",
    "./src/**/*.html",
  ],
  theme: {
    screens: {
      'xs': '416px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1440px',
      '3xl': '1441px',
      '4xl': '2000px',
    },
    colors: {
      white: '#FFFFFF',
      cream: {
        500: '#EDEEE9',
      },
      green: {
        100: '#93AA93',
        500: '#323F32'
      },
      darkgreen: {
        500: '#323F32'
      },
      gray: {
        500: '#191E19'
      }
    },
    fontSize: {
      '0': '0px',
      '2xs': '.70rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      normal: '1.5',
      loose: '2',
    },
    maxWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '88rem',
      '9xl': '96rem',
      '10xl': '104rem',
      '12xl': '120rem',
      full: '100%',
    },
    extend: {},
  },
  plugins: [],
}
