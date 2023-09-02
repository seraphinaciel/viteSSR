import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Letters({ content, className, children }) {
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
    <>
      <p ref={targetRef} className={`textSplit letter ${className}`}>
        {content}
      </p>
      {children}
    </>
  );
}

function Words({ content, className, children }) {
  const targetRef = useRef();
  const childrenRef = useRef(null);

  useEffect(() => {
    const splitTargets = targetRef.current;

    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTargets,
          toggleActions: "restart pause resume reverse",
          start: "top center",
          end: "+=100%",
          markers: true,
        },
        onComplete: animateSvg,
      });

      tl.from(splitTargets, {
        duration: 0.6,
        ease: "circ.out",
        yPercent: "100",
        opacity: 1,
        stagger: 0.02,
      });
      tl.from(childrenRef.current, { duration: 0.000001, opacity: 0 }, ">");
    }, targetRef);
    return () => ctx.revert();
  }, []);
  function animateSvg() {
    const paths = childrenRef.current.querySelectorAll(`svg path`);

    paths.forEach((p) => {
      const pathLength = p.getTotalLength();

      gsap.set(p, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });
      gsap.to(
        p,
        {
          duration: 1,
          opacity: 1,
          ease: "power3.out",
          strokeDashoffset: 0,
        },
        ">"
      );
    });
  }

  return (
    <>
      {children ? (
        <div ref={childrenRef} className="absolute overflow-hidden">
          {children}
        </div>
      ) : null}
      <div className="overflow-hidden">
        <p ref={targetRef} className={`textSplit words ${className}`}>
          {content}
        </p>
      </div>
    </>
  );
}

export default function Texttyping({ content, splitBy, className, children }) {
  if (splitBy === "letter") {
    return (
      <Letters content={content} className={className}>
        {children}
      </Letters>
    );
  } else if (splitBy === "words") {
    return (
      <Words content={content} className={className}>
        {children}
      </Words>
    );
  }

  return null;
}

Letters.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
Words.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
Texttyping.propTypes = {
  content: PropTypes.string.isRequired,
  splitBy: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
