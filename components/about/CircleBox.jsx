import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SvgIcons from "../SvgIcons";

import styles from "./CircleBox.module.css";

gsap.registerPlugin(ScrollTrigger);

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
      tl.set(".svgIcons1", { top: "-5%" })
        .set(".svgIcons2", { opacity: 0 }, "<")
        .to(
          ".svgIcons1",
          {
            top: "calc(50% - 100px)",
            duration: 3,
            ease: "power1.in",
          },
          "<"
        )
        .fromTo(
          "i",
          { scale: 0 },
          { scale: 200, duration: 10, ease: "power1.in" },
          "<+3"
        )
        .set(".svgIcons1", { opacity: 0, duration: 3 }, "<+=3")
        .set(".svgIcons2", { opacity: 1, duration: 3 }, "<")
        .set(".svgIcons2", { opacity: 0, duration: 3 }, "i-=2");
    }, targetRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={`${className} ${styles.cBox}`} ref={targetRef}>
      {children}
      <i></i>
      <SvgIcons className="svgIcons2 absolute" types="big2" />
    </div>
  );
}
CircleBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
