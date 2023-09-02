import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animateSvg } from "#root/utils/animateSvg";

gsap.registerPlugin(ScrollTrigger);

const PropsType = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

function Letter({ content, className }) {
  const targetRef = useRef();

  useEffect(() => {
    const splitTargets = targetRef.current;

    let ctx = gsap.context(() => {
      const createLetterNode = (text, index) => {
        const node = document.createElement("span");
        node.textContent = text;
        node.style.setProperty("--index", index);
        node.classList.add("char");
        node.style.opacity = "0.1";
        return node;
      };

      const splitByLetter = (text) => [...text].map(createLetterNode);
      let nodes = splitByLetter(splitTargets.innerText);
      if (nodes) splitTargets.firstChild.replaceWith(...nodes);

      gsap.to(gsap.utils.toArray(".split.letter .char"), {
        willChange: "opacity",
        opacity: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: splitTargets,
          toggleActions: "restart pause resume reverse",
          start: "top 100%",
          end: "bottom 50%",
          scrub: true,
          markers: true,
        },
      });
    }, targetRef);

    return () => ctx.revert();
  }, [content]);
  return (
    <div
      className={
        className === undefined ? "split letter" : `split letter ${className}`
      }
    >
      <p ref={targetRef}>{content}</p>
    </div>
  );
}
Letter.propTypes = PropsType;

function Sentence({ content, className, children }) {
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
        onComplete: () => animateSvg(".text-sentence path", 1),
      });

      tl.from(splitTargets, {
        duration: 0.6,
        ease: "circ.out",
        yPercent: "100",
        opacity: 1,
        stagger: 0.02,
      });

      if (childrenRef.current) {
        tl.from(childrenRef.current, { duration: 0.000001, opacity: 0 }, ">");
      }
    }, targetRef);
    return () => ctx.revert();
  }, [children]);

  return (
    <div
      className={
        className === undefined
          ? "split sentence"
          : `split sentence ${className}`
      }
    >
      {children ? <div ref={childrenRef}>{children}</div> : null}
      <div className="overflow-hidden">
        <p ref={targetRef}>{content}</p>
      </div>
    </div>
  );
}
Sentence.propTypes = PropsType;

function Word({ content, className }) {
  const targetRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const splitTargets = targetRef.current;
      const words = content.split(" ");

      // 기존에 생성된 노드들을 제거
      while (splitTargets.firstChild) {
        splitTargets.removeChild(splitTargets.firstChild);
      }

      words.forEach((word, index) => {
        const node = document.createElement("span");
        node.textContent = word;
        node.style.setProperty("--index", index);
        node.classList.add("word");
        splitTargets.appendChild(node);
      });

      gsap.from(gsap.utils.toArray(".split.words .word"), {
        ease: "circ.out",
        y: splitTargets.offsetHeight,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: splitTargets,
          toggleActions: "restart pause resume reverse",
          start: "top 40%",
          markers: true,
          once: true,
        },
      });
    }, targetRef);
    return () => ctx.revert();
  }, [content]);

  return (
    <div
      className={
        className === undefined ? "split words" : `split words ${className}`
      }
    >
      <p
        ref={targetRef}
        className="flex flex-wrap justify-center gap-x-[0.25em] overflow-hidden"
      >
        {content}
      </p>
    </div>
  );
}
Word.propTypes = PropsType;

export default function TextSplit({ content, splitBy, className, children }) {
  if (splitBy === "letter") {
    return (
      <Letter content={content} className={className}>
        {children}
      </Letter>
    );
  } else if (splitBy === "sentence") {
    return (
      <Sentence content={content} className={className}>
        {children}
      </Sentence>
    );
  } else if (splitBy === "word") {
    return (
      <Word content={content} className={className}>
        {children}
      </Word>
    );
  }

  return null;
}
TextSplit.propTypes = {
  ...PropsType,
  splitBy: PropTypes.string.isRequired,
};
