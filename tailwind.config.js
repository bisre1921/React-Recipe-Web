/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1400px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'}, 
      
      'vsm' : {'max' : '300px'},
      },
      extend: {
        zIndex: {
          '1000': '1000',
        }
      },
  },
  plugins: [],
}
