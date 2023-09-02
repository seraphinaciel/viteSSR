import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./CircleBox.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function CircleBox({ children }) {
  const targetRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top top",
          end: "+=100%",
          // markers: true,
          // pin: true,
          scrub: true,
        },
      });
      tl.fromTo(
        "i",
        { scale: 0 },
        { scale: 200, duration: 10, ease: "power1.in" }
      ).fromTo(
        "em",
        { scale: 0 },
        { scale: 5, rotation: 360, duration: 7, ease: "power1.in" },
        "<"
      );
    }, targetRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.cBox} ref={targetRef}>
      <i></i>
      {children}
    </div>
  );
}
CircleBox.propTypes = {
  children: PropTypes.node,
};
