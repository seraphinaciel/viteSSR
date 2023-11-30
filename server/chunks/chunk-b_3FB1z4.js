import { jsxs, jsx } from "react/jsx-runtime";
import PropTypes from "prop-types";
function Video({
  src,
  layout = "floating",
  attributes = {
    controls: true,
    muted: true,
    autoPlay: true,
    loop: true
  }
}) {
  const className = {
    floating: "w-full h-full object-cover"
    // floating: "absolute top-0 left-0 w-full h-full object-cover",
  };
  return /* @__PURE__ */ jsxs("video", { className: className[layout], ...attributes, children: [
    /* @__PURE__ */ jsx("source", { src, type: "video/mp4" }),
    "Your browser does not support HTML video."
  ] });
}
Video.propTypes = {
  src: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(["floating"]),
  attributes: PropTypes.object
};
export {
  Video as V
};
