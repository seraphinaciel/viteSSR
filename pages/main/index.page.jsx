// node module
import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePageContext } from "../../renderer/usePageContext";

// components
import { Text } from "#root/components/Text";
import { Sentence } from "#root/components/TextSplit";
import Video from "#root/components/Video";
import SvgLine from "#root/components/SvgLine";
import MainTitle from "#root/components/main/MainTitle";
import ListMonoLayout, { LAYOUT_BIG_FIRST } from "#root/components/ListMonoLayout/ListMonoLayout";

// styles
import styles from "./Main.module.css";

export const documnetProp = {
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
    queryFn: ({ queryKey, pageParam, meta }) => {
      // console.log(queryKey, pageParam, meta);
      // return axios.get("./data/works.json");
      return fetch("./data/works.json").then(res => res.json());
    },
  });

  return (
    <div ref={pageRef}>
      <Video id="smaller" src="https://www.w3schools.com/tags/movie.mp4">
        <Text className="hidden desktop:block desktop:text-heading-6 text-center">
          {"LG Global Pilot Website"}
          {"Platform Building"}
        </Text>

        <MainTitle conLeft="make" conRight="work" change="moment">
          <SvgLine id="sThej" />
        </MainTitle>

        <Text tagName="p" className={`basic_p_2 ${styles.main_txt}`}>
          {"Our latest"}
          {"SCROLL"}
        </Text>
      </Video>

      <Sentence tagName="h4" content="Creative Design Technical Agency" />

      <section className={`text_box_noSide ${styles.svgTest}`}>
        <section>
          <Sentence
            tagName="h3"
            content="We have implemented various experience, such as global integrated platforms and creative projects."
          >
            <SvgLine id="sBubble" className={`svg ${styles.svg01}`} />
            <SvgLine id="sArrow" className={`svg ${styles.svg02}`} />
          </Sentence>

          <Sentence
            tagName="p"
            className="basic_p_2"
            content="글로벌 통합 플랫폼 프로젝트와 크리에이티브 프로젝트 등 다양한 프로젝트들을 수행해 왔습니다."
          />
        </section>
      </section>

      {!isLoading && !isError && <ListMonoLayout layout={LAYOUT_BIG_FIRST} list={workList} />}

      <div style={{ height: "500vh" }}></div>
    </div>
  );
}
export { Page };
