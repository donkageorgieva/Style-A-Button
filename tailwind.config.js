module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        md: "0 5px 5px rgba(100, 100, 127, 0.08)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
