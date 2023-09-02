import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Video.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Video({ id, src, children }) {
  const textChange = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.box-container__${id}`,
        start: "top 0%",
        end: "+=100%",
        pin: true,
        anticipatePin: 1,
        scrub: true,
      },
    });

    const [clipS, clipE] =
      id === "bigger"
        ? ["inset(40%)", "inset(0%)"]
        : ["inset(0%)", "inset(40%)"];

    const name = `.box-container__${id} .box`;
    tl.fromTo(
      name,
      { webkitClipPath: clipS, clipPath: clipS },
      {
        webkitClipPath: clipE,
        clipPath: clipE,
        duration: 14,
        ease: "none",
      }
    );

    if (children) {
      tl.fromTo(
        textChange.current,
        { y: "50vh" },
        { y: "0vh", duration: 5 },
        "<+15"
      );
    }

    tl.to(name, { opacity: 0, duration: 10, display: "none" });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [id, children]);

  return (
    <section className={`box-container__${id} ${styles.movieBox}`}>
      {children ? (
        <div ref={textChange} className="absolute w-full">
          {children}
        </div>
      ) : null}
      <div className={`box ${styles.movieBox_wrap}`}>
        <video controls muted autoPlay preload="true" loop>
          <source src={src} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
    </section>
  );
}

Video.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
};
