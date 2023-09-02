import styles from "./About.module.css";

import Text from "#root/components/Text";
import CircleBox from "#root/components/CircleBox/CircleBox";
import TextMove from "#root/components/TextMove";
import TextLR from "#root/components/TextLR/TextLR";
import Texttyping from "#root/components/TextTyping";
import SvgIcons from "#root/components/SvgIcons";

export { Page };

export const documentProps = {
  title: "😁 about",
  description: `this is a about page.`,
  pageId: "/about",
};

function Page(pageContext) {
  console.log("pages : " + pageContext._pageId);

  return (
    <>
      <h1>About</h1>
      <CircleBox>
        <div className={styles.circle}>
          <TextLR id="out" conLeft="new" conRight="eyes" />
          <SvgIcons color="black" />
        </div>
      </CircleBox>
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

      <Texttyping
        content="Neat Arrangement Creative Expression Sophisticated Techniques Good Communication Young Generation Casual and Cozy Office Free-Spirited"
        splitBy="letter"
        className="text-9xl"
      />

      <TextMove
        className={styles.vision_title}
        location={["y", "y", "y"]}
        coord={["1", "1", "1"]}
      >
        <SvgIcons color="black" />
        <div>
          <Text content="Discover" />
          <Text content="Hidden" />
        </div>
        <Text content="Creativity" />
      </TextMove>
    </>
  );
}
