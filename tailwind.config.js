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
        // header footer
        "primary":"#011936",
        // button color , highlight color 
        "secondary": "#F9DC5C",
        // background color
        "bg-base-100":"#F4FFFD",
        // text color
        "neutral": "#FFFFFF",

        "neutral-content": "#000000",
        "accent": "#465362",

      },

      light: {

        "primary": "#004C3F",

        "secondary": "#008C71",

        "accent": "#008C71",

        "neutral": "#000000",
  
        "neutral-content": "#FFFFFF",


        "info": "#333333",

        "success": "#FFD700",
      },
    },],
  },
  plugins: [require("daisyui")],
}

