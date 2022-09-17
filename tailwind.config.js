/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'my-darkBlue': 'hsl(233, 26%, 24%)',
        'my-limegreen': 'hsl(136, 65%, 51%)',
        'my-brightCyan': ' hsl(192, 70%, 51%)',
        'my-grayishBlue': 'hsl(233, 8%, 62%)',
        'my-lightGrayishBlue': 'hsl(220, 16%, 96%)',
        'my-veryLightGray': 'hsl(0, 0%, 98%)',
        'my-white': 'hsl(0, 0%, 100%)',
        'my-dark-theme': '#121212',
      },

      fontSize: {
        'my-fontSize': '18px',
      },

      fontWeight: {
        'my-fontWeight_300': '300',
        'my-fontWeight_400': '400',
        'my-fontWeight_700': '700',
      },

      fontFamily: {
        'my-fontFamily': ['Public Sans', 'serif'],
      },
      lineHeight: {
        'leading-12': '3.5rem',
      },
      variants: {
        fill: ['hover', 'focus'],
      },
    },
  },
  plugins: [],
};
