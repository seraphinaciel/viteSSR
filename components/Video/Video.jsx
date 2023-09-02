import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Video.module.css";

import TextLR from "../TextLR/TextLR";

gsap.registerPlugin(ScrollTrigger);

export default function Video({ id, src, children }) {
  const textLR = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.box-container__${id}`,
        start: "top 0%",
        end: "+=100%",
        pin: true,
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
    )
      .fromTo(".children", { y: 0 }, { y: "-100vh", duration: 5 }, "<+2")
      .fromTo(textLR.current, { y: "100vh" }, { y: "0vh", duration: 5 }, "<+5");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [id]);

  return (
    <section className={`box-container__${id} ${styles.movieBox}`}>
      <div className="children w-full">{children}</div>
      {id === "smaller" ? (
        <div ref={textLR} className="absolute w-full">
          <TextLR id="out" conLeft="make" conRight="work" change="moment">
            <p className="text-4xl text-center max-w-xl mx-auto">
              LG Electronics online platform Global pilot website
            </p>
          </TextLR>
        </div>
      ) : (
        ""
      )}
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
