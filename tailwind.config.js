/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#242424",
        misty: "#C2BEBE",
      },
      fontFamily: {
        julius: ["Julius Sans One"],
      },
      gridTemplateRows: {
        layout: "repeat(4, minmax(100vh, 100%))",
      },
    },
  },
  plugins: [],
};
