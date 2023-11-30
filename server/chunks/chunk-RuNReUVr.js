import { jsxs, jsx } from "react/jsx-runtime";
import PropTypes from "prop-types";
import { C as CM, T as Text } from "./chunk-DRcwvi6n.js";
import { I as Icon } from "./chunk-6b9tQcyh.js";
import { u as useCssTheme } from "./chunk-P7vN87LO.js";
function ScrollSign({ text, mode, className }) {
  const modeStyle = useCssTheme((state) => state.mode);
  console.log("modeStyle", modeStyle);
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: CM(
        {
          "text-heading-10 md:text-heading-8": text
        },
        "flex flex-row items-end justify-between gap-x-[--grid-col-gap]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs(Text, { className: "flex items-center gap-x-8", children: [
          /* @__PURE__ */ jsx("span", { className: "underline underline-offset-8 font-medium", children: text }),
          /* @__PURE__ */ jsx("span", { className: "w-16 md:w-20", children: /* @__PURE__ */ jsx(Icon, { shape: "arrow/down", style: { stroke: "black" } }) })
        ] }),
        /* @__PURE__ */ jsx(Text, { className: "uppercase mobile:hidden", children: "Scroll" })
      ]
    }
  );
}
ScrollSign.propTypes = {
  text: PropTypes.string.isRequired,
  mode: PropTypes.string,
  className: PropTypes.string
};
export {
  ScrollSign as S
};
