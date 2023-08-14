import PropTypes from "prop-types";
import logo from "/images/logo.svg";
import { usePageContext } from "./usePageContext";

export { Header };

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};
function Link(props) {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return <a {...props} className={className} />;
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
function Header() {
  return (
    <header
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        lineHeight: "1.8em",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Logo />

      <nav>
        <Link className="navitem" href="/">
          Home
        </Link>
        <Link className="navitem" href="/about">
          About
        </Link>
        <Link className="navitem" href="/work">
          Work
        </Link>
        <Link className="navitem" href="/work2">
          Work2
        </Link>
      </nav>
    </header>
  );
}
