/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js,css}",
    "./scripts/**/*.{html,js,css}",
  ],
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
