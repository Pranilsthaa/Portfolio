/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ["Poppins", "sans-serif"],
        'playfair' : ["Playfair Display", "serif"],
      },
      width:{
        'screen-minus-sidebar': 'calc(100vw - var(--sidebar-width))',
      }
    },
  },
  plugins: [],
}