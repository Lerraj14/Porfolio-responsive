module.exports = {
  content: ["./*.html"],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        colorPrimary: "#134074",
        colorPrimaryLight: "#8da9c4",
        colorPrimaryDark: "#0b2545",
        colorPrimaryDark2: "#13315c",
        colorPrimaryLight2: "#eef4ed",
        colorGreyDark: "#777",
        colorWhite: " #fff",
        colorBlack: "#000",
      },
      fontFamily:{
        sans:['League Spartan','sans-serif'],
      }
    },
  },
  plugins: [],
};
