// prop type
import PropTypes from "prop-types";
import { routesPropType, modePropsType } from "../renderer/PropTypeValues";

// components
import Link from "../components/Link";
import Icon from "./Icon";

// style
import styles from "./Header.module.css";

const setThemeColor = mode => {
  switch (mode) {
    case "dark":
      return "white";
    case "light":
      return "black";
  }
};

export function LogoHomeLink({ iconColor, iconType = "the j" }) {
  return (
    <Link href="/main" className="block w-full">
      {/* Home Logo */}
      <Icon shape={iconType} style={{ fill: iconColor }} />
    </Link>
  );
}
LogoHomeLink.propTypes = {
  iconColor: PropTypes.string,
  iconType: PropTypes.string,
};

function Header({ menuList = [], mode }) {
  return (
    <header className={styles.wrap}>
      <div className={styles.container}>
        {/* Home Link */}
        <div className={styles.logo}>
          <LogoHomeLink iconColor={setThemeColor(mode)} />
        </div>

        {/* mobile button */}
        <button className={styles["menu-button"]} type="button">
          Menu
        </button>

        {/* GNB */}
        <nav className={styles.menu}>
          {menuList.map(({ id, name, route }) => (
            <Link key={id} href={route}>
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  menuList: routesPropType.isRequired,
  mode: modePropsType.isRequired,
};

export default Header;
