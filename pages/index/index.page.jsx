import styles from "./Index.module.css";

import { Title } from "#root/components/Text";
import Guide from "#root/components/Guide/Guide";

// import Text from "#root/components/Text";
// import Button from "#root/components/Button";
// import TextTyping from "#root/components/TextTyping";
// import TextMarquee from "#root/components/TextMarquee/TextMarquee";
// import TextReveal from "#root/components/TextReveal/TextReveal";
// import TextMove from "#root/components/TextMove";
// import SvgIcons from "#root/components/SvgIcons";
// import Video from "#root/components/Video/Video";

// head의 title, meta 내용
export const documentProps = {
  title: "😁 main",
  description: `this is a main page.`,
};

function Page() {
  return (
    <>
      <Title className={styles.title}>Guide</Title>

      <Guide />

      {/* <Text content="This page is:" />
      <Button label="hello Btn" />

      <h1>Text : Move 등등 </h1>
      <TextMove
        className={styles.vision_title}
        location={["y", "y", "y"]}
        coord={["1", "1", "1"]}
      >
        <div>
          <Text content="Discover" />
          <Text content="Hidden" />
        </div>
        <Text content="Creativity" />
      </TextMove>

      

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
      <Video id="smaller" src="https://www.w3schools.com/tags/movie.mp4" />
      <Video id="bigger" src="https://www.w3schools.com/tags/movie.mp4" /> */}
    </>
  );
}

export { Page };
