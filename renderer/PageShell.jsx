import React from "react";
import "../styles/index.css";
import { PageContextProvider } from "./usePageContext";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { childrenPropType } from "./PropTypeValues";
import DotRing from "../components/DotRing";

export { PageShell };

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Header />
          <Content>{children}</Content>

          <Footer />
          <DotRing />
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}
Layout.propTypes = {
  children: childrenPropType,
};
function Layout({ children }) {
  return <div>{children}</div>;
}

Content.propTypes = {
  children: childrenPropType,
};
function Content({ children }) {
  return (
    <main
      style={{
        padding: 20,
        paddingBottom: 50,
        minHeight: "100vh",
      }}
    >
      {children}
    </main>
  );
}
