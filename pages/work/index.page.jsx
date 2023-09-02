import styles from "./Work.module.css";
import TextLR from "../../components/TextLR/TextLR";
import TextBanner from "../../components/TextMarquee/TextMarquee";
import SvgLine from "#root/components/SvgLine";
import Video from "#root/components/Video/Video";
import CircleBox from "#root/components/CircleBox/CircleBox";

export const title = "🥰 work",
  description = "this is a work page.";

function Page() {
  return (
    <>
      <h1 className={styles.name}>Work</h1>
      <TextLR id="out" conLeft="GET ON THE" conRight="ELEVATOR" />
      <TextLR id="in" conLeft="Apple is" conRight="expensive" />

      <SvgLine id="sStar" duration={500} delay={50} />
      <SvgLine id="sArrow" duration={500} delay={50} />
      <SvgLine id="sHand" duration={500} delay={50} />

      <div className={styles.banner}>
        <TextBanner content="my favorite fruit is apple" speed={2} />
        <TextBanner content="a little bit of love" speed={5} />
        <TextBanner content="good chioce" speed={5} />
        <TextBanner content="I love tomato" speed={1} />
        <TextBanner content="one two three" speed={1.5} />
        <TextBanner content="깊은 밤, 길을 잃어도 차라리 날아올라" speed={2} />
      </div>

      <CircleBox imgSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
      <Video id="bigger" src="https://www.w3schools.com/html/mov_bbb.mp4" />
      <Video id="smaller" src="https://www.w3schools.com/tags/movie.mp4" />
    </>
  );
}

export { Page };
