/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#3C3C3E",
        secondaryBg: "#464646",
        darkBlue: "#95B6D5",
        lightBlue: "#A7C8E4",
        darkPink: "#E94276",
        lightPink: "#E96B94",
      },
    },
  },
  plugins: [],
};
