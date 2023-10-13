import { j as jsx, a as jsxs } from "../chunks/chunk-ac9dafa4.js";
import ReactDOMServer from "react-dom/server";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import "react/jsx-runtime";
const index = "";
let childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]).isRequired;
const Context = React.createContext(void 0);
PageContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
const logoUrl = "/images/logo.svg";
Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
function Link(props) {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("a", { ...props, className, children: props.text });
}
function Logo() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        marginTop: 20,
        marginBottom: 10
      },
      children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: logoUrl, height: 64, width: 64, alt: "logo" }) })
    }
  );
}
function Header() {
  return /* @__PURE__ */ jsxs(
    "header",
    {
      style: {
        padding: 20,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        lineHeight: "1.8em",
        backgroundColor: "#f5f5f5"
      },
      children: [
        /* @__PURE__ */ jsx(Logo, {}),
        /* @__PURE__ */ jsxs("nav", { children: [
          /* @__PURE__ */ jsx(Link, { href: "/", text: "Home" }),
          /* @__PURE__ */ jsx(Link, { href: "/about", text: "About" }),
          /* @__PURE__ */ jsx(Link, { href: "/work", text: "Work" }),
          /* @__PURE__ */ jsx(Link, { href: "/work2", text: "Work2" })
        ] })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("h2", { className: "bg-green-500 text-center p-3", children: "the end" }) });
}
PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageShell({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Content, { children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) }) });
}
Layout.propTypes = {
  children: childrenPropType
};
function Layout({ children }) {
  return /* @__PURE__ */ jsx("div", { children });
}
Content.propTypes = {
  children: childrenPropType
};
function Content({ children }) {
  return /* @__PURE__ */ jsx(
    "main",
    {
      style: {
        padding: 20,
        paddingBottom: 50,
        minHeight: "100vh"
      },
      children
    }
  );
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "The J";
  const desc = documentProps && documentProps.description || "Anything";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta name="keywords" content="" />
        <meta name="author" content="name" />
        <meta name="og:site_name" content="The J" />
        <meta name="og:title" content=${title} />
        <meta name="og:description" content=${desc} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="" />
        <meta name="og:image" content="" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
export {
  passToClient,
  render
};
