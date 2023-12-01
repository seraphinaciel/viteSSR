// prop type
import PropTypes from "prop-types";

// node module
import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// components
import LineMotionText from "./LineMotionText";

// style
// import styles from "./TextSplit.module.css";

// utils
import { animateSvg } from "#root/utils/animateSvg";
import { CM } from "#root/utils";
import { SvgLineIdList } from "./SvgLine";

const splitTypeList = ["none", "word", "letter"];
const animationTypeList = ["fade in", "fade up", "fill"];
const unitClass = "split-unit";

export const animationConfigSet = {
  title: { arrange: { start: "top 70%", end: "+=70%" } },
  description: {
    arrange: {
      start: "top 95%",
    },
  },
};

const contentToArray = (split, content) => {
  switch (split) {
    case "letter":
      return [...content];
    case "word":
      return content.split(" ");
    case "none":
    default:
      return [content];
  }
};

const animate = ({ context, type, target, trigger, options }) => {
  const { duration, markers, ease, arrange } = options;
  const pathElements = gsap.utils.toArray(`${target} path`);
  const config = (() => {
    switch (type) {
      case "fade in":
        return {
          api: "from",
          params: [
            {
              x: 0,
              z: 0,
              y: trigger.offsetHeight * 1,
              willChange: "opacity",
              opacity: 0,
              stagger: 0.15,
              duration,
              ease,
            },
          ],
        };
      case "fade up":
        return {
          api: "from",
          params: [
            {
              x: 0,
              y: trigger.offsetHeight * 1.1,
              z: 0,
              willChange: "opacity",
              opacity: 0,
              stagger: 0.03,
              duration,
              ease,
            },
          ],
        };
      case "fill":
        return {
          api: "to",
          params: [
            {
              willChange: "opacity",
              opacity: 1,
              stagger: 1,
            },
          ],
        };
      default:
        return {};
    }
  })();

  // console.group();
  // console.log(pathElements);
  // console.log(config);
  // console.groupEnd();

  if (null == config?.api) return;

  // add animation
  const tl = gsap.timeline({
    scrollTrigger: {
      start: arrange.start,
      end: arrange.end,
      toggleActions: "restart pause resume reverse",
      trigger,
      // markers,
      scrub: type === "fill" ? 1.5 : false,
    },
    onComplete: 0 < pathElements.length && (() => animateSvg(pathElements, duration)),
  });

  // when use svg path animation
  if (0 < pathElements.length) {
    tl.set(pathElements, { opacity: 0 });
  }

  tl[config.api](gsap.utils.toArray(target), ...config.params);
};

export function Word({
  // component
  content,
  tagName = "span",
  splitType = "word",
  // animation
  animationConfig,
  animationType = "fade up",
  // animation:svg path
  location = null,
  styleId = null,
  color = "black",
  // rest : className...
  ...props
}) {
  const Wrapper = tagName;
  const wrap = useRef(null);
  const splitContent = contentToArray(splitType, content);
  useEffect(() => {
    const ctx = gsap.context(context => {
      const options = {
        duration: 1,
        ease: "circ.out",
        arrange: {
          start: "top center",
          end: "bottom center",
        },
        markers: false,
        ...animationConfig,
      };

      context.add(splitType, () =>
        animate({
          context,
          type: animationType,
          target: `.${unitClass}`,
          trigger: wrap.current,
          options,
        }),
      );
      context[splitType]();
    }, wrap);

    // unmount
    return () => ctx.revert();
  }, [content, splitType, animationType, animationConfig]);

  return (
    <Wrapper
      ref={wrap}
      className={CM(
        // base
        {
          "overflow-hidden ": location,
          "flex flex-wrap items-center gap-x-[0.25em]": animationType === "fade up",
        },
        // possible override by props
        props.className,
      )}
    >
      {splitContent.map((word, index) => {
        return (
          <Fragment key={index}>
            <span
              className={CM(unitClass, {
                "opacity-[0.1]": splitType === "letter",
              })}
              style={{
                "--index": index,
              }}
            >
              {word.includes(location) ? (
                <LineMotionText styleId={styleId} color={color} animateDelegation={false}>
                  {word}
                </LineMotionText>
              ) : (
                `${word}${splitType === "word" ? " " : ""}`
              )}
            </span>
          </Fragment>
        );
      })}
    </Wrapper>
  );
}

Word.propTypes = {
  // component render props
  content: PropTypes.string.isRequired,
  tagName: PropTypes.string,
  splitType: PropTypes.oneOf(splitTypeList),
  className: PropTypes.string,
  // animation props
  animationConfig: PropTypes.shape({
    arrange: PropTypes.shape({
      start: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      end: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    }),
    markers: PropTypes.bool,
  }),
  animationType: PropTypes.oneOf(animationTypeList),
  // SVG props
  location: PropTypes.string,
  styleId: PropTypes.oneOf(SvgLineIdList),
  color: PropTypes.string,
};

export default Word;
