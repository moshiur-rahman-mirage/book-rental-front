/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  // darkMode: "class",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      dark: {

        "secondary": "#7286D3",

        "primary": "#5064B5",

        "info": "#8EA7E9",

        "neutral": "#FFFFFF",

        "success": "#F7F7F7",
        "error":"#000000",
        "accent": "#A08C54",
        "warning":"#F5C22F"
      },

      light: {

        "primary": "#004C3F",

        "secondary": "#008C71",

        "accent": "#008C71",

        "neutral": "#000000",
  
        "error": "#FFFFFF",


        "info": "#333333",

        "success": "#FFD700",
      },
    },],
  },
  plugins: [require("daisyui")],
}

