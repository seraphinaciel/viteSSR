import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
// import useCheckMobile from "../hooks/useCheckMobile";

const SvgIcons = ({ color = "black", types, className }) => {
  const targetRef = useRef();
  // const mainWidth = useCheckMobile();

  let pathD = [
    { d01: 100, d02: 0, d03: 100, d04: 72.5869 },
    { d01: 100, d02: 127.413, d03: 100, d04: 200 },
    { d01: 138.268, d02: 7.61133, d03: 119.06, d04: 53.9837 },
    { d01: 80.9391, d02: 146.015, d03: 61.731, d04: 192.387 },
    { d01: 192.387, d02: 61.7314, d03: 146.015, d04: 80.9395 },
    { d01: 53.9837, d02: 119.06, d03: 7.6114, d04: 138.268 },
    { d01: 138.268, d02: 192.388, d03: 119.06, d04: 146.016 },
    { d01: 80.9391, d02: 53.9844, d03: 61.731, d04: 7.61205 },
    { d01: 192.387, d02: 138.268, d03: 146.015, d04: 119.06 },
    { d01: 53.9837, d02: 80.9395, d03: 7.6114, d04: 61.7314 },
    { d01: 200, d02: 100, d03: 127.413, d04: 100 },
    { d01: 72.5869, d02: 100, d03: 7.98702e-6, d04: 100 },
    { d01: 170.711, d02: 170.71, d03: 119.384, d04: 119.384 },
    { d01: 80.616, d02: 80.6157, d03: 29.2893, d04: 29.2891 },
    { d01: 29.2893, d02: 170.71, d03: 80.616, d04: 119.384 },
    { d01: 119.384, d02: 80.6157, d03: 170.711, d04: 29.2891 },
  ];

  const calculateNewPathD = (pathData, multiplier) => {
    return pathData.map(pathCoords => ({
      d01: pathCoords.d01 * multiplier,
      d02: pathCoords.d02 * multiplier,
      d03: pathCoords.d03 * multiplier,
      d04: pathCoords.d04 * multiplier,
    }));
  };

  const sizeMap = {
    basic: 200,
    big1: 240,
    big2: 600,
  };

  const newSize = sizeMap[types] || 200;

  useEffect(() => {
    const isMo = "(max-width: 520px)",
      isTab = "(min-width: 768px)",
      isPc = "(min-width: 1024px)";

    const mm = gsap.matchMedia();

    mm.add(isMo, () => {
      console.log("😎");

      targetRef.current.style.width = `${newSize / 2.5}px`;
      targetRef.current.style.height = `${newSize / 2.5}px`;
    });

    mm.add(isTab, () => {
      console.log("😀");
      targetRef.current.style.width = `${newSize / 2}px`;
      targetRef.current.style.height = `${newSize / 2}px`;
    });

    mm.add(isPc, () => {
      console.log("🤑");
      targetRef.current.style.width = `${newSize}px`;
      targetRef.current.style.height = `${newSize}px`;
    });

    const ctx = gsap.context(() => {
      gsap.to(targetRef.current, {
        rotation: "180",
        delay: "0.000001",
        repeat: "-1",
        duration: "6",
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, [newSize]);

  return (
    <svg
      ref={targetRef}
      className={className}
      width={newSize}
      height={newSize}
      viewBox={`0 0 ${newSize} ${newSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {calculateNewPathD(pathD, newSize / 200).map((pathCoords, index) => (
        <path
          key={index}
          d={`M${pathCoords.d01} ${pathCoords.d02}L${pathCoords.d03} ${pathCoords.d04}`}
          stroke={color}
          strokeWidth="10"
        />
      ))}
    </svg>
  );
};
// const SvgIcons = ({ color = "black", types, className }) => {
//   const targetRef = useRef();
//   const mainWidth = useCheckMobile();

//   let pathD = [
//     { d01: 100, d02: 0, d03: 100, d04: 72.5869 },
//     { d01: 100, d02: 127.413, d03: 100, d04: 200 },
//     { d01: 138.268, d02: 7.61133, d03: 119.06, d04: 53.9837 },
//     { d01: 80.9391, d02: 146.015, d03: 61.731, d04: 192.387 },
//     { d01: 192.387, d02: 61.7314, d03: 146.015, d04: 80.9395 },
//     { d01: 53.9837, d02: 119.06, d03: 7.6114, d04: 138.268 },
//     { d01: 138.268, d02: 192.388, d03: 119.06, d04: 146.016 },
//     { d01: 80.9391, d02: 53.9844, d03: 61.731, d04: 7.61205 },
//     { d01: 192.387, d02: 138.268, d03: 146.015, d04: 119.06 },
//     { d01: 53.9837, d02: 80.9395, d03: 7.6114, d04: 61.7314 },
//     { d01: 200, d02: 100, d03: 127.413, d04: 100 },
//     { d01: 72.5869, d02: 100, d03: 7.98702e-6, d04: 100 },
//     { d01: 170.711, d02: 170.71, d03: 119.384, d04: 119.384 },
//     { d01: 80.616, d02: 80.6157, d03: 29.2893, d04: 29.2891 },
//     { d01: 29.2893, d02: 170.71, d03: 80.616, d04: 119.384 },
//     { d01: 119.384, d02: 80.6157, d03: 170.711, d04: 29.2891 },
//   ];

//   const calculateNewPathD = (pathData, multiplier) => {
//     return pathData.map(pathCoords => ({
//       d01: pathCoords.d01 * multiplier,
//       d02: pathCoords.d02 * multiplier,
//       d03: pathCoords.d03 * multiplier,
//       d04: pathCoords.d04 * multiplier,
//     }));
//   };

//   const sizeMap = {
//     basic: 200,
//     big1: 240,
//     big2: 600,
//   };

//   const newSize = sizeMap[types] || 200;

//   useEffect(() => {
//     if (mainWidth <= 390) {
//       const newSize2 = newSize / 2.5;
//       targetRef.current.style.width = `${newSize2}px`;
//       targetRef.current.style.height = `${newSize2}px`;
//     } else {
//       targetRef.current.style.width = `${newSize}px`;
//       targetRef.current.style.height = `${newSize}px`;
//     }
//   }, [mainWidth, newSize]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(targetRef.current, {
//         rotation: "180",
//         delay: "0.000001",
//         repeat: "-1",
//         duration: "6",
//         ease: "none",
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <svg
//       ref={targetRef}
//       className={className}
//       width={newSize}
//       height={newSize}
//       viewBox={`0 0 ${newSize} ${newSize}`}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {calculateNewPathD(pathD, newSize / 200).map((pathCoords, index) => (
//         <path
//           key={index}
//           d={`M${pathCoords.d01} ${pathCoords.d02}L${pathCoords.d03} ${pathCoords.d04}`}
//           stroke={color}
//           strokeWidth="10"
//         />
//       ))}
//     </svg>
//   );
// };

SvgIcons.propTypes = {
  types: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};
export default SvgIcons;
