import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { b as animateSvg, S as SvgLine, W as Word } from "../chunks/chunk-Wb4zu5JQ.js";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { T as TextPassed } from "../chunks/chunk-GshQpoJ7.js";
import { T as Text, C as CM, a as Title } from "../chunks/chunk-DRcwvi6n.js";
import { V as Video } from "../chunks/chunk-b_3FB1z4.js";
import { u as useCssTheme } from "../chunks/chunk-P7vN87LO.js";
import { L as ListMonoType, a as LAYOUT_BIG_FIRST } from "../chunks/chunk-yfwNcpeL.js";
import "gsap";
import "clsx";
import "tailwind-merge";
import "tailwindcss/resolveConfig.js";
gsap.registerPlugin(ScrollTrigger);
const PropsType = {
  content: PropTypes.string,
  className: PropTypes.string,
  container: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
  location: PropTypes.string,
  keyword: PropTypes.arrayOf(PropTypes.string)
};
function SplitWord({ content, className, tagName = "p", keyword, location }) {
  const Tagname = tagName;
  const targetRef = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      const splitTargets = targetRef.current;
      gsap.from(gsap.utils.toArray(".split-words .word"), {
        ease: "circ.out",
        y: splitTargets.offsetHeight,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: splitTargets,
          toggleActions: "restart pause resume reverse"
          // start: "top 70%",
          // end: "+=70%",
        }
      });
    }, targetRef);
    return () => ctx.revert();
  }, [content]);
  const contentWords = content.split(" ");
  const keywordArray = Array.isArray(keyword) ? keyword : [keyword];
  return /* @__PURE__ */ jsx(Tagname, { ref: targetRef, className: `split-words ${className}`, children: contentWords.map(
    (word, index) => keywordArray.includes(word) ? /* @__PURE__ */ jsx("a", { href: location, className: "word", children: word }, index) : /* @__PURE__ */ jsx("span", { className: "word", children: word }, index)
  ) });
}
SplitWord.propTypes = PropsType;
gsap.registerPlugin(ScrollTrigger);
const clipMap = {
  smaller: ["inset(0%)", "inset(40%)"]
};
function VisualBox({ id, src, children, conLeft, conRight, change }) {
  const { md } = useCssTheme((state) => state.screens);
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      `(min-width:${md})`,
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            anticipatePin: 1,
            scrub: true,
            start: "top top"
          },
          onComplete: () => animateSvg(gsap.utils.toArray(".Thej path"), 0.2)
          // onComplete: () => animateSvg(".Thej path", 0.2),
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
                duration: 200,
                ease: "none"
                // == linear
              }
            ]
          },
          {
            id: 1,
            animate: "fromTo",
            params: [".motion-contents", { y: "0vh" }, { y: "-100%", duration: 200 }, "<+100"]
          },
          {
            id: 2,
            animate: "to",
            params: [".motion-video", { opacity: 0, duration: 1 }]
          },
          {
            id: 3,
            animate: "fromTo",
            params: [
              ".conRight span:first-of-type",
              {
                transform: "perspective(500px) rotateY(0deg)",
                display: "block"
              },
              {
                transform: "perspective(500px) rotateY(90deg)",
                display: "none",
                duration: 200
              },
              ">"
            ]
          },
          {
            id: 4,
            animate: "to",
            params: [".conLeft span", { duration: 100, x: -20, margin: 0 }, ">"]
          },
          {
            id: 5,
            animate: "fromTo",
            params: [
              ".conRight span:last-of-type",
              {
                transform: "perspective(500px) rotateY(-90deg)",
                display: "none"
              },
              { transform: "perspective(500px) rotateY(0deg)", display: "block", duration: 200 },
              "<"
            ]
          },
          {
            id: 6,
            animate: "from",
            params: [".Thej", { duration: 1e-7, opacity: 0 }, ">-=10"]
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
      },
      containerRef
    );
    return () => mm.revert();
  }, [id, md]);
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, children: [
    /* @__PURE__ */ jsx("div", { className: "motion-video", children: /* @__PURE__ */ jsx(Video, { src }) }),
    /* @__PURE__ */ jsxs("article", { className: "motion-contents ", children: [
      children,
      /* @__PURE__ */ jsxs("h1", { className: "text-heading-3 md:text-special capitalize", children: [
        /* @__PURE__ */ jsxs("p", { className: "conLeft", children: [
          /* @__PURE__ */ jsx(Text, { tagName: "span", children: conLeft }),
          /* @__PURE__ */ jsx(SvgLine, { shape: "typo/thej", className: "Thej", ref: centerRef })
        ] }),
        /* @__PURE__ */ jsxs(Text, { tagName: "p", className: "conRight relative", children: [
          conRight,
          change
        ] })
      ] })
    ] })
  ] });
}
VisualBox.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
  conLeft: PropTypes.string,
  conRight: PropTypes.string,
  change: PropTypes.string
};
const visual = "_visual_1k9m0_1";
const text_box = "_text_box_1k9m0_103";
const listMonoLayout = "_listMonoLayout_1k9m0_141";
const what = "_what_1k9m0_149";
const who = "_who_1k9m0_243";
const styles = {
  visual,
  text_box,
  listMonoLayout,
  what,
  who
};
const documentProps = {
  title: "🥰 Main",
  description: "this is a Main page."
};
const animation = {
  word: {
    arrange: {
      start: "top 95%"
    }
  },
  sentence: {
    arrange: {
      start: "top 95%"
    },
    duration: 1.5
  }
};
function Page() {
  const pageRef = useCallback((wrap) => {
    if (null == wrap)
      return;
  });
  const {
    data: workList,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["works"],
    queryFn: async () => {
      return await fetch("./data/works.json").then((res) => res.json());
    }
  });
  return /* @__PURE__ */ jsx("div", { ref: pageRef, children: /* @__PURE__ */ jsxs("div", { className: "page-contents-wrap", children: [
    /* @__PURE__ */ jsx("section", { className: CM(styles.visual), children: /* @__PURE__ */ jsxs(
      VisualBox,
      {
        id: "smaller",
        src: "https://www.w3schools.com/tags/movie.mp4",
        conLeft: "make",
        conRight: "work",
        change: "moment",
        children: [
          /* @__PURE__ */ jsx(Text, { tagName: "nav", children: "Our latest" }),
          /* @__PURE__ */ jsxs(Text, { tagName: "h2", children: [
            "LG Global Pilot Website",
            "Platform Building"
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("section", { className: CM(styles.text_box), children: [
      /* @__PURE__ */ jsx(
        Word,
        {
          tagName: "h4",
          className: "text-heading-8 md:text-heading-6",
          content: "Creative Design Technical Agency",
          splitType: "none"
        }
      ),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx(
          Word,
          {
            tagName: "h3",
            className: "text-heading-10 md:text-heading-4",
            content: "We have implemented various experience, such as global integrated platforms and creative projects.",
            animationConfig: animation.word,
            location: "experience,",
            styleId: "circle/16.up",
            color: "black"
          }
        ),
        /* @__PURE__ */ jsx(
          Word,
          {
            className: "basic_p_2",
            content: "글로벌 통합 플랫폼 프로젝트와 크리에이티브 프로젝트 등 다양한 프로젝트들을 수행해 왔습니다.",
            splitType: "none",
            animationConfig: {
              ...animation.sentence,
              from: {
                duration: 0.6,
                ease: "circ.out",
                yPercent: "100",
                opacity: 1
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(SvgLine, { shape: "tail arrow" })
      ] })
    ] }),
    !isLoading && !isError && /* @__PURE__ */ jsxs("section", { className: CM(styles.listMonoLayout), children: [
      /* @__PURE__ */ jsx(ListMonoType, { layout: LAYOUT_BIG_FIRST, list: workList }),
      /* @__PURE__ */ jsx("p", { className: "mt-60 mb-120 md:text-center md:mt-150 md:mb-300", children: /* @__PURE__ */ jsx("a", { href: "", className: "link", children: "See more work" }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: CM(styles.what), children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Video, { src: "https://www.w3schools.com/tags/movie.mp4" }) }),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx(Title, { tagName: "h5", className: "text-heading-9 md:text-heading-8", children: "What we do" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx(
            SplitWord,
            {
              tagName: "li",
              content: "We re-create designs for",
              keyword: ["re-create"],
              location: "http://localhost:3000/"
            }
          ),
          /* @__PURE__ */ jsx(
            SplitWord,
            {
              tagName: "li",
              content: "user experiences with",
              keyword: ["user", "experiences"],
              location: "http://localhost:3000/"
            }
          ),
          /* @__PURE__ */ jsx(
            SplitWord,
            {
              tagName: "li",
              content: "our creative perspective",
              keyword: ["creative", "perspective"],
              location: "http://localhost:3000/"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-100", children: /* @__PURE__ */ jsx("h1", { className: "w-screen overflow-hidden text-heading-3 md:text-special capitalize", children: /* @__PURE__ */ jsx(TextPassed, { text: "About the J", size: 20, runDirection: "left" }) }) }),
    /* @__PURE__ */ jsxs("section", { className: CM(styles.who, "layout_text_box"), children: [
      /* @__PURE__ */ jsx(Title, { tagName: "h5", className: "md:pt-32 md:col-span-4 text-heading-9 md:text-heading-8", children: "Who we are" }),
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx(
          Word,
          {
            tagName: "h3",
            className: "md:pt-32 mb-32 text-heading-10 md:text-heading-4",
            content: "We are an agency specializing in global and commerce, from building and maintenance to rollout, and strategic plan and creative design.",
            animationConfig: animation.word,
            location: "specializing",
            styleId: "circle/18.up"
          }
        ),
        /* @__PURE__ */ jsx(
          Word,
          {
            tagName: "p",
            className: "basic_p_2",
            content: "전략, 기획설계, 크리에이티브 디자인을 중심으로 구축, 확산, 운영 등 글로벌과 커머스에 특화된 크리에이티브 디자인이 가능한 에이전시입니다.",
            splitType: "none",
            animationConfig: animation.sentence
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "inline-flex gap-x-25 mt-63", children: [
          /* @__PURE__ */ jsx("a", { href: "", className: "link", children: "Learn more about" }),
          /* @__PURE__ */ jsx("a", { href: "", className: "link", children: "Join us" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Page,
  documentProps
};
