import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import styles from "./CircleBox.module.css";

gsap.registerPlugin(ScrollTrigger);

const contents = [
  { url: "/images/logo.svg", alt: "logo" },
  { url: "/images/star.webp", alt: "star" },
  { url: "/images/thej_path_1x.webp", alt: "the j" },
  { url: "/images/logo.svg", alt: "logo 1" },
  { url: "/images/star.webp", alt: "star 1" },
  { url: "/images/thej_path_1x.webp", alt: "the j 1" },
];
export default function CircleBox({ className, children }) {
  const targetRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 0",
          end: "+=100%",
          // markers: true,
          pin: true,
          scrub: true,
        },
      });
    }, targetRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={className} ref={targetRef}>
      <div className="bg-slate-100 grid grid-cols-12 grid-rows-3 h-screen">
        <span className="bg-red-100 col-start-3 row-start-1">
          <img src="/images/logo.svg" alt="" />
        </span>
        <span className="bg-red-200 col-start-1 row-start-2">
          <img src="/images/logo.svg" alt="" />
        </span>
        <span className="bg-red-300 col-start-2 row-start-3">
          <img src="/images/logo.svg" alt="" />
        </span>
        <span className="bg-red-400 col-end-11 row-start-1">
          <img src="/images/logo.svg" alt="" />
        </span>
        <span className="bg-red-500 col-end-13 row-start-2">
          <img src="/images/logo.svg" alt="" />
        </span>
        <span className="bg-red-600 col-end-12 row-start-3">
          <img src="/images/logo.svg" alt="" />
        </span>
        {children}
      </div>
    </div>
  );
}
CircleBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
