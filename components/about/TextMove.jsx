import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function TextMove({ className, location, coord, children }) {
  const target = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const paragraph = target.current;
      const sentence = paragraph.querySelectorAll("span");

      const tl = gsap.timeline();

      const setAni = index => {
        const animProps = {
          opacity: 0,
        };

        const isWidth = location[index] === "w";

        animProps[location[index]] = isWidth ? innerWidth * coord[index] : innerHeight * coord[index];

        tl.from(sentence[index], animProps);
      };

      for (let i = 0; i < sentence.length; i++) {
        setAni(i);
      }

      ScrollTrigger.create({
        animation: tl,
        trigger: paragraph,
        start: "0% 20%",
        end: "+=100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      });
    }, target);
    return () => ctx.revert();
  }, [location, coord]);

  return (
    <article className={className} ref={target}>
      {children}
    </article>
  );
}

TextMove.propTypes = {
  location: PropTypes.array,
  coord: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node,
};
