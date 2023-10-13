// node module
import { useCallback } from "react";
import { usePageContext } from "../../renderer/usePageContext";

// components

// style
import styles from "./Contact.module.css";

export const documentProps = {
  title: "🥰 Contact",
  description: `this is a Contact page.`,
  pageId: "/contact",
};

function Page() {
  const pageContext = usePageContext();
  const pageRef = useCallback(wrap => {
    if (null == wrap) return;
    console.log("pageContext", pageContext);
  });
  return (
    <div ref={pageRef} className="contact">
      <div className="page-contents-wrap"></div>
      <div className={styles.some}></div>
    </div>
  );
}

export { Page };
