// import React from "react";
import PropTypes from "prop-types";

function Text({ content }) {
  return <p className="text">{content}</p>;
}

export default Text;
Text.propTypes = {
  content: PropTypes.string.isRequired,
};
