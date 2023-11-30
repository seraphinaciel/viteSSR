import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { jsx, jsxs } from "react/jsx-runtime";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
const childrenPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired;
const routePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
});
const routesPropType = PropTypes.arrayOf(routePropType);
const workSummaryPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.arrayOf(PropTypes.string),
  detailDisplay: PropTypes.bool
});
const modePropsType = PropTypes.oneOf(["dark", "light"]);
const localPropsType = PropTypes.oneOf(["en", "kr"]);
const ImagePropType = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  meta: PropTypes.shape({
    alt: PropTypes.string
  })
};
const animationTypeList = ["fade in", "fade up", "fill"];
({
  type: PropTypes.oneOf(animationTypeList).isRequired,
  target: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  // set
  arrange: PropTypes.shape({
    viewport: {
      start: "",
      end: ""
    }
  }),
  // from
  options: PropTypes.object
  /*
    duration,
    stagger,
    ease,
    markers
  */
});
const scrollMonitor = (callback = {
  doing(params2) {
    console.log("scroll start/params :", params2);
  },
  end(params2) {
    console.log("scroll end/params :", params2);
  }
}, params, duration = 200, memo = null) => (event) => {
  memo = event.timeStamp;
  if (memo != null) {
    callback.doing(params);
    setTimeout(() => {
      if (0 === event.timeStamp - memo) {
        callback.end(params);
      }
    }, duration);
  }
};
const handle_speed = (now = window.innerWidth, smoothness = 1e3, breakpoints = [414, 768, 1080, 1440, 1920, 2560]) => {
  const middlePoint = Math.floor(breakpoints.length * 0.5);
  const scale = breakpoints[middlePoint];
  const screenRatio = now < 768 ? 1.25 : 1;
  return Math.round(now / scale * screenRatio * smoothness, 10) / smoothness;
};
const CM = (...inputs) => twMerge(clsx(inputs));
const TextPropsType = {
  tagName: PropTypes.string,
  children: childrenPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.instanceOf(null)])
};
function Text({ tagName = "span", children, className = null }) {
  const Tagname = tagName;
  if (Array.isArray(children) && 0 === children.filter((v) => React.isValidElement(v)).length) {
    return /* @__PURE__ */ jsx(Tagname, { className, children: [...children].map((content, index) => {
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        index !== 0 && /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { children: content })
      ] }, index);
    }) });
  }
  return /* @__PURE__ */ jsx(Tagname, { className, children });
}
Text.propTypes = TextPropsType;
function Title({ tagName = "h1", children, className = null }) {
  return /* @__PURE__ */ jsx(Text, { tagName, className, children });
}
Title.propTypes = TextPropsType;
export {
  CM as C,
  ImagePropType as I,
  Text as T,
  Title as a,
  childrenPropType as c,
  handle_speed as h,
  localPropsType as l,
  modePropsType as m,
  routesPropType as r,
  scrollMonitor as s,
  workSummaryPropTypes as w
};
