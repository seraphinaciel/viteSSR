import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";

gsap.registerPlugin(ScrollTrigger);

export default function Texttyping({ content }) {
  const target = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const textTyping = (text) => {
        console.log("good");

        char.anim = gsap.fromTo(
          word,
          {
            willChange: "opacity",
            opacity: 0,
          },
          {
            opacity: 1,
            color: "red",
            stagger: 0.08,
            scrollTrigger: {
              trigger: text,
              toggleActions: "restart pause resume reverse",
              start: "top 50%",
              // end: "bottom top",
              scrub: true,
            },
          }
        );
        // char.anim = gsap.fromTo(
        //   word,
        //   {
        //     willChange: "opacity",
        //     opacity: 0.1,
        //   },
        //   {
        //     opacity: 1,
        //     y: 0,
        //     stagger: 0.08,
        //     scrollTrigger: {
        //       trigger: word,
        //       toggleActions: "restart pause resume reverse",
        //       start: "top bottom",
        //       end: "bottom top",
        //       scrub: true,
        //     },
        //   }
        // );
      };

      const splitContent = target.current;
      const sentence = splitContent.querySelector("p");
      const word = content.split(" ");
      const char = content.split("");

      console.log(sentence, word, char);
      if (char.anim) {
        char.anim.progress(1).kill();
      }
      // textTyping(word, char);

      // char.forEach((text) => {
      //   textTyping(text);
      // });
      // 배열에 공백 끼워넣는거...?
    });
    return () => ctx.revert();
  }, [content]);

  return (
    <>
      <div
        ref={target}
        className="text-5xl/loose bg-slate-100 dark:bg-transparent dark:text-white p-8;"
      >
        <p>{content}</p>
      </div>
    </>
  );
}

Texttyping.propTypes = {
  content: PropTypes.string.isRequired,
};
