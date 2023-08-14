// import React from "react";
import PropTypes from "prop-types";

function Button({ label }) {
  return <button type="button">{label}</button>;
}

export default Button;
Button.propTypes = {
  label: PropTypes.string.isRequired,
};
