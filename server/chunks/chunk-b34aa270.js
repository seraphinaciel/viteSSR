import { jsxs, jsx } from "react/jsx-runtime";
import PropTypes from "prop-types";
import { forwardRef, useRef, useEffect, Fragment } from "react";
import { gsap } from "gsap";
import { h as handle_speed, C as CM, s as scrollMonitor } from "./chunk-7cdbbd50.js";
const container = "_container_hakrg_7";
const line = "_line_hakrg_15";
const styles = {
  "single-line": "_single-line_hakrg_1",
  container,
  line
};
const RollingIcon = forwardRef(function Icon(props, ref) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      viewBox: "0 0 80 80",
      fill: "none",
      role: "presentation",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("path", { d: "M40 0L40 29.0348", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M40 50.9653L40 80.0001", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M55.3066 3.04443L47.6234 21.5934", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M32.375 58.4058L24.6918 76.9547", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M76.9551 24.6924L58.4061 32.3756", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M21.5938 47.624L3.04482 55.3072", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M55.3066 76.9551L47.6234 58.4061", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M32.375 21.5938L24.6918 3.04482", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M76.9551 55.3071L58.4061 47.6239", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M21.5938 32.3755L3.04482 24.6923", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M80 40L50.9652 40", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M29.0352 40L0.000406027 40", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M68.2832 68.2847L47.7525 47.754", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M32.2461 32.2466L11.7154 11.7159", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M11.7148 68.2847L32.2455 47.754", stroke: "black", strokeWidth: "3.5" }),
        /* @__PURE__ */ jsx("path", { d: "M47.752 32.2466L68.2826 11.7159", stroke: "black", strokeWidth: "3.5" })
      ]
    }
  );
});
const initAnimateStore = (action) => {
  const toLeft = "left";
  const toRight = "right";
  switch (action) {
    case toLeft:
      return {
        progress: null,
        start: "0%",
        end: "-50%"
      };
    case toRight:
      return {
        progress: null,
        start: "-50%",
        end: "0%"
      };
    default:
      return {};
  }
};
function TextPassed({ text, runDirection = "left", duration = 100 }) {
  const textboxRef = useRef(null);
  useEffect(() => {
    const textbox = textboxRef.current;
    const [container2] = textboxRef.current.children;
    const [...icons] = textboxRef.current.querySelectorAll("svg");
    const upside = 5;
    let animateStore = initAnimateStore(runDirection);
    let { start, end, progress } = animateStore;
    const tl = gsap.timeline();
    const stream = [
      // 1. set
      { api: "set", params: [container2, { x: start }] },
      { api: "set", params: [icons, { rotation: 0 }] },
      // 2. bookmark start point on timeline
      { api: "addLabel", params: ["main"] },
      // 3. animate
      {
        api: "to",
        params: [container2, { x: end, duration, repeat: -1, ease: "none" }, "main"]
      },
      {
        api: "to",
        params: [icons, { rotation: 360 * -1, duration: duration * 0.5, repeat: -1, ease: "none" }, "main"]
        // 동일 대상으로는 tl 인스턴스 만들 때 옵션으로 넣어줘도 유효한데,
        // 복수 대상이면 모션 하려는 함수마다 각각 넣어줘야 제대로 동작함.
      }
    ];
    const startAnimate = (timeline) => {
      stream.map(({ api, params }) => timeline[api](...params));
    };
    startAnimate(tl);
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { y: screenY } = entry.boundingClientRect;
          const posY = screenY - window.innerHeight;
          const isInter = (0 > screenY || 0 > posY) && entry.isIntersecting;
          entry.target.dataset.observeTarget = isInter;
          if (!isInter)
            return tl.pause();
          tl.play();
        });
      },
      {
        threshold: [0.01]
      }
    );
    intersectionObserver.observe(textbox);
    const resizeObserver = new ResizeObserver(() => {
      const spd = handle_speed();
      tl.timeScale(1 / spd);
    });
    resizeObserver.observe(textbox);
    const handler = scrollMonitor({
      doing: () => tl.timeScale(upside),
      end: () => tl.timeScale(1)
    });
    window.addEventListener("scroll", handler, false);
    const clean_up = () => {
      tl.revert();
      intersectionObserver.unobserve(textbox);
      resizeObserver.unobserve(textbox);
      window.removeEventListener("scroll", handler, false);
    };
    return clean_up;
  }, [runDirection, duration]);
  return /* @__PURE__ */ jsx("div", { ref: textboxRef, className: CM(styles.container), "data-observe-target": "null", children: /* @__PURE__ */ jsxs("div", { className: CM(styles.line), children: [
    Array.from({ length: 6 }, () => 1).map((v, index) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("span", { className: CM(styles.line, { "border-r-1 border-red-400": index === 2 }), children: [
      /* @__PURE__ */ jsx(RollingIcon, {}),
      /* @__PURE__ */ jsx("span", { children: text })
    ] }) }, index)),
    " "
  ] }) });
}
TextPassed.propTypes = {
  text: PropTypes.string.isRequired,
  // size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  // unit: PropTypes.oneOf(["rem"]),
  runDirection: PropTypes.oneOf(["left", "right"]),
  // upside: PropTypes.number,
  duration: PropTypes.number
};
export {
  TextPassed as T
};
