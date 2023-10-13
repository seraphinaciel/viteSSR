import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SvgIcons from "../SvgIcons";

gsap.registerPlugin(ScrollTrigger);

const contents = [
  {
    class: "bg-red-100 col-start-3 row-start-1 w-1/3",
    alt: "logo",
  },
  {
    class: "bg-red-200 col-start-1 row-start-2 w-2/3",
    alt: "star",
  },
  {
    class: "bg-red-300 col-start-2 row-start-3",
    alt: "the j",
  },
  {
    class: "bg-red-400 col-end-11 row-start-1 w-2/3",
    alt: "logo 1",
  },
  {
    class: "bg-red-500 col-end-13 row-start-2",
    alt: "star 1",
  },
  {
    class: "bg-red-600 col-end-12 row-start-3 w-1/3",
    alt: "the j 1",
  },
];
export default function CircleBox({ className, children }) {
  const targetRef = useRef(null);
  const gridRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 0",
          end: "+=100%",
          // markers: true,
          pin: true,
          scrub: true,
        },
      });

      // const h1 = document.querySelector(".cCircle h1").clientHeight;
      // const box = document.querySelector(".cCircle h1 + div").clientHeight;

      tl.set(".svgIcons1", { top: "-5%" })
        .set(".svgIcons2", { opacity: 0 }, "<")
        .to(
          ".svgIcons1",
          {
            top: "calc(50% - 100px)",
            duration: 5,
            ease: "power1.in",
          },
          "<"
        )
        .to(
          ".svgIcons1 path",
          {
            duration: 2,
            ease: "power1.in",
            stroke: "white",
          },
          "<+=4.9"
        )
        .to(".cCircle h1", { marginTop: "11%", duration: 1 }, "<")
        // .to(".cCircle h1", { margin: `${h1 + box} 0 ${h1}`, duration: 1 }, "<")
        .fromTo(
          "i",
          { scale: 0 },
          { scale: 120, duration: 5, ease: "power1.in" },
          "<+3"
        )
        .set(".svgIcons1", { opacity: 0, duration: 3 }, "<+=3")
        .set(".svgIcons2", { opacity: 1, duration: 3 }, "<")
        .to(".svgIcons2", { opacity: 0, duration: 3 }, ">+=3");

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 28%",
          end: "+=100%",
          markers: true,
          scrub: true,
        },
      });
      tl2.to(
        contents.slice(0, 3).map((_, index) => `#span_${index + 1}`),
        { x: 200, delay: 2 },
        "<"
      );

      tl2.to(
        contents.slice(3).map((_, index) => `#span_${index + 4}`),
        { x: -200, delay: 0 },
        "<"
      );
    }, targetRef);
    return () => ctx.revert();
  }, []);

  return (
    <article
      className={`${className} flex flex-col items-center mt-24`}
      ref={targetRef}
    >
      <section className="bg-slate-100 grid grid-cols-12 grid-rows-3 items-center h-screen">
        {contents.map((con, index) => (
          <span
            key={index}
            className={`aspect-square overflow-hidden rounded-full ${con.class}`}
            id={`span_${index + 1}`}
            ref={gridRef}
          >
            <img
              src={`/images/char${index + 1}.jpg`}
              alt={con.alt}
              className="h-full mx-auto"
            />
          </span>
        ))}

        <div
          className="flex flex-col justify-center items-center h-screen col-span-full row-span-full"
          ref={circleRef}
        >
          <SvgIcons types="basic" className="svgIcons1 absolute z-10" />
          {/* <SvgIcons types="basic" className="svgIcons1 fixed z-10" /> */}
          {children}
          <i className="block w-[1vw] h-[1vw] rounded-full absolute bg-bg-dark"></i>
          <SvgIcons className="svgIcons2 absolute" types="big2" color="white" />
          {/* <SvgIcons className="svgIcons2 absolute z-10" types="big2" /> */}
        </div>
      </section>
    </article>
  );
}
CircleBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
