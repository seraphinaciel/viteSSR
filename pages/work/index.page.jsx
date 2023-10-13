// components
import { usePageContext } from "#root/renderer/usePageContext";
import { Children, useCallback, useState } from "react";

// components
import ListMonoType from "#root/components/ListMonoLayout/ListMonoLayout";
import PageTitle from "../../components/PageTitle";

// style
// import styles from "./Work.module.css";

// hooks
import useCSSTheme from "#root/hooks/useCSSTheme";

// route에서 export 시키는 것들은 pageContext.exports를 통해 global state로 사용할 수 있음.
export const test = ["work", 1, 2];
export const documentProps = {
  title: "😁 Work | The j",
  description: `Work List page.`,
  pagdId: "work list",
};

const initialState = [
  {
    id: "LG OLED SPACE",
    title: "LG OLED SPACE",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2023.03.07", "2023.07.07"],
    detailDisplay: false,
  },
  {
    id: "LG SIGNATURE",
    title: "LG SIGNATURE",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2022.01.01", "2023.12.31"],
    detailDisplay: false,
  },
  {
    id: "LG.com",
    title: "LG.com",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2022.04.05", "2022.08.09"],
    detailDisplay: false,
  },
  {
    id: "Hyundai N Brand",
    title: "Hyundai N Brand",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2021.12.25", "2022.04.01"],
    detailDisplay: false,
  },
  {
    id: "Genesis",
    title: "Genesis",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2023.08.07", ""],
    detailDisplay: false,
  },
  {
    id: "LG",
    title: "LG",
    description: "Global Pilot Website Platform Building & Rollout",
    image: "/images/*.webp",
    alt: "alt text",
    time: ["2020.11.03", "2021.03.13"],
    detailDisplay: false,
  },
];

function Page(props) {
  const pageContext = usePageContext();
  const [cssTheme] = useCSSTheme();
  const pageRef = useCallback(wrap => {
    if (null == wrap) return;
    console.log("cssTheme", cssTheme);
  });

  const [list, setList] = useState(initialState);
  const onChange = id =>
    setList(
      initialState.map(set => {
        set.detailDisplay = set.id === id;
        return set;
      }),
    );

  return (
    <div ref={pageRef} className="work-list gap-5">
      <div className="page-contents-wrap">
        {/* page title */}
        <PageTitle
          title={["We create designs", "to inspire people", "around the world"]}
          description={{
            text: "We make the J style. We strive to create a unique digital experience design.",
            transform: "우리는 독특한 디지털 경험 디자인을 만들기 위해 노력합니다.",
          }}
        />
        <ListMonoType list={list} toItemFunc={onChange} />
      </div>
    </div>
  );
}

export { Page };
