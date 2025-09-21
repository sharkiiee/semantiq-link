/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        myBlue: '#5A75AD', // give your hex a name
      },
    },
  },
  plugins: [],
}

