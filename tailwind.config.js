/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kalam", "sans-serif"],
      },
      colors: {
        "mygray": "#454545",
        "accent": "#FFB2B2",
        "accent2": "#65A2FF",
      }
      },
    },
  plugins: [],
};
