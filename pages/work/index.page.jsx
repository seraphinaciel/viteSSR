import styles from "./Work.module.css";
import Text from "#root/components/Text";
import TextLR from "#root/components/TextLR/TextLR";
import TextMarquee from "#root/components/TextMarquee/TextMarquee";
import TextReveal from "#root/components/TextReveal/TextReveal";
import SvgLine from "#root/components/SvgLine";
import Video from "#root/components/Video/Video";
import CircleBox from "#root/components/CircleBox/CircleBox";
import TextMove from "#root/components/TextMove";

export const title = "🥰 work",
  description = "this is a work page.";

function Page() {
  return (
    <>
      <h1 className={styles.name}>Work</h1>
      <TextLR id="out" conLeft="GET ON THE" conRight="ELEVATOR" />
      <TextLR id="in" conLeft="Apple is" conRight="expensive" />

      <TextMove
        className={styles.text}
        location={["x", "x", "y"]}
        coord={["-1", "1", "1"]}
      >
        <div>
          <Text content="Make Empathy" />
          <Text content="&" />
        </div>
        <Text content="Creativity" />
      </TextMove>

      <TextMove
        className={styles.text2}
        location={["y", "y", "y"]}
        coord={["1", "1", "1"]}
      >
        <div>
          <Text content="Discover" />
          <Text content="Hidden" />
        </div>
        <Text content="Creativity" />
      </TextMove>

      <div className={styles.transition}>
        <TextReveal content="my favorite fruit is apple" />
        <TextReveal content="my favorite fruit is apple" />
      </div>

      <SvgLine id="sBubble" duration={500} delay={50} />
      <SvgLine id="sArrow" duration={500} delay={50} />
      <SvgLine id="sHand" duration={500} delay={50} />

      {/* <div className={styles.banner}>
        <TextMarquee content="my favorite fruit is apple" speed={2} />
        <TextMarquee content="a little bit of love" speed={5} />
        <TextMarquee content="good chioce" speed={5} />
        <TextMarquee content="I love tomato" speed={1} />
        <TextMarquee content="one two three" speed={1.5} />
        <TextMarquee content="깊은 밤, 길을 잃어도 차라리 날아올라" speed={2} />
      </div> */}

      <CircleBox imgSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
      <Video id="bigger" src="https://www.w3schools.com/html/mov_bbb.mp4" />
      <Video id="smaller" src="https://www.w3schools.com/tags/movie.mp4" />
    </>
  );
}

export { Page };
