/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        primary: '#1D4ED8',  // Tailwind custom color
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],  // Custom font
        ultra:["Oswald", "sans-serif"],
        abril:["Abril Fatface", "serif"]
      },
      keyframes: {
        softGlow: {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(83, 83, 85, 0.95), 0 0 20px rgb(121, 122, 123)',
            transform: 'translateY(0px)',
          },
          '50%': {
            boxShadow: '0 0 20px rgb(185, 175, 255), 0 0 30px rgb(143, 255, 175)',
            transform: 'translateY(-4px)',
          },
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Adjust based on content duplication
        },
      },
      animation: {
        'scroll-x': 'scrollX 30s linear infinite',
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}