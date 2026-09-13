/** @type {import('tailwindcss').Config} */
import {fontFamily} from "tailwindcss/defaultTheme"
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:["Vazirmatn",...fontFamily.sans]
      }
    },
  },
  plugins: [],
}

