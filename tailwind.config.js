/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: "Playball",
      sans: "Nanum Gothic",
    },
    extend: {
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
