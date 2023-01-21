/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#2b3945',
        darkBlue: '#202c37',
        blackBlue: '#111517',
        darkGray: '#858585',
        lightGray: '#fafafa',
      },
      boxShadow: {
        whole: '0px 0px 5px #ccc',
      },
    },
  },
  plugins: [],
};
