/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2sm": "901px",
        "mobileXL": "661px",
        "mobileL": "420px",
        "mobileM": "375px",
        "mobileS": "320px",
        "2xs": "815px",
        "xmd": "926px",
        "xxmd": "976px",

      },
    },
  },
  plugins: [],
};
