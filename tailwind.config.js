/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.ts",
  ],
  safelist: [
    'text-teal-400',
    'text-yellow-400',
    'text-cyan-400',
    'text-orange-400',
    'text-green-400',
    'text-green-500',
    'text-swiss-life',
    'text-axa',
  ],
  theme: {
    extend: {
      colors:{
        'body':'#17171F',
        'selected-text':'#A3A3FF',
        'theme':'#3F3FFF',
        'nav':'#404053',
        'secondary':'#9191A4',
        'ebebebe':'#9121A4',
        'badge':'#3F3F51',
        'input-border':'#565666',
        'input':'#2A2A35',
        'swiss-life':'#ED1C24',
        'axa':'#005BBB'
      },
      keyframes: {
        'lightbox-in': {
          from: { opacity: '0', transform: 'scale(0.97)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'lightbox-in': 'lightbox-in 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      fontFamily:{
        'poppins':["'Poppins'",'sans-serif']
      }
    },
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
      '2xl': '1920px',
    }
  },
  plugins: [],
}
