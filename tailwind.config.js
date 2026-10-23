/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: {
      powder: { 50:'#f7fbff', 100:'#edf6ff', 200:'#dcecff', 300:'#c6e0ff', 400:'#94c5ff', 500:'#5aa1f5', 600:'#347fe0', 700:'#2563c5', 800:'#204f98', 900:'#1d3e70' }
    },
    boxShadow: { soft: '0 10px 35px rgba(41, 93, 153, .07)' },
    borderRadius: { '2xl':'1.25rem' }
  }},
  plugins: []
}