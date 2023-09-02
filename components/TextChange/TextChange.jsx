import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./TextChange.module.css";
import useAnimateSvg from "../hooks/useAnimateSvg";

gsap.registerPlugin(ScrollTrigger);

const TextChange = ({ conLeft, conRight, change, img, children }) => {
  const targetRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);

  useEffect(() => {
    // function animateSvg() {
    //   const paths = document.querySelectorAll(".Thej path");

    //   console.log(paths);
    //   paths.forEach((p) => {
    //     const pathLength = p.getTotalLength();

    //     let tl = gsap.timeline();
    //     tl.set(p, {
    //       strokeDasharray: pathLength,
    //       strokeDashoffset: pathLength,
    //       duration: 0.00000000001,
    //     }).to(
    //       p,
    //       {
    //         duration: 5,
    //         opacity: 1,
    //         ease: "power3.out",
    //         strokeDashoffset: 0,
    //       },
    //       "<"
    //     );
    //   });
    // }

    const pathSelector = useAnimateSvg();

    const ctx = gsap.context(() => {
      const pathSelector = ".Thej path";
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".elevator_wrap",
          start: "top 00%",
          end: "bottom 0%",
          markers: true,
          scrub: true,
        },
        // onComplete: animateSvg(),
        onComplete: pathSelector,
        // props이 안넘어가넹? 훅을 만들어야 하남? 훅 만들다 말았음 해보고 안되면 말고
        // 출근 하자마자 폴더 압축!
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
          "<"
        )
        .to(centerRef.current, { opacity: 1, duration: 10 }, ">");
    }, targetRef);

    return () => ctx.revert();
  }, [conLeft, conRight, change, img]);

  return (
    <>
      <section ref={targetRef} className={styles.elevator}>
        <div className="elevator_wrap">
          <p className={styles.elevatorL} ref={leftRef}>
            {conLeft}
          </p>

          <p className="Thej" style={{ opacity: 0 }} ref={centerRef}>
            {children}
          </p>
          <p className={styles.elevatorR} ref={rightRef}>
            <span className="right01">{conRight}</span>
            <span className="right02" style={{ display: "none", opacity: 0 }}>
              {change}
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

TextChange.propTypes = {
  conLeft: PropTypes.string.isRequired,
  conRight: PropTypes.string.isRequired,
  change: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.node,
};
export default TextChange;
