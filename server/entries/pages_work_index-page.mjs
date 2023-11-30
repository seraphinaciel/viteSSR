import { jsx, jsxs } from "react/jsx-runtime";
import { u as usePageContext } from "../chunks/chunk-cc172f77.js";
import { useCallback, useState } from "react";
import { L as ListMonoType } from "../chunks/chunk-c3f53d17.js";
import { P as PageTitle } from "../chunks/chunk-179a626f.js";
import { u as useCssTheme } from "../chunks/chunk-3fce2c11.js";
import "prop-types";
import "../chunks/chunk-7cdbbd50.js";
import "clsx";
import "tailwind-merge";
import "../chunks/chunk-306a8888.js";
import "gsap/dist/gsap.js";
import "gsap/dist/ScrollTrigger.js";
import "tailwindcss/resolveConfig.js";
const test = ["work", 1, 2];
const documentProps = {
  title: "😁 Work | The j",
  description: `Work List page.`,
  pagdId: "work list"
};
const initialState = [
  {
    id: "LG OLED SPACE",
    title: "LG OLED SPACE",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2023.03.07", "2023.07.07"],
    detailDisplay: false
  },
  {
    id: "LG SIGNATURE",
    title: "LG SIGNATURE",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2022.01.01", "2023.12.31"],
    detailDisplay: false
  },
  {
    id: "LG.com",
    title: "LG.com",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2022.04.05", "2022.08.09"],
    detailDisplay: false
  },
  {
    id: "Hyundai N Brand",
    title: "Hyundai N Brand",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2021.12.25", "2022.04.01"],
    detailDisplay: false
  },
  {
    id: "Genesis",
    title: "Genesis",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2023.08.07", ""],
    detailDisplay: false
  },
  {
    id: "LG",
    title: "LG",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2020.11.03", "2021.03.13"],
    detailDisplay: false
  }
];
function Page(props) {
  usePageContext();
  const [cssTheme] = useCssTheme();
  const pageRef = useCallback((wrap) => {
    if (null == wrap)
      return;
    console.log("cssTheme", cssTheme);
  });
  const [list, setList] = useState(initialState);
  const onChange = (id) => setList(
    initialState.map((set) => {
      set.detailDisplay = set.id === id;
      return set;
    })
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: pageRef,
      className: "work-list gap-5     mobile:px-[--grid-container-margin]\r\n",
      children: /* @__PURE__ */ jsxs("div", { className: "page-contents-wrap", children: [
        /* @__PURE__ */ jsx(
          PageTitle,
          {
            title: ["We create designs", "to inspire people", "around the world"],
            description: {
              text: "We make the J style. We strive to create a unique digital experience design.",
              transform: "우리는 독특한 디지털 경험 디자인을 만들기 위해 노력합니다."
            }
          }
        ),
        /* @__PURE__ */ jsx(ListMonoType, { list, toItemFunc: onChange })
      ] })
    }
  );
}
export {
  Page,
  documentProps,
  test
};
