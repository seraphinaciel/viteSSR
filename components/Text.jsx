import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { childrenPropType } from "../renderer/PropTypeValues";

const TextPropsType = {
  tagName: PropTypes.string,
  children: childrenPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.instanceOf(null)]),
};

// component
export function Text({ tagName = "span", children, className = null }) {
  const Tagname = tagName;
  // children case:only Array by string
  if (Array.isArray(children) && 0 === children.filter(v => React.isValidElement(v)).length) {
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
Title.propTypes = TextPropsType;

export function HiddenText({ tagName = "span", children }) {
  return (
    <Text tagName={tagName} className="sr-only">
      {children}
    </Text>
  );
}
HiddenText.propTypes = TextPropsType;

/* examples
      <Title>
        {["We create designs", "to inspire people", "around the world"]}
      </Title>
      <Text>
        {["We create designs", "to inspire people", "around the world"]}
      </Text>
 */
