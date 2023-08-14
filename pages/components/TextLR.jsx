import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./TextLR.module.css";

// gsap 이 안됨..ㅠㅠㅠㅠㅠ

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextLR = ({ id, conLeft, conRight }) => {
  useEffect(() => {
    console.log("hay");
    // gsap.registerPlugin(ScrollTrigger);

    // let [xl, xle, xr, xre] =
    //   id === "in" ? [-100, 0, 100, 0] : [0, -100, 0, 100];
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: `.elevator_${id}`,
    //     start: "top center",
    //     end: "+=100%",
    //     pin: true,
    //     scrub: true,
    //   },
    // });

    // tl.to(".elevatorL", { x: xl, y: "bottom", duration: 10 })
    //   .to(".elevatorR", { x: xr, y: "bottom", duration: 10 }, "<")
    //   // 두 번째 애니메이션 (elevator_in)
    //   .to(".elevatorL", { x: xle, duration: 10 })
    //   .to(".elevatorR", { x: xre, duration: 10 }, "<");

    // return () => {
    //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // };
    // }, [id]);
  }, []);

  return (
    <>
      <div className={styles.elevator}>
        {id}, {conRight}, {conLeft}
      </div>
      <div className="elevator elevator">
        <div className="elevatorL elevatorL">{conLeft}</div>
        <div className="elevatorR elevatorR">{conRight}</div>
      </div>

      <div className={`${styles.elevator} elevator_${id}`}>
        <div className={`${styles.elevatorL} elevatorL`}>{conLeft}</div>
        <div className={`${styles.elevatorR} elevatorR`}>{conRight}</div>
      </div>
    </>
  );
};

TextLR.propTypes = {
  id: PropTypes.string.isRequired,
  conLeft: PropTypes.string.isRequired,
  conRight: PropTypes.string.isRequired,
};
export default TextLR;
