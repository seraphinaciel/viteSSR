// import { useEffect, useRef } from "react";
// import { gsap } from "gsap/dist/gsap";

import styles from "./Main.module.css";

import Text from "#root/components/Text";
import Video from "#root/components/Video/Video";
import TextChange from "#root/components/TextChange/TextChange";
import TextTyping from "#root/components/TextTyping";
import SvgLine from "#root/components/SvgLine";
// import TextLR from "#root/components/TextLR/TextLR";
// import SvgLine from "#root/components/SvgLine";
// import TextBanner from "#root/components/TextMarquee/TextMarquee";
// import CircleBox from "#root/components/CircleBox/CircleBox";

export const title = "🥰 Main",
  description = "this is a Main page.";

function Page() {
  /* const apple = useRef();
  const banana = useRef();

  useEffect(() => {
    let carot = gsap.context(() => {
      gsap.to(".boxing", { rotation: 360 });
      gsap.to(banana.current, { rotation: 360 });
    }, apple);

    return () => carot.revert();
  }, []); */

  return (
    <>
      <h1 className={styles.name}>Main</h1>
      <Video id="smaller" src="https://www.w3schools.com/tags/movie.mp4">
        <TextChange
          id="out"
          conLeft="make"
          conRight="work"
          change="moment"
          img="/images/thej_path_1x.webp"
        >
          <p className="text-4xl text-center max-w-xl mx-auto">
            LG Electronics online platform Global pilot website
          </p>
        </TextChange>
        <div className={styles.main_txt}>
          <Text content="Our latest" />
          <Text content="SCROLL" />
        </div>
      </Video>

      <TextTyping
        className="text-4xl/tight"
        splitBy="words"
        content="Creative Design Technical Agency"
      />

      <div className="flex pl-0 flex-col items-start gap-3 ml-[45%] w-5/12">
        <TextTyping
          className="text-6xl/tight mb-50"
          splitBy="words"
          content="We have implemented various experience, such as global integrated platforms and creative projects."
        >
          <SvgLine id="sBubble" duration={500} delay={50} />
        </TextTyping>
        <TextTyping
          className="text-xl"
          splitBy="words"
          content="글로벌 통합 플랫폼 프로젝트와 크리에이티브 프로젝트 등 다양한 프로젝트들을 수행해 왔습니다."
        />
      </div>
      <SvgLine id="sBubble" duration={500} delay={50} />

      <div style={{ height: "500vh" }}></div>

      {/* <TextLR id="out" conLeft="make" conRight="work"></TextLR> */}

      {/* <div className={styles.main_txt}>
        <Text content="See all open positions" />
        <Text content="SCROLL" />
      </div>
      <Video id="bigger" src="https://www.w3schools.com/html/mov_bbb.mp4" /> */}

      {/* <div className={styles.apple} ref={apple}>
        <div className={`${styles.box} boxing`}>box</div>
        <div className={styles.banana} ref={banana}>
          banana
        </div>
      </div> */}
      {/* <SvgLine id="sStar" duration={500} delay={50} />
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
        <TextBanner content="a little bit of love" speed={5} />
        <TextBanner content="good chioce" speed={5} />
        <TextBanner content="I love tomato" speed={1} />
        <TextBanner content="one two three" speed={1.5} />
        <TextBanner content="깊은 밤, 길을 잃어도 차라리 날아올라" speed={2} />
      </div>

      

      <CircleBox imgSrc="https://www.w3schools.com/html/mov_bbb.mp4" /> */}
    </>
  );
}
export { Page };
