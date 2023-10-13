import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function RecruitList({ className, children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateElement = (element, animation) => {
        console.log(element);
        gsap.fromTo(
          element.querySelector("h2"),
          {
            rotateX: animation.rotateX[0],
            duration: 0.3,
            color: animation.color,
            ease: "none",
          },
          {
            rotateX: animation.rotateX[1],
            duration: 0.3,
            color: animation.color,
            ease: "none",
          },
        );
        gsap.fromTo(
          element.querySelector(".box"),
          {
            opacity: animation.opacity[0],
          },
          {
            opacity: animation.opacity[1],
          },
        );
      };

      const applyAnimations = (box, animations) => {
        ScrollTrigger.create({
          trigger: box,
          start: "top 0%",
          end: "+=50%",
          stagger: 0.01,
          onEnter: () => animateElement(box, animations.enter),
          onLeaveBack: () => animateElement(box, animations.leaveBack),
          onLeave: () => animateElement(box, animations.leave),
          onEnterBack: () => animateElement(box, animations.enterBack),
          onUpdate: ScrollTrigger.refresh(),
        });
      };

      const boxes = containerRef.current.querySelectorAll("article");

      const animations = {
        enter: { rotateX: ["-90deg", "0deg"], opacity: [0.5, 1] },
        leaveBack: {
          rotateX: ["0deg", "-90deg"],
          opacity: [1, 0.5],
        },
        leave: { rotateX: ["0deg", "90deg"], opacity: [1, 0.5] },
        enterBack: {
          rotateX: ["90deg", "0deg"],
          opacity: [0.5, 1],
        },
      };
      boxes.forEach(box => {
        applyAnimations(box, animations);
      });
    }, containerRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className={className} ref={containerRef}>
      {children}
    </section>
  );
}

RecruitList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
