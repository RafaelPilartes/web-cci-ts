/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',

      'min-w-s-1390': '1390px',
      'min-w-s-1030': '1030px',
      'min-w-s-640': '640px',
      'min-w-s-520': '520px',

      'max-w-s-1535': { max: '1535px' },
      'max-w-s-1030': { max: '1030px' },
      'max-w-s-570': { max: '570px' },
      'max-w-s-520': { max: '520px' },
      'max-w-s-420': { max: '420px' },
      // => @media (max-width: 1535px) { ... }

      'min-w-768-max-w-s-1023': { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'min-h-800': { raw: '(min-height: 800px)' }
      // => @media (min-height: 800px) { ... }
    },
    extend: {
      colors: {
        baseText: '#02215E',
        baseDark: '#000F21',
        baseTextWhite: '#ffffff',
        baseTextGray: 'rgb(209 213 219)',
        primary: {
          50: '#fee5de',
          100: '#fdc8ba',
          200: '#f74f22',
          300: '#de471f',
          400: '#c63f1b',
          500: '#b93b1a',
          700: '#942f14',
          800: '#6f240f',
          900: '#561c0c'
        },
        accent: '#F13024'
      },
      backgroundImage: {
        footer: 'url("/background/footer-bg.jpg")'
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      }
    },
    fontFamily: {
      poppins: ['Poppins']
    }
  },
  plugins: [require('flowbite/plugin')]
}
