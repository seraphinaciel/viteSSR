import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useCallback, useState } from "react";
import { a as Title, C as CM, T as Text } from "../chunks/chunk-7cdbbd50.js";
import { W as Word, b as animationConfigSet } from "../chunks/chunk-306a8888.js";
import { T as TextPassed } from "../chunks/chunk-b34aa270.js";
import { S as SvgIcons } from "../chunks/chunk-b4f4ac85.js";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { V as Video } from "../chunks/chunk-a2878275.js";
import { P as PageTitle } from "../chunks/chunk-179a626f.js";
import { u as useCssTheme } from "../chunks/chunk-3fce2c11.js";
import "clsx";
import "tailwind-merge";
import "gsap";
import "tailwindcss/resolveConfig.js";
gsap.registerPlugin(ScrollTrigger);
const arrange = {
  target: {
    start: "top",
    end: "bottom"
  },
  viewport: {
    start: "top",
    end: "top"
  }
};
const clipMap = {
  bigger: ["inset(40%)", "inset(0%)"],
  smaller: ["inset(0%)", "inset(40%)"]
};
function MotionBox({ id, src, children }) {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: `${arrange.target.start} ${arrange.viewport.start}`,
          end: `${arrange.target.end} ${arrange.viewport.end}`,
          pin: true,
          anticipatePin: 1,
          scrub: true
          // markers: true,
        }
      });
      const [clipStart, clipEnd] = clipMap[id];
      const stream = [
        // 순서 변경 x
        {
          id: 0,
          animate: "fromTo",
          params: [
            ".motion-video",
            { webkitClipPath: clipStart, clipPath: clipStart },
            {
              webkitClipPath: clipEnd,
              clipPath: clipEnd,
              duration: 14,
              ease: "none"
              // == linear
            }
          ]
        },
        {
          id: 1,
          animate: "fromTo",
          params: [".motion-contents", { y: "50vh" }, { y: "0vh", duration: 5 }, "<+15"]
        },
        {
          id: 2,
          animate: "to",
          params: [".motion-video", { opacity: 0, duration: 10, display: "none" }]
        }
      ];
      stream.forEach((set, index) => {
        if (index !== set.id)
          return;
        if (null == set.condition)
          return tl[set.animate](...set.params);
        if (set.condition)
          tl[set.animate](...set.params);
      });
    }, containerRef);
    return () => {
      ctx.revert();
    };
  }, [id]);
  return /* @__PURE__ */ jsxs("section", { ref: containerRef, className: "h-screen flex flex-col items-center justify-center bg-slate-200 mb-10", children: [
    children,
    /* @__PURE__ */ jsx("div", { className: "motion-video | relative w-full h-full bg-orange-400", children: /* @__PURE__ */ jsx(Video, { src }) })
  ] });
}
MotionBox.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  children: PropTypes.node
};
const title = "_title_1x97q_9";
const head = "_head_1x97q_15";
const font = "_font_1x97q_23";
const color = "_color_1x97q_41";
const table = "_table_1x97q_57";
const styles = {
  title,
  head,
  font,
  color,
  table
};
const fontGroup = [
  "text-special",
  "text-heading-1",
  "text-heading-2",
  "text-heading-3",
  "text-heading-4",
  "text-heading-5",
  "text-heading-6",
  "text-heading-7",
  "text-heading-8",
  "text-heading-9",
  "text-heading-10",
  "text-body-1",
  "text-body-2",
  "text-body-3",
  "text-body-16-24",
  "text-heading-1-kr",
  "text-body-1-kr",
  "text-body-2-kr",
  "text-body-3-kr",
  "text-body-4-kr",
  "text-body-5-kr",
  "text-body-6-kr",
  "text-body-7-kr"
];
const fontColorGroup = [
  // "text-cursor",
  "text-white",
  "text-black",
  "text-base-1",
  "text-base-2",
  "text-base-3"
  // bg
  // "text-bg-dark",
  // "text-bg-light",
  // border
  // "text-line-light",
];
function Guide() {
  const { fontSize, colors } = useCssTheme((state) => state);
  const fontStyle = {
    ...Object.entries(fontSize).reduce((a, s) => {
      const [keyname, value] = s;
      if (keyname.indexOf("special") < 0 && keyname.indexOf("heading") < 0 && keyname.indexOf("body") < 0)
        return a;
      a[`${keyname}`] = value;
      return a;
    }, {})
  };
  const palette = {
    cursor: colors.cursor,
    white: colors.white,
    black: colors.black,
    ...Object.entries(colors.base).reduce((acc, set) => {
      acc[`base-${set[0]}`] = set[1];
      return acc;
    }, {}),
    ...Object.entries(colors.bg).reduce((acc, set) => {
      acc[`bg-${set[0]}`] = set[1];
      return acc;
    }, {}),
    ...Object.entries(colors.line).reduce((acc, set) => {
      acc[`line-${set[0]}`] = set[1];
      return acc;
    }, {})
  };
  const ref = useCallback(() => {
  }, []);
  const [rolling, setRolling] = useState({
    text: "Soundrise",
    direction: "left",
    duration: 100
  });
  const onToggleRollingDirection = () => {
    setRolling((prev) => {
      return {
        ...prev,
        direction: prev.direction === "left" ? "right" : "left"
      };
    });
  };
  const onApplyRollingState = () => {
    const text = document.getElementById("rolling-text").value;
    const duration = document.getElementById("rolling-duration").value;
    setRolling((prev) => {
      return {
        ...prev,
        text: text.length < 10 ? prev.text : text,
        duration: duration === "" || parseInt(duration, 10) === 0 ? prev.duration : duration
      };
    });
  };
  const [font2, setFont] = useState(fontGroup[0]);
  const [fontColor, setFontColor] = useState(fontColorGroup[0]);
  const [boxWidth, setBoxWidth] = useState("auto");
  const [mode, setMode] = useState("dark");
  const [ellipsis, setEllipsis] = useState(true);
  console.log("boxWidth", boxWidth);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { ref, children: [
    /* @__PURE__ */ jsx(Title, { className: "text-heading-1 mb-50", children: "Style Guide" }),
    /* @__PURE__ */ jsxs("section", { className: styles.font, children: [
      /* @__PURE__ */ jsx(Title, { tagName: "strong", className: styles.head, children: "Font & Color" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-1 flex flex-wrap gap-x-[--grid-col-gap] gap-y-14 ml-auto text-heading-10 mt-30", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: CM("border border-solid border-blue-300 rounded-[10px] p-10", {
              "bg-blue-300": ellipsis
            }),
            type: "button",
            onClick: () => {
              setEllipsis((prev) => !prev);
            },
            children: `말줄임 : ${ellipsis ? "활성" : "비활성"}`
          }
        ),
        /* @__PURE__ */ jsx(
          "select",
          {
            className: "border border-solid border-blue-300 rounded-[10px] p-10",
            name: "font",
            id: "font-options",
            onChange: (event) => setFont(event.currentTarget.value),
            children: Object.keys(fontStyle).map((name, index) => {
              const className = fontGroup[index];
              return /* @__PURE__ */ jsx("option", { type: "button", value: className, children: name }, name);
            })
          }
        ),
        /* @__PURE__ */ jsx(
          "select",
          {
            className: "border border-solid border-blue-300 rounded-[10px] p-10",
            name: "colors",
            id: "color-options",
            onChange: (event) => setFontColor(event.currentTarget.value),
            children: Object.keys(palette).filter((key) => !key.match(/bg|line|cursor/gi)).map((name, index) => {
              const className = fontColorGroup[index];
              return /* @__PURE__ */ jsxs("option", { type: "button", value: className, children: [
                name,
                " : ",
                palette[name]
              ] }, name);
            })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-x-[--grid-col-gap] items-center", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "font-box-width", children: "텍스트 상자 크기" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "border border-solid border-blue-300 rounded-[10px] p-10",
              type: "text",
              id: "font-box-width",
              onKeyDown: (event) => {
                if (event.key !== "Enter")
                  return;
                setBoxWidth(parseInt(event.currentTarget.value));
              },
              placeholder: "px 단위로 입력해주세요."
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "p",
        {
          style: {
            maxWidth: `${boxWidth * 0.1}rem`
          },
          className: `${font2} ${CM(
            fontColor,
            {
              "bg-black": mode === "dark" || fontColor === "text-white",
              "bg-white": mode === "light" || fontColor !== "text-white",
              "border-y-2 border-red-700": true,
              "overflow-hidden text-ellipsis whitespace-nowrap": ellipsis
            },
            "mt-30 w-full"
          )}`,
          children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptate?"
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: "block text-body-5-kr mt-5 mb-15", children: "* 빨간 테두리가 텍스트 상자의 높이 가늠선입니다." })
    ] }),
    /* @__PURE__ */ jsx(Title, { tagName: "h2", className: CM(styles.head, "mt-100 mb-30"), children: "Component" }),
    /* @__PURE__ */ jsxs("section", { className: "w-screen", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-heading-10", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-y-12", children: /* @__PURE__ */ jsxs("dl", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-4", children: [
            /* @__PURE__ */ jsx("dt", { children: "컴포넌트 이름 : " }),
            /* @__PURE__ */ jsx("dd", { children: "TextPassed" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-x-4 mt-14", children: [
            /* @__PURE__ */ jsx("dt", { children: "조정 옵션" }),
            /* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ jsxs("ul", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("li", { children: `방향 : Left | Right` }),
              /* @__PURE__ */ jsx("li", { children: "속도 : 0 ~ 500 " })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap flex-row gap-[--grid-col-gap] gap-y-14 mt-14 mobile:text-body-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] mobile:min-w-full", children: [
            /* @__PURE__ */ jsx("label", { className: "pr-4", htmlFor: "rolling-duration", children: "속도" }),
            " ",
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "px-10 py-4 rounded-[7px]",
                id: "rolling-duration",
                placeholder: `현재 속도는 ${rolling.duration}입니다.`
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] mobile:min-w-full", children: [
            /* @__PURE__ */ jsx("label", { className: "pr-4", htmlFor: "rolling-text", children: "텍스트 입력" }),
            " ",
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "px-10 py-4 rounded-[7px]",
                id: "rolling-text",
                placeholder: "8자 이상 입력",
                minLength: 8
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] md:order-4 mobile:flex-1",
              onClick: onApplyRollingState,
              children: "적용"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] md:order-1 mobile:flex-1",
              onClick: onToggleRollingDirection,
              children: "방향 전환"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap overflow-hidden md:pb-22 ", children: [
        /* @__PURE__ */ jsx(TextPassed, { text: rolling.text, runDirection: rolling.direction }),
        /* @__PURE__ */ jsx(TextPassed, { text: rolling.text, runDirection: rolling.direction === "left" ? "right" : "left" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "layout_text_box", children: [
      /* @__PURE__ */ jsx(Title, { tagName: "strong", className: styles.title, children: "Fade motion" }),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx(Title, { className: "text-heading-8", children: "Our Philosophy" }),
        /* @__PURE__ */ jsx(
          Word,
          {
            className: "title_p",
            content: "We respect the thoughts of people who grew up in different environments. Making my thoughts and other people's thoughts together The beginning is The J's creative momentum.",
            location: "respect",
            styleId: "circle/8.up",
            color: "red",
            animationConfig: animationConfigSet.description,
            animationType: "fade up"
          }
        ),
        /* @__PURE__ */ jsx(
          Word,
          {
            className: "basic_p_2",
            content: "우리는 서로 다른 환경에서 자란 사람들의 생각을 존중합니다. 나의 생각과 다른 사람들의 생각을 함께 만들어가는 것 그 시작이 더제이의 크리에이티브 모멘텀입니다.",
            animationConfig: animationConfigSet.description,
            animationType: "fade in"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx(Title, { tagName: "strong", className: styles.title, children: "Page Header" }),
      /* @__PURE__ */ jsx("div", { role: "region", className: "mobile:px-[--grid-container-margin]", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: CM("flex", {
            "items-start": true,
            "md:items-center": false
          }),
          children: /* @__PURE__ */ jsx(
            PageTitle,
            {
              title: ["We are focusing on", "creative design", "and technical work"],
              description: {
                text: "As technology develops, the combination of UX design and technology will be our powerful force.",
                transform: "기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될 것이라고 믿습니다."
              }
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx(Title, { tagName: "strong", className: styles.title, children: "#smaller, #bigger" }),
      /* @__PURE__ */ jsx(MotionBox, { id: "smaller", src: "https://www.w3schools.com/tags/movie.mp4" }),
      /* @__PURE__ */ jsx(MotionBox, { id: "bigger", src: "https://www.w3schools.com/tags/movie.mp4" })
    ] }),
    /* @__PURE__ */ jsx(Title, { tagName: "strong", className: styles.title, children: "SVG (SvgLine.jsx)" }),
    /* @__PURE__ */ jsx(Title, { tagName: "strong", className: styles.title, children: "SVG (SvgIcons.jsx)" }),
    /* @__PURE__ */ jsxs("section", { className: "flex gap-10", children: [
      /* @__PURE__ */ jsx(Text, { className: "text-heading-8", children: "SvgIcons .basic .big1~2" }),
      /* @__PURE__ */ jsx(SvgIcons, { types: "basic", color: "pink" }),
      /* @__PURE__ */ jsx(SvgIcons, { types: "big1", color: "hotpink" }),
      /* @__PURE__ */ jsx(SvgIcons, { types: "big2" })
    ] })
  ] }) });
}
const documentProps = {
  title: "😁 index",
  description: `this is a index page.`
};
function Page() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Guide, {}) });
}
export {
  Page,
  documentProps
};
