import styles from "./About.module.css";
import Text from "../../components/Text";
import Button from "../../components/Button";
import TextSplit from "../../components/TextSplit";
import TextTyping from "../../components/TextTyping";

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
      <TextTyping content="As human beings we often find ourselves feeling out of place in the world around us We sense that something is not quite right that the reality we experience is not necessarily the truth" />
      {/* . , / 안읽힘 */}

      <ul>
        <li>
          <Text content="공통 !" />
        </li>
        <li>
          <Button label="hello Btn" />
        </li>
      </ul>

      <div className={styles.text_reveal} style={{ marginBottom: "200vh" }}>
        <div>
          <TextSplit content="Design is" />
          <TextSplit content="intelligence" />
          <TextSplit content="made visible." />
          <TextSplit content="Design is" />
          <TextSplit content="intelligence" />
          <TextSplit content="made visible." />
        </div>
      </div>
    </>
  );
}
