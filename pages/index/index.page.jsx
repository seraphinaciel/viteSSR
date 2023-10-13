// import styles from "./Index.module.css";

import Guide from "#root/components/Guide/Guide";

// head의 title, meta 내용
export const documentProps = {
  title: "😁 index",
  description: `this is a index page.`,
};

function Page() {
  return (
    <>
      <Guide />
    </>
  );
}

export { Page };
