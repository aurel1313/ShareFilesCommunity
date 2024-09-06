/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const { color } = require("framer-motion");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        "custom-blue": {
          extend: "light",

          colors: {
           
            background: "#006FEE",
            primary: {
              DEFAULT: "#006FEE",
            },
          },
          fonts: {
            body: "Roboto, sans-serif",
          }
          
        },
        "custom-blue-dark": {
          extend: "dark",
          colors: {
           
            background: "#18181B",
            primary: {
              DEFAULT: "#18181B",
              
            },
            secondary : {
              DEFAULT: "#338EF7"
            },
          },
          fonts: {
            body: "Roboto, sans-serif",
          }
        },
      },
    }),
  ],
};
