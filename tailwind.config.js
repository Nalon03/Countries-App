module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors:{
        darkPrimary: '#202D36',
        darkSecondary: '#2B3743',
        lightPrimary: '#FFFFFF',
        lightSecondary: '#FAFAFA',
      }, 
      fontFamily:{
        sans: ['Inter', 'sans-serif'],
        serif:['Merriweather', 'serif']
      }
    },
  },
  plugins: [],

}

