import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

import styles from "./Work.module.css";

import SvgLine from "../../components/SvgLine";
import TextBanner from "../../components/TextMarquee/TextMarquee";

export const title = "🥰 work2",
  description = "this is a work2 page.";

function Page() {
  const apple = useRef();
  const banana = useRef();

  useEffect(() => {
    let carot = gsap.context(() => {
      gsap.to(".boxing", { rotation: 360 });
      gsap.to(banana.current, { rotation: 360 });
    }, apple);

    return () => carot.revert();
  }, []);

  return (
    <>
      <h1 className={styles.name}>Work2</h1>
      <div className={styles.apple} ref={apple}>
        <div className={`${styles.box} boxing`}>box</div>
        <div className={styles.banana} ref={banana}>
          banana
        </div>
      </div>
      <SvgLine id="sStar" duration={500} delay={50} />
      <SvgLine id="sArrow" duration={500} delay={50} />
      <SvgLine id="sHand" duration={500} delay={50} />
      <div className={styles.banner}>
        <TextBanner
          content="my favorite fruit is apple"
          speed={2}
          withSvg={true}
          svgId="sStar"
        />
        <div className={styles.svgIcons}>
          <img src="/images/star.webp" alt="" />
        </div>
        <TextBanner content="a little bit of love" speed={5} />
        <TextBanner content="good chioce" speed={5} />
        <TextBanner content="I love tomato" speed={1} />
        <TextBanner content="one two three" speed={1.5} />
        <TextBanner content="깊은 밤, 길을 잃어도 차라리 날아올라" speed={2} />
      </div>

      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export { Page };
