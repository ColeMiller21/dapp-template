/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        landingBg: "url('../public/images/bg-image/neon-sign.jpeg')",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        quatt: ["Quattrocento", "serif"],
      },
    },
  },
  plugins: [],
};
