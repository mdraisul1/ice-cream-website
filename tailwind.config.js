/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./dist/**/*.js"],
  theme: {
    extend: {
      colors:{
        link: "#E10914",
        primary: "#FFF3E1",
        secondary: "#FFE4E9",
        success: "#FFEDBA",
        accent: "#EAD6C0",
      },
      container:{
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        "play-ball": ["Playball", "serif"],
        "dm-sans": ["DM Sans", "serif"],
      },
    },
  },
  plugins: [],
}
