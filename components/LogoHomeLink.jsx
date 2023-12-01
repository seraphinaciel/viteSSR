// hooks
import useCssTheme from "../hooks/useCssTheme";

// prop type
import PropTypes from "prop-types";

// components
import Link from "#root/components/Link";
import Icon from "#root/components/Icon";

export function LogoHomeLink({ mode, iconType = "the j" }) {
  const [cssTheme] = useCssTheme();
  const { fore: iconColor } = cssTheme.mode[mode];
  return (
    <Link href="/" className="block w-full">
      {/* Home Logo */}
      <Icon shape={iconType} style={{ fill: iconColor }} />
    </Link>
  );
}
LogoHomeLink.propTypes = {
  iconType: PropTypes.string,
  mode: PropTypes.string,
};

export default LogoHomeLink;
