import PropTypes from "prop-types";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./CircleBox.module.css";

export default function CircleBox({ imgSrc }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tlcircle = gsap.timeline({
      scrollTrigger: {
        trigger: "#circleBox",
        start: "top top",
        end: "+=100%",
        markers: true,
        pin: true,
        scrub: true,
      },
    });
    tlcircle
      .fromTo(
        "i",
        { scale: 0 },
        { scale: 200, duration: 10, ease: "power1.in" }
      )
      .fromTo(
        "em",
        { scale: 0 },
        { scale: 5, rotation: 360, duration: 7, ease: "power1.in" },
        "<"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={` ${styles.cBox}`} id="circleBox">
      <div>
        <em>
          <img src={imgSrc} alt="" />
        </em>
        <i></i>
      </div>
    </section>
  );
}
CircleBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
