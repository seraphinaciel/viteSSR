import PropTypes from "prop-types";

export const childrenPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired;

export const routePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
});

export const routesPropType = PropTypes.arrayOf(routePropType);

export const workSummaryPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.arrayOf(PropTypes.string),
  detailDisplay: PropTypes.bool,
});

export const modePropsType = PropTypes.shape(PropTypes.oneOf(["dark", "light"]));
export const localPropsType = PropTypes.shape(PropTypes.oneOf(["en", "kr"]));
