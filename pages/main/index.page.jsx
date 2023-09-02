import styles from "./Main.module.css";

import Text from "#root/components/Text";
import Video from "#root/components/Video/Video";
import TextChange from "#root/components/TextChange/TextChange";
import TextTyping from "#root/components/TextTyping";
import SvgLine from "#root/components/SvgLine";

export const title = "🥰 Main",
  description = "this is a Main page.";

function Page() {
  return (
    <>
      <h1 className={styles.name}>Main</h1>
      <Video id="smaller" src="https://www.w3schools.com/tags/movie.mp4">
        <TextChange
          id="out"
          conLeft="make"
          conRight="work"
          change="moment"
          img="/images/thej_path_1x.webp"
        >
          <p className="text-4xl text-center max-w-xl mx-auto">
            LG Electronics online platform Global pilot website
          </p>
        </TextChange>
        <div className={styles.main_txt}>
          <Text content="Our latest" />
          <Text content="SCROLL" />
        </div>
      </Video>

      <TextTyping
        className="text-4xl/tight"
        splitBy="words"
        content="Creative Design Technical Agency"
      />

      <div className={styles.svgTest}>
        <TextTyping
          className="text-6xl/tight mb-50"
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
      <SvgLine id="sBubble" className="opacity-1" />

      <div style={{ height: "500vh" }}></div>
    </>
  );
}
export { Page };
