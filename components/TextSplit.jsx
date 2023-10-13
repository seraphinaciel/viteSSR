import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animateSvg } from "#root/utils/animateSvg";
import styles from "./TextSplit.module.css";

gsap.registerPlugin(ScrollTrigger);

const PropsType = {
  content: PropTypes.string,
  className: PropTypes.string,
  container: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
  location: PropTypes.string,
};

// 음절 쪼개기
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

      const splitByLetter = text => [...text].map(createLetterNode);
      let nodes = splitByLetter(splitTargets.innerText);
      if (nodes) splitTargets.firstChild.replaceWith(...nodes);

      gsap.to(gsap.utils.toArray(".split-letter .char"), {
        willChange: "opacity",
        opacity: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: splitTargets,
          toggleActions: "restart pause resume reverse",
          // start: "top 20%",
          // end: "bottom 50%",
          scrub: true,
        },
      });
    }, targetRef);

    return () => ctx.revert();
  }, [content]);
  return (
    <div className={`split-letter ${className}`}>
      <Tagname ref={targetRef}>{content}</Tagname>
    </div>
  );
}
Letter.propTypes = PropsType;

// 어절 쪼개기
export function Word({ content, className, tagName = "p" }) {
  const Tagname = tagName;
  const targetRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const splitTargets = targetRef.current;

      gsap.from(gsap.utils.toArray(".split-words .word"), {
        ease: "circ.out",
        y: splitTargets.offsetHeight,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: splitTargets,
          toggleActions: "restart pause resume reverse",
          start: "top 70%",
          end: "+=70%",
        },
      });
    }, targetRef);
    return () => ctx.revert();
  }, [content]);

  return (
    <Tagname ref={targetRef} className={`split-words ${className}`}>
      {content.split(" ").map((word, index) => {
        return (
          <span key={index} className="word" style={{ "--index": index }}>
            {word}
          </span>
        );
      })}
    </Tagname>
  );
}
Word.propTypes = PropsType;

// 어절 + svg
export function SWord({ content, className, tagName = "div", children, location }) {
  const Tagname = tagName;
  const targetRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const splitTargets = targetRef.current;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: gsap.utils.toArray(".sword"),
          toggleActions: "restart pause resume reverse",
          // start: "top 50%",
          // end: "+=",
          markers: true,
        },
        onComplete: () => animateSvg(".sword path", 0.25),
      });

      if (location) {
        tl.set(".sword path", {
          duration: 0.000001,
          opacity: 0,
        });
      }
      tl.from(gsap.utils.toArray(".sword"), {
        duration: 0.6,
        ease: "circ.out",
        y: splitTargets.offsetHeight,
        opacity: 1,
        stagger: 0.02,
      });
    }, targetRef);
    return () => ctx.revert();
  }, [content, className, tagName, children, location]);

  const SvgContent = ({ children, className }) => {
    return (
      <>
        <Tagname className={`${styles.swords} ${className}`}>
          <p ref={targetRef}>
            {content.split(" ").map((word, index) => {
              if (word.includes(location)) {
                return (
                  <span key={index} className="sword" style={{ "--index": index }}>
                    {children}
                    {word}
                  </span>
                );
              } else {
                return (
                  <span key={index} className="sword" style={{ "--index": index }}>
                    {word}
                  </span>
                );
              }
            })}
          </p>
        </Tagname>
      </>
    );
  };

  return (
    <>
      {children ? <SvgContent className={`${className}`}>{children}</SvgContent> : <SvgContent className={className} />}
    </>
  );
}
SWord.propTypes = PropsType;

// 문단(효과)
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
          // start: "top 70%",
          // end: "+=70%",
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

  const SvgContent = ({ children, className }) => {
    return (
      <div className={`split-sentence ${className}`}>
        <Tagname ref={targetRef} className="overflow-hidden">
          {content}
        </Tagname>
        {children}
      </div>
    );
  };
  return (
    <>
      {children ? (
        <SvgContent className={`${className} relative`}>
          <div ref={childrenRef}>{children}</div>
        </SvgContent>
      ) : (
        <SvgContent className={className} />
      )}
    </>
  );
}
Sentence.propTypes = PropsType;
