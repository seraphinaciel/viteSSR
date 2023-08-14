import styles from "./About.module.css";
import Text from "../components/Text";
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
      <Text content="Example of using vite-plugin-ssr." />
      <strong className={styles.desc}>{documentProps.description}</strong>
    </>
  );
}
