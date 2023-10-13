import { j as jsx, F as Fragment, a as jsxs } from "../chunks/chunk-ac9dafa4.js";
import { T as Text } from "../chunks/chunk-415c3aef.js";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { Splitting } from "splitting";
import "react/jsx-runtime";
const desc = "_desc_s8e47_1";
const styles = {
  desc
};
function Button({ label }) {
  return /* @__PURE__ */ jsx("button", { type: "button", children: label });
}
Button.propTypes = {
  label: PropTypes.string.isRequired
};
const splitting = "";
const splittingCells = "";
gsap.registerPlugin(ScrollTrigger);
function Textsplit({ delay, content }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Splitting();
      const textReveal = (quote, char) => {
        quote.anim = gsap.from(char, {
          duration: 0.6,
          ease: "circ.out",
          y: "100%",
          opacity: 1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            toggleActions: "restart pause resume reverse",
            start: "top 50%",
            markers: true
            // scrub: true,
          }
        });
      };
      const quotesBox = document.querySelectorAll("[data-effect-reveal]");
      Splitting({ target: quotesBox, by: "lines" });
      quotesBox.forEach((quote) => {
        const char = quote.querySelectorAll(".lines p");
        if (quote.anim) {
          quote.anim.progress(1).kill();
        }
        textReveal(quote, char);
      });
    }
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { "data-delay": delay, children: content }) }) });
}
Textsplit.propTypes = {
  delay: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};
const documentProps = {
  title: "😁 about",
  description: `this is a about page.`,
  pageId: "/about"
};
function Page(pageContext) {
  console.log("pages : " + pageContext._pageId);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "About" }),
    /* @__PURE__ */ jsx(Text, { content: "공통 컴포넌트!" }),
    /* @__PURE__ */ jsx("strong", { className: styles.desc, children: documentProps.description }),
    /* @__PURE__ */ jsx(Button, { label: "hello Btn" }),
    /* @__PURE__ */ jsx("div", { className: styles.text_reveal, children: /* @__PURE__ */ jsxs("div", { className: styles.quote2, "data-effect-reveal": "", children: [
      /* @__PURE__ */ jsx(Textsplit, { content: "Design is", delay: 0 }),
      /* @__PURE__ */ jsx(Textsplit, { content: "intelligence", delay: 0 }),
      /* @__PURE__ */ jsx(Textsplit, { content: "made visible.", delay: 0 }),
      /* @__PURE__ */ jsx(Textsplit, { content: "Design is", delay: 0.5 }),
      /* @__PURE__ */ jsx(Textsplit, { content: "intelligence", delay: 0.7 }),
      /* @__PURE__ */ jsx(Textsplit, { content: "made visible.", delay: 0.2 })
    ] }) })
  ] });
}
export {
  Page,
  documentProps
};
