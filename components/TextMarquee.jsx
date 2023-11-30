import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Textmarquee({
  content,
  speed,
  tagName = "div",
  children,
}) {
  const marquee = useRef();
  const TagName = tagName;

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

      console.log(parentSelector);
      console.log(firstElement);
      const tl = gsap.timeline();
      tl.fromTo(
        firstElement,
        { marginLeft: 0 },
        {
          marginLeft: -distanceX,
          duration: speed,
          ease: "none",
          repeat: -1,
        }
      ).to(parentSelector, {
        x: xEnd,
        scrollTrigger: {
          trigger: firstElement,
          scrub: 1,
        },
      });
    });
  }, [speed]);

  return (
    <TagName className="overflow-hidden" id="marquee_wrap">
      <div className="flex" ref={marquee}>
        <span className="whitespace-nowrap uppercase flex flex-nowrap items-center justify-start gap-x-12">
          {content}
          {children}
        </span>
      </div>
    </TagName>
  );
}

Textmarquee.propTypes = {
  content: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  tagName: PropTypes.string,
  children: PropTypes.node,
};
