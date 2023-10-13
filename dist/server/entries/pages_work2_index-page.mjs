import { a as jsxs, F as Fragment, j as jsx } from "../chunks/chunk-ac9dafa4.js";
import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { S as SvgLine, T as Textmarquee } from "../chunks/chunk-00868960.js";
import "react/jsx-runtime";
import "prop-types";
import "gsap/dist/ScrollTrigger.js";
const box = "_box_1gyl2_1";
const banana = "_banana_1gyl2_27";
const apple = "_apple_1gyl2_53";
const svgIcons = "_svgIcons_1gyl2_67";
const rotatei = "_rotatei_1gyl2_1";
const styles = {
  box,
  banana,
  apple,
  svgIcons,
  rotatei
};
const title = "🥰 work2", description = "this is a work2 page.";
function Page() {
  const apple2 = useRef();
  const banana2 = useRef();
  useEffect(() => {
    let carot = gsap.context(() => {
      gsap.to(".boxing", { rotation: 360 });
      gsap.to(banana2.current, { rotation: 360 });
    }, apple2);
    return () => carot.revert();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { className: styles.name, children: "Work2" }),
    /* @__PURE__ */ jsxs("div", { className: styles.apple, ref: apple2, children: [
      /* @__PURE__ */ jsx("div", { className: `${styles.box} boxing`, children: "box" }),
      /* @__PURE__ */ jsx("div", { className: styles.banana, ref: banana2, children: "banana" })
    ] }),
    /* @__PURE__ */ jsx(SvgLine, { id: "sStar", duration: 500, delay: 50 }),
    /* @__PURE__ */ jsx(SvgLine, { id: "sArrow", duration: 500, delay: 50 }),
    /* @__PURE__ */ jsx(SvgLine, { id: "sHand", duration: 500, delay: 50 }),
    /* @__PURE__ */ jsxs("div", { className: styles.banner, children: [
      /* @__PURE__ */ jsx(
        Textmarquee,
        {
          content: "my favorite fruit is apple",
          speed: 2,
          withSvg: true,
          svgId: "sStar"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: styles.svgIcons, children: /* @__PURE__ */ jsx("img", { src: "/images/star.webp", alt: "" }) }),
      /* @__PURE__ */ jsx(Textmarquee, { content: "a little bit of love", speed: 5 }),
      /* @__PURE__ */ jsx(Textmarquee, { content: "good chioce", speed: 5 }),
      /* @__PURE__ */ jsx(Textmarquee, { content: "I love tomato", speed: 1 }),
      /* @__PURE__ */ jsx(Textmarquee, { content: "one two three", speed: 1.5 }),
      /* @__PURE__ */ jsx(Textmarquee, { content: "깊은 밤, 길을 잃어도 차라리 날아올라", speed: 2 })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: "100vh" } })
  ] });
}
export {
  Page,
  description,
  title
};
