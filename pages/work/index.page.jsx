import styles from "./Work.module.css";
import TextLR from "../components/TextLR";
export const title = "🥰 work",
  description = "this is a work page.";

function Page() {
  return (
    <>
      <h1 className={styles.name}>Work</h1>
      <TextLR id="out" conLeft="GET ON THE" conRight="ELEVATOR" />
      <TextLR id="in" conLeft="Apple is" conRight="expensive" />
    </>
  );
}

export { Page };
