import PropTypes from "prop-types";
import { routesPropType } from "../renderer/PropTypeValues";
import logo from "/images/logo.svg";
import Link from "../components/Link";
import styles from "./Header.module.css";

function HomeLinkLogo() {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <img src={logo} alt="The J Home" />
      </Link>
    </div>
  );
}

function Header({ menuList = [], mode }) {
  return (
    <header className={styles.wrap}>
      {/* Home Link */}
      <HomeLinkLogo />

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
    </header>
  );
}

Header.propTypes = {
  menuList: routesPropType,
  mode: PropTypes.string.isRequired,
};

export default Header;
