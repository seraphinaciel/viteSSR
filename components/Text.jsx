import { Fragment } from "react";
import PropTypes from "prop-types";

// component
export function Text({ container = "span", children, theme = null }) {
  const Tagname = container;

  // children case:Array
  if (Array.isArray(children)) {
    return (
      <Tagname className={theme}>
        {[...children].map((content, index) => {
          return (
            <Fragment key={index}>
              {index !== 0 && <br />}
              <span>{content}</span>
            </Fragment>
          );
        })}
      </Tagname>
    );
  }

  // children case:String
  return <Tagname className={theme}>{children}</Tagname>;
}

export function Title({ container = "h1", children, theme = null }) {
  return (
    <Text container={container} theme={theme}>
      {children}
    </Text>
  );
}

const TextPropsType = {
  container: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  theme: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.instanceOf(null),
  ]),
};

Text.propTypes = TextPropsType;
Title.propTypes = TextPropsType;
