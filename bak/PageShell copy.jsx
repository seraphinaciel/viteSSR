import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./PageShell.css";
import "../styles/index.css";
import { PageContextProvider } from "./usePageContext";
import { Link } from "./Link";
import { childrenPropType } from "./PropTypeValues";

export { PageShell };

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};
function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Header>
            <Logo />
            <Link className="navitem" href="/">
              Home
            </Link>
            <Link className="navitem" href="/about">
              About
            </Link>
          </Header>

          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

Layout.propTypes = {
  children: childrenPropType,
};
function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
        backgroundColor: "#ddd",
      }}
    >
      {children}
    </div>
  );
}

Header.propTypes = {
  children: childrenPropType,
};
function Header({ children }) {
  return (
    <div
      className="bg-black"
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  );
}

Content.propTypes = {
  children: childrenPropType,
};
function Content({ children }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
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
