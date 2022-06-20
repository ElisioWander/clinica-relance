/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        goBack: {
          '0%': { transform: 'translateX(300px)' },
          '100%': { transform: 'traslateX(0)' }
        },
        goAhead: {
          '0%': { transform: 'translateX(-300px)' },
          '100%': { transform: 'traslateX(0)' }
        }
      },
      animation: {
        goBack: 'goBack 0.8s',
        goAhead: 'goAhead 0.8s'
      },
      colors: {
        gray: {
          300: "#333333",
          600: "#777777",
          700: "#555555"
        },
        white: {
          50: "#FFFFFF",
          100: "#FAFAFA",
          300: "#F4EDED",
          400: "#F1F1F1"
        },
        green: {
          100: "#A0E1A7",
          300: "#74D57E"
        }
      }
    },
    fontFamily: {
      merriweather: ['Merriweather'],
      poppins: ['Poppins'],
      roboto: ['Roboto']
    }
  },
  plugins: [],
}
