/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        circles: "url('src/assets/home/desktop/pattern-circles.svg')",
        "hero-mobile": "url('src/assets/home/mobile/image-header.jpg')",
        "showcase-speaker-mobile":
          "url(src/assets/home/mobile/image-speaker-zx7.jpg)",
      },
      translate: {
        dialog: "calc(100% + 1.5rem)",
      },
    },
  },
  plugins: [],
};
