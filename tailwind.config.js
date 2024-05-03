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
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#006FEE",
              foreground: "white",
            },
          },
        },
      },
    }),
  ],
};
