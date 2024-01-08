/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    screens: {
      mobile: "370px",
      tablet: "640px",
      laptop: "1024px",
      dekstop: "1280px",
    },
  },
  plugins: [],
};
