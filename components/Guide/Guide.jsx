import { useCallback } from "react";

// components
import { Text, Title } from "#root/components/Text";
import { Sentence, SWord, Word } from "#root/components/TextSplit";
import TextPassed from "../../components/TextPassed/TextPassed";
import SvgIcons from "#root/components/SvgIcons";
import SvgLine from "#root/components/SvgLine";
import MotionBox from "../main/MotionBox";
import Icon from "../icon";

// style
import styles from "./Guide.module.css";

// hooks
import useCssTheme from "#root/hooks/useCssTheme";
import LineMotionText from "../LineMotionText";
import { SvgLineIdList } from "../SvgLine";

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
      if (keyname.indexOf("special") < 0 && keyname.indexOf("heading") < 0 && keyname.indexOf("body") < 0) return a;
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

          <Text className={"text-body-7-kr"}># 빨간 테두리가 텍스트 상자의 높이 가늠선입니다.</Text>
          <ul className={styles.table}>
            {Object.keys(fontStyle).map((name, index) => {
              const className = fontGroup[index];
              return (
                <li key={name}>
                  <div className="min-w-[15rem] border-box text-heading-10 pl-4 capitalize ">
                    <div>{name.replace("-", "").replace("-kr", " [kr]")}</div>
                  </div>
                  <p className={`${className} border-y border-red-300 overflow-hidden text-ellipsis whitespace-nowrap`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptate?
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

        <Title className={styles.title}>공통 text box</Title>
        <section className="layout_text_box">
          <Title tagName="h5">Our Philosophy</Title>
          <article>
            <SWord
              className="title_p"
              content="We respect the thoughts of people who grew up in different environments. Making my thoughts and other people's thoughts together The beginning is The J's creative momentum."
              location="respect"
            >
              <SvgLine shape="circle/4.down" color="red" />
            </SWord>
            <SWord
              className="basic_p_2"
              content="우리는 서로 다른 환경에서 자란 사람들의 생각을 존중합니다. 나의 생각과 다른 사람들의 생각을 함께 만들어가는 것 그 시작이 더제이의 크리에이티브 모멘텀입니다."
            />
          </article>
        </section>

        <Title className={styles.title}>공통 title</Title>
        <section className="title_box">
          <h2>
            <Word tagName="strong" content="We are focusing on" />
            <Word content="creative design" />
            <Word content="and technical work" />
          </h2>

          <article>
            <Sentence
              tagName="strong"
              className="basic_p relative mb-7"
              content="As technology develops, the combination of UX design and technology will be our powerful force."
            />
            <Sentence
              tagName="p"
              className="basic_p_2"
              content="기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될
          것이라고 믿습니다."
            />
          </article>

          <nav>
            <a href="">
              <Text>Learn our services</Text>
              <Icon shape={"arrow/up"} style={{ fill: "black" }} />
            </a>
          </nav>
        </section>

        <section>
          <Title className={styles.title}>#smaller, #bigger</Title>
          <MotionBox id="smaller" src="https://www.w3schools.com/tags/movie.mp4" />
          <MotionBox id="bigger" src="https://www.w3schools.com/tags/movie.mp4" />
        </section>

        <Title className={styles.title}>SVG (SvgLine.jsx)</Title>
        <section className="flex gap-10">
          <div className="text-heading-4">
            {SvgLineIdList.map(id => (
              <LineMotionText key={id} styleId={id}>
                {id.indexOf("circle/") !== -1 && "experimentation"}
              </LineMotionText>
            ))}
          </div>
        </section>

        <Title className={styles.title}>SVG (SvgIcons.jsx)</Title>
        <section className="flex gap-10">
          <Text className="text-heading-8">SvgIcons .basic .big1~2</Text>
          <SvgIcons types="basic" color="pink" />
          <SvgIcons types="big1" color="hotpink" />
          <SvgIcons types="big2" />
        </section>
      </div>
    </>
  );
}
