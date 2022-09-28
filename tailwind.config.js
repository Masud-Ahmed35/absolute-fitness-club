/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6ee0ef",

          "secondary": "#e24a9e",

          "accent": "#d17fe8",

          "neutral": "#211D35",

          "base-100": "#FCFCFD",

          "info": "#93DDF6",

          "success": "#1DB970",

          "warning": "#E99425",

          "error": "#E57561",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
