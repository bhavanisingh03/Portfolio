/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],

  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "15px",

      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },

    extend: {
      fontFamily: {
        primary: ["var(--font-jetbrains-mono)"],
      },

      colors: {
        primary: "#2a2a3d",

        accent: {
          DEFAULT: "#00FF99",
          hover: "#00e187",
        },
      },
    },
  },

  plugins: [],
};