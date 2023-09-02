import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import styles from "./TextLR.module.css";

gsap.registerPlugin(ScrollTrigger);

const TextLR = ({ id, conLeft, conRight, className }) => {
  const textLR = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let [xl, xle, xr, xre] =
        id === "in" ? [-100, 0, 100, 0] : [0, -100, 0, 100];

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.elevator_${id}`,
          start: "top 50%",
          end: "+=100%",
          pin: true,
          markers: true,
          scrub: true,
        },
      });

      tl.to(".elevatorL", { x: xl, y: "bottom", duration: 10 })
        .to(".elevatorR", { x: xr, y: "bottom", duration: 10 }, "<")
        .to(".elevatorL", { x: xle, duration: 10 })
        .to(".elevatorR", { x: xre, duration: 10 }, "<");
    }, textLR);

    return () => ctx.revert();
  }, [id]);

  return (
    <>
      <div ref={textLR}>
        <div
          className={`${className} elevator elevator_${id} text-black text-8xl grid grid-cols-2 gap-3 capitalize`}
        >
          <div className="elevatorL text-right">{conLeft}</div>
          <div className="elevatorR ">{conRight}</div>
        </div>
      </div>
    </>
  );
};

TextLR.propTypes = {
  id: PropTypes.string.isRequired,
  conLeft: PropTypes.string.isRequired,
  conRight: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default TextLR;
