import { a as jsxs, F as Fragment, j as jsx } from "../chunks/chunk-ac9dafa4.js";
import PropTypes from "prop-types";
import "react/jsx-runtime";
Page.propTypes = {
  is404: PropTypes.bool
};
function Page({ is404 }) {
  if (is404) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "404 Page Not Found" }),
      /* @__PURE__ */ jsx("p", { children: "This page could not be found." })
    ] });
  } else {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "500 Internal Error" }),
      /* @__PURE__ */ jsx("p", { children: "Something went wrong." })
    ] });
  }
}
export {
  Page
};
