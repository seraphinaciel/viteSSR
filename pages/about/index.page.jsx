import styles from "./About.module.css";

import { Text } from "#root/components/Text";
import CircleBox from "#root/components/about/CircleBox";
import CircleGrid from "#root/components/about/CircleGrid";
import TextMove from "#root/components/about/TextMove";
import AboutTitle from "#root/components/about/AboutTitle";
import { Letter, Word, Sentence } from "#root/components/TextSplit";
import SvgIcons from "#root/components/SvgIcons";
// import SvgLine from "#root/components/SvgLine";

export { Page };

export const documentProps = {
  title: "😁 about",
  description: `this is a about page.`,
  pageId: "/about",
};

function Page() {
  return (
    <>
      <h2>
        <Word tagName="strong" className="block" content="We are focusing on" />
        <Word content="creative design and technical work" />
      </h2>

      <h4 className="w-2/6 mx-auto mt-[70px] gap-y-[30px] flex flex-wrap">
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
      </h4>

      <CircleGrid className={styles.circle}>
        <CircleBox className="col-span-full row-span-full">
          <SvgIcons types="basic" className="svgIcons1 fixed z-10" />
          <AboutTitle
            className={`${styles.title}`}
            conLeft="new"
            conRight="eyes"
          />
          <div className={styles.box}>
            <Sentence
              tagName="h3"
              content="We see everything with new eyes and make it with empathy and creativity."
            />
            <Sentence
              tagName="h6"
              content="우리는 모든 것을 새로운 눈으로 보고 공감과 창의력으로 만들어갑니다."
            />
          </div>
        </CircleBox>
      </CircleGrid>

      <TextMove
        className={`${styles.vision_title_1} text_box_2`}
        location={["x", "x", "y"]}
        coord={["-1", "1", "1"]}
      >
        <Text tagName="div" className="justify-between">
          {"Make Empathy"}
          {"&"}
        </Text>
        <Text>{"Creativity"}</Text>
      </TextMove>

      <Letter
        content="Neat Arrangement Creative Expression Sophisticated Techniques Good Communication Young Generation Casual and Cozy Office Free-Spirited"
        className="text-heading-8 desktop:text-heading-1"
      />

      <TextMove
        className={`${styles.vision_title_2} text_box_2`}
        location={["y", "y", "y"]}
        coord={["1", "1", "1"]}
      >
        <Text tagName="div" className="gap-8">
          {"Discover"}
          {"Hidden"}
        </Text>
        <Text>{"Creativity"}</Text>
      </TextMove>
    </>
  );
}
