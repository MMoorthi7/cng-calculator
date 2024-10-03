/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {  // Change this to use a colon
        'darkpurple': '#481380',
      },
      fontFamily: { // Change this to use a colon
        "roboto": ["Roboto", "sans-serif"], // Correct the array syntax
      },
    },
  },
  plugins: [],
}
