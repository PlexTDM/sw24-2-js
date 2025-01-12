/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lpink: 'rgb(245, 62, 113)',
        pink: 'rgb(245, 62, 113)',
        ltpurple2L: 'rgba(209,205,228)'
      },
      backgroundColor: {
        // lpink: 'rgb(252, 236, 241)',
        ltpurple: 'rgb(246,239,241)',
        ltpink: 'rgb(252, 236, 241)',
        ltpink2: 'rgb(255, 245, 248)',
        starpurple: '#1a0f31'
      }
    },

  },
  plugins: [],
}