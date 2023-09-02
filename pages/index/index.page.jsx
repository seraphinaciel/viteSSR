// import styles from "./Index.module.css";

import Guide from "#root/components/Guide/Guide";

// head의 title, meta 내용
export const documentProps = {
  title: "😁 main",
  description: `this is a main page.`,
};

function Page() {
  return (
    <>
      <Guide />
    </>
  );
}

export { Page };
