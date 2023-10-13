// prop type
import { routesPropType, modePropsType } from "../renderer/PropTypeValues";

// components
import Link from "#root/components/Link";
import LogoHomeLink from "#root/components/LogoHomeLink";

// style
import styles from "./Header.module.css";

function Header({ menuList = [], mode }) {
  return (
    <header className={styles.wrap}>
      <div className={styles.container}>
        {/* Home Link */}
        <div className={styles.logo}>
          <LogoHomeLink mode={mode} />
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
