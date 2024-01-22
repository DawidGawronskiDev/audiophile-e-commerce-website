/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
        tablet: "768px",
        mobile: "375px",
      },
      colors: {
        orange: {
          900: "#D87D4A",
          800: "#fbaf85",
        },
        black: {
          900: "#000000",
          800: "#101010",
        },
        grey: {
          900: "#F1F1F1",
          800: "#FAFAFA",
        },
        white: {
          900: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
