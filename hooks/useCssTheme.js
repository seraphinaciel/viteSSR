import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";
import { useState } from "react";

const { theme } = resolveConfig(tailwindConfig);

const useCssTheme = () => {
	const [cssTheme, setCssTheme] = useState(theme);
	return [cssTheme, setCssTheme];
};

export default useCssTheme;
