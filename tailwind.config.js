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
            foreground: "white",
            background: "#006FEE",
            primary: {
              DEFAULT: "#006FEE",
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
