module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: require("./commons/ui/theme/screens"),
    colors: require("./commons/ui/theme/colors"),
    fontSize: require("./commons/ui/theme/fontSize"),
    width: require("./commons/ui/theme/width"),
    height: require("./commons/ui/theme/height"),
    spacing: require("./commons/ui/theme/spacing"),
    fontFamily: require("./commons/ui/theme/fontFamily"),
    extend: {},
  },
  plugins: [],
};
