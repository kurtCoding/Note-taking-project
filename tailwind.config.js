/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:"#282828",
        secondary:"#DBD7D4",
        accent: "#797979",
        nav: "#1F1F1F",
        font: "#FDFDFD"
      },
    }
  },
  plugins: [],
};
