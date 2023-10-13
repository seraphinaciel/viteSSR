import { forwardRef, useRef, useEffect } from "react";
import { gsap } from "gsap";
import style from "./TextPassed.module.css";
import { handle_speed, scrollMonitor } from "../../utils";

const Icon = forwardRef(function Icon({ size, unit = "rem" }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 112 112"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
      style={{
        width: `${size * 0.75}${unit}`,
        height: `${size * 0.75}${unit}`,
      }}
    >
      <path d="m111.547 59.968-50.391-1.406 36.64 34.531-5.155 5.157L58.11 61.61 59.516 112h-7.188l1.407-50.39-34.532 36.64-5.156-5.157 36.64-34.53-50.39 1.405v-7.187l50.39 1.641-36.64-34.61 5.156-5.078 34.532 36.641L52.328.985h7.188l-1.406 50.39 34.53-36.64 5.157 5.077-36.641 34.61 50.39-1.407z"></path>
    </svg>
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

function TextPassed({
  // font
  text,
  size,
  unit = "rem",
  // animate values
  runDirection,
  upside = 10,
  duration = 50,
}) {
  // ref
  const textboxRef = useRef(null);

  // call external library:GSAP
  useEffect(() => {
    // save DOM elements
    const textbox = textboxRef.current;
    const [container] = textboxRef.current.children;
    const [...icons] = textboxRef.current.querySelectorAll("svg");

    // initialize state
    let animateStore = initAnimateStore(runDirection);
    let { start, end, progress } = animateStore;

    const recodeProgress = () => {
      progress = timeline.progress();
      // console.log("progress", progress);
      // console.log("duration", timeline.duration());
    };
    const startAnimate = (timeline, frame) => {
      const setValues = gsap.set(container, frame.start);
      timeline.add(setValues);
      timeline.to(container, frame.end);
    };
    const refreshAnimate = (timeline, frame) => {
      timeline.clear();
      startAnimate(timeline, frame);
    };
    const timeline = gsap.timeline({
      repeat: -1,
      onStart: recodeProgress,
      onUpdate: recodeProgress,
    });
    const frame = {
      start: {
        duration,
        x: start,
      },
      end: {
        duration,
        x: end,
        ease: "linear",
      },
    };

    startAnimate(timeline, frame);

    // pause when out screen
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { y: screenY } = entry.boundingClientRect;
          const posY = screenY - window.innerHeight;
          const isInter = (0 > screenY || 0 > posY) && entry.isIntersecting;

          entry.target.dataset.observeTarget = isInter;

          if (!isInter) return timeline.pause();
          timeline.play();
        });
      },
      {
        threshold: [0.01],
      }
    );
    intersectionObserver.observe(textbox);

    // handle rolling time by textbox's width
    const resizeObserver = new ResizeObserver((entries) =>
      entries.forEach((entry) => timeline.timeScale(handle_speed()))
    );
    resizeObserver.observe(textbox);

    // accelerate speed by scroll
    const handler = scrollMonitor(
      {
        start(params) {
          const [upside] = params;
          timeline.timeScale(upside);
        },
        end(params) {
          const [upside, fallback] = params;
          timeline.timeScale(fallback);
        },
      },
      [upside, 1]
    );
    window.addEventListener("scroll", handler, false);

    // prepare unmount
    const clean_up = () => {
      window.removeEventListener("scroll", handler, false);
      // intersectionObserver.disconnect();
      // intersectionObserver.unobserve(textbox);
      // timeline.revert();
    };

    // unmount
    return clean_up;
  }, []);

  return (
    <div
      ref={textboxRef}
      data-observe-target="null"
      style={{
        fontSize: `${size * 1}${unit}`,
      }}
    >
      <div className={style.container}>
        <span>
          <Icon size={size} />
          {/* whitespace */ ` `}
          <span>{text}</span>
        </span>
        {/* whitespace */ ` `}
        <span>
          <Icon size={size} />
          {/* whitespace */ ` `}
          <span>{text}</span>
        </span>
        {/* whitespace */ ` `}
        <span style={{ borderRight: "1px solid red" }}>
          <Icon size={size} />
          {/* whitespace */ ` `}
          <span>{text}</span>
        </span>

        {/* ----------------------------------- */}
        <span>
          <Icon size={size} />
          {/* whitespace */ ` `}
          <span>{text}</span>
        </span>
        {/* whitespace */ ` `}
        <span>
          <Icon size={size} />
          {/* whitespace */ ` `}
          <span>{text}</span>
        </span>
        {/* whitespace */ ` `}
        <span>
          <Icon size={size} />
          {/* whitespace */ ` `}
          <span>{text}</span>
        </span>
      </div>
    </div>
  );
}

export default TextPassed;
