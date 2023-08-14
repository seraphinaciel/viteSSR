import styles from "./Work.module.css";
import TextLR from "../../components/TextLR/TextLR";
import TextBanner from "../../components/TextMarquee/TextMarquee";

export const title = "🥰 work",
  description = "this is a work page.";

function Page() {
  return (
    <>
      <h1 className={styles.name}>Work</h1>
      <TextLR id="out" conLeft="GET ON THE" conRight="ELEVATOR" />
      <TextLR id="in" conLeft="Apple is" conRight="expensive" />

      <div className={styles.banner}>
        <TextBanner content="my favorite fruit is apple" speed={2} />
        <TextBanner content="a little bit of love" speed={5} />
        <TextBanner content="good chioce" speed={5} />
        <TextBanner content="I love tomato" speed={1} />
        <TextBanner content="one two three" speed={1.5} />
        <TextBanner content="깊은 밤, 길을 잃어도 차라리 날아올라" speed={2} />
      </div>
    </>
  );
}

export { Page };
