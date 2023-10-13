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

export const modePropsType = PropTypes.oneOf(["dark", "light"]);
export const localPropsType = PropTypes.oneOf(["en", "kr"]);

export const ImagePropType = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  meta: PropTypes.shape({
    alt: PropTypes.string,
  }),
};
