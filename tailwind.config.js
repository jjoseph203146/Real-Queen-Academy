/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        plum: {
          950: "#1D0A25",
          900: "#2A0F35",
          800: "#33123F",
          700: "#3B1548",
          600: "#4A2C55",
          500: "#5A3B65",
          400: "#6B4A73",
        },
        gold: {
          400: "#E4C878",
          500: "#CDA349",
        },
        magenta: {
          600: "#B0157A",
          700: "#8E1568",
          500: "#C21E8C",
        },
        cream: {
          50: "#FBF6EF",
          100: "#F5EDE9",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
