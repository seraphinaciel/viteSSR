// node module

// prop type
import PropTypes from "prop-types";

// components

// style
// import styles from "#root/styles/index.css";

function Video({
  src,
  layout = "floating",
  attributes = {
    controls: true,
    muted: true,
    autoPlay: true,
    loop: true,
  },
}) {
  const className = {
    floating: "absolute top-0 left-0 w-full h-full object-cover",
  };
  return (
    <video className={className[layout]} {...attributes}>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  );
}
Video.propTypes = {
  src: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(["floating"]),
  attributes: PropTypes.object,
};

export default Video;
