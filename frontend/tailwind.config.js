/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",                 // Include index.html
    "./src/**/*.{js,jsx,ts,tsx}",   // Include all JS, JSX, TS, TSX files in src folder
    "./components/**/*.{js,jsx}",  // Include any files in the components folder
    "./pages/**/*.{js,jsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}

