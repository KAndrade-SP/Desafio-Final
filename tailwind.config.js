/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        titleGray: '#333333',
        subtitleGray: '#666666',
        caption: '#9F9F9F',
        boxLightBrown: '#FFF3E3',
        buttonBrown: '#B88E2F',
        buttonDarkBrown: '#A07B29',
        cardWhite: '#F4F5F7',
        shadowBox: '#3A3A3A',
        carouselIndexGray: '#D8D8D8',
        discountRed: '#E97171',
        newGreen: '#2EC1AC',
        productPurple: '#816DFA',
        starYellow:'#FFC700',
        divisorLightBeige: "#F9F1E7",
        divisorBeige: "#FAF3EA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      screens: {
        'mini': '490px'
      }
    },
  },
  plugins: [],
}

