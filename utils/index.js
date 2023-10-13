import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const debounce = (
  callback = () => {
    console.log("delay", duration);
    console.log("timer", timer);
  },
  { callbackParams = null, duration = 400, timer = null },
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
      start(params) {
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
      callback.start(params);
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
  smoothness = 100,
  breakpoints = [414, 768, 1080, 1440, 1920, 2560],
) => {
  const middlePoint = Math.floor(breakpoints.length * 0.5);
  const scale = breakpoints[middlePoint >= window.innerWidth ? 0 : middlePoint];
  const adjMobile = now < 768 ? 2 : 1;
  return ((now / scale) * adjMobile * smoothness * 1) / smoothness;
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
