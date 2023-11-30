import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { I as ImagePropType, C as CM, T as Text, a as Title } from "../chunks/chunk-7cdbbd50.js";
import { T as TextPassed } from "../chunks/chunk-b34aa270.js";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { L as LineMotionText, S as SvgLine } from "../chunks/chunk-306a8888.js";
import { u as useCssTheme } from "../chunks/chunk-3fce2c11.js";
import { P as PageTitle } from "../chunks/chunk-179a626f.js";
import { S as ScrollSign } from "../chunks/chunk-c88ec850.js";
import "clsx";
import "tailwind-merge";
import "gsap";
import "tailwindcss/resolveConfig.js";
import "../chunks/chunk-7ed0b246.js";
const container = "_container_170gz_1";
const pen_line = "_pen_line_170gz_23";
const styles$1 = {
  container,
  pen_line
};
gsap.registerPlugin(ScrollTrigger);
function ContentsSummary({ title, description, paragraph, className = null }) {
  return /* @__PURE__ */ jsxs("div", { className: CM("card flex flex-col gap-y-25 md:gap-y-30", className), children: [
    /* @__PURE__ */ jsx(Title, { className: "text-heading-10 md:text-heading-8", tagName: "strong", children: title }),
    /* @__PURE__ */ jsx(Text, { className: "text-[4.6rem] leading-[5.4rem] md:text-heading-4", children: description }),
    /* @__PURE__ */ jsx(Text, { className: "mt-5 md:mt-20 text-body-7-kr md:text-body-5-kr", tagName: "p", children: paragraph })
  ] });
}
ContentsSummary.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  paragraph: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string
};
function Image({
  url,
  classes = { container: "aspect-[365/274] md:aspect-[365/274]", image: null },
  meta = { alt: "" }
}) {
  const { md, mobile } = useCssTheme((state) => state.screens);
  return /* @__PURE__ */ jsxs("picture", { className: CM(classes.container), children: [
    /* @__PURE__ */ jsx("source", { media: `(max-width:${mobile.max})`, srcSet: `${url}-m.webp` }),
    /* @__PURE__ */ jsx("source", { media: `(min-width:${md})`, srcSet: `${url}.webp` }),
    /* @__PURE__ */ jsx("img", { className: CM(classes.image), src: `${url}-m.webp`, alt: meta.alt })
  ] });
}
Image.propTypes = {
  ...ImagePropType,
  classes: PropTypes.shape({
    container: PropTypes.string,
    image: PropTypes.string
  })
};
function HorizonScrollContents() {
  const wrap = useRef(null);
  const { md } = useCssTheme((state) => state.screens);
  useEffect(() => {
    if (null == wrap.current)
      return;
    const mm = gsap.matchMedia();
    mm.add(
      `(min-width:${md})`,
      (context) => {
        const { matches } = context.conditions;
        console.log("desktop", matches);
        const scrollContainer = wrap.current.children[0];
        if (!scrollContainer)
          return;
        const scrollWidth = () => scrollContainer.scrollWidth - window.innerWidth;
        const to = {
          x: () => scrollWidth() * -1,
          duration: 3,
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            // start: () => {
            //   const header = document.getElementById("header");
            //   if (!header) return `top top`;
            //   // let headerBottom = null;
            //   // const observer = new ResizeObserver(entries => {
            //   //   const [entry] = entries;
            //   //   headerBottom = Math.round(entry.contentRect.bottom);
            //   //   console.log(headerBottom);
            //   // });
            //   // observer.observe(header);
            //   const { bottom: contentsTop } = header.getBoundingClientRect();
            //   return `top ${contentsTop}px`;
            // },
            start: "top top",
            end: () => `+=${scrollWidth()}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            markers: true
          }
        };
        gsap.to(scrollContainer, to);
      },
      wrap
    );
    mm.add(
      `(min-width:${md})`,
      (context) => {
        const images = gsap.utils.toArray("img");
        if (0 === images.length)
          return;
        images.map((image, index) => {
          if (3 < index)
            return;
          const parent = image.parentElement;
          if (!parent)
            return;
          const imageWidth = () => window.innerWidth * 0.65;
          context.add(
            `spread${index + 1}`,
            () => gsap.fromTo(
              image,
              {
                css: {
                  position: "relative",
                  transform: `rotate(${index * 1.4 * -1}deg)`,
                  maxWidth: () => `${imageWidth()}px`,
                  left: () => `${window.innerWidth * 0.5 - imageWidth() * 0.5 - parent.getBoundingClientRect().x}px`,
                  top: () => `${window.innerHeight * 0.5 - parent.getBoundingClientRect().height * 0.5 - parent.getBoundingClientRect().y}px`
                }
              },
              {
                css: {
                  maxWidth: "100%",
                  position: "relative",
                  left: 0,
                  top: 0,
                  transform: `rotate(0deg)`
                },
                duration: 0.75,
                scrollTrigger: {
                  trigger: wrap.current,
                  start: "-50%, 20%",
                  end: "-15% 20%",
                  scrub: true,
                  invalidateOnRefresh: true
                  // markers: {
                  //   startColor: "steelblue",
                  //   endColor: "steelblue",
                  //   fontSize: "20px",
                  //   indent: 10,
                  // },
                }
              }
            )
          );
          context[`spread${index + 1}`]();
        });
      },
      wrap
    );
    const cleanUp = () => {
      mm.revert();
    };
    return cleanUp;
  }, [md]);
  return /* @__PURE__ */ jsx("div", { ref: wrap, className: "scroll-wrap | ", children: /* @__PURE__ */ jsxs("div", { className: CM(styles$1.container, "scroll-container", "mobile:gap-100"), children: [
    /* @__PURE__ */ jsx("section", { className: "mobile:hidden", children: /* @__PURE__ */ jsx(Image, { url: "/images/thej-careers-hz-img01" }) }),
    /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-y-60 md:gap-y-110", children: [
      /* @__PURE__ */ jsx(Image, { classes: { container: "mobile:pr-[--grid-container-margin]" }, url: "/images/thej-careers-hz-img02" }),
      /* @__PURE__ */ jsx(
        ContentsSummary,
        {
          className: "mobile:px-[--grid-container-margin] md:pl-50",
          title: "UX UI Planner",
          description: "Various ideas, Strategic Plan",
          paragraph: "비즈니스 분석은 정확하고 Precise하게 아이디어 발산은 다양하고 Flexible하게 프로젝트 진행에 합리적인 일정관리와 기획 설계를 진행합니다."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-y-60 md:gap-y-110", children: [
      /* @__PURE__ */ jsx(Image, { classes: { container: "mobile:pl-[--grid-container-margin]" }, url: "/images/thej-careers-hz-img03" }),
      /* @__PURE__ */ jsx(
        ContentsSummary,
        {
          className: "mobile:px-[--grid-container-margin]",
          title: "UX UI Designer",
          description: "UX experience, creative design ",
          paragraph: "크리에이티브 디자인부터 SI와 영상까지 다양한 도메인에 대한 디자인 경험을 보유하고 있으며 최신 트렌드 기술에 적합한 UX-UI 디자인을 진행합니다."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-y-60 md:gap-y-110", children: [
      /* @__PURE__ */ jsx(Image, { classes: { container: "mobile:pr-[--grid-container-margin]" }, url: "/images/thej-careers-hz-img04" }),
      /* @__PURE__ */ jsx(
        ContentsSummary,
        {
          className: "mobile:px-[--grid-container-margin]",
          title: "Front-end Developer",
          description: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Various frameworks",
            " ",
            /* @__PURE__ */ jsx(LineMotionText, { styleId: "circle/16.up", extendLineStyle: styles$1.pen_line, children: "technologies" })
          ] }),
          paragraph: "프론트엔드 기술 적용과 최신 기술 트렌드에 필요한 모든 작업을 수행합니다. 크리에이티브에 필요한 스크립트 기술과 백엔드 영향도까지 커버 가능한 실력을 보유하고 있습니다."
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { className: "w-full", children: /* @__PURE__ */ jsx(Image, { url: "/images/thej-careers-hz-img05" }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(Text, { className: "text-heading-1", children: [
      "The different",
      /* @__PURE__ */ jsx("br", {}),
      "ones making ",
      /* @__PURE__ */ jsx("br", {}),
      "the real",
      /* @__PURE__ */ jsx(SvgLine, { shape: "typo/difference" })
    ] }) })
  ] }) });
}
const page_header = "_page_header_1f8bv_1";
const styles = {
  page_header
};
const documentProps = {
  title: "🥰 Careers",
  description: `this is a Careers page.`,
  pageId: "/career"
};
function Page() {
  return /* @__PURE__ */ jsx("div", { className: "careers", children: /* @__PURE__ */ jsxs("div", { className: "page-contents-wrap", children: [
    /* @__PURE__ */ jsxs("div", { role: "region", className: CM(styles.page_header, "mobile:px-[--grid-container-margin]"), children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: CM("flex", {
            "items-start": true,
            "md:items-center": false
          }),
          children: /* @__PURE__ */ jsx(
            PageTitle,
            {
              layoutId: "careers",
              title: ["Different people", "come together and", "move in one direction"],
              description: {
                text: "Projects are people-centered, and the results shine because people come together.",
                transform: "프로젝트는 사람이 중심이며 그 결과물이 빛나는 이유는 함께하는 사람들이 있기 때문입니다."
              }
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(ScrollSign, { text: "See our job openings" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "overflow-hidden w-screen", children: [
      /* @__PURE__ */ jsx(TextPassed, { text: "Meet our team", size: 20, runDirection: "left" }),
      /* @__PURE__ */ jsx("div", { className: "px-[--grid-container-margin] mt-60 mb-100 md:mt-140 md:mb-208", children: /* @__PURE__ */ jsxs("div", { className: "md:grid md:grid-cols-12 md:gap-[--grid-col-gap]", children: [
        /* @__PURE__ */ jsx(Text, { tagName: "p", className: "md:col-span-6 md:col-start-6 text-heading-10 md:text-heading-6", children: "We create high-performance outcomes with usability and design that everyone can relate to." }),
        /* @__PURE__ */ jsx(
          Text,
          {
            tagName: "p",
            className: "md:col-span-6 md:col-start-6 text-body-6-kr md:text-body-5-kr mt-30 md:mt-50",
            children: "우리는 누구나 공감할 수 있는 사용성과 디자인으로 하이 퍼포먼스의 결과물을 만들어갑니다."
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(HorizonScrollContents, {})
    ] })
  ] }) });
}
export {
  Page,
  documentProps
};
