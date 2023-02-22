/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#F6EEE6",

          secondary: "#C461E2",

          accent: "#382A5B",

          neutral: "#AF4670",

          "base-100": "#FFFFFF",

          info: "#2563EB",

          success: "#16A34A",

          warning: "#E08663",

          error: "#DC2626",
        },
        fontFamily: {
          openSans: ["Open Sans", "sans-serif"],
          domine: ["Domine", "serif"],
        },
      },
      "light",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/forms"),
  ],
};
