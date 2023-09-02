import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animateSvg } from "#root/utils/animateSvg";

gsap.registerPlugin(ScrollTrigger);

const PropsType = {
  content: PropTypes.string,
  className: PropTypes.string,
  container: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
};

export function Letter({ content, className, tagName = "p" }) {
  const targetRef = useRef();
  const Tagname = tagName;

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

      gsap.to(gsap.utils.toArray(".split-letter .char"), {
        willChange: "opacity",
        opacity: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: splitTargets,
          toggleActions: "restart pause resume reverse",
          start: "top 90%",
          end: "bottom 50%",
          scrub: true,
          // markers: true,
        },
      });
    }, targetRef);

    return () => ctx.revert();
  }, [content]);
  return (
    <div
      className={
        className === undefined ? "split-letter" : `split-letter ${className}`
      }
    >
      <Tagname ref={targetRef}>{content}</Tagname>
    </div>
  );
}
Letter.propTypes = PropsType;

export function Sentence({ content, className, children, tagName = "p" }) {
  const targetRef = useRef();
  const childrenRef = useRef(null);
  const Tagname = tagName;

  useEffect(() => {
    const splitTargets = targetRef.current;

    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTargets,
          toggleActions: "restart pause resume reverse",
          start: "top center",
          end: "+=100%",
          // markers: true,
        },
        onComplete: () => animateSvg(".split-sentence path", 1),
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
  }, [content, children]);

  return (
    <div
      className={
        className === undefined
          ? "split-sentence"
          : `split-sentence ${className}`
      }
    >
      {children ? <div ref={childrenRef}>{children}</div> : null}
      <div className="overflow-hidden">
        <Tagname ref={targetRef}>{content}</Tagname>
      </div>
    </div>
  );
}
Sentence.propTypes = PropsType;

export function Word({ content, className, tagName = "p" }) {
  const Tagname = tagName;
  const targetRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const splitTargets = targetRef.current;
      const words = content.split(" ");

      // 기존에 생성된 노드들을 제거
      while (splitTargets.firstChild) {
        splitTargets.removeChild(splitTargets.firstChild);
      }

      // console.log(children.length);
      words.forEach((word, index) => {
        const node = document.createElement("span");
        node.textContent = word;
        node.style.setProperty("--index", index);
        node.classList.add("word");
        splitTargets.appendChild(node);
      });

      gsap.from(gsap.utils.toArray(".split-words .word"), {
        ease: "circ.out",
        y: splitTargets.offsetHeight,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: splitTargets,
          toggleActions: "restart pause resume reverse",
          start: "top 40%",
          // markers: true,
          once: true,
        },
      });
    }, targetRef);
    return () => ctx.revert();
  }, [content]);

  return (
    <div
      className={
        className === undefined ? "split-words" : `split-words ${className}`
      }
    >
      <Tagname
        ref={targetRef}
        className="flex flex-wrap justify-center gap-x-[0.25em] overflow-hidden"
      >
        {content}
      </Tagname>
    </div>
  );
}
Word.propTypes = PropsType;
