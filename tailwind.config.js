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

      'max-w-640': '640px',

      'max-w-1535': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      'min-w-768-max-w-1023': { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'min-h-800': { raw: '(min-height: 800px)' }
      // => @media (min-height: 800px) { ... }
    },
    extend: {
      colors: {
        baseText: '#02215E',
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
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")'
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
