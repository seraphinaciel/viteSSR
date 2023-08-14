import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Textsplit({ content }) {
  const target = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const textReveal = (word, sentence) => {
        word.anim = gsap.from(sentence, {
          duration: 0.6,
          ease: "circ.out",
          yPercent: "100",
          opacity: 1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: sentence,
            toggleActions: "restart pause resume reverse",
            start: "top 40%",
          },
        });
      };

      const paragraph = target.current;
      const sentence = paragraph.querySelector("p");
      const word = content.split(" ");

      if (word.anim) {
        word.anim.progress(1).kill();
      }

      textReveal(word, sentence);
    }, target);
    return () => ctx.revert();
  }, [content]);

  return (
    <>
      <div className="overflow-hidden" ref={target}>
        <p>{content}</p>
      </div>
    </>
  );
}

Textsplit.propTypes = {
  content: PropTypes.string.isRequired,
};
