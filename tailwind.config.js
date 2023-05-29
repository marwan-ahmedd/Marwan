/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'background': '#282C33',    
    }),
    fontFamily: {
      primary: 'NTR',
      secondary: 'Jetbrains Mono',
      tertiary: 'Lato',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        LightestSlate	: '#ccd6f6', 
        Green: '#C778DD',
        Slate: '#8892b0'
      },
      
    },
  },
  plugins: [],
}

