import { useEffect, useState } from "react";

export default function useMouseHover() {
  const [cursorType, setCursorType] = useState("");
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const target = event.target;

      if (target.tagName === "A" || target.tagName === "BUTTON") {
        setCursorType("active-link");
      } else if (target.tagName === "VIDEO") {
        setCursorType("active-video");
      } else {
        setCursorType("");
      }
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return cursorType;
}
