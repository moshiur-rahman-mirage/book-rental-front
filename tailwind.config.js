/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  // darkMode: "class",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      light: {

        "primary": "#7286D3",

        "secondary-light": "#E5E0FF",

        "secondary-dark": "#8EA7E9",

        "neutral": "#FFFFFF",

        "neutral-light": "#F7F7F7",

        "accent": "#FFF2F2",
      },
      dark: {

        "primary": "#004C3F",

        "secondary-light": "#008C71",

        "secondary-dark": "#008C71",

        "neutral": "#000000",

        "neutral-light": "#333333",

        "accent": "#FFD700",
      },
    },],
  },
  plugins: [require("daisyui")],
}

