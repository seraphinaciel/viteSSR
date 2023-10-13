// prop type
import PropTypes from "prop-types";

// node module
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutTitle = ({ className, conLeft, conRight }) => {
  const targetRef = useRef(null);
  const [axis, setAxis] = useState("x");

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 50%",
          end: "+=100%",
          scrub: true,
        },
      });

      const handleResize = () => {
        const mobile = document.querySelector("main").clientWidth;
        if (mobile <= 767) {
          setAxis("yPercent");
        } else {
          setAxis("x");
        }
      };

      tl.to(".conLeft", { [axis]: 0 })
        .to(".conRight", { [axis]: 0 }, "<")
        .to(".conLeft", { [axis]: -100 })
        .to(".conRight", { [axis]: 100 }, "<");

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, targetRef);

    return () => ctx.revert();
  }, [axis]);

  return (
    <>
      <h1 className={className} ref={targetRef}>
        <p className="conLeft">{conLeft}</p>
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
