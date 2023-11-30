import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";
import { useState } from "react";

const { theme } = resolveConfig(tailwindConfig);

const useCssTheme = selector => {
  const [cssTheme, setCssTheme] = useState(theme);
  if (null == selector) return [cssTheme, setCssTheme];
  return selector(cssTheme);
};

export default useCssTheme;

// example
/*
  const [cssTheme] = useCssTheme();
  const {mobile, md, dekstop, sm} =useState(theme => theme.screens)
  const {toggle} =useState(theme => theme.modal)
*/
