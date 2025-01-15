/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "funnel-sans": ['"Funnel Sans"', "sans-serif"],
      },
      colors: {
        "dark-bg": "#252525",
        "top-text": "#fffef2",
        "border-btm": "#e5e5e5",
        "hero-bg": "#f6f5e8",
        text: "#333333",
        "btn-border": "rgba(51, 51, 51, .2)",
      },
      textUnderlineOffset: {
        custom: "calc(1px + 0.12em)",
      },
      height: {
        "hero-height": "736px",
      },
      width: {
        "hero-data": "calc(33.3333333333% - 80px)",
      },
      margin: {
        "hero-margin-left": "16.6666666667%",
      },
    },
  },
  plugins: [],
};
