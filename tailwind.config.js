/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        my_darkBlue: 'hsl(233, 26%, 24%)',
        my_limegreen: 'hsl(136, 65%, 51%)',
        my_brightCyan: ' hsl(192, 70%, 51%)',
        my_grayishBlue: 'hsl(233, 8%, 62%)',
        my_lightGrayishBlue: 'hsl(220, 16%, 96%)',
        my_veryLightGray: 'hsl(0, 0%, 98%)',
        my_white: 'hsl(0, 0%, 100%)',
      },

      fontSize: {
        my_fontSize: '18px',
      },

      fontWeight: {
        my_fontWeight_300: '300',
        my_fontWeight_400: '400',
        my_fontWeight_700: '700',
      },

      fontFamily: {
        my_fontFamily: ['Public Sans', 'serif'],
      },
    },
  },
  plugins: [],
}
