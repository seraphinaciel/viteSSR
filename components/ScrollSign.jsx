// prop type
import PropTypes from "prop-types";

// node module

// components
import { Text } from "#root/components/Text";
import Icon from "#root/components/Icon";

// hooks
import useCssTheme from "../hooks/useCssTheme";

// style

// utils
import { CM } from "#root/utils";

function ScrollSign({ text, mode, className }) {
  const modeStyle = useCssTheme(state => state.mode);
  console.log("modeStyle", modeStyle);
  return (
    <nav
      className={CM(
        {
          "text-heading-10 md:text-heading-8": text,
        },
        "flex flex-row items-end justify-between gap-x-[--grid-col-gap]",
        className,
      )}
    >
      <Text className="flex items-center gap-x-8">
        <span className="underline underline-offset-8 font-medium">{text}</span>
        <span className="w-16 md:w-20">
          <Icon shape={"arrow/down"} style={{ stroke: "black" }} />
        </span>
      </Text>
      <Text className="uppercase mobile:hidden">Scroll</Text>
    </nav>
  );
}

ScrollSign.propTypes = {
  text: PropTypes.string.isRequired,
  mode: PropTypes.string,
  className: PropTypes.string,
};

export default ScrollSign;
