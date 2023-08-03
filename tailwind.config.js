/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    // screens: {
    //   'sm': '720px',
    // },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "720px",
      // sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "820px",
      // md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#090E34",
        dark: "#1D2144",
        primary: "#4A6CF7",
        yellow: "#FBB040",
        "body-color": "#959CB1",
        'slate': {
          25: '#fcfcfe',
          50: '#f9f9fb',
          150: '#eaeef2',
          250: '#c9e0e4',
          425: '#7587b5',
          450: '#7c8ec0',
          550: '#5c6c85',
        },
        'gray': {
          10: '#fefefe',
          25: '#fcfcfc',
          50: '#fafafa',
          150: '#f1f2f3',
          250: '#c5c7cb',
          350: '#c1c5cb',
          450: '#91919a',
        }
      },
    },
  },
  plugins: [],
};
