import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { C as CM, T as Text, a as Title } from "../chunks/chunk-DRcwvi6n.js";
import { W as Word } from "../chunks/chunk-Wb4zu5JQ.js";
import { S as SvgIcons } from "../chunks/chunk-pve8c4X-.js";
import { T as TextPassed } from "../chunks/chunk-GshQpoJ7.js";
import { P as PageTitle } from "../chunks/chunk-HGVQSNuh.js";
import { S as ScrollSign } from "../chunks/chunk-RuNReUVr.js";
import PropTypes from "prop-types";
import { u as useCssTheme } from "../chunks/chunk-P7vN87LO.js";
import "clsx";
import "tailwind-merge";
import "gsap";
import "../chunks/chunk-6b9tQcyh.js";
import "tailwindcss/resolveConfig.js";
gsap.registerPlugin(ScrollTrigger);
const contents$1 = [
  {
    class: "justify-self-center col-start-1 md:col-start-3 row-start-1 w-1/3",
    alt: "logo"
  },
  {
    class: "justify-self-end col-start-1 md:col-start-1 row-start-2 w-2/3",
    alt: "star"
  },
  {
    class: "justify-self-center col-start-1 md:col-start-2 row-start-3",
    alt: "the j"
  },
  {
    class: "justify-self-baseline col-start-3 md:col-start-10 row-start-1 w-2/3",
    alt: "logo 1"
  },
  {
    class: "justify-self-center col-start-3 md:col-start-12 row-start-2",
    alt: "star 1"
  },
  {
    class: "justify-self-baseline col-start-3 md:col-start-11 row-start-3 w-1/3",
    alt: "the j 1"
  }
];
function CircleBox({ className, children }) {
  const targetRef = useRef(null);
  const circleRef = useRef(null);
  const svgRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          toggleActions: "restart pause resume reverse",
          start: "top 0%",
          end: "+=100%",
          pin: true,
          scrub: true
        }
      });
      const h1 = circleRef.current.querySelector("h1");
      circleRef.current.style = `--height : ${h1.clientHeight}px`;
      const breakPoint = "(min-width: 768px)";
      const isMd = window.matchMedia(breakPoint).matches;
      tl.set("i", { clipPath: "circle(0% at 50% 50%)", display: "none" }).set(".svgIcons2", { opacity: 0 }, "<").set(svgRef.current, { top: isMd ? "-100px" : "" }, "<").to(svgRef.current, { top: isMd ? "0" : "" }, "<").to("i", { clipPath: "circle(100% at 50% 50%) ", display: "block", duration: 1, ease: "power1.in" }, "<").to(
        ".svgIcons1 path",
        {
          duration: 1,
          ease: "power1.in",
          stroke: "white"
        },
        "<"
      ).set(".svgIcons1", { opacity: 0, duration: 1 }, "<+=0.5").set(".svgIcons2", { opacity: 1, duration: 1 }, ">").to(".svgIcons2", { opacity: 0, duration: 1 }, ">");
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: circleRef.current,
          toggleActions: "restart pause resume reverse",
          start: "top 100%",
          end: "+=100%",
          scrub: true
        }
      });
      let moveX;
      if (isMd)
        moveX = 200;
      else
        moveX = 20;
      tl2.to(
        contents$1.slice(0, 3).map((_, index) => `#span_${index + 1}`),
        { x: moveX, delay: 2 },
        "<"
      ).to(
        contents$1.slice(3).map((_, index) => `#span_${index + 4}`),
        { x: -moveX, delay: 0 },
        "<"
      );
    }, targetRef);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: `${className}`, ref: targetRef, children: [
    /* @__PURE__ */ jsxs("p", { className: "", ref: svgRef, children: [
      /* @__PURE__ */ jsx(SvgIcons, { types: "basic", className: "svgIcons1 " }),
      /* @__PURE__ */ jsx(SvgIcons, { types: "big2", color: "white", className: "svgIcons2" })
    ] }),
    /* @__PURE__ */ jsx("article", { children: contents$1.map((con, index) => /* @__PURE__ */ jsx("span", { className: ` ${con.class}`, id: `span_${index + 1}`, children: /* @__PURE__ */ jsx("img", { src: `/images/person_${index + 1}.jpg`, alt: con.alt, className: "h-full mx-auto" }) }, index)) }),
    /* @__PURE__ */ jsxs("article", { ref: circleRef, className: "", children: [
      children,
      /* @__PURE__ */ jsx("i", { className: "w-full h-screen absolute bg-bg-dark" })
    ] })
  ] });
}
CircleBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
gsap.registerPlugin(ScrollTrigger);
function TextMove({ className, location, coord, children }) {
  const target = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      const sentence = target.current.querySelectorAll("span");
      const tl = gsap.timeline();
      const setAni = (index) => {
        const animProps = {
          opacity: 0
        };
        const isWidth = location[index] === "w";
        animProps[location[index]] = isWidth ? innerWidth * coord[index] : innerHeight * coord[index];
        tl.from(sentence[index], animProps);
      };
      for (let i = 0; i < sentence.length; i++) {
        setAni(i);
      }
      ScrollTrigger.create({
        animation: tl,
        trigger: target.current,
        start: "top 20%",
        // end: "+=100%",
        scrub: true,
        pin: true
        // anticipatePin: 1,
      });
    }, target);
    return () => ctx.revert();
  }, [location, coord]);
  return /* @__PURE__ */ jsx("article", { className, ref: target, children });
}
TextMove.propTypes = {
  location: PropTypes.array,
  coord: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node
};
gsap.registerPlugin(ScrollTrigger);
const AboutTitle = ({ className, conLeft, conRight }) => {
  const { md, mobile } = useCssTheme((state) => state.screens);
  const targetRef = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: targetRef.current,
        start: "top 50%",
        end: "+=100%",
        scrub: true
      }
    });
    const mm = gsap.matchMedia();
    mm.add(`(min-width:${md})`, () => {
      tl.to(".conLeft", { x: 0 }).to(".conRight", { x: 0 }, "<").to(".conLeft", { x: -100 }).to(".conRight", { x: 100 }, "<");
    });
    mm.add(
      `(max-width:${mobile.max})`,
      () => {
        tl.set(targetRef.current, { yPercent: 120 }, ">").set(".conLeft", { xPercent: 0, yPercent: 0, duration: 10 }, "+=10").set(".conRight", { xPercent: 0, yPercent: 0, duration: 10 }, "<").to(".conLeft", { xPercent: 50, yPercent: -280, duration: 10 }).to(".conRight", { xPercent: -50, yPercent: 0, duration: 10 }, "<");
      },
      targetRef
    );
    return () => mm.revert();
  }, [md, mobile]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("h1", { className: CM("text-heading-3 md:text-special capitalize", className), ref: targetRef, children: [
    /* @__PURE__ */ jsx("p", { className: "conLeft", children: conLeft }),
    /* @__PURE__ */ jsx("p", { className: "conRight ", children: conRight })
  ] }) });
};
AboutTitle.propTypes = {
  conLeft: PropTypes.string.isRequired,
  conRight: PropTypes.string.isRequired,
  className: PropTypes.string
};
gsap.registerPlugin(ScrollTrigger);
const items = [{ alt: "hyundai" }, { alt: "samsung" }, { alt: "lg" }, { alt: "genesis" }];
const SpreadImg = ({ className, children }) => {
  const { md, mobile } = useCssTheme((state) => state.screens);
  const targetRef = useRef(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(`(min-width:${md})`, () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 0%",
          end: "+=50%",
          toggleActions: "restart pause resume reverse",
          scrub: 0.01,
          pin: true
        }
      });
      tl.set(
        items.slice(0, 4).map((_, index) => `.item_${index + 1}`),
        { opacity: 1, scale: 1.25 },
        "<"
      ).from(
        ".item_1",
        {
          scale: 1.25,
          xPercent: 220,
          yPercent: 150
        },
        "<"
      ).from(
        ".item_2",
        {
          scale: 1.25,
          xPercent: -180,
          yPercent: 160
        },
        "<"
      ).from(".item_3", {
        scale: 1.25,
        xPercent: 170,
        yPercent: 60
      }).from(
        ".item_4",
        {
          scale: 1.25,
          xPercent: -190,
          yPercent: 80
        },
        "<"
      );
    });
    mm.add(
      `(max-width:${mobile.max})`,
      () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 0%",
            end: "+=100%",
            toggleActions: "restart pause resume reverse",
            scrub: 0.02,
            pin: true
          }
        });
        tl.set(
          items.slice(0, 4).map((_, index) => `.item_${index + 1}`),
          { opacity: 0 },
          "<"
        );
        tl.to(
          ".item_1",
          {
            xPercent: 20,
            yPercent: -50,
            opacity: 1,
            duration: 10
          },
          "<+=4"
        ).to(
          ".item_3",
          {
            xPercent: 100,
            yPercent: 0,
            opacity: 1,
            duration: 10,
            scale: 1.5
          },
          "<"
        ).to(
          ".item_1",
          {
            opacity: 0
          },
          ">+=4"
        ).to(
          ".item_3",
          {
            opacity: 0
          },
          "<"
        );
        tl.to(
          ".item_2",
          {
            xPercent: -100,
            yPercent: -10,
            duration: 10,
            opacity: 1
          },
          ">+=3"
        ).to(
          ".item_4",
          {
            xPercent: -50,
            yPercent: 60,
            opacity: 1,
            duration: 10,
            scale: 1.5
          },
          "<"
        ).to(
          ".item_4",
          {
            duration: 5,
            scale: 1
          },
          ">+2"
        );
      },
      targetRef
    );
    return () => mm.revert();
  }, [md, mobile]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { className, ref: targetRef, children: [
    /* @__PURE__ */ jsx("ol", { children: items.map((item, index) => /* @__PURE__ */ jsx("li", { className: `item_${index + 1}`, children: /* @__PURE__ */ jsxs("picture", { children: [
      /* @__PURE__ */ jsx("source", { srcSet: `/images/spread_${index + 1}.webp`, type: "image/webp" }),
      /* @__PURE__ */ jsx("source", { srcSet: `/images/spread_${index + 1}.jpg`, type: "image/jpeg" }),
      /* @__PURE__ */ jsx("img", { src: `/images/spread_${index + 1}.jpg`, alt: item.alt })
    ] }) }, index)) }),
    children
  ] }) });
};
SpreadImg.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
gsap.registerPlugin(ScrollTrigger);
function RecruitList({ className, children }) {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateElement = (element, animation2) => {
        gsap.fromTo(
          element.querySelector("h2"),
          {
            rotateX: animation2.rotateX[0],
            duration: 0.3,
            ease: "none"
          },
          {
            rotateX: animation2.rotateX[1],
            duration: 0.3,
            ease: "none"
          }
        );
        gsap.fromTo(
          element.querySelector(".box"),
          {
            opacity: animation2.opacity[0]
          },
          {
            opacity: animation2.opacity[1]
          }
        );
      };
      const applyAnimations = (box, animations2) => {
        ScrollTrigger.create({
          trigger: box,
          start: "top 50%",
          end: "+=" + box.offsetHeight,
          stagger: 0.01,
          markers: false,
          onEnter: () => animateElement(box, animations2.enter),
          onLeaveBack: () => animateElement(box, animations2.leaveBack),
          onLeave: () => animateElement(box, animations2.leave),
          onEnterBack: () => animateElement(box, animations2.enterBack),
          onUpdate: ScrollTrigger.refresh()
        });
      };
      const boxes = containerRef.current.querySelectorAll("article");
      const animations = {
        enter: { rotateX: ["-90deg", "0deg"], opacity: [0.5, 1] },
        leaveBack: {
          rotateX: ["0deg", "-90deg"],
          opacity: [1, 0.5]
        },
        leave: { rotateX: ["0deg", "90deg"], opacity: [1, 0.5] },
        enterBack: {
          rotateX: ["90deg", "0deg"],
          opacity: [0.5, 1]
        }
      };
      boxes.forEach((box) => {
        applyAnimations(box, animations);
      });
    }, containerRef);
    return () => {
      ctx.revert();
    };
  }, []);
  return /* @__PURE__ */ jsx("section", { className, ref: containerRef, children });
}
RecruitList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
gsap.registerPlugin(ScrollTrigger);
const contents = [
  { alt: "EY" },
  { alt: "IBM" },
  { alt: "Cheiil" },
  { alt: "CONCENTRIX CATALYST" },
  { alt: "HYUNDAI AutoEver" },
  { alt: "HYUNDAI MOBIS " },
  { alt: "LG" },
  { alt: "SAMSUNG" },
  { alt: "HYUNDAI" },
  { alt: "GENESIS" },
  { alt: "KN" }
];
function Marquee() {
  const marquee = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      const parentSelector = marquee.current;
      const clone = parentSelector.innerHTML;
      parentSelector.insertAdjacentHTML("beforeend", clone);
      parentSelector.insertAdjacentHTML("beforeend", clone);
      const firstElement = parentSelector.children[0];
      const distanceX = firstElement.clientWidth;
      gsap.fromTo(
        firstElement,
        { marginLeft: 0 },
        {
          marginLeft: -distanceX,
          duration: 20,
          ease: "none",
          repeat: -1
        }
      );
    }, marquee);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsx("article", { className: "", ref: marquee, children: /* @__PURE__ */ jsx("div", { className: "marquee_wrap ", children: contents.map((con, index) => /* @__PURE__ */ jsx("span", { className: `partner_${index + 1} `, children: /* @__PURE__ */ jsx("img", { src: `/images/partner${index + 1}.webp`, alt: con.alt }) }, index)) }) });
}
const cCircle = "_cCircle_17rxx_1";
const textBox = "_textBox_17rxx_81";
const title_flow = "_title_flow_17rxx_95";
const tflow_01 = "_tflow_01_17rxx_133";
const tflow_02 = "_tflow_02_17rxx_145";
const split_text_box = "_split_text_box_17rxx_167";
const spreadImg = "_spreadImg_17rxx_185";
const service = "_service_17rxx_261";
const recruitList = "_recruitList_17rxx_301";
const partners = "_partners_17rxx_357";
const page_header = "_page_header_17rxx_397";
const styles = {
  cCircle,
  textBox,
  title_flow,
  tflow_01,
  tflow_02,
  split_text_box,
  spreadImg,
  service,
  recruitList,
  partners,
  page_header
};
gsap.registerPlugin(ScrollTrigger);
const documentProps = {
  title: "😁 about",
  description: `this is a about page.`,
  pageId: "/about"
};
const animation = {
  title: { arrange: { start: "top 70%", end: "+=70%" } },
  description: {
    arrange: {
      start: "top 95%"
    }
  }
};
function Page() {
  const mainRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const main = document.querySelector("main");
      const createTimeline = (triggerSelector, startTrigger, endTrigger, bgColorClass, textColorClass) => {
        return gsap.timeline({
          scrollTrigger: {
            trigger: triggerSelector,
            start: startTrigger,
            end: endTrigger,
            toggleActions: "restart pause resume reverse",
            scrub: true
          }
        }).to(main, {
          className: `relative z-10 min-h-[100vh] ${bgColorClass} ${textColorClass}`
        });
      };
      createTimeline(document.querySelector(".dark"), "-30% 100%", "+=100%", "bg-bg-dark", "text-white");
      createTimeline(document.querySelector(".light"), "top 20%", "+=100%", "bg-bg-light", "text-black");
    }, mainRef);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "about", ref: mainRef, children: /* @__PURE__ */ jsxs("div", { className: "page-contents-wrap", children: [
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
              title: ["We are focusing on", "creative design", "and technical work"],
              description: {
                text: "As technology develops, the combination of UX design and technology will be our powerful force.",
                transform: "기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될 것이라고 믿습니다."
              }
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(ScrollSign, { text: "Learn our services" })
    ] }),
    /* @__PURE__ */ jsxs(CircleBox, { className: CM(styles.cCircle), children: [
      /* @__PURE__ */ jsx(AboutTitle, { conLeft: "new", conRight: "eyes" }),
      /* @__PURE__ */ jsxs("div", { className: styles.textBox, children: [
        /* @__PURE__ */ jsx(
          Word,
          {
            tagName: "h3",
            className: "text-heading-10 md:text-heading-4 justify-center",
            content: "We see everything with new eyes and make it with empathy and creativity.",
            animationConfig: animation.description,
            splitType: "none"
          }
        ),
        /* @__PURE__ */ jsx(
          Word,
          {
            tagName: "p",
            className: "basic_p_2 justify-center",
            content: "우리는 모든 것을 새로운 눈으로 보고 공감과 창의력으로 만들어갑니다.",
            animationConfig: animation.description,
            splitType: "none"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: CM("dark", styles.title_flow), children: /* @__PURE__ */ jsxs(TextMove, { className: CM(styles.tflow_01), location: ["x", "x", "y"], coord: ["-1", "1", "1"], children: [
      /* @__PURE__ */ jsxs(Text, { tagName: "div", children: [
        "Make Empathy",
        "&"
      ] }),
      /* @__PURE__ */ jsx(Text, { children: "Creativity" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "layout_text_box", children: [
      /* @__PURE__ */ jsx(Title, { tagName: "h5", className: "text-heading-9 md:text-heading-8", children: "Our Philosophy" }),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx(
          Word,
          {
            className: "title_p",
            content: "We respect the thoughts of people who grew up in different environments. Making my thoughts and other people's thoughts together The beginning is The J's creative momentum.",
            animationConfig: animation.description,
            location: "respect",
            styleId: "circle/4.down",
            color: "white"
          }
        ),
        /* @__PURE__ */ jsx(
          Word,
          {
            className: "basic_p_2",
            content: "우리는 서로 다른 환경에서 자란 사람들의 생각을 존중합니다. 나의 생각과 다른 사람들의 생각을 함께 만들어가는 것 그 시작이 더제이의 크리에이티브 모멘텀입니다.",
            animationConfig: animation.description,
            animationType: "fade in"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: CM(styles.split_text_box), children: /* @__PURE__ */ jsx(
      Word,
      {
        content: "Neat Arrangement Creative Expression Sophisticated Techniques Good Communication Young Generation Casual and Cozy Office Free-Spirited",
        className: "text-heading-6 md:text-heading-1 leading-loose",
        splitType: "letter",
        animationType: "fill",
        animationConfig: {
          markers: true,
          arrange: {
            start: "top 40%",
            end: "bottom 40%"
          }
        }
      }
    ) }),
    /* @__PURE__ */ jsx("section", { className: CM("light", styles.title_flow), children: /* @__PURE__ */ jsxs(TextMove, { className: CM(styles.tflow_02), location: ["y", "y", "y"], coord: ["1", "1", "1"], children: [
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(SvgIcons, { types: "basic" }) }),
      /* @__PURE__ */ jsxs(Text, { tagName: "div", children: [
        "Discover",
        "Hidden"
      ] }),
      /* @__PURE__ */ jsx(Text, { children: "Creativity" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "layout_text_box mt-88", children: [
      /* @__PURE__ */ jsx(Title, { tagName: "h5", className: "text-heading-9 md:text-heading-8", children: "Our vision" }),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx(
          Word,
          {
            className: "title_p",
            content: "Various ideas and trendy experiences increase the branding representation of the project and make it simple and easy to design. By reflecting creativity in technology, we constantly pursue creativity in technical UX design.",
            animationConfig: animation.description,
            location: "creativity",
            styleId: "circle/8.up"
          }
        ),
        /* @__PURE__ */ jsx(
          Word,
          {
            className: "basic_p_2",
            content: "다양한 아이디어와 트렌디한 경험을 통해 프로젝트의 브랜딩 표현을 높이고 사용성은 간결하고 쉽게 디자인합니다. 기술력에 크리에이티브를 반영하는 과정을 통해 우리는 늘 최상의 크리에이티브 테크니컬 UX 디자인을 만들어가고 있습니다.",
            animationConfig: animation.description,
            animationType: "fade in"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(SpreadImg, { className: CM(styles.spreadImg), children: /* @__PURE__ */ jsxs("article", { children: [
      /* @__PURE__ */ jsx(Title, { tagName: "h5", className: "text-heading-9 md:text-heading-8", children: "Our capability" }),
      /* @__PURE__ */ jsx(
        Word,
        {
          tagName: "h3",
          className: "mb-25 text-heading-10 md:text-heading-4",
          content: "We specialize in global and commerce, from building and rollout to maintenance, and strategy and creative design.",
          animationConfig: animation.description,
          splitType: "none"
        }
      ),
      /* @__PURE__ */ jsx(
        Word,
        {
          tagName: "p",
          className: "basic_p_2",
          content: "전략, 크리에이티브 디자인을 중심으로 구축, 확산, 운영 등 글로벌과 커머스에 특화된 디자인이 가능합니다.",
          animationConfig: animation.description,
          splitType: "none"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: CM(styles.service), children: [
      /* @__PURE__ */ jsx("h1", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(TextPassed, { text: "Our service", size: 20, runDirection: "left" }) }),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx(Title, { tagName: "h5", className: "text-heading-9 md:text-heading-8", children: "What we do" }),
        /* @__PURE__ */ jsx(
          Word,
          {
            tagName: "h3",
            className: "mb-19 text-heading-10 md:text-heading-4",
            content: "We are committed to helping your brand with our high-quality services and integrated approach.",
            animationConfig: animation.description,
            location: "high-quality",
            styleId: "circle/14.up"
          }
        ),
        /* @__PURE__ */ jsx(
          Word,
          {
            className: "basic_p_2",
            content: "우리는 우리의 고품질 서비스와 통합된 접근 방식으로 당신의 브랜드를 돕기 위해 최선을 다하고 있습니다.",
            animationConfig: animation.description,
            animationType: "fade in"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(RecruitList, { className: CM(styles.recruitList), children: [
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Title, { tagName: "h2", className: "text-heading-5 md:text-heading-1 font-light", children: "UX UI Design" }) }),
        /* @__PURE__ */ jsxs(Text, { tagName: "div", className: "box", children: [
          "UX UI Strategy",
          "UX Research",
          "UX Planning & Insight",
          "UX Writing",
          "UI Design",
          "Brand Experience",
          "SEO"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Title, { tagName: "h2", className: "text-heading-5 md:text-heading-1 font-light", children: "Contents" }) }),
        /* @__PURE__ */ jsxs(Text, { tagName: "div", className: "box", children: [
          "Contents Strategy",
          "Visual Communication",
          "Interaction Design",
          "3D & Motion Graphics",
          "Digital Design Strategy",
          "Graphic Design",
          "Copywriting"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Title, { tagName: "h2", className: "text-heading-5 md:text-heading-1 font-light", children: "Global & Platform" }) }),
        /* @__PURE__ */ jsxs(Text, { tagName: "div", className: "box", children: [
          "Global Strategy",
          "E-Commerce Strategy",
          "Global Rollout",
          "Contents Translation Work",
          "AEM & CMS Platform Building",
          "Adobe Experience Management",
          "Contents Creation"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Title, { tagName: "h2", className: "text-heading-5 md:text-heading-1 font-light", children: "Development" }) }),
        /* @__PURE__ */ jsxs(Text, { tagName: "div", className: "box", children: [
          "Web Front-end Development",
          "Web & App Publishing",
          "Responsive Web",
          "Interaction Engineering",
          "Web Accessibility",
          "Cross Browsing",
          "Performance Optimization"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: CM(styles.partners), children: [
      /* @__PURE__ */ jsx(Title, { tagName: "h5", className: "text-heading-9 md:text-heading-8", children: "Our partners & clients" }),
      /* @__PURE__ */ jsx(Marquee, {})
    ] })
  ] }) });
}
export {
  Page,
  documentProps
};
