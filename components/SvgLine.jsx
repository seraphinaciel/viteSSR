// import { useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SvgLine = ({ id, className }) => {
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const paths = gsap.utils.toArray(`svg#${id} path`);
  //     paths.forEach((path) => {
  //       const pathLength = path.getTotalLength();
  //       gsap.set(path, {
  //         strokeDasharray: pathLength,
  //         strokeDashoffset: pathLength,
  //       });

  //       console.log(pathLength);
  //       gsap.to(path, {
  //         strokeDashoffset: 0,
  //         duration: duration / 1000, // Convert duration to seconds
  //         delay: delay / 1000, // Convert delay to seconds
  //         scrollTrigger: {
  //           trigger: path,
  //           start: "top 100%",
  //           end: "top center",
  //           scrub: true,
  //         },
  //       });
  //     });
  //   });

  //   return () => ctx.revert();
  // }, [id, delay, duration]);

  const components = {
    sBubble: <Bubble className={className} />,
    sArrow: <Arrow />,
  };
  return components[id] || "error";
};

function Bubble({ className }) {
  return (
    <svg
      id="sBubble"
      className={className}
      width="347"
      height="90"
      viewBox="0 0 347 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Bubble-path"
        d="M167.071 11.3825C114.038 10.8715 58.5416 10.9539 11.5558 36.2693C7.5723 38.4119 3.41285 41.0324 1.74906 45.334C-1.89846 54.7778 8.48418 63.4141 17.571 67.3531C49.5668 81.2304 84.7142 85.2024 119.366 87.2461C172.255 90.3611 225.368 89.3227 278.113 84.1641C295.886 82.4171 313.916 80.1261 330.25 72.726C336.681 69.8088 343.288 65.5072 345.352 58.585C348.632 47.5755 338.873 37.1758 329.338 31.1766C306.301 16.7224 279.265 10.6903 252.548 6.81714C184.541 -3.05519 114.838 -0.335788 47.743 14.7776"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      id="sArrow"
      width="188"
      height="268"
      viewBox="0 0 188 268"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="188" height="268" fill="white" />
      <path
        d="M124.211 22.8809C124.211 22.8809 148.769 44.4868 145.88 77.6159C142.991 110.745 124.384 146.524 75.0951 142.434C40.4251 139.553 34.6468 115.066 36.0914 104.983C37.536 94.9007 50.0605 79.0563 74.1272 82.6573C98.194 86.2583 127.1 125.149 119.877 159.719C112.654 194.288 83.7626 224.536 56.3155 234.619"
        stroke="#040000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M67 211C67 211 51.9819 234.619 51.9819 237.5C56.5 237.5 80.5 235.5 80.5 235.5"
        stroke="#040000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

SvgLine.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  // duration: PropTypes.number.isRequired,
  // delay: PropTypes.number,
};
Bubble.propTypes = {
  className: PropTypes.string,
};
Arrow.propTypes = {
  className: PropTypes.string,
};
export default SvgLine;
