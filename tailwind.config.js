/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2sm": "901px",
        "2xs": "815px",
      },
    },
  },
  plugins: [],
};
