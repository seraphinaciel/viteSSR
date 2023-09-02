import styles from "./Index.module.css";

import { Title } from "#root/components/Text";
import Guide from "#root/components/Guide/Guide";

import { Text } from "#root/components/Text";
// import Button from "#root/components/Button";
import { Sentence } from "#root/components/TextSplit";
import TextMove from "#root/components/about/TextMove";
import SvgIcons from "#root/components/SvgIcons";
import SvgLine from "#root/components/SvgLine";
import { TextSvg } from "#root/components/TextSvg";

import Video from "#root/components/Video";

// import TextMarquee from "#root/components/TextMarquee/TextMarquee";
// import TextReveal from "#root/components/TextReveal/TextReveal";

// head의 title, meta 내용
export const documentProps = {
  title: "😁 main",
  description: `this is a main page.`,
};

function Page() {
  return (
    <>
      <Title className={styles.title}>heading tag -- eng</Title>
      <h1>h1 64px / 200px</h1>
      <h2>h2 50px / 130px</h2>
      <h3>h3 20px / 60px</h3>
      <h4>h4 26px / 36px</h4>
      <h5>h5 20px / 26px</h5>
      <h6>h6 18px / 20px</h6>
      <h7>h7</h7>
      <h8>h8</h8>

      <hr />

      <Title className={styles.title}>Guide</Title>
      <Guide />

      <hr />

      <Title className={styles.title}>text_box_1</Title>
      <section className="text_box_1 ">
        <Sentence content="We have implemented various experience, such as global integrated platforms and creative projects."></Sentence>

        <Sentence
          tagName="em"
          content="글로벌 통합 플랫폼 프로젝트와 크리에이티브 프로젝트 등 다양한 프로젝트들을 수행해 왔습니다."
        />
      </section>

      <hr />

      <Title className={styles.title}>/about .title_flow</Title>
      <TextMove
        className={`${styles.vision_title_2} title_flow`}
        location={["y", "y", "y"]}
        coord={["1", "1", "1"]}
      >
        <Text tagName="div" className="gap-8">
          {"Discover"}
          {"Hidden"}
        </Text>
        <Text>{"Creativity"}</Text>
      </TextMove>
      <hr />

      <Title className={styles.title}>SvgIcons .basic .big1~2</Title>
      <SvgIcons types="basic" color="pink" />
      <SvgIcons types="big1" color="hotpink" />
      <SvgIcons types="big2" />
      <hr />

      <Title className={styles.title}>#smaller, #bigger</Title>
      <Video id="smaller" src="https://www.w3schools.com/tags/movie.mp4" />
      <Video id="bigger" src="https://www.w3schools.com/tags/movie.mp4" />
      <hr />

      <Title className={styles.title}>bubble</Title>
      <SvgLine id="sBubble_s" color="red" className="svgAni" />
      <hr />

      <Title className={styles.title}>TextSvg</Title>

      <div className="w-2/6 mx-auto mt-[70px] gap-y-[30px] flex flex-wrap">
        <Sentence
          tagName="h5"
          content="As technology develops, the combination of UX design and technology will be our powerful force."
        />
        <Sentence
          tagName="h6"
          content="기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될
      것이라고 믿습니다."
        />
      </div>
      <TextSvg
        tagName="div"
        className="w-2/6 mx-auto mt-[70px] gap-y-[30px] flex flex-wrap"
      >
        <Text tagName="h5">
          {
            "As technology develops, the combination of UX design and technology will be our powerful force."
          }
        </Text>
        <Text tagName="h6">
          {
            "기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될 것이라고 믿습니다."
          }
        </Text>
      </TextSvg>
      <hr />

      {/* <Text content="This page is:" />
      <Button label="hello Btn" />


      <div className={styles.text_reveal}>
        <div>
          <TextTyping splitBy="words" content="version 2" />
          <TextTyping splitBy="words" content="디자인은" />
          <TextTyping splitBy="words" content="눈에 보이는 " />
          <TextTyping splitBy="words" content="지성입니다...?" />
        </div>
      </div>

      <div className={styles.text_split}>
        <TextTyping
          splitBy="letter"
          content="As human beings, we often find ourselves feeling out of place in the world around us. We sense that something is not quite right that the reality we experience is not necessarily the truth"
        />
      </div>
      <div className={styles.banner}>
        <TextMarquee content="my favorite fruit is apple" speed={2} />
        <TextMarquee content="a little bit of love" speed={5} />
        <TextMarquee content="good chioce" speed={5} />
        <TextMarquee content="I love tomato" speed={1} />
        <TextMarquee content="one two three" speed={1.5} />
        <TextMarquee content="깊은 밤, 길을 잃어도 차라리 날아올라" speed={2} />
      </div>

      <div className={styles.transition}>
        <TextReveal content="my favorite fruit is apple" />
        <TextReveal content="my favorite fruit is apple" />
      </div>

      <h1>SvgIcons</h1>
      <SvgIcons className="basic" color="pink" size={[200, 200]} />

      <h1>video</h1>
       */}
    </>
  );
}

export { Page };
