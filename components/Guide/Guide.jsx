// import { useCallback } from "react";
import useCssTheme from "#root/hooks/useCssTheme";
import styles from "./Guide.module.css";
import { Text, Title } from "../Text";

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

  const fontSize = {
    ...Object.entries(theme.fontSize).reduce((a, s) => {
      a[`${s[0]}`] = s[1];
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

  // console.log(fontSize);

  // const ref = useCallback(() => {
  //   console.log(theme);
  //   console.log(palette);
  // }, []);

  return (
    <>
      {/* <div ref={ref}> */}

      <section id="sec01">
        <Title className={styles.head}>Font size</Title>

        <ul className={styles.table}>
          {Object.keys(fontSize).map((name) => {
            return (
              <li key={name}>
                <p className={`text-${name}`}>text-{name}</p>
                {fontSize[name][0]}
              </li>
            );
          })}
        </ul>
      </section>

      <section id="sec02">
        <Title className={styles.head}>Colors</Title>
        <ul className={styles.table}>
          {Object.keys(palette).map((name, index) => {
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
      {/* </div> */}
    </>
  );
}
