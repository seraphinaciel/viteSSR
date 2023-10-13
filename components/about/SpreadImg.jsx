import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
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

const SpreadImg = ({ className, children }) => {
  const targetRef = useRef(null);
  const mainWidth = useCheckMobile();

  useEffect(() => {
    const ctx = gsap.context(() => {
      function ani01() {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 0%",
            end: "+=50%",
            toggleActions: "restart pause resume reverse",
            scrub: 0.02,
            pin: true,
          },
        });
        tl.set(
          items.slice(0, 4).map((_, index) => `.item_${index + 1}`),
          { opacity: 1 },
          "<",
        )
          .from(
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
        return tl;
      }
      function ani02() {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: targetRef.current,
            start: "0 0%",
            end: "+=50%",
            toggleActions: "restart pause resume reverse",
            scrub: 0.02,
            pin: true,
          },
        });
        tl.set(
          items.slice(0, 4).map((_, index) => `.item_${index + 1}`),
          { opacity: 0 },
          "<",
        )
          .to(
            ".item_1",
            {
              xPercent: 20,
              yPercent: -40,
              opacity: 1,
            },
            "<",
          )
          .to(
            ".item_3",
            {
              xPercent: 100,
              yPercent: 40,
              opacity: 1,
            },
            "<",
          )
          .set(
            items.slice(0, 4).map((_, index) => `.item_${index + 1}`),
            { opacity: 0 },
            "<",
          );
        return tl;
      }
      function ani03() {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: targetRef.current,
            start: "25% 0%",
            end: "+=25%",
            toggleActions: "restart pause resume reverse",
            scrub: 0.02,
            pin: true,
          },
        });
        tl.set(
          items.slice(0, 4).map((_, index) => `.item_${index + 1}`),
          { opacity: 0 },
          "<",
        )
          .to(
            ".item_2",
            {
              xPercent: -100,
              yPercent: -10,
              opacity: 1,
            },
            "<",
          )

          .to(
            ".item_4",
            {
              xPercent: -50,
              yPercent: 60,
              opacity: 1,
            },
            "<",
          );
        return tl;
      }

      const master = gsap.timeline({
        onUpdate: () => {
          ScrollTrigger.refresh();
        },
      });

      // console.log(mainWidth);
      const breakPoint = "(min-width: 768px)";
      const isPC = window.matchMedia(breakPoint).matches;

      if (isPC) {
        console.log("PC");
        master.add(ani01());
      } else {
        console.log("mobile");
        master.add(ani02());
        master.add(ani03());
      }
    }, targetRef);
    return () => ctx.revert();
  }, [mainWidth]);

  return (
    <>
      <section className={className} ref={targetRef}>
        <ol>
          {items.map((item, index) => (
            <li key={index} className={`item_${index + 1} ${item.class}`}>
              <span>{index + 1}</span>
              {/* <img src={`/images/char${index + 1}.jpg`} alt={item.alt} /> */}
            </li>
          ))}
        </ol>
        {children}
      </section>
    </>
  );
};

SpreadImg.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
export default SpreadImg;
