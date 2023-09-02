import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";

function animateSvg({ pathSelector }) {
  const paths = document.querySelectorAll(pathSelector);

  console.log(pathSelector);
  paths.forEach((p) => {
    const pathLength = p.getTotalLength();

    let tl = gsap.timeline();
    tl.set(p, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      duration: 0.00000000001,
    }).to(
      p,
      {
        duration: 5,
        opacity: 1,
        ease: "power3.out",
        strokeDashoffset: 0,
      },
      "<"
    );
  });
  return pathSelector;
}

animateSvg.propTypes = {
  pathSelector: PropTypes.string.isRequired,
};
export default animateSvg;
