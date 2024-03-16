/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#0BE58A",
        "dark-full": "#150B2B",
        "dark-two": "#282828",
        "dark-six": "#878787",
        "dark-80": "#282828CC",
        "dark-70": "#150B2BB3",
        "dark-60": "#150B2B99",
      },
    },
  },
  plugins: [require("daisyui")],
};
