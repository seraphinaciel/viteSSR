import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SvgIcons from "../SvgIcons";

gsap.registerPlugin(ScrollTrigger);

const contents = [
  {
    class: "bg-red-500 col-start-1 md:col-start-3 row-start-1 w-1/3",
    alt: "logo",
  },
  {
    class: "bg-orange-500 col-start-1 md:col-start-1 row-start-2 w-2/3",
    alt: "star",
  },
  {
    class: "bg-yellow-500 col-start-1 md:col-start-2 row-start-3",
    alt: "the j",
  },
  {
    class: "bg-green-500 col-start-3 md:col-start-10 row-start-1 w-2/3",
    alt: "logo 1",
  },
  {
    class: "bg-sky-500 col-start-3 md:col-start-12 row-start-2",
    alt: "star 1",
  },
  {
    class: "bg-blue-500 col-start-3 md:col-start-11 row-start-3 w-1/3",
    alt: "the j 1",
  },
];
export default function CircleBox({ className, children }) {
  const targetRef = useRef(null);
  const gridRef = useRef(null);
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
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 100%",
          end: "+=100%",
          scrub: true,
        },
      });
      const h1 = circleRef.current.querySelector("h1");
      const box = circleRef.current.querySelector("h1 + div").clientHeight;
      circleRef.current.style = `--height : ${h1.clientHeight + box}px`;

      const mobile = document.querySelector("main").clientWidth;

      let moveX;
      mobile <= 767 ? (moveX = 20) : (moveX = 200);

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
      tl.set("i", { clipPath: "circle(0% at 50% 50%)", display: "none" })
        .set(".svgIcons2", { opacity: 0 }, "<")
        .set(svgRef.current, { top: mobile <= 767 ? "-10%" : "-100px" }, "<")
        .to(svgRef.current, { top: 0 }, "<")
        .to(
          "i",
          { clipPath: "circle(100% at 50% 50%) ", display: "block", duration: 3, ease: "power1.in" },
          mobile <= 767 ? "<+5" : "<+2",
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
          <span key={index} className={` ${con.class}`} id={`span_${index + 1}`} ref={gridRef}>
            {/* <img src={`/images/char${index + 1}.jpg`} alt={con.alt} className="h-full mx-auto" /> */}
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
