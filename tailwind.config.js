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
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};