import styles from "./Main.module.css";

import Text from "#root/components/Text";
import Video from "#root/components/Video/Video";
import MainTitle from "#root/components/MainTitle/MainTitle";
import TextTyping from "#root/components/TextTyping";
import SvgLine from "#root/components/SvgLine";

export const title = "🥰 Main",
  description = "this is a Main page.";

function Page() {
  return (
    <>
      <Video id="smaller" src="https://www.w3schools.com/tags/movie.mp4">
        <p className="body__1 text-center max-w-xl mx-auto">
          LG Electronics online platform Global pilot website
        </p>
        <MainTitle conLeft="make" conRight="work" change="moment">
          <SvgLine id="sThej" />
        </MainTitle>
        <div className={`${styles.main_txt} body__2`}>
          <Text content="Our latest" />
          <Text content="SCROLL" />
        </div>
      </Video>

      <TextTyping
        className="body__1"
        splitBy="words"
        content="Creative Design Technical Agency"
      />

      <div className={styles.svgTest}>
        <TextTyping
          className="heading__4 mb-50"
          splitBy="words"
          content="We have implemented various experience, such as global integrated platforms and creative projects."
        >
          <SvgLine id="sBubble" className="" delay={50} />
          <SvgLine id="sArrow" className="" />
        </TextTyping>
        <TextTyping
          className="text-xl"
          splitBy="words"
          content="글로벌 통합 플랫폼 프로젝트와 크리에이티브 프로젝트 등 다양한 프로젝트들을 수행해 왔습니다."
        />
      </div>

      <div style={{ height: "500vh" }}></div>
    </>
  );
}
export { Page };
