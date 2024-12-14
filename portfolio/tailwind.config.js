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
        ultra:["Ultra", "serif"]
      },
    },
  },
  plugins: [],
}


