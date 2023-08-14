import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Textmarquee.module.css";
import SvgLine from "../SvgLine";
gsap.registerPlugin(ScrollTrigger);

export default function Textmarquee({ content, speed, withSvg, svgId }) {
  const marquee = useRef();

  useEffect(() => {
    const parentSelector = marquee.current;
    const clone = parentSelector.innerHTML;

    parentSelector.insertAdjacentHTML("beforeend", clone);
    parentSelector.insertAdjacentHTML("beforeend", clone);

    gsap.utils.toArray("#marquee_wrap").forEach((section) => {
      const container = section.querySelector("div");
      const xEnd = (container.scrollWidth - section.offsetWidth) * -1;
      const firstElement = parentSelector.children[0];
      const distanceX = firstElement.clientWidth;

      const tl = gsap.timeline();
      tl.fromTo(
        firstElement,
        { marginLeft: 0 },
        {
          marginLeft: -distanceX,
          duration: speed,
          ease: "none",
          repeat: -1,
          start: "top center",
          end: "+=bottom",
        }
      ).to(parentSelector, {
        x: xEnd,
        scrollTrigger: {
          trigger: firstElement,
          scrub: 1,
          markers: true,
        },
      });
    });
  }, [speed]);

  return (
    <section className={` ${styles.marquee_wrap}`} id="marquee_wrap">
      <div className={styles.marquee_items} ref={marquee}>
        <span>
          {content}
          {withSvg && <SvgLine id={svgId} duration={500} delay={50} />}
        </span>
      </div>
    </section>
  );
}

Textmarquee.propTypes = {
  content: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  withSvg: PropTypes.bool,
  svgId: PropTypes.string,
};
