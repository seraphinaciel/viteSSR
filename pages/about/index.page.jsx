import styles from "./About.module.css";

import { Title, Text } from "#root/components/Text";
import CircleGrid from "#root/components/about/CircleGrid";
import TextMove from "#root/components/about/TextMove";
import AboutTitle from "#root/components/about/AboutTitle";
import { Letter, Word, Sentence } from "#root/components/TextSplit";
import SvgIcons from "#root/components/SvgIcons";
import SvgLine from "#root/components/SvgLine";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export { Page };

export const documentProps = {
  title: "😁 about",
  description: `this is a about page.`,
  pageId: "/about",
};

function Page() {
  const mainRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const body = document.querySelector("body");
      let main = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 100%",
          end: "+=100%",
          toggleActions: "restart pause resume reverse",
          scrub: true,
        },
      });
      main.to(body, { className: "bg-bg-light text-pink" });
      let dark = gsap.timeline({
        scrollTrigger: {
          trigger: ".dark",
          start: "top 100%",
          end: "+=100%",
          toggleActions: "restart pause resume reverse",
          scrub: true,
        },
      });
      dark.to(body, { className: "bg-bg-dark text-white" }, "<");

      let light = gsap.timeline({
        scrollTrigger: {
          trigger: ".light",
          start: "top 20%",
          end: "+=100%",
          toggleActions: "restart pause resume reverse",
          scrub: true,
        },
      });
      light.to(body, { className: "bg-bg-light text-black" }).fromTo(
        ".svgFixed",
        { opacity: 0, position: "static" },
        {
          opacity: 1,
          position: "fixed",
          top: 0,
          left: 0,
        },
        "<-=1"
      );
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="about" ref={mainRef}>
      <h2>
        <Word tagName="strong" className="block" content="We are focusing on" />
        <Word content="creative design and technical work" />
      </h2>

      <div className="w-2/6 mx-auto mt-[70px] gap-y-[30px] flex flex-wrap">
        <Sentence
          tagName="h5"
          content="As technology develops, the combination of UX design and technology will
      be our powerful force."
        />
        <Sentence
          tagName="h6"
          content="기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될
      것이라고 믿습니다."
        />
      </div>

      <CircleGrid className="cCircle">
        <AboutTitle
          className={`${styles.cCircle_title}`}
          conLeft="new"
          conRight="eyes"
        />
        <div className={styles.cCircle_box}>
          <Sentence
            tagName="h3"
            content="We see everything with new eyes and make it with empathy and creativity."
          />
          <Sentence
            tagName="h6"
            content="우리는 모든 것을 새로운 눈으로 보고 공감과 창의력으로 만들어갑니다."
          />
        </div>
      </CircleGrid>

      <article className="dark">
        <TextMove
          className={`${styles.vision_title_1} title_flow`}
          location={["x", "x", "y"]}
          coord={["-1", "1", "1"]}
        >
          <Text tagName="div" className="justify-between">
            {"Make Empathy"}
            {"&"}
          </Text>
          <Text>{"Creativity"}</Text>
        </TextMove>
      </article>

      <article className="text_box_side">
        <Title tagName="h3">Our Philosophy</Title>

        <section>
          <Sentence
            tagName="h4"
            content="We respect the thoughts of people who grew up in different environments. Making my thoughts and other people's thoughts together The beginning is The J's creative momentum."
          >
            <SvgLine
              id="sBubble_s"
              color="white"
              className="svgAni left-[4.2rem]"
            />
          </Sentence>
          <Sentence
            tagName="p"
            content="
              우리는 서로 다른 환경에서 자란 사람들의 생각을 존중합니다. 나의
              생각과 다른 사람들의 생각을 함께 만들어가는 것 그 시작이 더제이의
              크리에이티브 모멘텀입니다."
          />
        </section>
      </article>

      <article className="text_box_noSide">
        <section>
          <Letter
            content="Neat Arrangement Creative Expression Sophisticated Techniques Good Communication Young Generation Casual and Cozy Office Free-Spirited"
            className="text-heading-8 desktop:text-heading-1"
          />
        </section>
      </article>

      <article className="light">
        <SvgIcons types="basic" color="black" className="svgFixed" />
        <TextMove
          className={`${styles.vision_title_2} title_flow `}
          location={["y", "y", "y"]}
          coord={["1", "1", "1"]}
        >
          <Text tagName="div" className="gap-8">
            {"Discover"}
            {"Hidden"}
          </Text>
          <Text>{"Creativity"}</Text>
        </TextMove>
      </article>
    </div>
  );
}
