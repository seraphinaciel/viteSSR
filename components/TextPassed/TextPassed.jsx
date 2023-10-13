// prop type
import PropTypes from "prop-types";

// node module
import { forwardRef, useRef, useEffect, Fragment } from "react";
import { gsap } from "gsap";

// style
import styles from "./TextPassed.module.css";

// utils
import { handle_speed, scrollMonitor } from "#root/utils";
import { CM } from "../../utils";

const RollingIcon = forwardRef(function Icon(props, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      viewBox="0 0 80 80"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      <path d="M40 0L40 29.0348" stroke="black" strokeWidth="3.5" />
      <path d="M40 50.9653L40 80.0001" stroke="black" strokeWidth="3.5" />
      <path d="M55.3066 3.04443L47.6234 21.5934" stroke="black" strokeWidth="3.5" />
      <path d="M32.375 58.4058L24.6918 76.9547" stroke="black" strokeWidth="3.5" />
      <path d="M76.9551 24.6924L58.4061 32.3756" stroke="black" strokeWidth="3.5" />
      <path d="M21.5938 47.624L3.04482 55.3072" stroke="black" strokeWidth="3.5" />
      <path d="M55.3066 76.9551L47.6234 58.4061" stroke="black" strokeWidth="3.5" />
      <path d="M32.375 21.5938L24.6918 3.04482" stroke="black" strokeWidth="3.5" />
      <path d="M76.9551 55.3071L58.4061 47.6239" stroke="black" strokeWidth="3.5" />
      <path d="M21.5938 32.3755L3.04482 24.6923" stroke="black" strokeWidth="3.5" />
      <path d="M80 40L50.9652 40" stroke="black" strokeWidth="3.5" />
      <path d="M29.0352 40L0.000406027 40" stroke="black" strokeWidth="3.5" />
      <path d="M68.2832 68.2847L47.7525 47.754" stroke="black" strokeWidth="3.5" />
      <path d="M32.2461 32.2466L11.7154 11.7159" stroke="black" strokeWidth="3.5" />
      <path d="M11.7148 68.2847L32.2455 47.754" stroke="black" strokeWidth="3.5" />
      <path d="M47.752 32.2466L68.2826 11.7159" stroke="black" strokeWidth="3.5" />
    </svg>
  );
});

// Icon.propTypes = {
//   size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   unit: PropTypes.oneOf(["rem"]),
// };

const initAnimateStore = action => {
  const toLeft = "left";
  const toRight = "right";

  switch (action) {
    case toLeft:
      return {
        progress: null,
        start: "0%",
        end: "-50%",
      };
    case toRight:
      return {
        progress: null,
        start: "-50%",
        end: "0%",
      };
    default:
      return {};
  }
};

function TextPassed({ text, runDirection = "left" }) {
  const textboxRef = useRef(null);

  // call external library:GSAP
  useEffect(() => {
    // save DOM elements
    const textbox = textboxRef.current;
    const [container] = textboxRef.current.children;
    const [...icons] = textboxRef.current.querySelectorAll("svg");
    const duration = 100;
    const upside = 5;

    // initialize state
    let animateStore = initAnimateStore(runDirection);
    let { start, end, progress } = animateStore;

    const tl = gsap.timeline();
    const stream = [
      // 1. set
      { api: "set", params: [container, { x: start }] },
      { api: "set", params: [icons, { rotation: 0 }] },
      // 2. bookmark start point on timeline
      { api: "addLabel", params: ["main"] },
      // 3. animate
      {
        api: "to",
        params: [container, { x: end, duration, repeat: -1, ease: "none" }, "main"],
      },
      {
        api: "to",
        params: [icons, { rotation: 360 * -1, duration: duration * 0.5, repeat: -1, ease: "none" }, "main"],
        // 동일 대상으로는 tl 인스턴스 생성 시 넣는 옵션값이 유효한데,
        // 복수 대상이면 to에 각각 넣어줘야 제대로 동작함.
      },
    ];

    const startAnimate = timeline => {
      stream.map(({ api, params }) => timeline[api](...params));
    };
    // const refreshAnimate = (timeline) => {
    //   timeline.clear();
    //   startAnimate(timeline);
    // };

    startAnimate(tl);

    // pause when out screen
    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { y: screenY } = entry.boundingClientRect;
          const posY = screenY - window.innerHeight;
          const isInter = (0 > screenY || 0 > posY) && entry.isIntersecting;

          entry.target.dataset.observeTarget = isInter;

          if (!isInter) return tl.pause();
          tl.play();
        });
      },
      {
        threshold: [0.01],
      },
    );
    intersectionObserver.observe(textbox);

    // handle rolling time by textbox's width
    const resizeObserver = new ResizeObserver(() => {
      const spd = handle_speed();
      tl.timeScale(1 / spd);

      // console.group("resize");
      // console.log("spd", spd);
      // console.log("duration/set", timeline.duration());
      // console.log("duration/real", timeline.duration() * spd);
      // console.groupEnd("resize");
    });
    resizeObserver.observe(textbox);

    // accelerate speed by scroll
    const handler = scrollMonitor({
      doing: () => tl.timeScale(upside),
      end: () => tl.timeScale(1),
    });
    window.addEventListener("scroll", handler, false);

    // unmount
    const clean_up = () => {
      tl.revert();
      intersectionObserver.unobserve(textbox);
      resizeObserver.unobserve(textbox);
      window.removeEventListener("scroll", handler, false);
    };

    return clean_up;
  }, [runDirection]);

  return (
    <div ref={textboxRef} className={CM(styles.container)} data-observe-target="null">
      <div className={CM(styles.line)}>
        {Array.from({ length: 6 }, () => 1).map((v, index) => (
          <Fragment key={index}>
            <span className={CM(styles.line, { "border-r-1 border-red-400": index === 2 })}>
              <RollingIcon />
              <span>{text}</span>
            </span>
          </Fragment>
        ))}{" "}
      </div>
    </div>
  );
}

TextPassed.propTypes = {
  text: PropTypes.string.isRequired,
  // size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  // unit: PropTypes.oneOf(["rem"]),
  runDirection: PropTypes.oneOf(["left", "right"]),
  // upside: PropTypes.number,
  // duration: PropTypes.number,
};

export default TextPassed;
