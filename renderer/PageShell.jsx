import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { childrenPropType } from "./PropTypeValues";
import { PageContextProvider } from "./usePageContext";

// components
import CursorDot from "../components/CursorDot";
import Header from "../components/Header";
import Footer from "../components/Footer";

// style:global
import "../styles/index.css";

export { PageShell };

const routes = [
  // {
  //   id: "index",
  //   name: "Home",
  //   route: "/",
  // },
  // {
  //   id: "main",
  //   name: "Main",
  //   route: "/main",
  // },
  {
    id: "work",
    name: "Work",
    route: "/work",
  },
  {
    id: "about",
    name: "About",
    route: "/about",
  },
  {
    id: "careers",
    name: "Careers",
    route: "/careers",
  },
  {
    id: "contact",
    name: "Contact",
    route: "/contact",
  },
];

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>{children}</Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }) {
  const [mode, setMode] = useState("light");
  const modeRef = useCallback(node => {
    if (null != node) {
      // console.log("ready!");

      const darkModeFlag = [...node.children[0].classList].includes("bg-black");
      darkModeFlag && setMode("dark");
    }
  }, []);

  return (
    <>
      {/* header */}
      <Header menuList={routes} mode={mode} />

      {/* page contents */}
      <main ref={modeRef} className="overflow-hidden min-h-[100vh]">
        {children}
      </main>

      {/* footter */}
      <Footer menuList={routes} />

      {/* cursor */}
      <CursorDot />
    </>
  );
}

// props type
PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};
Layout.propTypes = {
  children: childrenPropType,
};
