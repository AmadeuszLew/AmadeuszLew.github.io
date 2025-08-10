/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.ts",
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
        'input':'#2A2A35'
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
