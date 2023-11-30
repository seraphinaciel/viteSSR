import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useCheckMobile from "#root/hooks/useCheckMobile";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    class: "bg-red-600/20",
    alt: "name A",
  },
  {
    class: "bg-blue-600/20",
    alt: "name b",
  },
  {
    class: "bg-green-600/20",
    alt: "name C",
  },
  {
    class: "bg-yellow-600/20",
    alt: "name D",
  },
];

export default function AboutImg({ className, children }) {
  const targetRef = useRef(null);
  const mainWidth = useCheckMobile();

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          start: "0 0%",
          end: "+=50%",
          toggleActions: "restart pause resume reverse",
          // scrub: 0.02,
          pin: true,
        },
      });

      const pcEffects = () => {
        tl.from(
          ".item_1",
          {
            xPercent: 90,
            yPercent: 250,
          },
          "<",
        )
          .from(
            ".item_2",
            {
              xPercent: -100,
              yPercent: 300,
            },
            "<",
          )
          .from(
            ".item_3",
            {
              xPercent: 70,
              yPercent: 100,
            },
            "<",
          )
          .from(
            ".item_4",
            {
              xPercent: -90,
              yPercent: 50,
            },
            "<",
          );
      };

      if (mainWidth <= 390) {
        console.log("mobile down");
      } else {
        console.log("mobile up");
        pcEffects();
      }
    }, targetRef);
    return () => ctx.revert();
  }, [mainWidth]);
  return (
    <>
      <section className={className} ref={targetRef}>
        {children}
        <ol>
          {items.map((item, index) => (
            <li key={index} className={`item_${index + 1} ${item.class}`}>
              {/* <img src={`/images/char${index + 1}.jpg`} alt={item.alt} /> */}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

AboutImg.prototypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
