import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutTitle = ({ className, conLeft, conRight }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 50%",
          end: "+=100%",
          // pin: true,
          markers: true,
          scrub: true,
        },
      });

      tl.to(".conLeft", { x: 0 })
        .to(".conRight", { x: 0 }, "<")
        .to(".conLeft", { x: -100 })
        .to(".conRight", { x: 100 }, "<");
    }, targetRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <h1 className={className} ref={targetRef}>
        <p className="conLeft text-right">{conLeft}</p>
        <p className="conRight ">{conRight}</p>
      </h1>
    </>
  );
};

AboutTitle.propTypes = {
  conLeft: PropTypes.string.isRequired,
  conRight: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default AboutTitle;
