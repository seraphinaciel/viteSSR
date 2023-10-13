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
  location: PropTypes.string,
  keyword: PropTypes.arrayOf(PropTypes.string),
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
    <Tagname className={`split-letter ${className}`}>
      <span ref={targetRef}>{content}</span>
    </Tagname>
  );
}
Letter.propTypes = PropsType;

// 어절 쪼개기
export function SplitWord({ content, className, tagName = "p", keyword, location }) {
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
          // start: "top 70%",
          // end: "+=70%",
        },
      });
    }, targetRef);
    return () => ctx.revert();
  }, [content]);

  const contentWords = content.split(" ");
  const keywordArray = Array.isArray(keyword) ? keyword : [keyword];

  return (
    <Tagname ref={targetRef} className={`split-words ${className}`}>
      {contentWords.map((word, index) =>
        keywordArray.includes(word) ? (
          <a href={location} className="word" key={index}>
            {word}
          </a>
        ) : (
          <span key={index} className="word">
            {word}
          </span>
        ),
      )}
    </Tagname>
  );
}
SplitWord.propTypes = PropsType;

// 문단(효과)
export function Sentence({ content, className, children, tagName = "div" }) {
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
          end: "+=100%",
        },
        onComplete: () => animateSvg(gsap.utils.toArray(".split-sentence path"), 1),
      });

      tl.from(splitTargets, {
        duration: 0.6,
        ease: "circ.out",
        yPercent: "100",
        opacity: 1,
        stagger: 2,
      });

      if (childrenRef.current) {
        tl.from(childrenRef.current, { duration: 0.000001, opacity: 0 }, ">");
      }
    }, targetRef);

    return () => ctx.revert();
  }, [content, children]);

  return (
    <>
      {children ? (
        <div className={`split-sentence relative ${className} `}>
          <Tagname ref={targetRef} className="overflow-hidden">
            <span>{content}</span>
          </Tagname>
          <div ref={childrenRef}>{children}</div>
        </div>
      ) : (
        <div className={`split-sentence overflow-hidden ${className}`}>
          <Tagname ref={targetRef}>{content}</Tagname>
        </div>
      )}
    </>
  );
}
Sentence.propTypes = PropsType;
