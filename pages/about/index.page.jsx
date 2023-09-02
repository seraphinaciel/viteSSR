import styles from "./About.module.css";

import Text from "#root/components/Text";
import CircleBox from "#root/components/CircleBox/CircleBox";
import TextMove from "#root/components/TextMove";
import AboutTitle from "#root/components/AboutTitle/AboutTitle";
import TextTyping from "#root/components/TextTyping";
import Textsplit from "#root/components/Textsplit";
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
      <h1 className="heading__1">
        <strong>
          <Textsplit content="We are focusing on" />
        </strong>
        <Textsplit content="creative design and technical work" />
      </h1>

      <div className={styles.circle}>
        <CircleBox>
          <SvgIcons className="basic" color="black" />
          <AboutTitle
            className={`${styles.title} special`}
            conLeft="new"
            conRight="eyes"
          />
        </CircleBox>
      </div>

      <SvgIcons className="big2" color="black" />
      <SvgIcons className="big1" color="black" />
      <TextMove
        className={`${styles.text} special`}
        location={["x", "x", "y"]}
        coord={["-1", "1", "1"]}
      >
        <div>
          <Text content="Make Empathy" />
          <Text content="&" />
        </div>
        <Text content="Creativity" />
      </TextMove>

      <TextTyping
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
          <Text content="Discover" />
          <Text content="Hidden" />
        </div>
        <Text content="Creativity" />
      </TextMove>
    </>
  );
}
