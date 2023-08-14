import styles from "./About.module.css";
import Text from "#root/components/Text";
import Button from "#root/components/Button";
import TextSplit from "#root/components/TextSplit";
import TextTyping from "#root/components/TextTyping";
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
      <strong className={styles.desc}>{documentProps.description}</strong>
      <br />
      <br />
      <br />
      <br />
      <ul>
        <li>
          <Text content="공통 !" />
        </li>
        <li>
          <Button label="hello Btn" />
        </li>
      </ul>

      <div className={styles.text_reveal}>
        <div>
          <TextSplit content="version 1" />
          <TextSplit content="Design is" />
          <TextSplit content="intelligence" />
          <TextSplit content="made visible." />
        </div>
      </div>

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

      <SvgIcons />
    </>
  );
}
