export default {
  content: [
    "./renderer/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "IBM Plex Sans KR", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
};
