import useMousePosition from "../hooks/useMousePosition";
import useMouseHover from "../hooks/useMouseHover";

const DotRing = () => {
  const { x, y } = useMousePosition();
  const cursorType = useMouseHover();
  return (
    <>
      {/* <div
        className={`cursor-dot-outline ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div> */}
      <div
        className={"cursor-dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default DotRing;
