// prop type
import PropTypes from "prop-types";

// node module
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";

// components
import SvgLine, { SvgLineIdList } from "./SvgLine";
import { Text } from "./Text";

// style
// import styles from "#root/styles/index.css";

// utils
import { CM } from "#root/utils";

export const tweenSVGLine = (pathElement, config = {}) => {
  const tl = gsap.timeline();
  const pathLength = pathElement.getTotalLength();
  const setValue = {
    ...config,
    // never override value
    opacity: 0,
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength,
    repeat: 0,
  };

  tl.set(pathElement, setValue);

  return tl;
};

function LineMotionText({ styleId, children, extendLineStyle, slicePoint = 1, cutoffRatio = 0.9 }) {
  const lineRef = useRef(null);
  useEffect(() => {
    if (null == lineRef.current) return;

    const pathElement =
      lineRef.current instanceof SVGPathElement ? lineRef.current : lineRef.current.querySelector("path");
    const animate = tweenSVGLine(pathElement);

    // watch
    const callback = (entries, observer) => {
      const [{ intersectionRatio }] = entries;
      if (cutoffRatio < intersectionRatio) {
        // 리팩토링
        const stream = [
          [{ duration: 2, opacity: 1 }, "start"],
          [{ duration: 1, strokeDashoffset: 0 }, `start+=${slicePoint}`],
        ];
        stream.map(chuck => animate.to(pathElement, ...chuck));

        // 전개 시
        // animate
        //   // .addLabel("start") 시작점에 레이블을 만들 수도 있음.
        //   .to(
        //     pathElement,
        //     {
        //       duration: 2,
        //       opacity: 1,
        //     },
        //     "start",
        //     // 시작점 북마킹.
        //   )
        //   .to(
        //     pathElement,
        //     {
        //       duration: 1,
        //       strokeDashoffset: 0,
        //     },
        //     `start+=${slicePoint}`,
        //     // 이전 구간의 duration의 slicePoint * 1% 부터 현재 구간 시작.
        //   );
        observer.disconnect();
      }
    };
    const intersectionObserver = new IntersectionObserver(callback, {
      threshold: [cutoffRatio],
    });
    intersectionObserver.observe(lineRef.current);

    // unmount
    const cleanUp = () => {
      intersectionObserver.unobserve(pathElement);
      animate.revert();
    };

    return cleanUp;
  }, [slicePoint, cutoffRatio]);

  return (
    <span className={CM("line-motion", "inline-grid grid-cols-1 grid-rows-1 place-items-center")}>
      <Text tagName="span" className="row-span-1 col-span-1 row-start-1 col-start-1">
        {children}
      </Text>
      <SvgLine
        ref={lineRef}
        shape={styleId}
        className={CM("svg", "row-span-1 col-span-1 row-start-1 col-start-1", extendLineStyle)}
      />
    </span>
  );
}

LineMotionText.propTypes = {
  styleId: PropTypes.oneOf(SvgLineIdList).isRequired,
  children: PropTypes.node.isRequired,
  extendLineStyle: PropTypes.string,
  slicePoint: PropTypes.number,
  cutoffRatio: PropTypes.number,
};

export default LineMotionText;
