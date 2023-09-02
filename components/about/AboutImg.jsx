import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    class: "bg-red-600",
    alt: "name A",
  },
  {
    class: "bg-blue-600",
    alt: "name b",
  },
  {
    class: "bg-green-600",
    alt: "name C",
  },
  {
    class: "bg-yellow-600",
    alt: "name D",
  },
];

const AboutImg = ({ className, children }) => {
  const targetRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top -10%",
          end: "+=100%",
          toggleActions: "restart pause resume reverse",
          // scrub: 0.02,
          pin: true,
        },
      });

      tl.from(
        ".item_1",
        {
          borderColor: "darkblue",
          xPercent: 90,
          yPercent: 250,
        },
        "<"
      )
        .from(
          ".item_2",
          {
            borderColor: "darkgreen",
            xPercent: -100,
            yPercent: 300,
          },
          "<"
        )
        .from(
          ".item_3",
          {
            borderColor: "orange",
            xPercent: 70,
            yPercent: 100,
          },
          "<"
        )
        .from(
          ".item_4",
          {
            borderColor: "hotpink",
            xPercent: -90,
            yPercent: 50,
          },
          "<"
        );
    }, targetRef);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className={className} ref={targetRef}>
        {children}
        <ol>
          {items.map((item, index) => (
            <li key={index} className={`item_${index + 1}`}>
              <img src={`/images/char${index + 1}.jpg`} alt={item.alt} />
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

AboutImg.prototypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
export default AboutImg;
