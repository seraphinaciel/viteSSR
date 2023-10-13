import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useCheckMobile from "#root/hooks/useCheckMobile";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { class: "bg-red-600/20", alt: "hyundai" },
  { class: "bg-blue-600/20", alt: "samsung" },
  { class: "bg-green-600/20", alt: "lg" },
  { class: "bg-yellow-600/20", alt: "genesis" },
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
            scrub: 0.01,
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
              scale: 1.25,
              xPercent: 220,
              yPercent: 150,
            },
            "<",
          )
          .from(
            ".item_2",
            {
              scale: 1.25,
              xPercent: -180,
              yPercent: 160,
            },
            "<",
          )
          .from(".item_3", {
            scale: 1.25,
            xPercent: 170,
            yPercent: 60,
          })
          .from(
            ".item_4",
            {
              scale: 1.25,
              xPercent: -190,
              yPercent: 80,
            },
            "<",
          );
        return tl;
      }
      function ani02() {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: targetRef.current,
            start: "-20% 0%",
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
          .to(".item_1", {
            xPercent: 20,
            yPercent: -100,
            opacity: 1,
          })
          .to(
            ".item_3",
            {
              xPercent: 100,
              yPercent: 0,
              opacity: 1,
            },
            "<",
          );
        return tl;
      }
      function ani03() {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: targetRef.current,
            start: "20% 0%",
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
          )
          .to(
            ".item_4 img",
            {
              scale: 1,
            },
            ">",
          );
        return tl;
      }

      const master = gsap.timeline({
        onUpdate: () => {
          ScrollTrigger.refresh();
        },
      });

      const breakPoint = "(min-width: 768px)";
      const isPC = window.matchMedia(breakPoint).matches;
      if (isPC) {
        master.add(ani01());
      } else {
        // master.add(ani02());
        // master.add(ani03());
      }

      const ani2 = gsap.timeline();
      ani2
        .set(
          items.slice(0, 4).map((_, index) => `.item_${index + 1}`),
          { opacity: 0 },
          "<",
        )
        .to(".item_1", {
          xPercent: 20,
          yPercent: -100,
          opacity: 1,
        })
        .to(
          ".item_3",
          {
            xPercent: 100,
            yPercent: 0,
            opacity: 1,
          },
          "<",
        );

      ScrollTrigger.create({
        animation: ani2,
        trigger: targetRef.current,
        start: "-20% 0%",
        end: "+=50%",
        scrub: 0.02,
        pin: true,
        anticipatePin: 1,
        markers: true,
      });
      const ani3 = gsap.timeline();
      ani3
        .set(
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
        )
        .to(
          ".item_4 img",
          {
            scale: 1,
          },
          ">",
        );

      ScrollTrigger.create({
        animation: ani3,
        trigger: targetRef.current,
        start: "20% 0",
        end: "+=25%",
        scrub: 0.02,
        pin: true,
        anticipatePin: 1,
        markers: true,
      });
    }, targetRef);
    return () => {
      ctx.revert();
    };
  }, [mainWidth]);

  return (
    <>
      <section className={className} ref={targetRef}>
        <ol>
          {items.map((item, index) => (
            <li key={index} className={`item_${index + 1} ${item.class}`}>
              <picture>
                <source srcSet={`/images/spread_${index + 1}.webp`} type="image/webp" />
                <source srcSet={`/images/spread_${index + 1}.jpg`} type="image/jpeg" />
                <img src={`/images/spread_${index + 1}.jpg`} alt={item.alt} />
              </picture>
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
