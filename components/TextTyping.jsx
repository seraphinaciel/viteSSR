import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Letters({ content }) {
  const targetRef = useRef();
  useEffect(() => {
    const splitTargets = targetRef.current;
    let ctx = gsap.context(() => {
      const createLetterNode = (text, index) => {
        const node = document.createElement("span");
        node.textContent = text;
        node.style.setProperty("--index", index);
        node.classList.add("chars");
        return node;
      };

      const splitByLetter = (text) => [...text].map(createLetterNode);

      let nodes = splitByLetter(splitTargets.innerText);

      if (nodes) splitTargets.firstChild.replaceWith(...nodes);

      gsap.fromTo(
        gsap.utils.toArray(".textSplit .chars"),
        {
          willChange: "opacity",
          opacity: 0.1,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 1,
          scrollTrigger: {
            trigger: splitTargets,
            toggleActions: "restart pause resume reverse",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        }
      );
    }, targetRef);
    return () => ctx.revert();
  }, [content]);
  return (
    <p ref={targetRef} className="textSplit letter">
      {content}
    </p>
  );
}
Letters.propTypes = {
  content: PropTypes.string.isRequired,
};
function Words({ content }) {
  const targetRef = useRef();

  useEffect(() => {
    const splitTargets = targetRef.current;

    let ctx = gsap.context(() => {
      gsap.from(splitTargets, {
        duration: 0.6,
        ease: "circ.out",
        yPercent: "100",
        opacity: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: splitTargets,
          toggleActions: "restart pause resume reverse",
          start: "top 40%",
        },
      });
    }, targetRef);
    return () => ctx.revert();
  }, [content]);

  return (
    <div className="overflow-hidden">
      <p ref={targetRef} className="textSplit words">
        {content}
      </p>
    </div>
  );
}
Words.propTypes = {
  content: PropTypes.string.isRequired,
};

export default function Texttyping({ content, splitBy }) {
  if (splitBy === "letter") {
    return <Letters content={content} />;
  } else if (splitBy === "words") {
    return <Words content={content} />;
  }

  return null;
}

Texttyping.propTypes = {
  content: PropTypes.string.isRequired,
  splitBy: PropTypes.string.isRequired,
};
