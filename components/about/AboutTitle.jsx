// prop type
import PropTypes from "prop-types";

// node module
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// utils
import useCssTheme from "#root/hooks/useCssTheme";
import { CM } from "#root/utils";

const AboutTitle = ({ className, conLeft, conRight }) => {
  const { md, mobile } = useCssTheme(state => state.screens);

  const targetRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: targetRef.current,
        start: "top 50%",
        end: "+=100%",
        scrub: true,
      },
    });

    const mm = gsap.matchMedia();
    mm.add(`(min-width:${md})`, () => {
      tl.to(".conLeft", { x: 0 })
        .to(".conRight", { x: 0 }, "<")
        .to(".conLeft", { x: -100 })
        .to(".conRight", { x: 100 }, "<");
    });

    mm.add(
      `(max-width:${mobile.max})`,
      () => {
        tl.set(targetRef.current, { yPercent: 120 }, ">")
          .set(".conLeft", { xPercent: 0, yPercent: 0, duration: 10 }, "+=10")
          .set(".conRight", { xPercent: 0, yPercent: 0, duration: 10 }, "<")
          .to(".conLeft", { xPercent: 50, yPercent: -280, duration: 10 })
          .to(".conRight", { xPercent: -50, yPercent: 0, duration: 10 }, "<");
      },
      targetRef,
    );
    return () => mm.revert();
  }, [md, mobile]);

  return (
    <>
      <h1 className={CM("text-heading-3 md:text-special capitalize", className)} ref={targetRef}>
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
