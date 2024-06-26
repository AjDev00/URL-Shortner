/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        shortenBgImage: "url('/src/assets/images/bg-shorten-mobile.svg')",
        boostBgImage: "url('/src/assets/images/bg-boost-mobile.svg')",
      },
    },
  },
  plugins: [],
};
