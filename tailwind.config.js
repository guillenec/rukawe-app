/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titulo: ['SUSE', 'sans-serif'],
        parrafo: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        custom: '2px 3px 6px #969696, -3px -3px 4px #ffffff'
      },
      colors: {
        color_custom1:'var(--custom1)',
        color_custom2:'var(--custom2)',
        color_custom3:'var(--custom3)',
        color_custom4:'var(--custom4)',
        color_custom5:'var(--custom5)',
        color_titulo:'var(--customTitulo)',
        color_parrafo:'var(--customParrafo)',
      }
    },
  },
  plugins: [
  ],
}
