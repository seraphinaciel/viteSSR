import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useCheckMobile from "#root/hooks/useCheckMobile";

gsap.registerPlugin(ScrollTrigger);

const items = [{ alt: "hyundai" }, { alt: "samsung" }, { alt: "lg" }, { alt: "genesis" }];

const SpreadImg = ({ className, children }) => {
  const targetRef = useRef(null);
  const mainWidth = useCheckMobile();

  useEffect(() => {
    const ctx = gsap.context(() => {
      function desktopEffect() {
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
      function mobileEffect() {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 0%",
            end: "+=100%",
            toggleActions: "restart pause resume reverse",
            scrub: 0.02,
            pin: true,
          },
        });
        tl.set(
          items.slice(0, 4).map((_, index) => `.item_${index + 1}`),
          { opacity: 0 },
          "<",
        );
        tl.to(
          ".item_1",
          {
            xPercent: 20,
            yPercent: -50,
            opacity: 1,
            duration: 10,
          },
          "<+=4",
        )
          .to(
            ".item_3",
            {
              xPercent: 100,
              yPercent: 0,
              opacity: 1,
              duration: 10,
            },
            "<",
          )
          .to(
            ".item_1",
            {
              opacity: 0,
            },
            ">+=4",
          )
          .to(
            ".item_3",
            {
              opacity: 0,
            },
            "<",
          );
        tl.to(
          ".item_2",
          {
            xPercent: -100,
            yPercent: -10,
            duration: 10,
            opacity: 1,
          },
          ">+=3",
        )
          .to(
            ".item_4",
            {
              xPercent: -50,
              yPercent: 60,
              opacity: 1,
              duration: 10,
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
      }

      const master = gsap.timeline({
        onUpdate: () => {
          ScrollTrigger.refresh();
        },
      });

      const breakPoint = "(min-width: 768px)";
      const isMd = window.matchMedia(breakPoint).matches;
      if (isMd) {
        master.add(desktopEffect());
      } else {
        master.add(mobileEffect());
      }
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
            <li key={index} className={`item_${index + 1}`}>
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
