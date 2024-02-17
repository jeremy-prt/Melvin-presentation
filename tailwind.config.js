/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#cd005c",
        secondary: "#ff92c9",
      },
      fontFamily: {
        main: ["GeneralSans-Variable"],
      },
      fontSize: {
        title: ["clamp(2rem, 8vw, 9rem)"],
        subtitle: ["clamp(1rem, 7vw, 7rem)"],
      },
    },
  },
  plugins: [],
};
