import { jsx, jsxs } from "react/jsx-runtime";
import PropTypes from "prop-types";
import { w as workSummaryPropTypes, T as Text, a as Title } from "./chunk-7cdbbd50.js";
const list = "_list_b7t4h_13";
const item = "_item_b7t4h_29";
const styles = {
  "floating-full-fill": "_floating-full-fill_b7t4h_3",
  list,
  item,
  "item-thumbnail": "_item-thumbnail_b7t4h_35",
  "item-title": "_item-title_b7t4h_41",
  "item-link-button": "_item-link-button_b7t4h_47",
  "item-description": "_item-description_b7t4h_65",
  "item-big": "_item-big_b7t4h_75",
  "item-small": "_item-small_b7t4h_81"
};
const LAYOUT_BIG_FIRST = "big first";
const LAYOUT_SMALL_FIRST = "small first";
const itemClassType = {
  big: "item-big",
  small: "item-small"
};
const layoutMatrix = {
  [LAYOUT_BIG_FIRST]: [
    // # 오른쪽 줄 아이템 내림
    ["big", "small"],
    ["small", "big"],
    ["big", "small"]
  ],
  [LAYOUT_SMALL_FIRST]: [
    // # 왼쪽 줄 아이템 내림
    ["small", "big"],
    ["big", "small"],
    ["small", "big"]
  ]
};
const putDown = {
  sm: "md:pt-[10rem]",
  md: "md:pt-[22rem]"
};
function ListMonoType({ layout = LAYOUT_SMALL_FIRST, list: list2 = [], toItemFunc = () => {
} }) {
  const spreadOrder = layoutMatrix[layout].flat(1);
  return /* @__PURE__ */ jsx("div", { className: styles.list, "data-layout": layout, children: list2.map((set, index) => {
    const putDownDecision = {
      [LAYOUT_BIG_FIRST]: index % 2 === 1,
      [LAYOUT_SMALL_FIRST]: index % 2 === 0
    };
    const putDownFlag = putDownDecision[layout];
    const midlineFlag = Math.ceil((index + 1) * 0.5) === 2;
    const putDownClass = putDownFlag ? putDown[midlineFlag ? "sm" : "md"] : "";
    const spreadClass = styles[itemClassType[spreadOrder[index]]];
    return /* @__PURE__ */ jsx("div", { className: `${styles.item} ${spreadClass} ${putDownClass}`, children: /* @__PURE__ */ jsxs("div", { className: styles.item, children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => toItemFunc(set.id), className: "", children: /* @__PURE__ */ jsx(Text, { className: "sr-only", children: `Go to ${set.title} page.` }) }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: styles["item-thumbnail"],
          src: "https://ortizleon.com/wp-content/uploads/2022/12/EF_01_21009_Atardecer_03-1.jpg",
          alt: set.alt
        }
      ),
      /* @__PURE__ */ jsx(Title, { tagName: "strong", className: styles["item-title"], children: set.title }),
      /* @__PURE__ */ jsx(Text, { className: styles["item-description"], children: set.description }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Text, { children: `${set.time[0]} ~ ${set.time[1]}` }) })
    ] }) }, index);
  }) });
}
ListMonoType.propTypes = {
  layout: PropTypes.string,
  list: PropTypes.arrayOf(workSummaryPropTypes).isRequired,
  toItemFunc: PropTypes.func
};
export {
  ListMonoType as L,
  LAYOUT_BIG_FIRST as a
};
