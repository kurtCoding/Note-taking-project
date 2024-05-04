/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:"#DBD7D4",
        secondary:"#F8F8F8",
        accent: "#615F5F",
      }
    },
  },
  plugins: [],
};
