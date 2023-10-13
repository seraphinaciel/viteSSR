import { j as jsx, F as Fragment, a as jsxs } from "../chunks/chunk-ac9dafa4.js";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { T as Textmarquee } from "../chunks/chunk-00868960.js";
import "react/jsx-runtime";
const elevator$1 = "_elevator_tp58q_1";
const elevatorL$1 = "_elevatorL_tp58q_5";
const name = "_name_tp58q_15";
const styles$1 = {
  elevator: elevator$1,
  elevatorL: elevatorL$1,
  name
};
const elevator = "_elevator_111nd_1";
const elevatorL = "_elevatorL_111nd_5";
const styles = {
  elevator,
  elevatorL
};
gsap.registerPlugin(ScrollTrigger);
const TextLR = ({ id, conLeft, conRight }) => {
  const textLR = useRef(null);
  useEffect(() => {
    console.log(textLR);
    const ctx = gsap.context(() => {
      let [xl, xle, xr, xre] = id === "in" ? [-100, 0, 100, 0] : [0, -100, 0, 100];
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.elevator_${id}`,
          start: "top center",
          end: "+=100%",
          pin: true,
          markers: true,
          scrub: true
        }
      });
      tl.to(".elevatorL", { x: xl, y: "bottom", duration: 10 }).to(".elevatorR", { x: xr, y: "bottom", duration: 10 }, "<").to(".elevatorL", { x: xle, duration: 10 }).to(".elevatorR", { x: xre, duration: 10 }, "<");
    }, textLR);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { ref: textLR, children: /* @__PURE__ */ jsxs("div", { className: `${styles.elevator} elevator_${id}`, children: [
    /* @__PURE__ */ jsx("div", { className: `${styles.elevatorL} elevatorL`, children: conLeft }),
    /* @__PURE__ */ jsx("div", { className: `${styles.elevatorR} elevatorR`, children: conRight })
  ] }) }) });
};
TextLR.propTypes = {
  id: PropTypes.string.isRequired,
  conLeft: PropTypes.string.isRequired,
  conRight: PropTypes.string.isRequired
};
const title = "🥰 work", description = "this is a work page.";
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { className: styles$1.name, children: "Work" }),
    /* @__PURE__ */ jsx(TextLR, { id: "out", conLeft: "GET ON THE", conRight: "ELEVATOR" }),
    /* @__PURE__ */ jsx(TextLR, { id: "in", conLeft: "Apple is", conRight: "expensive" }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.banner, children: [
      /* @__PURE__ */ jsx(Textmarquee, { content: "my favorite fruit is apple", speed: 2 }),
      /* @__PURE__ */ jsx(Textmarquee, { content: "a little bit of love", speed: 5 }),
      /* @__PURE__ */ jsx(Textmarquee, { content: "good chioce", speed: 5 }),
      /* @__PURE__ */ jsx(Textmarquee, { content: "I love tomato", speed: 1 }),
      /* @__PURE__ */ jsx(Textmarquee, { content: "one two three", speed: 1.5 }),
      /* @__PURE__ */ jsx(Textmarquee, { content: "깊은 밤, 길을 잃어도 차라리 날아올라", speed: 2 })
    ] })
  ] });
}
export {
  Page,
  description,
  title
};
