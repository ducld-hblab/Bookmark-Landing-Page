module.exports = {
  content: ["./public/*.{html,js}"], // chi ra path den cac HTML template, JS component, file chua tailwind class
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#a855f7",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    }
  },
  darkMode: false,
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./public/*.{html,js}"],
  plugins: [],
  variants: {
    extend: {},
  }
};
