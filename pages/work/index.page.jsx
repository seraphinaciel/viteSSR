// components
import { usePageContext } from "#root/renderer/usePageContext";
import { useCallback, useState } from "react";

// components
import ListMonoType from "../../components/ListMonoLayout/ListMonoLayout";

// style
import styles from "./Work.module.css";

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
  const pageRef = useCallback(wrap => {
    if (null == wrap) return;
    console.log("pageContext", pageContext);
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
    <div ref={pageRef} className="work-list">
      <div className="page-contents-wrap">
        <ListMonoType list={list} toItemFunc={onChange} />
      </div>
    </div>
  );
}

export { Page };
