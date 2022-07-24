/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Nanum Gothic",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
