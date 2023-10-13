import { a as jsxs, F as Fragment, j as jsx } from "../chunks/chunk-ac9dafa4.js";
import { useState } from "react";
import { T as Text } from "../chunks/chunk-415c3aef.js";
import "react/jsx-runtime";
import "prop-types";
function Counter() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setCount((count2) => count2 + 1), children: [
    "Counter ",
    count
  ] });
}
const documentProps = {
  title: "😁 main",
  description: `this is a main page.`
};
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Welcome to home" }),
    /* @__PURE__ */ jsx(Text, { content: "This page is:" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: "Rendered to HTML." }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Interactive. ",
        /* @__PURE__ */ jsx(Counter, {})
      ] })
    ] })
  ] });
}
export {
  Page,
  documentProps
};
