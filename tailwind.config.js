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
        primary: '#1D4ED8',
      },
      boxShadow: {
        glow: "0 0 15px rgba(20,184,166,0.3), 0 0 30px rgba(20,184,166,0.2)",
        glowHover: "0 0 20px rgba(99,102,241,0.5), 0 0 40px rgba(99,102,241,0.3)",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        ultra: ['Oswald', 'sans-serif'],
        abril: ['Abril Fatface', 'serif'],
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
          '100%': { transform: 'translateX(-50%)' },
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        rotateCube: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
      },
      animation: {
        'soft-glow': 'softGlow 3s ease-in-out infinite',
        'scroll-x': 'scrollX 30s linear infinite',
        'star-movement-bottom': 'star-movement-bottom 10s linear infinite alternate',
        'star-movement-top': 'star-movement-top 10s linear infinite alternate',
        'rotate-cube': 'rotateCube 5s linear infinite',
      },
    },
  },
  plugins: [],
}
