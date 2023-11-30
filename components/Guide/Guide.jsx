import { useCallback, useState } from "react";

// components
import { Text, Title } from "#root/components/Text";
import { Word, animationConfigSet } from "#root/components/TextSplit";
import TextPassed from "../../components/TextPassed/TextPassed";
import SvgIcons from "#root/components/SvgIcons";
import MotionBox from "../main/MotionBox";
import LineMotionText from "../LineMotionText";
import PageTitle from "../PageTitle";
// import ScrollSign from "../ScrollSign";
import { SvgLineIdList } from "../SvgLine";

// style
import styles from "./Guide.module.css";

// utils
import { CM } from "#root/utils";

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
  "text-body-16-24",
  "text-heading-1-kr",
  "text-body-1-kr",
  "text-body-2-kr",
  "text-body-3-kr",
  "text-body-4-kr",
  "text-body-5-kr",
  "text-body-6-kr",
  "text-body-7-kr",
];
const fontColorGroup = [
  // "text-cursor",
  "text-white",
  "text-black",
  "text-base-1",
  "text-base-2",
  "text-base-3",
  // bg
  // "text-bg-dark",
  // "text-bg-light",
  // border
  // "text-line-light",
];

export default function Guide() {
  const { fontSize, colors } = useCssTheme(state => state);

  const fontStyle = {
    ...Object.entries(fontSize).reduce((a, s) => {
      const [keyname, value] = s;
      if (keyname.indexOf("special") < 0 && keyname.indexOf("heading") < 0 && keyname.indexOf("body") < 0) return a;
      a[`${keyname}`] = value;
      return a;
    }, {}),
  };

  const palette = {
    cursor: colors.cursor,
    white: colors.white,
    black: colors.black,
    ...Object.entries(colors.base).reduce((acc, set) => {
      acc[`base-${set[0]}`] = set[1];
      return acc;
    }, {}),
    ...Object.entries(colors.bg).reduce((acc, set) => {
      acc[`bg-${set[0]}`] = set[1];
      return acc;
    }, {}),
    ...Object.entries(colors.line).reduce((acc, set) => {
      acc[`line-${set[0]}`] = set[1];
      return acc;
    }, {}),
  };

  const ref = useCallback(() => {
    // console.log(fontStyle);
  }, []);

  const [rolling, setRolling] = useState({
    text: "Soundrise",
    direction: "left",
    duration: 100,
  });
  const onToggleRollingDirection = () => {
    setRolling(prev => {
      return {
        ...prev,
        direction: prev.direction === "left" ? "right" : "left",
      };
    });
  };
  const onApplyRollingState = () => {
    const text = document.getElementById("rolling-text").value;
    const duration = document.getElementById("rolling-duration").value;
    setRolling(prev => {
      return {
        ...prev,
        text: text.length < 10 ? prev.text : text,
        duration: duration === "" || parseInt(duration, 10) === 0 ? prev.duration : duration,
      };
    });
  };

  const [font, setFont] = useState(fontGroup[0]);
  const [fontColor, setFontColor] = useState(fontColorGroup[0]);
  const [boxWidth, setBoxWidth] = useState("auto");
  const [mode, setMode] = useState("dark");
  const [ellipsis, setEllipsis] = useState(true);
  console.log("boxWidth", boxWidth);
  return (
    <>
      <div ref={ref}>
        <Title className={"text-heading-1 mb-50"}>Style Guide</Title>
        <section className={styles.font}>
          <Title tagName="strong" className={styles.head}>
            Font & Color
          </Title>
          <div className="relative z-1 flex flex-wrap gap-x-[--grid-col-gap] gap-y-14 ml-auto text-heading-10 mt-30">
            {/* ellipsis */}
            <button
              className={CM("border border-solid border-blue-300 rounded-[10px] p-10", {
                "bg-blue-300": ellipsis,
              })}
              type="button"
              onClick={() => {
                setEllipsis(prev => !prev);
              }}
            >{`말줄임 : ${ellipsis ? "활성" : "비활성"}`}</button>
            {/* font options */}
            <select
              className="border border-solid border-blue-300 rounded-[10px] p-10"
              name="font"
              id="font-options"
              onChange={event => setFont(event.currentTarget.value)}
            >
              {Object.keys(fontStyle).map((name, index) => {
                const className = fontGroup[index];
                return (
                  <option key={name} type="button" value={className}>
                    {name}
                  </option>
                );
              })}
            </select>
            {/* color options */}
            <select
              className="border border-solid border-blue-300 rounded-[10px] p-10"
              name="colors"
              id="color-options"
              onChange={event => setFontColor(event.currentTarget.value)}
            >
              {Object.keys(palette)
                .filter(key => !key.match(/bg|line|cursor/gi))
                .map((name, index) => {
                  const className = fontColorGroup[index];
                  return (
                    <option key={name} type="button" value={className}>
                      {name}
                      {" : "}
                      {palette[name]}
                    </option>
                  );
                })}
            </select>
            {/* box width */}
            <div className="flex gap-x-[--grid-col-gap] items-center">
              <label htmlFor="font-box-width">텍스트 상자 크기</label>
              <input
                className="border border-solid border-blue-300 rounded-[10px] p-10"
                type="text"
                id="font-box-width"
                onKeyDown={event => {
                  if (event.key !== "Enter") return;
                  setBoxWidth(parseInt(event.currentTarget.value));
                }}
                placeholder="px 단위로 입력해주세요."
              />
            </div>
          </div>
          <p
            // contentEditable
            style={{
              maxWidth: `${boxWidth * 0.1}rem`,
            }}
            className={`${font} ${CM(
              fontColor,
              {
                "bg-black": mode === "dark" || fontColor === "text-white",
                "bg-white": mode === "light" || fontColor !== "text-white",
                "border-y-2 border-red-700": !!"border",
                "overflow-hidden text-ellipsis whitespace-nowrap": ellipsis,
              },
              "mt-30 w-full",
            )}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptate?
          </p>
          <Text className="block text-body-5-kr mt-5 mb-15">* 빨간 테두리가 텍스트 상자의 높이 가늠선입니다.</Text>
        </section>

        {/* <section>
          <Title className={styles.title}>heading tag -- eng</Title>
          <h1>h1 64px / 200px</h1>
          <h2>h2 50px / 130px</h2>
          <h3>h3 20px / 60px</h3>
          <h4>h4 26px / 36px</h4>
          <h5>h5 24px / 26px</h5>
          <h6>h6 </h6>
          <p className="basic_p">basic_p 20px / 26px</p>
          <p>p 18px / 20px</p>
        </section> */}

        <Title tagName="h2" className={CM(styles.head, "mt-100 mb-30")}>
          Component
        </Title>
        <section className="w-screen">
          <div className="text-heading-10">
            <div className="flex flex-col gap-y-12">
              <dl>
                <div className="flex flex-row gap-x-4">
                  <dt>컴포넌트 이름 : </dt>
                  <dd>TextPassed</dd>
                </div>
                <div className="flex flex-row gap-x-4 mt-14">
                  <dt>조정 옵션</dt>
                  <dd>
                    <ul className="flex-1">
                      <li>{`방향 : Left | Right`}</li>
                      <li>속도 : 0 ~ 500 </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-wrap flex-row gap-[--grid-col-gap] gap-y-14 mt-14 mobile:text-body-2">
              <div className="bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] mobile:min-w-full">
                <label className="pr-4" htmlFor="rolling-duration">
                  속도
                </label>{" "}
                <input
                  className="px-10 py-4 rounded-[7px]"
                  id="rolling-duration"
                  placeholder={`현재 속도는 ${rolling.duration}입니다.`}
                />
              </div>

              <div className="bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] mobile:min-w-full">
                <label className="pr-4" htmlFor="rolling-text">
                  텍스트 입력
                </label>{" "}
                <input
                  className="px-10 py-4 rounded-[7px]"
                  id="rolling-text"
                  placeholder={"8자 이상 입력"}
                  minLength={8}
                />
              </div>

              <button
                type="button"
                className="bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] md:order-4 mobile:flex-1"
                onClick={onApplyRollingState}
              >
                적용
              </button>

              <button
                type="button"
                className="bg-blue-300 px-14 py-7 border border-solid border-blue-300 rounded-[10px] md:order-1 mobile:flex-1"
                onClick={onToggleRollingDirection}
              >
                방향 전환
              </button>
            </div>
          </div>
          <div className="flex flex-wrap overflow-hidden md:pb-22 ">
            <TextPassed text={rolling.text} runDirection={rolling.direction} />
            <TextPassed text={rolling.text} runDirection={rolling.direction === "left" ? "right" : "left"} />
          </div>
        </section>

        <section className="layout_text_box">
          <Title tagName="strong" className={styles.title}>
            Fade motion
          </Title>
          <article>
            <Title className="text-heading-8">Our Philosophy</Title>
            <Word
              className="title_p"
              content="We respect the thoughts of people who grew up in different environments. Making my thoughts and other people's thoughts together The beginning is The J's creative momentum."
              location="respect"
              styleId="circle/8.up"
              color="red"
              animationConfig={animationConfigSet.description}
              animationType="fade up"
            />
            <Word
              className="basic_p_2"
              content="우리는 서로 다른 환경에서 자란 사람들의 생각을 존중합니다. 나의 생각과 다른 사람들의 생각을 함께 만들어가는 것 그 시작이 더제이의 크리에이티브 모멘텀입니다."
              animationConfig={animationConfigSet.description}
              animationType="fade in"
            />
          </article>
        </section>

        <section>
          <Title tagName="strong" className={styles.title}>
            Page Header
          </Title>
          <div role="region" className={"mobile:px-[--grid-container-margin]"}>
            <div
              className={CM("flex", {
                "items-start": true,
                "md:items-center": false,
              })}
            >
              <PageTitle
                title={["We are focusing on", "creative design", "and technical work"]}
                description={{
                  text: "As technology develops, the combination of UX design and technology will be our powerful force.",
                  transform: "기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될 것이라고 믿습니다.",
                }}
              />
            </div>
            {/* <ScrollSign text="Learn our services" /> */}
          </div>
        </section>

        <section>
          <Title tagName="strong" className={styles.title}>
            #smaller, #bigger
          </Title>
          <MotionBox id="smaller" src="https://www.w3schools.com/tags/movie.mp4" />
          <MotionBox id="bigger" src="https://www.w3schools.com/tags/movie.mp4" />
        </section>

        <Title tagName="strong" className={styles.title}>
          SVG (SvgLine.jsx)
        </Title>
        {/* <section className="flex gap-10">
          <div className="text-heading-4">
            {SvgLineIdList.map(id => (
              <LineMotionText key={id} styleId={id}>
                {id.indexOf("circle/") !== -1 && "experimentation"}
              </LineMotionText>
            ))}
          </div>
        </section> */}

        <Title tagName="strong" className={styles.title}>
          SVG (SvgIcons.jsx)
        </Title>
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
