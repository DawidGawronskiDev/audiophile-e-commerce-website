/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('src/assets/home/mobile/image-header.jpg')",
      },
    },
  },
  plugins: [],
};
