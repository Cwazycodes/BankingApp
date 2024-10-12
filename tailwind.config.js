/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        primary: "#FAFAFBFF",
        secondary: "#636AE8FF",
        black: "#000",
        gray: "#9095A0FF",
        sgray: "#565E6CFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
