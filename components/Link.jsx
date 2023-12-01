import PropTypes from "prop-types";
import { usePageContext } from "../renderer/usePageContext";
import { childrenPropType } from "../renderer/PropTypeValues";

function Link(props) {
  const { href, children, className = "" } = props;
  const pageContext = usePageContext();
  const matchRoute = href === pageContext.urlPathname;
  const classNames = [className, matchRoute && "is-active"].filter(Boolean).join(" ");

  return (
    <a {...props} className={classNames}>
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: childrenPropType,
  className: PropTypes.string,
};

export default Link;
