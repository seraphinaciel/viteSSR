import { Fragment } from "react";
import PropTypes from "prop-types";

const TextPropsType = {
  tagName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.instanceOf(null),
  ]),
};

// component
export function Text({ tagName = "span", children, className = null }) {
  const Tagname = tagName;

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
Text.propTypes = TextPropsType;

export function Title({ tagName = "h1", children, className = null }) {
  return (
    <Text tagName={tagName} className={className}>
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
Title.propTypes = TextPropsType;
