import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SvgIcons from "../SvgIcons";

gsap.registerPlugin(ScrollTrigger);

const contents = [
  {
    class: "justify-self-center col-start-1 md:col-start-3 row-start-1 w-1/3",
    alt: "logo",
  },
  {
    class: "justify-self-end col-start-1 md:col-start-1 row-start-2 w-2/3",
    alt: "star",
  },
  {
    class: "justify-self-center col-start-1 md:col-start-2 row-start-3",
    alt: "the j",
  },
  {
    class: "justify-self-baseline col-start-3 md:col-start-10 row-start-1 w-2/3",
    alt: "logo 1",
  },
  {
    class: "justify-self-center col-start-3 md:col-start-12 row-start-2",
    alt: "star 1",
  },
  {
    class: "justify-self-baseline col-start-3 md:col-start-11 row-start-3 w-1/3",
    alt: "the j 1",
  },
];
export default function CircleBox({ className, children }) {
  const targetRef = useRef(null);
  const circleRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          toggleActions: "restart pause resume reverse",
          start: "top 0%",
          end: "+=100%",
          pin: true,
          scrub: true,
        },
      });

      const h1 = circleRef.current.querySelector("h1");
      // const box = circleRef.current.querySelector("h1 + div").clientHeight;
      circleRef.current.style = `--height : ${h1.clientHeight}px`;

      const breakPoint = "(min-width: 768px)";
      const isMd = window.matchMedia(breakPoint).matches;

      tl.set("i", { clipPath: "circle(0% at 50% 50%)", display: "none" })
        .set(".svgIcons2", { opacity: 0 }, "<")
        .set(svgRef.current, { top: isMd ? "-100px" : "-10%" }, "<")
        .to(svgRef.current, { top: 0 }, "<")
        .to(
          "i",
          { clipPath: "circle(100% at 50% 50%) ", display: "block", duration: 3, ease: "power1.in" },
          isMd ? "<+2" : "<+5",
        )
        .to(
          ".svgIcons1 path",
          {
            duration: 2,
            ease: "power1.in",
            stroke: "white",
          },
          "<",
        )
        .set(".svgIcons1", { opacity: 0, duration: 3 }, "<+=2")
        .set(".svgIcons2", { opacity: 1, duration: 3 }, ">")
        .to(".svgIcons2", { opacity: 0, duration: 3 }, ">+=1");

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: circleRef.current,
          toggleActions: "restart pause resume reverse",
          start: "top 100%",
          end: "+=100%",
          scrub: true,
        },
      });

      let moveX;
      if (isMd) moveX = 200;
      else moveX = 20;

      tl2
        .to(
          contents.slice(0, 3).map((_, index) => `#span_${index + 1}`),
          { x: moveX, delay: 2 },
          "<",
        )
        .to(
          contents.slice(3).map((_, index) => `#span_${index + 4}`),
          { x: -moveX, delay: 0 },
          "<",
        );
    }, targetRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={`${className}`} ref={targetRef}>
      <p className="" ref={svgRef}>
        <SvgIcons types="basic" className="svgIcons1 " />
        <SvgIcons types="big2" color="white" className="svgIcons2" />
      </p>

      <article>
        {contents.map((con, index) => (
          <span key={index} className={` ${con.class}`} id={`span_${index + 1}`}>
            <img src={`/images/person_${index + 1}.jpg`} alt={con.alt} className="h-full mx-auto" />
          </span>
        ))}
      </article>

      <article ref={circleRef} className="">
        {children}
        <i className="w-full h-screen absolute bg-bg-dark"></i>
      </article>
    </section>
  );
}
CircleBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
