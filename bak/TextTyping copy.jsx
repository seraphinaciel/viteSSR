import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Texttyping({ splitBy, content }) {
  const targetRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const createLetterNode = (text, index) => {
        const node = document.createElement("span");
        node.textContent = text;
        node.style.setProperty("--index", index);

        node.classList.add(splitBy === "letter" ? "char" : "word");

        return node;
      };

      const splitByLetter = (text) => [...text].map(createLetterNode);
      const splitByWord = (text) => text.split(" ").map(createLetterNode);

      const splitTargets = targetRef.current;
      let nodes = null;

      splitBy === "letter"
        ? (nodes = splitByLetter(splitTargets.innerText))
        : (nodes = splitByWord(splitTargets.innerText));

      if (nodes) splitTargets.firstChild.replaceWith(...nodes);

      if (splitBy === "letter") {
        const textLetter = (sArr, splitTargets) => {
          gsap.fromTo(
            sArr,
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
        };
        const sArr = gsap.utils.toArray(".char");
        textLetter(sArr, splitTargets);
      } else {
        const textReveal = (wArr, splitTargets) => {
          wArr.anim = gsap.from(splitTargets, {
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
        };
        const wArr = gsap.utils.toArray(".word");
        if (wArr.anim) {
          wArr.anim.progress(1).kill();
        }

        textReveal(wArr, splitTargets);
      }
    });
    return () => ctx.revert();
  }, [splitBy]);

  return (
    <>
      <p
        ref={targetRef}
        className="text-5xl/loose bg-slate-100 dark:bg-transparent dark:text-white p-8;"
      >
        {content}
      </p>
    </>
  );
}

Texttyping.propTypes = {
  content: PropTypes.string.isRequired,
  splitBy: PropTypes.string.isRequired,
  // wordAnim: PropTypes.string.isRequired,
};
