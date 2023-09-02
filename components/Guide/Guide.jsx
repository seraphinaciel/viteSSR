import { useCallback } from "react";

// components
import { Text, Title } from "#root/components/Text";
import { Sentence } from "#root/components/TextSplit";
import TextPassed from "../../components/TextPassed/TextPassed";
import SvgIcons from "#root/components/SvgIcons";
import SvgLine from "#root/components/SvgLine";
import Video from "#root/components/Video";
import { TextSvg } from "#root/components/TextSvg";

// style
import styles from "./Guide.module.css";

// hooks
import useCssTheme from "#root/hooks/useCssTheme";

// static data
const fontGroup = [
  "text-special",
  "text-heading-1",
  "text-heading-2",
  "text-heading-3",
  "text-heading-4",
  "text-heading-5",
  "text-heading-6",
  "text-heading-7",
  "text-heading-8",
  "text-heading-9",
  "text-heading-10",
  "text-body-1",
  "text-body-2",
  "text-body-3",
  "text-heading-1-kr",
  "text-body-1-kr",
  "text-body-2-kr",
  "text-body-3-kr",
  "text-body-4-kr",
  "text-body-5-kr",
  "text-body-6-kr",
  "text-body-7-kr",
];
const bgGroup = [
  "bg-cursor",
  "bg-white",
  "bg-black",
  "bg-base-1",
  "bg-base-2",
  "bg-base-3",
  "bg-bg-dark",
  "bg-bg-light",
  "bg-line-light",
];

export default function Guide() {
  const [theme] = useCssTheme();

  const fontStyle = {
    ...Object.entries(theme.fontSize).reduce((a, s) => {
      const [keyname, value] = s;
      if (
        keyname.indexOf("special") < 0 &&
        keyname.indexOf("heading") < 0 &&
        keyname.indexOf("body") < 0
      )
        return a;
      a[`${keyname}`] = value;
      return a;
    }, {}),
  };

  const palette = {
    cursor: theme.colors.cursor,
    white: theme.colors.white,
    black: theme.colors.black,
    ...Object.entries(theme.colors.base).reduce((acc, set) => {
      acc[`base-${set[0]}`] = set[1];
      return acc;
    }, {}),
    ...Object.entries(theme.colors.bg).reduce((acc, set) => {
      acc[`bg-${set[0]}`] = set[1];
      return acc;
    }, {}),
    ...Object.entries(theme.colors.line).reduce((acc, set) => {
      acc[`line-${set[0]}`] = set[1];
      return acc;
    }, {}),
  };

  const ref = useCallback(() => {
    console.log(fontStyle);
  }, []);

  return (
    <>
      <div ref={ref}>
        <Title className={styles.title}>Style Guide</Title>

        <section className={styles.font}>
          <Title className={styles.head}>Font size</Title>

          <Text className={"text-body-7-kr"}>
            # 빨간 테두리가 텍스트 상자의 높이 가늠선입니다.
          </Text>
          <ul className={styles.table}>
            {Object.keys(fontStyle).map((name, index) => {
              const className = fontGroup[index];
              return (
                <li key={name}>
                  <div className="min-w-[15rem] border-box text-heading-10 pl-4 capitalize ">
                    <div>{name.replace("-", "").replace("-kr", " [kr]")}</div>
                  </div>
                  <p
                    className={`${className} border-y border-red-300 overflow-hidden text-ellipsis whitespace-nowrap`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, voluptate?
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        <section className={styles.color}>
          <Title className={styles.head}>Colors</Title>
          <ul className={styles.table}>
            {Object.keys(palette).map((name, index) => {
              const boxName = bgGroup[index];
              return (
                <li key={name}>
                  <div className={boxName}></div>
                  <Text tagName="p">{[`bg-${name}`, `${palette[name]}`]}</Text>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <Title className={styles.title}>heading tag -- eng</Title>
          <h1>h1 64px / 200px</h1>
          <h2>h2 50px / 130px</h2>
          <h3>h3 20px / 60px</h3>
          <h4>h4 26px / 36px</h4>
          <h5>h5 24px / 26px</h5>
          <h6>h6 </h6>
          <p className="basic_p">basic_p 20px / 26px</p>
          <p>p 18px / 20px</p>
        </section>

        <Title className={styles.title}>Component Sample</Title>

        <section>
          <Title className={styles.title}>Text:passed</Title>
          <div className="flex flex-wrap w-full overflow-hidden">
            <TextPassed text="Soundrise" size="10" runDirection={"left"} />
            <TextPassed text="Soundrise" size="10" runDirection={"right"} />
          </div>
        </section>

        <Title className={styles.title}>text_box_1</Title>
        <section className="text_box_1 ">
          <Sentence content="We have implemented various experience, such as global integrated platforms and creative projects."></Sentence>

          <Sentence
            tagName="em"
            content="글로벌 통합 플랫폼 프로젝트와 크리에이티브 프로젝트 등 다양한 프로젝트들을 수행해 왔습니다."
          />
        </section>

        <section>
          <Title className={styles.title}>SvgIcons .basic .big1~2</Title>
          <SvgIcons types="basic" color="pink" />
          <SvgIcons types="big1" color="hotpink" />
          <SvgIcons types="big2" />
        </section>
        <section>
          <Title className={styles.title}>#smaller, #bigger</Title>
          <Video id="smaller" src="https://www.w3schools.com/tags/movie.mp4" />
          <Video id="bigger" src="https://www.w3schools.com/tags/movie.mp4" />
        </section>
        <section>
          <Title className={styles.title}>bubble</Title>
          <SvgLine id="sBubble_s" color="red" className="svgAni" />
        </section>
        <section>
          <Title className={styles.title}>TextSvg</Title>

          <div className="w-2/6 mx-auto mt-[70px] gap-y-[30px] flex flex-wrap">
            <Sentence
              tagName="p"
              className="basic_p"
              content="As technology develops, the combination of UX design and technology will be our powerful force."
            />
            <Sentence
              tagName="p"
              content="기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될
      것이라고 믿습니다."
            />
          </div>
          <TextSvg
            tagName="div"
            className="w-2/6 mx-auto mt-[70px] gap-y-[30px] flex flex-wrap"
          >
            <Text tagName="p" className="basic_p">
              {
                "As technology develops, the combination of UX design and technology will be our powerful force."
              }
            </Text>
            <Text tagName="p">
              {
                "기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될 것이라고 믿습니다."
              }
            </Text>
          </TextSvg>
        </section>
        {/* <Text content="This page is:" />
      <Button label="hello Btn" />


      <div className={styles.text_reveal}>
        <div>
          <TextTyping splitBy="words" content="version 2" />
          <TextTyping splitBy="words" content="디자인은" />
          <TextTyping splitBy="words" content="눈에 보이는 " />
          <TextTyping splitBy="words" content="지성입니다...?" />
        </div>
      </div>

      <div className={styles.text_split}>
        <TextTyping
          splitBy="letter"
          content="As human beings, we often find ourselves feeling out of place in the world around us. We sense that something is not quite right that the reality we experience is not necessarily the truth"
        />
      </div>
      <div className={styles.banner}>
        <TextMarquee content="my favorite fruit is apple" speed={2} />
        <TextMarquee content="a little bit of love" speed={5} />
        <TextMarquee content="good chioce" speed={5} />
        <TextMarquee content="I love tomato" speed={1} />
        <TextMarquee content="one two three" speed={1.5} />
        <TextMarquee content="깊은 밤, 길을 잃어도 차라리 날아올라" speed={2} />
      </div>

      <div className={styles.transition}>
        <TextReveal content="my favorite fruit is apple" />
        <TextReveal content="my favorite fruit is apple" />
      </div>

      <h1>SvgIcons</h1>
      <SvgIcons className="basic" color="pink" size={[200, 200]} />

      <h1>video</h1>
       */}
      </div>
    </>
  );
}
