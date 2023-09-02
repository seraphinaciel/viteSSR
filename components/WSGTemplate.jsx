import { useCallback } from "react";
import useCssTheme from "../hooks/useCssTheme";
import style from "./wsg.module.css";
import { Text, Title } from "./Text";

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

export default function WSGTemplate() {
  const [theme] = useCssTheme();
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
    console.log(theme);
    console.log(palette);
  }, []);

  return (
    <>
      <div ref={ref}>
        <Title theme={style["template-title"]}>WSG</Title>

        {/* 
        theme 이건 뭐지...? 이 비밀을 풀고
        텍스트도 map이용해서 가이드 하나 만들장
        */}

        <section>
          <Title container="h2" theme={style["head"]}>
            Colors
          </Title>
          {/* color list */}
          <ul className={style["table"]}>
            {Object.keys(palette).map((name, index) => {
              // eslint-disable-next-line no-useless-escape
              const boxName = bgGroup[index];
              return (
                <li key={name}>
                  <div className={boxName}></div>
                  <Text>{[`Color name : bg-${name}`, `${palette[name]}`]}</Text>
                </li>
              );
            })}
          </ul>
        </section>
        {/* end */}
      </div>
    </>
  );
}
