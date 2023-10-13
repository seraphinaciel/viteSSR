// node module
import { useCallback } from "react";
import { usePageContext } from "../../renderer/usePageContext";

// components
import { Text } from "#root/components/Text";
import Icon from "#root/components/Icon";
import { Word, Sentence } from "#root/components/TextSplit";
import CircleGrid from "#root/components/about/CircleGrid";
import AboutTitle from "#root/components/about/AboutTitle";

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
      <div className="page-contents-wrap">
        <section className="title_box">
          <h2>
            <Word tagName="strong" content="Different people" />
            <Word content="come together and" />
            <Word content="move in one direction" />
          </h2>

          <article>
            <Sentence
              tagName="strong"
              className="basic_p relative mb-7"
              content="Projects are people-centered, and the results shine because people come together."
            />
            <Sentence
              tagName="p"
              className="basic_p_2"
              content="프로젝트는 사람이 중심이며 그 결과물이 빛나는 이유는 함께하는 사람들이 있기 때문입니다."
            />
          </article>

          <nav>
            <a href="">
              <Text>See our job openings</Text>
              <Icon shape={"arrow/up"} style={{ fill: "black" }} />
            </a>
          </nav>
        </section>
      </div>

      <CircleGrid className={styles.cCircle}>
        <AboutTitle conLeft="new" conRight="eyes" />

        <div className={styles.textBox}>
          <Sentence tagName="h3" content="We see everything with new eyes and make it with empathy and creativity." />
          <Sentence
            tagName="p"
            className="basic_p_2"
            content="우리는 모든 것을 새로운 눈으로 보고 공감과 창의력으로 만들어갑니다."
          />
        </div>
      </CircleGrid>

      <div className={styles.some}></div>
    </div>
  );
}

export { Page };
