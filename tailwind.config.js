/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: "#FFF8E5",
          100: "#FFF1CC",
          200: "#FFE299",
          300: "#FFD466",
          400: "#FFC533",
          500: "#FFB703",
          600: "#CC9200",
          700: "#996E00",
          800: "#664900",
          900: "#332500",
        },
      },
    },
  },
  plugins: [],
};
