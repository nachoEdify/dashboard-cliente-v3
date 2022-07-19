module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        'max': 9999,
        'max-2': 99999
      },
      scale: {
        '98': '0.98',
      },
      backgroundColor: theme => ({
        'primary-green': '#143233',
        'primary-orange': '#E16736',
        'primary-blue': '#0086C9',
        'primary-pink': '#F3BEB3',
        'primary-yellow': '#EAF93B',
        'secondary-blue': '#D1E9FF',
        'secondary-green': '#62A5A8',
        'secondary-grey': '#F9F9F9',
        'secondary-white': '#FFFFFF80',
        'secondary-orange': '#ffede5',
        'tertiary-orange': '#FFF6F3',
        'dark-green': '#021515',
        'dark-orange': '#8A310E'
      }),
      borderColor: theme => ({
        'primary-green': '#143233',
        'primary-orange': '#E16736',
        'primary-blue': '#0086C9',
        'primary-pink': '#F3BEB3',
        'primary-yellow': '#EAF93B',
        'secondary-blue': '#D1E9FF',
        'secondary-green': '#62A5A8',
        'secondary-grey': '#F9F9F9',
        'secondary-white': '#FFFFFF80',
        'secondary-orange': '#ffede5',
        'tertiary-orange': '#FFF6F3',
        'dark-green': '#021515',
        'dark-orange': '#8A310E'
       }),
       textColor: theme => ({
        'primary-green': '#143233',
        'primary-orange': '#E16736',
        'primary-blue': '#0086C9',
        'primary-pink': '#F3BEB3',
        'primary-yellow': '#EAF93B',
        'secondary-blue': '#D1E9FF',
        'secondary-green': '#62A5A8',
        'secondary-grey': '#F9F9F9',
        'secondary-white': '#FFFFFF80',
        'secondary-orange': '#ffede5',
        'tertiary-orange': '#FFF6F3',
        'dark-green': '#021515',
        'dark-orange': '#8A310E'
       })
    },
    colors: {
      "white": "#FFFFFF",
      "black": "#000000",
      "red": "#EF0D36",
      "primary": {
        700: '#AC451B',
        900: '#461704'
      },
      "warning": {
        50: '#FFFAEB',
        700: '#B54708'
      },
      "success": {
        50: '#ECFDF3',
        200: '#A6F4C5',
        600: '#039855',
        700: '#027A48'
      },
      "error": {
        50: '#FEF3F2',
        500: '#F04438',
        700: '#B42318'
      },
      'darkGreen':{
        400: '#285455',
        100: '#99D3D6'
      },
      'gray': {
        50: '#F9FAFB',
        100: '#F2F4F7',
        200: '#E4E7EC',
        300: '#D0D5DD',
        400: '#C6C4D4',
        500: '#667085',
        600: '#475467',
        700: '#344054',
        800: '#1D2939',
        900: '#130B46',
      },
      'green': {
        100: '#EBFFEB',
        200: '#D6FFD8',
        400: '#8AE58D',
        600: '#006603',
      },
      'orange': {
        100: '#FFEFEB',
        200: '#FFDED6',
        400: '#FFAD99',
        600: '#661400',
      },
      'pink': {
        100: '#FFEBFF',
        200: '#FFD6FF',
        400: '#FF99FF',
        600: '#660066',
      },
      'blue': {
        100: '#EBF8FF',
        200: '#D6F1FF',
        400: '#99DDFF',
        600: '#004466',
      },
      'purple': {
        100: '#F3EBFF',
        200: '#E7D6FF',
        400: '#C399FF',
        600: '#2A0066',
      },
      'yellow': {
        100: '#FFFBEB',
        200: '#FFF7D6',
        400: '#FFEB99',
        600: '#665200',
      },
    },
  },
  plugins: [],
}