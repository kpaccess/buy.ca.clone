/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        home_scrolling: "home_scrolling 20s linear infinite",
      },
      keyframes: {
        home_scrolling: {
          "0%": { transform: "translateZ(0)" },
          "100%": { transform: "translate3d(-1096px, 0, 0)" },
        },
      },
      width: {
        3288: "3288px",
      },
      height: {
        242: "242px",
      },
    },
  },
  plugins: [],
};
