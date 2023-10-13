import useMouseUpdatePosition from "../hooks/useMouseUpdatePosition";
import useMouseHover from "../hooks/useMouseHover";
// import { useCallback, useEffect, useRef } from "react";

const CursorDot = () => {
  useMouseUpdatePosition();
  const cursorType = useMouseHover();

  return (
    <>
      {/* <div
        className={`cursor-dot-outline ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div> */}
      <div
        // ref={dotRef}
        className={"cursor-dot " + cursorType}
        // style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default CursorDot;
