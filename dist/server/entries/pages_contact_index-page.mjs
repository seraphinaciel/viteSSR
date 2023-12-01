import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { u as usePageContext } from "../chunks/chunk-5fqjUpWX.js";
import { P as PageTitle } from "../chunks/chunk-HGVQSNuh.js";
import "../chunks/chunk-Wb4zu5JQ.js";
import { T as TextPassed } from "../chunks/chunk-GshQpoJ7.js";
import { C as CM } from "../chunks/chunk-DRcwvi6n.js";
import "prop-types";
import "gsap/dist/gsap.js";
import "gsap/dist/ScrollTrigger.js";
import "gsap";
import "clsx";
import "tailwind-merge";
const page_header = "_page_header_qmxnh_1";
const map = "_map_qmxnh_7";
const rolling = "_rolling_qmxnh_31";
const number = "_number_qmxnh_37";
const styles = {
  page_header,
  map,
  rolling,
  number
};
const documentProps = {
  title: "🥰 Contact",
  description: `this is a Contact page.`,
  pageId: "/contact"
};
function Page() {
  const pageContext = usePageContext();
  const pageRef = useCallback((wrap) => {
    if (null == wrap)
      return;
    console.log("pageContext", pageContext);
  });
  return /* @__PURE__ */ jsx("div", { ref: pageRef, className: "contact", children: /* @__PURE__ */ jsxs("div", { className: "page-contents-wrap", children: [
    /* @__PURE__ */ jsx("div", { role: "region", className: CM(styles.page_header), children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(PageTitle, { title: ["We would love to", " hear from you"] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: CM(styles.map), children: [
      /* @__PURE__ */ jsx("img", { src: `${"/viteSSR/dist/client/"}images/contact_01.webp`, alt: "" }),
      /* @__PURE__ */ jsxs("dl", { children: [
        /* @__PURE__ */ jsx("dt", { className: "font-medium mb-40 md:mb-50", children: "Address" }),
        /* @__PURE__ */ jsxs("dd", { className: "mb-30 md:mb-45", children: [
          "Vogoze Bldg 3F, 6, Samseong-ro 126-gil, Gangnam-gu, Seoul, Republic of Korea",
          " "
        ] }),
        /* @__PURE__ */ jsx("dd", { className: "text-body-6-kr md:text-body-5-kr text-base-1", children: "서울특별시 강남구 삼성로126길 6, 보고재빌딩 3층" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-40 mb-60 md:mt-70 md:mb-50", children: /* @__PURE__ */ jsx("a", { href: "", className: "link", children: "Naver map" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("h1", { className: CM(styles.rolling), children: /* @__PURE__ */ jsx(TextPassed, { text: "Cheongdam Office", size: 20, runDirection: "left" }) }),
    /* @__PURE__ */ jsxs("address", { className: CM(styles.number), children: [
      /* @__PURE__ */ jsx("a", { href: "tel:+82 02 515 4240", children: "+82 02 515 4240" }),
      /* @__PURE__ */ jsx("a", { href: "mailto:bussiness@the-jey.com", children: "bussiness@the-jey.com" }),
      /* @__PURE__ */ jsx("a", { href: "mailto:recruit@the-jey.com", children: "recruit@the-jey.com" })
    ] })
  ] }) });
}
export {
  Page,
  documentProps
};
