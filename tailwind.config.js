/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-magenta': '#E91E8C',
        'brand-gold': '#F5A623',
        'brand-sky': '#29ABE2',
        'brand-dark': '#1A1A2E',
        'brand-navy': '#1a365d',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'section': '40px',
        'btn-lg': '20px',
      },
      boxShadow: {
        'brand': '0 4px 24px rgba(233,30,140,0.25)',
      },
    },
  },
  plugins: [],
}
