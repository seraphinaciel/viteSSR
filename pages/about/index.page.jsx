import styles from "./About.module.css";

import { Text } from "#root/components/Text";
import CircleBox from "#root/components/CircleBox/CircleBox";
import TextMove from "#root/components/TextMove";
import AboutTitle from "#root/components/AboutTitle/AboutTitle";
import TextSplit from "#root/components/TextSplit";
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
      <h1 className="heading__1">
        <strong>
          <TextSplit splitBy="word" content="We are focusing on" />
        </strong>
        <TextSplit
          splitBy="word"
          content="creative design and technical work"
        />
      </h1>
      <div className="w-2/6 mx-auto mt-[70px] gap-y-[30px] flex flex-wrap">
        <TextSplit
          splitBy="sentence"
          className="body_2"
          content="As technology develops, the combination of UX design and technology will
      be our powerful force."
        />
        <TextSplit
          splitBy="sentence"
          className="body_2"
          content="기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될
      것이라고 믿습니다."
        />
      </div>

      <div className="flex flex-col items-center mt-24">
        <SvgIcons className="basic" color="black" />
        <div className="bg-slate-100 grid grid-cols-12 grid-rows-3 h-screen">
          <span className="bg-red-100 col-start-3">
            <img src="/images/logo.svg" alt="" />
          </span>
          <span className="bg-red-200 col-start-1">
            <img src="/images/logo.svg" alt="" />
          </span>
          <span className="bg-red-300 col-start-2 row-start-3">
            <img src="/images/logo.svg" alt="" />
          </span>
          <span className="bg-red-400 col-end-11 row-start-1">
            <img src="/images/logo.svg" alt="" />
          </span>
          <span className="bg-red-500 col-end-13 row-start-2">
            <img src="/images/logo.svg" alt="" />
          </span>
          <span className="bg-red-600 col-end-12 row-start-3">
            <img src="/images/logo.svg" alt="" />
          </span>
          <CircleBox className="col-span-full row-span-full">
            <AboutTitle
              className={`${styles.title} special`}
              conLeft="new"
              conRight="eyes"
            />
          </CircleBox>
        </div>
      </div>

      <div className={styles.circle}></div>
      <SvgIcons className="big2" color="black" />
      <SvgIcons className="big1" color="black" />
      <TextMove
        className={`${styles.text} special`}
        location={["x", "x", "y"]}
        coord={["-1", "1", "1"]}
      >
        <div>
          <Text>{"Make Empathy"}</Text>
          <Text>{"&"}</Text>
        </div>
        <Text>{"Creativity"}</Text>
      </TextMove>
      <TextSplit
        content="Neat Arrangement Creative Expression Sophisticated Techniques Good Communication Young Generation Casual and Cozy Office Free-Spirited"
        splitBy="letter"
        className="heading__1"
      />
      <TextMove
        className={`${styles.vision_title} special`}
        location={["y", "y", "y"]}
        coord={["1", "1", "1"]}
      >
        <div>
          <Text>{"Discover"}</Text>
          <Text>{"Hidden"}</Text>
        </div>
        <Text>{"Creativity"}</Text>
      </TextMove>
    </>
  );
}
