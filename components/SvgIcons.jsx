import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
const SvgIcons = ({ color }) => {
  const targetRef = useRef();

  useEffect(() => {
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
  }, []);
  return (
    <>
      <svg
        ref={targetRef}
        className="inline"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 0L100 72.5869" stroke={color} strokeWidth="10" />
        <path d="M100 127.413L100 200" stroke={color} strokeWidth="10" />
        <path
          d="M138.268 7.61133L119.06 53.9837"
          stroke={color}
          strokeWidth="10"
        />
        <path
          d="M80.9391 146.015L61.731 192.387"
          stroke={color}
          strokeWidth="10"
        />
        <path
          d="M192.387 61.7314L146.015 80.9395"
          stroke={color}
          strokeWidth="10"
        />
        <path
          d="M53.9837 119.06L7.6114 138.268"
          stroke={color}
          strokeWidth="10"
        />
        <path
          d="M138.268 192.388L119.06 146.016"
          stroke={color}
          strokeWidth="10"
        />
        <path
          d="M80.9391 53.9844L61.731 7.61205"
          stroke={color}
          strokeWidth="10"
        />
        <path
          d="M192.387 138.268L146.015 119.06"
          stroke={color}
          strokeWidth="10"
        />
        <path
          d="M53.9837 80.9395L7.6114 61.7314"
          stroke={color}
          strokeWidth="10"
        />
        <path d="M200 100L127.413 100" stroke={color} strokeWidth="10" />
        <path
          d="M72.5869 100L7.98702e-06 100"
          stroke={color}
          strokeWidth="10"
        />
        <path
          d="M170.711 170.71L119.384 119.384"
          stroke={color}
          strokeWidth="10"
        />
        <path
          d="M80.616 80.6157L29.2893 29.2891"
          stroke={color}
          strokeWidth="10"
        />
        <path
          d="M29.2893 170.71L80.616 119.384"
          stroke={color}
          strokeWidth="10"
        />
        <path
          d="M119.384 80.6157L170.711 29.2891"
          stroke={color}
          strokeWidth="10"
        />
      </svg>
    </>
  );
};
export default SvgIcons;
SvgIcons.propTypes = {
  color: PropTypes.string.isRequired,
};
