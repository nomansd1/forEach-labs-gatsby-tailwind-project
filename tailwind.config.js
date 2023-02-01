/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge:['./src/**/*.{js,jsx,ts,tsx}'],
  content: [],
  theme: {
    extend: {
      screens: {
        'md' : '904px',
      }
    },
  },
  plugins: [],
}
