import PropTypes from "prop-types";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Video.module.css";

const Video = ({ id, imgSrc, alt }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tlbigger = gsap.timeline({
      scrollTrigger: {
        trigger: `.box-container__${id}`,
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
    });

    let scale = id === "bigger" ? 5 : 1;
    tlbigger
      .to("body", { duration: 1 })
      .to(".box", { scale: scale, duration: 4, ease: "none" })
      .to("body", { duration: 1 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [id]);

  return (
    <section className={`box-container__${id} ${styles.movieBox}`}>
      <div className={`box ${styles.box}`}>
        <img src={imgSrc} alt={alt} />
      </div>
      {id === "smaller" && <h1>hello</h1>}
    </section>
  );
};
Video.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Video;

// https://www.w3schools.com/html/mov_bbb.mp4
