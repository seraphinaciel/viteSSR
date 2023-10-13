const commonStyle = {
  copies: {
    fontWeight: 400,
    letterSpacing: "-0.002em",
  },
};
const configFontStyle = (size, lineHeight) => {
  const minFontSize = 12;
  const maxLimitRatio = 1.2;
  const maxFontSize = Math.round(Number(size.split("rem")[0] * 100 * maxLimitRatio * 0.1));
  const fontSize = `min(max(${size}, ${minFontSize}px), ${maxFontSize}px)`;
  return [fontSize, { ...commonStyle.copies, lineHeight }];
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
      // size
      mi: "320px",
      sm: "480px",
      md: "768px",
      lg: "1080px",
      xl: "1440px",
      mx: "1920px",
      // size:over canvas
      wd: "2560px",
      ud: "3840px",
      // breakpoint
      smart: { max: "414px" },
      mobile: { max: "767px" },
      tablet: { min: "768px", max: "1440px" }, // include laptop
      desktop: { min: "1441px" },
      over: {
        DEFAULT: { min: "1921px" },
        wd: { min: "2561px" },
      },
    },
    // --- override [end] ---
    extend: {
      modal: {
        toggle: ["overflow-hidden", "relative"],
      },
      spacing: (maxSize => {
        let result = { 1: "0.1rem" };
        for (let i = 1; i <= maxSize; i++) {
          result[i] = `${i * 0.1}rem`;
        }
        return result;
      })(999),
      zIndex: (levels => {
        return Object.assign(
          {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
          },
          levels.reduce((acc, lv) => {
            acc[`${lv}`] = lv;
            return acc;
          }, {}),
        );
      })([5, 10, 20, 30, 40, 50, 100, 200, 500, 1000]),
      mode: {
        light: {
          fore: "black",
          back: "white",
          class: {
            bg: "bg-white",
            text: "text-black",
          },
        },
        dark: {
          fore: "white",
          back: "black",
          class: {
            bg: "bg-black",
            text: "text-white",
          },
        },
      },
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
          1: "#333",
          2: "#999",
          3: "#ccc",
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
        special: configFontStyle("20rem", 1),
        "heading-1": configFontStyle("13rem", "18rem"),
        "heading-2": configFontStyle("11rem", "18rem"),
        "heading-3": configFontStyle("6.4rem", 1),
        "heading-4": configFontStyle("6rem", "7.5rem"),
        "heading-5": configFontStyle("5rem", "6rem"),
        "heading-6": configFontStyle("3.6rem", "4.8rem"),
        "heading-7": configFontStyle("3rem", "4rem"),
        "heading-8": configFontStyle("2.6rem", "3.8rem"),
        "heading-9": configFontStyle("2.4rem", "3.2rem"),
        "heading-10": configFontStyle("2rem", "3rem"),
        "body-1": configFontStyle("1.8rem", "2.8rem"),
        "body-2": configFontStyle("1.6rem", "2.6rem"),
        "body-3": configFontStyle("1.5rem", "2.4rem"),
        "body-16-24": configFontStyle("1.6rem", "2.4rem"),
        "heading-1-kr": configFontStyle("4.8rem", "6.2rem"),
        "body-1-kr": configFontStyle("3.6rem", "5rem"),
        "body-2-kr": configFontStyle("2.8rem", "3.8rem"),
        "body-3-kr": configFontStyle("2.4rem", "4rem"),
        "body-4-kr": configFontStyle("2.4rem", "3.6rem"),
        "body-5-kr": configFontStyle("2rem", "3.2rem"),
        "body-6-kr": configFontStyle("1.8rem", "3rem"),
        "body-7-kr": configFontStyle("1.6rem", "2.6rem"),
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
