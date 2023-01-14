const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif", "system-ui"],
        mono: ["IBM Plex Sans", "ui-monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#F7F7FB",
          200: "#E8E8F8",
          300: "#BFBFE3",
        },
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
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero-img.png)",
        },
        ".shadow-card": {
          "box-shadow": "0px 15px 30px rgba(0,0,0,0.1)",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
