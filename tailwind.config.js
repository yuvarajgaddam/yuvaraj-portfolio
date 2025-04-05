module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
    extend: {
      colors: {
        bglight: "#F9FAFB",
        marrslight: "#1C9A9A",
        marrsyellow: "#FFFFFF",
        marrsdark: "#004D4D",
        cardlight: "#EFF3F3",
        
        // bgdark: "#2D2D2D",
        bgdark: "#16222B",
        carrilight: "#57DCB4",
        carriyellow: "#FFFF00",
        carridark: "#00835B",
        // carddark: "#383838",
        carddark: "#22323F",
        textlight: "#F9FAFB",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
