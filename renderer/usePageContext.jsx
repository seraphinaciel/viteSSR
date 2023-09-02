// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { childrenPropType } from "./PropTypeValues";

const Context = React.createContext(undefined);

PageContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};
export function PageContextProvider({ pageContext, children }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
