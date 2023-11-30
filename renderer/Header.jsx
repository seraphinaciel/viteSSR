import PropTypes from "prop-types";
import logo from "/images/logo.svg";
import { usePageContext } from "./usePageContext";

export { Header };

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
function Link(props) {
  const pageContext = usePageContext();
  const className = [props.className, pageContext.urlPathname === props.href && "is-active"].filter(Boolean).join(" ");
  return (
    <a {...props} className={className}>
      {props.text}
    </a>
  );
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
  const BASE_URL = "/viteSSR/dist/client";
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
        <Link href="/viteSSR/dist/client/" text="Home" />
        <Link href="/viteSSR/dist/client/main" text="Main" />
        <Link href="/viteSSR/dist/client/work" text="Work" />
        <Link href="/viteSSR/dist/client/about" text="About" />
        <Link href="/viteSSR/dist/client/careers" text="Careers" />
        <Link href="/viteSSR/dist/client/contact" text="Contact" />
      </nav>
    </header>
  );
}
