/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        'LaiserPageSection': "url('https://media.istockphoto.com/photos/woman-having-hair-removal-laser-epilation-on-underarm-areas-hair-picture-id1139106582?s=2048x2048')"
      },
      keyframes: {
        goBack: {
          '0%': { transform: 'translateX(300px)' },
          '100%': { transform: 'traslateX(0)' }
        },
        goAhead: {
          '0%': { transform: 'translateX(-300px)' },
          '100%': { transform: 'traslateX(0)' }
        },
        goTop: {
          '0%': { transform: 'translateY(200px)' },
          '100%': { transform: 'traslateX(0)' }
        },
        goTopImage: {
          '0%': { transform: 'translateY(400px)' },
          '100%': { transform: 'traslateX(0)' }
        },
        goVisible: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        goBack: 'goBack 0.8s',
        goAhead: 'goAhead 0.8s',
        goTop: 'goTop 0.8s',
        goTopImage: 'goTopImage 1s',
        goVisible: 'goVisible 0.3s '
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
