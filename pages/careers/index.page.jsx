// node module
import { useCallback } from "react";
import { usePageContext } from "../../renderer/usePageContext";

// components

// style
import styles from "./Careers.module.css";

export const documentProps = {
  title: "🥰 Careers",
  description: `this is a Careers page.`,
  pageId: "/career",
};

function Page() {
  const pageContext = usePageContext();
  const pageRef = useCallback(wrap => {
    if (null == wrap) return;
    console.log("pageContext", pageContext);
  });
  return (
    <div ref={pageRef} className="careers">
      <div className="page-contents-wrap"></div>
      <div className={styles.some}></div>
    </div>
  );
}

export { Page };
