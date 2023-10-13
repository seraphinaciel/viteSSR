import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animateSvg } from "#root/utils/animateSvg";

gsap.registerPlugin(ScrollTrigger);

const PropsType = {
  content: PropTypes.string,
  className: PropTypes.string,
  container: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
};

export function TextSvg({ tagName = "div", children, className = null }) {
  const targetRef = useRef(null);
  const Tagname = tagName;

  useEffect(() => {
    const splitTargets = targetRef.current;

    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTargets,
          toggleActions: "restart pause resume reverse",
          start: "top center",
          end: "+=100%",
          // markers: true,
        },
        onComplete: () => animateSvg(".svgAni  path", 1),
      });

      tl.from(splitTargets, {
        opacity: 1,
      });

      const svg = targetRef.current.querySelector("svg");
      if (svg) {
        tl.from(svg, { duration: 0.000001, opacity: 0 }, ">");
      }
    }, targetRef);

    return () => ctx.revert();
  }, []);
  return (
    <Tagname className={className} ref={targetRef}>
      {children}
    </Tagname>
  );
}
TextSvg.propTypes = PropsType;
