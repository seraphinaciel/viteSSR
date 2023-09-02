const commonStyle = {
  copies: {
    fontWeight: 400,
    letterSpace: "-0.002em",
  },
};

const fontSizeRange = (value) => {
  const minFontSize = 12;
  const maxFontSize = Math.round(Number(value.split("rem")[0] * 100 * 1 * 0.1));
  // const max = Math.round(Number(value.split("rem")[0] * 100 * 1.3 * 0.1));
  return `min(max(${value}, ${minFontSize}px), ${maxFontSize}px)`;
};

export default {
  content: [
    "./renderer/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // device
      gx: "360px",
      ip: "414px",
      // size
      mi: "280px",
      xs: "320px",
      sm: "480px",
      md: "720px",
      lg: "1080px",
      xl: "1440px",
      mx: "1920px",
      // size:over canvas
      wd: "2560px",
      ud: "3840px",
      // breakpoint
      smart: { max: "414px" },
      // mobile: { min: "0px", max: "720px" },
      // tablet: { min: "721px", max: "1440px" }, // include laptop
      // desktop: { min: "1441px", max: "1920px" },
      // over: {
      //   DEFAULT: { min: "1921px", max: "2560px" },
      //   mx: { min: "1921px" },
      //   wd: { min: "2561px" },
      // },
      // mobile: { min: "0px" },
      tablet: { min: "721px" }, // include laptop
      desktop: { min: "1441px" },
      over: {
        DEFAULT: { min: "1921px" },
        wd: { min: "2561px" },
      },
    },
    // --- override [end] ---
    extend: {
      letterSpacing: {
        standard: "-0.002em",
      },
      fontFamily: {
        all: ["Poppins", "Pretendard Variable", "sans-serif"],
        pretendard: ["Pretendard Variable", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        base: {
          1: "#333333",
          2: "#999999",
          3: "#CCCCCC",
        },
        bg: {
          dark: "#1A1A1A",
          light: "#F7F7F7",
        },
        line: {
          light: "#DDDDDD",
        },
        cursor: "#DA1E1E",
      },
      fontSize: {
        special: [
          fontSizeRange("20rem"),
          { ...commonStyle.copies, lineHeight: 1 },
        ],
        "heading-1": [
          fontSizeRange("13rem"),
          { ...commonStyle.copies, lineHeight: "18rem" },
        ],
        "heading-2": [
          fontSizeRange("11rem"),
          { ...commonStyle.copies, lineHeight: "18rem" },
        ],
        "heading-3": [
          fontSizeRange("6.4rem"),
          { ...commonStyle.copies, lineHeight: 1 },
        ],
        "heading-4": [
          fontSizeRange("6rem"),
          { ...commonStyle.copies, lineHeight: "7.5rem" },
        ],
        "heading-5": [
          fontSizeRange("5rem"),
          { ...commonStyle.copies, lineHeight: "6rem" },
        ],
        "heading-6": [
          fontSizeRange("3.6rem"),
          { ...commonStyle.copies, lineHeight: "4.8rem" },
        ],
        "heading-7": [
          fontSizeRange("3rem"),
          { ...commonStyle.copies, lineHeight: "4rem" },
        ],
        "heading-8": [
          fontSizeRange("2.6rem"),
          { ...commonStyle.copies, lineHeight: "3.8rem" },
        ],
        "heading-9": [
          fontSizeRange("2.4rem"),
          { ...commonStyle.copies, lineHeight: "3.2rem" },
        ],
        "heading-10": [
          fontSizeRange("2rem"),
          { ...commonStyle.copies, lineHeight: "3rem" },
        ],
        "body-1": [
          fontSizeRange("1.8rem"),
          { ...commonStyle.copies, lineHeight: "2.8rem" },
        ],
        "body-2": [
          fontSizeRange("1.6rem"),
          { ...commonStyle.copies, lineHeight: "2.6rem" },
        ],
        "body-3": [
          fontSizeRange("1.5rem"),
          { ...commonStyle.copies, lineHeight: "2.4rem" },
        ],
        "heading-1-kr": [
          fontSizeRange("4.8rem"),
          { ...commonStyle.copies, lineHeight: "6.2rem" },
        ],
        "body-1-kr": [
          fontSizeRange("3.6rem"),
          { ...commonStyle.copies, lineHeight: "5rem" },
        ],
        "body-2-kr": [
          fontSizeRange("2.8rem"),
          { ...commonStyle.copies, lineHeight: "3.8rem" },
        ],
        "body-3-kr": [
          fontSizeRange("2.4rem"),
          { ...commonStyle.copies, lineHeight: "4rem" },
        ],
        "body-4-kr": [
          fontSizeRange("2.4rem"),
          { ...commonStyle.copies, lineHeight: "3.6rem" },
        ],
        "body-5-kr": [
          fontSizeRange("2rem"),
          { ...commonStyle.copies, lineHeight: "3.2rem" },
        ],
        "body-6-kr": [
          fontSizeRange("1.8rem"),
          { ...commonStyle.copies, lineHeight: "3rem" },
        ],
        "body-7-kr": [
          fontSizeRange("1.6rem"),
          { ...commonStyle.copies, lineHeight: "2.6rem" },
        ],
      },
    },
  },
  variants: {
    extend: {
      textStyle: ["heading"],
    },
  },
  plugins: [
    // plugin((...args) => {
    // 	console.log("plugin/args", args);
    // }),
  ],
};
