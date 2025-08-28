/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'violet-per1' : '#40396B',
        'violet-per2' : '#301752',
        'violet-per3' : '#261240',
        'grey-per1' : '#3d3d3c',
        'grey-per2' : '#2d2d2c',
        'yellow-per1' : '#f6cb00',
      }
    },
  },
  plugins: [],
};