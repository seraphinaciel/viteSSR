import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animateSvg } from "#root/utils/animateSvg";
import styles from "./MainTitle.module.css";

gsap.registerPlugin(ScrollTrigger);

const MainTitle = ({ conLeft, conRight, change, children }) => {
  const targetRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          toggleActions: "play none none none",
          start: "top 0%",
          end: "bottom 0%",

          scrub: true,
        },
        onComplete: () => animateSvg(".Thej path", 0.5),
      });

      tl.to(leftRef.current, { xPercent: -10, duration: 100 })
        .to(rightRef.current, { xPercent: 50, duration: 100 }, "<")
        .to(".right01", {
          yPercent: -100,
          duration: 100,
          opacity: 0,
          position: "absolute",
          right: 0,
        })
        .to(rightRef.current, { xPercent: 10, duration: 10 }, "<")
        .fromTo(
          ".right02",
          { yPercent: 50, opacity: 0 },
          { yPercent: 0, duration: 100, display: "block", opacity: 1 },
          "<",
        );

      if (centerRef.current) {
        tl.from(centerRef.current, { duration: 0.000001, opacity: 0 }, ">");
      }
    }, targetRef);

    return () => ctx.revert();
  }, [conLeft, conRight, change, children]);

  return (
    <>
      <h1 className={`${styles.elevator}`} ref={targetRef}>
        <p className={styles.elevatorL} ref={leftRef}>
          {conLeft}
        </p>

        <p className="Thej" ref={centerRef}>
          {children}
        </p>
        <p className={styles.elevatorR} ref={rightRef}>
          <span className="right01">{conRight}</span>
          <span className="right02" style={{ display: "none", opacity: 0 }}>
            {change}
          </span>
        </p>
      </h1>
    </>
  );
};

MainTitle.propTypes = {
  conLeft: PropTypes.string.isRequired,
  conRight: PropTypes.string.isRequired,
  change: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.node,
};
export default MainTitle;
