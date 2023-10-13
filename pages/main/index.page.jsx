// node module
import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePageContext } from "#root/renderer/usePageContext";

// components
import { Sentence, SWord } from "#root/components/TextSplit";
import SvgLine from "#root/components/SvgLine";
import TextPassed from "#root/components/TextPassed/TextPassed";
import { Text, Title } from "#root/components/Text";
import MainTitle from "#root/components/main/MainTitle";

import MotionBox from "#root/components/main/MotionBox";
import ListMonoLayout, { LAYOUT_BIG_FIRST } from "#root/components/ListMonoLayout/ListMonoLayout";

// styles
import styles from "./Main.module.css";

export const documentProps = {
  title: "🥰 Main",
  description: "this is a Main page.",
};

function Page() {
  const pageContext = usePageContext();
  const pageRef = useCallback(wrap => {
    if (null == wrap) return;
    console.log("pageContext", pageContext);
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
        <div className="hidden">
          {" "}
          <MotionBox id="smaller" src="https://www.w3schools.com/tags/movie.mp4">
            <div className="motion-contents | absolute w-full">
              <Text className="hidden desktop:block desktop:text-heading-6 text-center">
                {"LG Global Pilot Website"}
                {"Platform Building"}
              </Text>
              <MainTitle conLeft="make" conRight="work" change="moment">
                <SvgLine shape="sThej" />
              </MainTitle>
              <Text tagName="p" className="basic_p_2 | absolute flex justify-between w-full top-[100%]">
                {"Our latest"}
                {"SCROLL"}
              </Text>
            </div>
          </MotionBox>
        </div>

        <section className={styles.text_box}>
          <Sentence tagName="h4" content="Creative Design Technical Agency" />
          <article>
            <SWord
              tagName="h3"
              content="We have implemented various experience, such as global integrated platforms and creative projects."
              location="experience,"
            >
              {/* <SvgLine shape="bExperience" className="absolute" /> */}
              <SvgLine shape="sArrow" />
            </SWord>

            <Sentence
              tagName="p"
              className="basic_p_2 | text-heading-10 desktop:text-body-1 block not-italic"
              content="글로벌 통합 플랫폼 프로젝트와 크리에이티브 프로젝트 등 다양한 프로젝트들을 수행해 왔습니다."
            />
          </article>
        </section>

        <div className="hidden">
          {!isLoading && !isError && <ListMonoLayout layout={LAYOUT_BIG_FIRST} list={workList} />}
        </div>

        <section className="pb-100">
          <h1 className="overflow-hidden ">
            <TextPassed text="About the J" size="10" runDirection={"left"} />
          </h1>
        </section>

        <article className={`layout_text_box ${styles.link}`}>
          <Title tagName="h5">Who we are</Title>
          <div>
            <Sentence
              tagName="h3"
              className="mb-32"
              content="We are an agency specializing in global and commerce, from building and maintenance to rollout, and strategic plan and creative design."
            >
              <SvgLine shape="bSpecializing" />
            </Sentence>
            <Sentence
              tagName="p"
              className="basic_p_2"
              content="전략, 기획설계, 크리에이티브 디자인을 중심으로 구축, 확산, 운영 등 글로벌과 커머스에 특화된 크리에이티브 디자인이 가능한 에이전시입니다."
            />
            <p className={styles.link}>
              <a href="">Learn more about</a>
              <a href="">Join us</a>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
export { Page };
