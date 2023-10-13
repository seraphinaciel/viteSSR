import { useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Title, Text } from "../Text";

export default function RecruitList() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".hellododo section");

    const animations = {
      enter: { color: "cyan", rotateX: ["-50deg", "0deg"], opacity: [0, 1] },
      leBack: { color: "cyan", rotateX: ["0deg", "-50deg"], opacity: [1, 0] },
      leave: { color: "skyblue", rotateX: ["0deg", "50deg"], opacity: [1, 0] },
      enBack: { color: "skyblue", rotateX: ["50deg", "0deg"], opacity: [0, 1] },
    };

    const animateBox = (fixedContent, animation) => {
      gsap.fromTo(
        fixedContent,
        {
          color: animation.color,
          transform: `perspective(500px) rotateX(${animation.rotateX[0]})`,
          transformStyle: "preserve-3d",
          transformOrigin: "top center",
          opacity: animation.opacity[0],
        },
        {
          color: animation.color,
          rotateX: animation.rotateX[1],
          opacity: animation.opacity[1],
          yPercent: "-100",
          // ease: "power2.inOut",
        },
      );
    };

    boxes.forEach(box => {
      const fixedContent = box.querySelector(".aside h2");

      gsap.set(fixedContent, { opacity: 0, color: "red" });
      ScrollTrigger.create({
        trigger: box,
        start: "top center",
        end: "+=100%",
        markers: true,
        stagger: 0.01,

        onEnter: () => animateBox(fixedContent, animations.enter),
        onLeaveBack: () => animateBox(fixedContent, animations.leBack),
        onLeave: () => animateBox(fixedContent, animations.leave),
        onEnterBack: () => animateBox(fixedContent, animations.enBack),
      });
    });
  }, []);
  return (
    <article className="hellododo">
      <section>
        <aside className="aside">
          <Text tagName="h2">UX UI Design</Text>
        </aside>
        <Text tagName="div" className="box">
          {"UX UI Strategy"}
          {"UX Research"}
          {"UX Planning & Insight"}
          {"UX Writing"}
          {"UI Design"}
          {"Brand Experience"}
          {"SEO"}
        </Text>
      </section>
      <section>
        <aside className="aside">
          <Text tagName="h2">Contents</Text>
        </aside>
        <Text tagName="div" className="box">
          {"Contents Strategy"}
          {"Visual Communication"}
          {"Interaction Design"}
          {"3D & Motion Graphics"}
          {"Digital Design Strategy"}
          {"Graphic Design"}
          {"Copywriting"}
        </Text>
      </section>
      <section>
        <aside className="aside">
          <Text tagName="h2">Global & Platform</Text>
        </aside>
        <Text tagName="div" className="box col-span-7 text-heading-10 desktop:text-heading-4">
          {"Global Strategy"}
          {"E-Commerce Strategy"}
          {"Global Rollout"}
          {"Contents Translation Work"}
          {"AEM & CMS Platform Building"}
          {"Adobe Experience Management"}
          {"Contents Creation"}
        </Text>
      </section>
      <section>
        <aside className="aside">
          <Text tagName="h2">Development</Text>
        </aside>
        <Text tagName="div" className="box col-span-7 text-heading-10 desktop:text-heading-4">
          {"Web Front-end Development"}
          {"Web & App Publishing"}
          {"Responsive Web"}
          {"Interaction Engineering"}
          {"Web Accessibility"}
          {"Cross Browsing"}
          {"Performance Optimization"}
        </Text>
      </section>
    </article>
  );
}

RecruitList.propTypes = {
  location: PropTypes.array,
  coord: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node,
};
