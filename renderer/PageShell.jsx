import React, { useState, useCallback, createContext } from "react";
import PropTypes from "prop-types";
import { childrenPropType } from "./PropTypeValues";
import { PageContextProvider, usePageContext } from "./usePageContext";

// components
import CursorDot from "../components/CursorDot";
import Header from "../components/Header";
import Footer from "../components/Footer";

// style:global
import "../styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

const queryClient = new QueryClient();

function PageShell({ pageContext, children }) {
  // pageContext의 exports.documentProps가 undefined인 이슈.
  // image 참조가 안되는 경우 리렌더링으로 documentProps가 undefined가 반환된다.

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <QueryClientProvider client={queryClient}>
          <Layout>{children}</Layout>
        </QueryClientProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }) {
  const pageContext = usePageContext();
  const [mode, setMode] = useState(pageContext.exports?.documentsProps?.mode || "light");
  pageContext.exports.mode = [mode, setMode];
  return (
    <>
      {/* header */}
      <Header menuList={routes} mode={mode} />

      {/* page contents */}
      <main className="min-h-[100vh] px-[--grid-container-margin]">{children}</main>

      {/* footer */}
      <Footer menuList={routes} mode={"dark"} />

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
