// node module
import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
// import { usePageContext } from "#root/renderer/usePageContext";

// components
import { Word } from "#root/components/TextSplit";
import { Sentence, SplitWord } from "#root/components/TextSplit2";
import SvgLine from "#root/components/SvgLine";
// import Icon from "#root/components/Icon";
import TextPassed from "#root/components/TextPassed/TextPassed";
import { Text, Title } from "#root/components/Text";
import VisualBox from "#root/components/main/VisualBox";
import Video from "#root/components/Video";

import ListMonoLayout, { LAYOUT_BIG_FIRST } from "#root/components/ListMonoLayout/ListMonoLayout";

// styles
import styles from "./Main.module.css";

// utils
import { CM } from "#root/utils";

export const documentProps = {
  title: "🥰 Main",
  description: "this is a Main page.",
};

const animation = {
  word: {
    arrange: {
      start: "top 95%",
    },
  },
  sentence: {
    arrange: {
      start: "top 95%",
    },
    duration: 1.5,
  },
};

function Page() {
  // const pageContext = usePageContext();
  const pageRef = useCallback(wrap => {
    if (null == wrap) return;
    // console.log("pageContext", pageContext);
  });

  const {
    data: workList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["works"],
    queryFn: async () => {
      // { queryKey, pageParam, meta }
      // console.log(queryKey, pageParam, meta);
      // return axios.get("./data/works.json");
      return await fetch("./data/works.json").then(res => res.json());
    },
  });

  return (
    <div ref={pageRef}>
      <div className="page-contents-wrap">
        {""}
        <section className={CM(styles.visual)}>
          <VisualBox
            id="smaller"
            src="https://www.w3schools.com/tags/movie.mp4"
            conLeft="make"
            conRight="work"
            change="moment"
          >
            <Text tagName="nav">{"Our latest"}</Text>
            <Text tagName="h2">
              {"LG Global Pilot Website"}
              {"Platform Building"}
            </Text>
          </VisualBox>
        </section>

        <section className={CM(styles.text_box)}>
          <Word
            tagName="h4"
            className="text-heading-8 md:text-heading-6"
            content="Creative Design Technical Agency"
            splitType="none"
          />
          {/* <h4>
            <Sentence tagName="span" content="Creative Design">
              <SvgLine shape="icon/x" style={{ width: "30px" }} />
            </Sentence>
            <Sentence tagName="span" content="Technical Agency" />
          </h4> */}
          <article>
            <Word
              tagName="h3"
              className="text-heading-10 md:text-heading-4"
              content="We have implemented various experience, such as global integrated platforms and creative projects."
              animationConfig={animation.word}
              location="experience,"
              styleId="circle/16.up"
              color="black"
            />

            <Word
              className="basic_p_2"
              content="글로벌 통합 플랫폼 프로젝트와 크리에이티브 프로젝트 등 다양한 프로젝트들을 수행해 왔습니다."
              splitType="none"
              animationConfig={{
                ...animation.sentence,
                from: {
                  duration: 0.6,
                  ease: "circ.out",
                  yPercent: "100",
                  opacity: 1,
                },
              }}
            />
            <SvgLine shape="tail arrow" />
          </article>
        </section>

        {!isLoading && !isError && (
          <section className={CM(styles.listMonoLayout)}>
            <ListMonoLayout layout={LAYOUT_BIG_FIRST} list={workList} />

            <p className="mt-60 mb-120 md:text-center md:mt-150 md:mb-300">
              <a href="" className="link">
                See more work
              </a>
            </p>
          </section>
        )}

        <section className={CM(styles.what)}>
          <div>
            <Video src="https://www.w3schools.com/tags/movie.mp4" />
          </div>
          <article>
            <Title tagName="h5" className="text-heading-9 md:text-heading-8">
              What we do
            </Title>
            <ul>
              <SplitWord
                tagName="li"
                content="We re-create designs for"
                keyword={["re-create"]}
                location="http://localhost:3000/"
              />
              <SplitWord
                tagName="li"
                content="user experiences with"
                keyword={["user", "experiences"]}
                location="http://localhost:3000/"
              />
              <SplitWord
                tagName="li"
                content="our creative perspective"
                keyword={["creative", "perspective"]}
                location="http://localhost:3000/"
              />
            </ul>
          </article>
        </section>

        <section className="py-100">
          <h1 className="overflow-hidden ">
            <TextPassed text={"About the J"} size={20} runDirection={"left"} />
          </h1>
        </section>

        <section className={CM(styles.who, "layout_text_box")}>
          <Title tagName="h5" className="md:pt-32 md:col-span-4 text-heading-9 md:text-heading-8">
            Who we are
          </Title>
          <article>
            <Word
              tagName="h3"
              className="md:pt-32 mb-32 text-heading-10 md:text-heading-4"
              content="We are an agency specializing in global and commerce, from building and maintenance to rollout, and strategic plan and creative design."
              animationConfig={animation.word}
              location="specializing"
              styleId="circle/18.up"
            />

            <Word
              tagName="p"
              className="basic_p_2"
              content="전략, 기획설계, 크리에이티브 디자인을 중심으로 구축, 확산, 운영 등 글로벌과 커머스에 특화된 크리에이티브 디자인이 가능한 에이전시입니다."
              split="none"
              animationConfig={animation.sentence}
            />

            <p className="inline-flex gap-x-25 mt-63">
              <a href="" className="link">
                Learn more about
              </a>
              <a href="" className="link">
                Join us
              </a>
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
export { Page };
