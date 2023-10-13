import PropTypes from "prop-types";

export const childrenPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired;

export const routePropType = PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired,
});

export const routesPropType = PropTypes.arrayOf(routePropType);
