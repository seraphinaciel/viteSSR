import { jsxs, jsx } from "react/jsx-runtime";
import PropTypes from "prop-types";
import { C as CM, a as Title } from "./chunk-DRcwvi6n.js";
import { W as Word } from "./chunk-ytogB_GN.js";
const title_box = "_title_box_715c6_1";
const title = "_title_715c6_1";
const styles = {
  title_box,
  title
};
function PageTitle({ title: title2 = [""], description = null, layoutId = "default", className, ...props }) {
  return /* @__PURE__ */ jsxs("div", { "data-layout": layoutId, className: CM(styles.title_box, className), ...props, children: [
    /* @__PURE__ */ jsx(
      Title,
      {
        tagName: "h1",
        className: CM(
          {
            "md:col-start-2 md:col-span-10": true
          },
          styles.title
        ),
        children: title2.map((text, index) => /* @__PURE__ */ jsx(
          Word,
          {
            content: text,
            splitType: "word",
            animationType: "fade up",
            animationConfig: {
              arrange: {
                start: "top 70%",
                end: "+=70%"
              }
            },
            className: "inline md:flex"
          },
          index
        ))
      }
    ),
    description != null && /* @__PURE__ */ jsxs("div", { className: "mt-40 md:mt-70 md:col-start-3 md:col-span-5", children: [
      /* @__PURE__ */ jsx(
        Word,
        {
          tagName: "p",
          content: description.text,
          className: "basic_p | text-heading-10 md:text-heading-8",
          splitType: "none",
          animationConfig: {
            arrange: {
              start: "top 95%"
            }
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Word,
        {
          tagName: "p",
          content: description.transform,
          className: "basic_p_2 | mt-30 text-body-5-kr font-normal text-base-1",
          splitType: "none",
          animationConfig: {
            arrange: {
              start: "top 95%"
            }
          },
          children: description == null ? void 0 : description.transform
        }
      )
    ] })
  ] });
}
const layoutIdList = ["default", "careers"];
PageTitle.propTypes = {
  layoutId: PropTypes.oneOf(layoutIdList),
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      transform: PropTypes.string.isRequired
    })
  ]),
  className: PropTypes.string
};
export {
  PageTitle as P
};
