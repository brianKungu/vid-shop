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
        primaryBg: "#fff",
        darkBlue: "#1d4ed8",
        lightBlue: "#3b82f6",
        darkOrange: "#ea580c",
        lightOrange: "#f97316",
      },
    },
  },
  plugins: [],
};
