import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./TextChange.module.css";

gsap.registerPlugin(ScrollTrigger);

const TextChange = ({ id, conLeft, conRight, change, img, children }) => {
  const targetRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let [xl, xle, xr, xre] = id === "in" ? [-100, 0, 100, 0] : [0, 0, 0, 0];

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.elevator_${id}`,
          start: "top 0%",
          end: "bottom 0%",
          markers: true,
          scrub: true,
        },
      });

      tl.to(leftRef.current, { x: xl, y: "bottom", duration: 10, delay: 50 })
        .to(rightRef.current, { x: xr, y: "bottom" }, "<")
        .set(leftRef.current, { innerHTML: `${conLeft} <img src=${img} />` })
        .set(rightRef.current, { innerHTML: change })
        .to(`.elevator_${id}`, { gap: 0 }, "<")
        .to(leftRef.current, { x: xle, duration: 10 })
        .to(rightRef.current, { x: xre, duration: 10 }, "<");
    }, targetRef);

    return () => ctx.revert();
  }, [id, conLeft, conRight, change, img]);

  return (
    <>
      {children}
      <div ref={targetRef}>
        <div className={`${styles.elevator} elevator_${id}`}>
          <div className={`${styles.elevatorL} elevatorL`} ref={leftRef}>
            {conLeft}
          </div>
          <div className={`${styles.elevatorR} elevatorR`} ref={rightRef}>
            {conRight}
          </div>
        </div>
      </div>
    </>
  );
};

TextChange.propTypes = {
  id: PropTypes.string.isRequired,
  conLeft: PropTypes.string.isRequired,
  conRight: PropTypes.string.isRequired,
  change: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.node,
};
export default TextChange;
