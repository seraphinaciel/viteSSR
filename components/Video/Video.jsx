import PropTypes from "prop-types";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Video.module.css";

const Video = ({ id, src }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tlbigger = gsap.timeline({
      scrollTrigger: {
        trigger: `.box-container__${id}`,
        start: "top 50%",
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

  // 비디오는 배경, 그 위에 박스가 커지고 작아짐

  return (
    <section className={`box-container__${id} ${styles.movieBox}`}>
      <div className={`box ${styles.box}`}>
        {/* <img src={imgSrc} alt={alt} /> */}

        <video controls muted autoPlay preload loop>
          <source src={src} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      {id === "smaller" && <h1>hello</h1>}
    </section>
  );
};
Video.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  // alt: PropTypes.string.isRequired,
};
export default Video;

// https://www.w3schools.com/html/mov_bbb.mp4
