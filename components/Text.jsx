import { Fragment } from "react";
import PropTypes from "prop-types";

// component
export function Text({ container = "span", children, className = null }) {
  const Tagname = container;

  // children case:Array
  if (Array.isArray(children)) {
    return (
      <Tagname className={className}>
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
  return <Tagname className={className}>{children}</Tagname>;
}

export function Title({ container = "h1", children, className = null }) {
  return (
    <Text container={container} className={className}>
      {children}
    </Text>
  );
}

/* examples
      <Title>
        {["We create designs", "to inspire people", "around the world"]}
      </Title>
      <Text>
        {["We create designs", "to inspire people", "around the world"]}
      </Text>
 */
const TextPropsType = {
  container: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.instanceOf(null),
  ]),
};

Text.propTypes = TextPropsType;
Title.propTypes = TextPropsType;
