import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const debounce = (
  callback = () => {
    console.log("delay", duration);
    console.log("timer", timer);
  },
  callbackParams = null,
  duration = 400,
  timer = null,
) => {
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(callbackParams);
    }, duration);
  };
};

export const scrollMonitor =
  (
    callback = {
      doing(params) {
        console.log("scroll start/params :", params);
      },
      end(params) {
        console.log("scroll end/params :", params);
      },
    },
    params,
    duration = 200,
    memo = null,
  ) =>
  event => {
    memo = event.timeStamp;
    if (memo != null) {
      callback.doing(params);
      // fallback speed
      setTimeout(() => {
        if (0 === event.timeStamp - memo) {
          callback.end(params);
        }
      }, duration);
    }
  };

export const handle_speed = (
  now = window.innerWidth,
  smoothness = 1000,
  breakpoints = [414, 768, 1080, 1440, 1920, 2560],
) => {
  const middlePoint = Math.floor(breakpoints.length * 0.5);
  const scale = breakpoints[middlePoint];
  const screenRatio = now < 768 ? 1.25 : 1;
  // console.group();
  // console.trace();
  // console.log("now", now);
  // console.log("middlePoint", middlePoint);
  // console.log("scale", scale);
  // console.log("adjMobile ", screenRatio);
  // console.log("return", now / scale);
  // console.groupEnd();
  return Math.round((now / scale) * screenRatio * smoothness, 10) / smoothness;
};

export const CM = (...inputs) => twMerge(clsx(inputs));
// example
/*
  className={CM(
    styles.selectorName, 
    `${active ? "block" : "hidden"}`,
    {
      "bg-white" : active
      "bg-red-100" : !active
      "text-heading-1" : tagName === "h1",
    }
  )}
*/
// dynamic class 사용은 여전히 불가능.
