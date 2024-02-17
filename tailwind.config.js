/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#cd005c",
        secondary: "#ff92c9",
      },
      fontSize: {
        title: ["clamp(3rem, 7vw, 9rem)"],
        subtitle: ["clamp(1rem, 7vw, 7rem)"],
        subtitle2: ["clamp(0.8rem, 5vw, 5rem)"],
      },
      fontFamily: {
        title: ["Gotham-Ultra"],
        subtitle: ["Gotham-Bold"],
      },
    },
  },
  plugins: [],
};
