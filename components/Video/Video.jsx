import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Video.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Video({ id, src }) {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.box-container__${id}`,
        start: "top 0%",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
    });

    let [pathS, pathE] =
      id === "bigger"
        ? ["inset(0%)", "inset(40%)"]
        : ["inset(40%)", "inset(0%)"];
    tl.fromTo(
      `.box-container__${id} .box`,
      { webkitClipPath: pathS, clipPath: pathS },
      {
        webkitClipPath: pathE,
        clipPath: pathE,
        duration: 14,
        ease: "none",
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [id]);

  return (
    <section className={`box-container__${id} ${styles.movieBox}`}>
      <div className={`box ${styles.box}`}>
        <div className={styles.clip}></div>
        <video controls muted autoPlay preload="true" loop>
          <source src={src} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      {id === "smaller" && <h1>hello</h1>}
    </section>
  );
}
Video.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  // alt: PropTypes.string.isRequired,
};
