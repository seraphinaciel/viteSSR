// node module
import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePageContext } from "../../renderer/usePageContext";

// components
import { Sentence } from "#root/components/TextSplit";
import SvgLine from "#root/components/SvgLine";
import MotionBox from "../../components/main/MotionBox";
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
        <MotionBox id="smaller" src="https://www.w3schools.com/tags/movie.mp4" />

        <Sentence tagName="h4" content="Creative Design Technical Agency" />

        <section className={`text_box_noSide text-heading-10 desktop:text-heading-4`}>
          <section>
            <Sentence
              tagName="h3"
              content="We have implemented various experience, such as global integrated platforms and creative projects."
            >
              <SvgLine id="sBubble" className={`svg | absolute`} />
              <SvgLine id="sArrow" className={`svg | absolute top-full`} />
            </Sentence>

            <Sentence
              tagName="p"
              className="basic_p_2 | text-heading-10 desktop:text-body-1 block not-italic"
              content="글로벌 통합 플랫폼 프로젝트와 크리에이티브 프로젝트 등 다양한 프로젝트들을 수행해 왔습니다."
            />
          </section>
        </section>

        {!isLoading && !isError && <ListMonoLayout layout={LAYOUT_BIG_FIRST} list={workList} />}

        <div style={{ height: "100vh" }}></div>
      </div>
    </div>
  );
}
export { Page };
