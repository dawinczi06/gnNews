const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      teal: colors.teal,
    },
    extend: {
      keyframes: {
        bounceHorizontal: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "bounce-animation": "bounceHorizontal 1s linear infinite",
      },
    },
  },
  plugins: [],
};
