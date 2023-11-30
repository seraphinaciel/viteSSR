import PropTypes from "prop-types";
// components
import { Text, Title } from "#root/components/Text";
import { workSummaryPropTypes } from "#root/renderer/PropTypeValues";
// style
import styles from "./ListMonoLayout.module.css";

export const LAYOUT_BIG_FIRST = "big first";
export const LAYOUT_SMALL_FIRST = "small first";

const itemClassType = {
  big: "item-big",
  small: "item-small",
};

const layoutMatrix = {
  [LAYOUT_BIG_FIRST]: [
    // # 오른쪽 줄 아이템 내림
    ["big", "small"],
    ["small", "big"],
    ["big", "small"],
  ],
  [LAYOUT_SMALL_FIRST]: [
    // # 왼쪽 줄 아이템 내림
    ["small", "big"],
    ["big", "small"],
    ["small", "big"],
  ],
};

const putDown = {
  sm: "md:pt-[10rem]",
  md: "md:pt-[22rem]",
};

function ListMonoType({ layout = LAYOUT_SMALL_FIRST, list = [], toItemFunc = () => {} }) {
  const spreadOrder = layoutMatrix[layout].flat(1);
  return (
    <div className={styles.list} data-layout={layout}>
      {list.map((set, index) => {
        const putDownDecision = {
          [LAYOUT_BIG_FIRST]: index % 2 === 1,
          [LAYOUT_SMALL_FIRST]: index % 2 === 0,
        };
        const putDownFlag = putDownDecision[layout];
        const midlineFlag = Math.ceil((index + 1) * 0.5) === 2;
        const putDownClass = putDownFlag ? putDown[midlineFlag ? "sm" : "md"] : "";

        const spreadClass = styles[itemClassType[spreadOrder[index]]];

        // item
        return (
          <div key={index} className={`${styles.item} ${spreadClass} ${putDownClass}`}>
            {/* inner */}
            <div className={styles.item}>
              {/* click event element */}
              <button type="button" onClick={() => toItemFunc(set.id)} className="">
                <Text className="sr-only">{`Go to ${set.title} page.`}</Text>
              </button>

              {/* presentation */}
              <img
                className={styles["item-thumbnail"]}
                src={"https://ortizleon.com/wp-content/uploads/2022/12/EF_01_21009_Atardecer_03-1.jpg"}
                alt={set.alt}
              />
              <Title tagName={"strong"} className={styles["item-title"]}>
                {set.title}
              </Title>
              <Text className={styles["item-description"]}>{set.description}</Text>
              <div>
                <Text>{`${set.time[0]} ~ ${set.time[1]}`}</Text>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ListMonoType.propTypes = {
  layout: PropTypes.string,
  list: PropTypes.arrayOf(workSummaryPropTypes).isRequired,
  toItemFunc: PropTypes.func,
};

export default ListMonoType;
