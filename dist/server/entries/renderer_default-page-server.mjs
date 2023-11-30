import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";
import { c as childrenPropType, r as routesPropType, m as modePropsType, C as CM, l as localPropsType, T as Text, a as Title } from "../chunks/chunk-DRcwvi6n.js";
import React, { useEffect, useState, useRef, useCallback, Fragment as Fragment$1 } from "react";
import { u as usePageContext, P as PageContextProvider } from "../chunks/chunk-5fqjUpWX.js";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { u as useCssTheme } from "../chunks/chunk-P7vN87LO.js";
import { I as Icon } from "../chunks/chunk-6b9tQcyh.js";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import "clsx";
import "tailwind-merge";
import "tailwindcss/resolveConfig.js";
function useMouseUpdatePosition() {
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const target = document.querySelector(".cursor-dot");
      const { clientX, clientY } = event;
      gsap.to(target, {
        x: clientX,
        y: clientY,
        duration: 1,
        ease: "circ.out"
      });
      const pageScrollBarWidth = 20;
      const isX = window.innerWidth - pageScrollBarWidth <= clientX || 0 >= clientX;
      const isY = window.innerHeight <= clientY || 0 >= clientY;
      const action = isX || isY ? "add" : "remove";
      target.classList[action]("hidden");
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
}
function useMouseHover() {
  const [cursorType, setCursorType] = useState("");
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const target = event.target;
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        setCursorType("active-link");
      } else if (target.tagName === "VIDEO") {
        setCursorType("active-video");
      } else {
        setCursorType("");
      }
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  return cursorType;
}
const CursorDot = () => {
  useMouseUpdatePosition();
  const cursorType = useMouseHover();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "cursor-dot " + cursorType
    }
  ) });
};
function Link(props) {
  const { href, children, className = "" } = props;
  const pageContext = usePageContext();
  const matchRoute = href === pageContext.urlPathname;
  const classNames = [className, matchRoute && "is-active"].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("a", { ...props, className: classNames, children });
}
Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: childrenPropType,
  className: PropTypes.string
};
function LogoHomeLink({ mode, iconType = "the j" }) {
  const [cssTheme] = useCssTheme();
  const { fore: iconColor } = cssTheme.mode[mode];
  return /* @__PURE__ */ jsx(Link, { href: "/main", className: "block w-full", children: /* @__PURE__ */ jsx(Icon, { shape: iconType, style: { fill: iconColor } }) });
}
LogoHomeLink.propTypes = {
  iconType: PropTypes.string,
  mode: PropTypes.string
};
const wrap$1 = "_wrap_1a3yz_29";
const container$1 = "_container_1a3yz_45";
const logo$1 = "_logo_1a3yz_51";
const navigation$1 = "_navigation_1a3yz_69";
const menu = "_menu_1a3yz_17";
const menu_item = "_menu_item_1a3yz_117";
const menu_button = "_menu_button_1a3yz_129";
const dark = "_dark_1a3yz_139";
const light = "_light_1a3yz_145";
const styles$1 = {
  "underline-3": "_underline-3_1a3yz_3",
  "flex-box-both-end": "_flex-box-both-end_1a3yz_11",
  "menu-text-style": "_menu-text-style_1a3yz_17",
  wrap: wrap$1,
  container: container$1,
  logo: logo$1,
  navigation: navigation$1,
  menu,
  menu_item,
  menu_button,
  dark,
  light
};
function Header({ menuList = [], mode: pageColor }) {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const [gnbActive, setGnbActive] = useState(false);
  const [colorMode, setColorMode] = useState(pageColor);
  const { mobile, md } = useCssTheme((state) => state.screens);
  const modalToggleClass = useCssTheme((state) => state.modal.toggle);
  const onGNBActive = useCallback((toggleClass) => {
    setGnbActive(true);
    setColorMode("dark");
    document.body.classList.add(...toggleClass);
  }, []);
  const onGNBDeactive = useCallback(
    (toggleClass) => {
      setGnbActive(false);
      setColorMode(pageColor);
      document.body.classList.remove(...toggleClass);
    },
    [pageColor]
  );
  const onGNBReset = useCallback(
    (toggleClass) => {
      setGnbActive(false);
      setColorMode(pageColor);
      document.body.classList.remove(...toggleClass);
    },
    [pageColor]
  );
  useEffect(() => {
    const { current: menuRootElement } = menuRef;
    const { current: headerRootElement } = headerRef;
    const loaded = menuRootElement instanceof HTMLElement && headerRootElement instanceof HTMLElement;
    if (!loaded)
      return;
    const animateTarget = menuRootElement.querySelectorAll("li a");
    const itemDelayRatio = 0.5;
    const itemDelay = 1 / animateTarget.length * itemDelayRatio;
    const mm = gsap.matchMedia();
    mm.add(
      {
        desktop: `(min-width:${md})`,
        reduceMotion: `(prefers-reduced-motion: reduce)`
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions;
        const duration = 0.75;
        const tween = gsap.fromTo(
          animateTarget,
          {
            xPercent: 100,
            y: 0,
            opacity: 0
          },
          {
            xPercent: 0,
            y: 0,
            opacity: 1,
            duration: reduceMotion ? 0 : duration,
            stagger: duration * itemDelay,
            // 대상이 여러개일 때 순서에 비례하여 일괄 지연시킬 수 있음.
            paused: desktop
          }
        );
        desktop && tween.play();
      }
    );
    mm.add(
      {
        mobile: `(max-width:${mobile.max})`,
        reduceMotion: `(prefers-reduced-motion: reduce)`
      },
      (context) => {
        const { reduceMotion } = context.conditions;
        const trigger = document.getElementById("gnb-trigger");
        const duration = 0.6;
        const tween = gsap.fromTo(
          animateTarget,
          {
            x: 0,
            y: 100,
            opacity: 0
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: reduceMotion ? 0 : duration,
            stagger: duration * itemDelay * -1,
            // 음수 값으로 선언하면 역순으로 딜레이 적용.
            onStart: () => {
              onGNBActive(modalToggleClass);
            },
            onReverseComplete: () => {
              onGNBDeactive(modalToggleClass);
            }
          }
        ).reverse();
        context.add("toggleMenu", () => {
          tween.reversed(!tween.reversed());
        });
        trigger.addEventListener("click", context.toggleMenu);
        return () => {
          trigger.removeEventListener("click", context.toggleMenu);
        };
      }
    );
    const breakpoint = window.matchMedia(`(max-width:${mobile.max})`);
    const viewChange = (mediaQueryList) => {
      if (mediaQueryList.matches)
        ;
      else {
        onGNBReset(modalToggleClass);
      }
    };
    breakpoint.addEventListener("change", viewChange);
    const cleanUp = () => {
      mm.revert();
      breakpoint.removeEventListener("change", viewChange);
    };
    return cleanUp;
  }, [onGNBActive, onGNBDeactive, onGNBReset, mobile, md, modalToggleClass]);
  return /* @__PURE__ */ jsx(
    "header",
    {
      id: "header",
      ref: headerRef,
      className: CM(styles$1.wrap, {
        "mobile:text-white": colorMode === "dark"
      }),
      children: /* @__PURE__ */ jsxs("div", { className: styles$1.container, children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: CM(styles$1.logo, {
              "mobile:z-[2]": gnbActive
            }),
            children: /* @__PURE__ */ jsx(LogoHomeLink, { mode: colorMode })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            id: "gnb-trigger",
            className: CM(styles$1.menu_button, {
              "mobile:z-[2]": gnbActive
            }),
            type: "button",
            children: "Menu"
          }
        ),
        /* @__PURE__ */ jsx(
          "nav",
          {
            id: "navigation",
            className: CM(styles$1.navigation, {
              "mobile:z-[1]": gnbActive,
              "mobile:flex": gnbActive,
              "mobile:hidden": !gnbActive,
              "mobile:bg-black": colorMode === "dark"
            }),
            children: /* @__PURE__ */ jsx("ul", { ref: menuRef, className: styles$1.menu, children: menuList.map(({ id, name, route }) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("li", { className: styles$1.menu_item, children: /* @__PURE__ */ jsx(Link, { href: route, children: name }) }) }, id)) })
          }
        )
      ] })
    }
  );
}
Header.propTypes = {
  menuList: routesPropType.isRequired,
  mode: modePropsType.isRequired
};
const wrap = "_wrap_7ur4c_1";
const container = "_container_7ur4c_7";
const line = "_line_7ur4c_25";
const navigation = "_navigation_7ur4c_31";
const logo = "_logo_7ur4c_37";
const complementary = "_complementary_7ur4c_43";
const rest = "_rest_7ur4c_49";
const box = "_box_7ur4c_93";
const box_title = "_box_title_7ur4c_107";
const styles = {
  wrap,
  container,
  line,
  navigation,
  logo,
  complementary,
  rest,
  box,
  box_title
};
const footerInfo = {
  business: "business@the-jey.com",
  recruit: "recruit@the-jey.com",
  tel: "+82 2 515 4240",
  fax: "+82 2 515 2480",
  address: {
    en: "Vogoze Bldg 3F, 6, Samseong-ro 126-gil, Gangnam-gu, Seoul, Republic of Korea",
    kr: "서울시 강남구 삼성로 126길 6 보고재빌딩 3층"
  },
  copyright: {
    start: "2011",
    now: (/* @__PURE__ */ new Date()).getFullYear()
  }
};
function BackToTop() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context((context) => {
      context.add("backToTop", ({ toFocusElement, duration }) => {
        gsap.to(window, {
          scrollTo: { autoKill: true, y: 0 },
          ease: "power2.inOut",
          // 걍 아무거나 넣어요.
          duration,
          // 페이지 길이에 따라 달라짐.
          onComplete: () => toFocusElement.focus()
          // scrollY값이 0이 되면, header의 logo로 포커스 반환.
        });
      });
    });
    if (null == ref.current)
      return;
    const eventName = "click";
    const handler = () => {
      const target = document.getElementById("header");
      const toFocusElement = target.querySelector("a");
      const duration = Math.round(document.body.offsetHeight / 3e3);
      ctx.backToTop({ toFocusElement, duration });
    };
    ref.current.addEventListener(eventName, handler, false);
    const cleanUp = () => {
      ctx.revert();
      ref.current.removeEventListener(eventName, handler, false);
    };
    return cleanUp;
  }, []);
  return /* @__PURE__ */ jsxs("button", { ref, type: "button", className: "flex items-center gap-[0.5rem]", children: [
    /* @__PURE__ */ jsx(Text, { children: "Back to Top" }),
    /* @__PURE__ */ jsx("span", { className: "block w-[1.6rem] md:w-[2rem]", children: /* @__PURE__ */ jsx(Icon, { shape: "arrow/up", style: { stroke: "white" } }) })
  ] });
}
function Copyright({ year = footerInfo.copyright }) {
  return /* @__PURE__ */ jsx(Text, { children: `ⓒ ${year.start}-${year.now}, the J` });
}
function Complementary({ info = footerInfo, local = "en" }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: `md:col-span-3 ${styles.box}`, children: [
      /* @__PURE__ */ jsx(Title, { className: styles.box_title, tagName: "strong", children: "Address" }),
      /* @__PURE__ */ jsx(Text, { tagName: "address", children: info.address[local] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `md:col-span-2 ${styles.box}`, children: [
      /* @__PURE__ */ jsx(Title, { className: styles.box_title, tagName: "strong", children: "Contact Us" }),
      /* @__PURE__ */ jsxs(Text, { children: [
        /* @__PURE__ */ jsx("span", { children: `Tel. ${info.tel}` }),
        /* @__PURE__ */ jsx("span", { children: `Tax. ${info.fax}` })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `md:col-span-3 ${styles.box}`, children: [
      /* @__PURE__ */ jsx(Title, { className: styles.box_title, tagName: "strong", children: "Be the New J" }),
      /* @__PURE__ */ jsx(Text, { tagName: "span", children: /* @__PURE__ */ jsx("a", { href: `mailto:${info.recruit}`, children: info.recruit }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `md:col-span-4 ${styles.box}`, children: [
      /* @__PURE__ */ jsx(Text, { className: "text-heading-9 md:text-heading-6", tagName: "span", children: "E-mail us your inquiries to start a new project" }),
      /* @__PURE__ */ jsx(Text, { tagName: "span", children: /* @__PURE__ */ jsx("a", { href: `mailto:${info.business}`, children: info.business }) })
    ] })
  ] });
}
function Footer({ menuList, mode = "dark" }) {
  const [cssTheme] = useCssTheme();
  const { bg, text } = cssTheme.mode[mode].class;
  return /* @__PURE__ */ jsx("footer", { id: "footer", className: `${styles.wrap} ${bg} ${text}`, children: /* @__PURE__ */ jsxs("div", { className: styles.container, children: [
    /* @__PURE__ */ jsx("ul", { className: styles.navigation, children: menuList.map(({ id, name, route }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: route, children: name }) }, id)) }),
    /* @__PURE__ */ jsx("hr", { className: styles.line }),
    /* @__PURE__ */ jsx("div", { className: styles.complementary, children: /* @__PURE__ */ jsx(Complementary, { local: "en" }) }),
    /* @__PURE__ */ jsx("div", { className: styles.logo, children: /* @__PURE__ */ jsx(LogoHomeLink, { mode, iconType: "the j/thin" }) }),
    /* @__PURE__ */ jsxs("div", { className: styles.rest, children: [
      /* @__PURE__ */ jsx(Copyright, {}),
      /* @__PURE__ */ jsx(BackToTop, {})
    ] })
  ] }) });
}
Complementary.propTypes = {
  info: PropTypes.object,
  local: localPropsType
};
Copyright.propTypes = {
  year: PropTypes.shape({
    start: PropTypes.string,
    now: PropTypes.string
  })
};
Footer.propTypes = {
  menuList: routesPropType.isRequired,
  mode: modePropsType
};
ScrollTrigger.config({
  limitCallbacks: true,
  /* limitCallbacks[Boolean] 
    false : 기본값. 표시 여부와 상관없이 모든 scrolltrigger 요소의 callback을 실행함.
    true : viewport에 표시되거나 그렇지 않을 때에만 callback(onEnter, onLeave, onEnterBack, onLeaveBack) 을 실행.
  */
  // syncInterval: 1000,
  /* syncInterval [Number]
      scrolltrigger는 매 200ms마다 요소의 스크롤 위치를 업데이트하는 interval이 동작함.
      이 interval 텀을 조정하는 옵션.
  
      ... 설정하니 에러 터짐.
    */
  // autoRefreshEvents: "DOMContentLoaded,load,resize",
  /* autoRefreshEvents [String:web api event name]
      scrolltrigger.refresh()를 실행시킬 이벤트를 설정함.  
  
      기본값은, 
        visibilitychange, // 탭이 현재 화면에 활성화되면 발생
        DOMContentLoaded, // 모든 정적 문서(마크업, 스타일시트, 스크립트)의 파싱이 끝나면 발생. 
        load,
        resize
      의 4개로 설정됨. 
  
      (3.6.0에서 추가됨)
  
      ... 설정하니 에러 터짐.
    */
  ignoreMobileResize: false
  /* ignoreMobileResize[Boolean] 
      gpt 번역...
      true로 설정하면 터치 전용 장치에서의 수직 리사이즈(뷰포트 높이의 25%)가 
      ScrollTrigger.refresh()를 트리거하지 않으며, 
      시작/끝 값이 다시 계산될 때 발생할 수 있는 점프를 피합니다. 
      
      그러나 refresh()를 건너뛰면 시작/끝 트리거 위치가 부정확할 수 있지만, 
      많은 시나리오에서는 새로운 시작/끝 위치로 인한 시각적인 점프보다 나은 선택입니다. 
  
      (3.10.0에서 추가됨)
    */
});
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const routes = [
  // {
  //   id: "index",
  //   name: "Home",
  //   route: "/",
  // },
  // {
  //   id: "main",
  //   name: "Main",
  //   route: "/main",
  // },
  {
    id: "work",
    name: "Work",
    route: "/work"
  },
  {
    id: "about",
    name: "About",
    route: "/about"
  },
  {
    id: "careers",
    name: "Careers",
    route: "/careers"
  },
  {
    id: "contact",
    name: "Contact",
    route: "/contact"
  }
];
const queryClient = new QueryClient();
function PageShell({ pageContext, children }) {
  useEffect(() => {
    const cleanUp = () => {
    };
    return cleanUp;
  }, []);
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Layout, { children }) }) }) });
}
const configFooterAnimation = (footerElement) => {
  const animateTarget = footerElement.children[0];
  const arrange = {
    element: {
      start: "top",
      end: "95%"
    },
    viewport: {
      start: "bottom",
      end: `bottom`
    }
  };
  const from = {
    yPercent: 100 / 3 * -1
  };
  const to = {
    yPercent: 0,
    scrollTrigger: {
      trigger: footerElement,
      start: `${arrange.element.start} ${arrange.viewport.start}`,
      end: `${arrange.element.end} ${arrange.viewport.end}`,
      invalidateOnRefresh: true,
      scrub: true
      // markers: {
      //   startColor: "steelblue",
      //   endColor: "steelblue",
      //   fontSize: "20px",
      //   indent: 10,
      // },
    }
  };
  return [animateTarget, from, to];
};
const configHeaderAnimation = (triggerElement) => {
  const animateTarget = "#header";
  const arrange = {
    element: {
      start: "top",
      end: "+=100px"
      // 시작 위치에서 + 100px
    },
    viewport: {
      start: "center",
      end: `center`
    }
  };
  const to = {
    opacity: 0,
    scrollTrigger: {
      trigger: triggerElement,
      start: `${arrange.element.start} ${arrange.viewport.start}`,
      end: `${arrange.element.end} ${arrange.viewport.end}`,
      scrub: true
      // markers: true,
    }
  };
  return [animateTarget, to];
};
const normalizeWheelDelta = (event, ratio = 1) => {
  const value = (event == null ? void 0 : event.detail) || (event == null ? void 0 : event.wheelDelta) || (event == null ? void 0 : event.wheelDeltaY) || 1;
  return value / value * ratio;
};
function Layout({ children }) {
  var _a, _b;
  const pageContext = usePageContext();
  const [mode, setMode] = useState(((_b = (_a = pageContext.exports) == null ? void 0 : _a.documentsProps) == null ? void 0 : _b.mode) || "light");
  const modePalette = useCssTheme((state) => state.mode);
  const { modal } = useCssTheme((state) => state);
  pageContext.exports.mode = [mode, setMode];
  const wrap2 = useRef(null);
  useEffect(() => {
    const ctx = gsap.context((context) => {
      context.add("pageScroll", ({ scrollTarget, y }) => {
        gsap.to(scrollTarget, {
          scrollTo: { autoKill: window === scrollTarget, y },
          duration: 1
        });
      });
      context.add("headerAnimate", (params) => gsap.to(...params));
      context.add("footerAnimate", (params) => gsap.fromTo(...params));
    }, wrap2);
    const smoothScrollEvents = ["wheel"];
    const smoothScroll = (event) => {
      event.preventDefault();
      const isFloatingModal = document.body.classList.contains(...modal.toggle);
      if (isFloatingModal)
        return;
      const smoothness = 200;
      const scrollTarget = (event == null ? void 0 : event.view) || window;
      const direction = event.deltaY < 0 ? -1 : 1;
      const delta = normalizeWheelDelta(event, smoothness);
      const pageHeight = document.body.offsetHeight - window.innerHeight;
      const y = Math.max(0, Math.min(pageHeight, window.scrollY + delta * direction));
      ctx.pageScroll({ scrollTarget, y });
    };
    smoothScrollEvents.forEach((ev) => window.addEventListener(ev, smoothScroll, { passive: false }));
    const target = document.getElementById("footer");
    const options = {
      rootMargin: "20px 0px 0px",
      thresholds: [1e-3]
    };
    const toggleAnimate = (label, configCallback, observeObject) => {
      const { target: target2, isIntersecting } = observeObject;
      const config = configCallback(target2);
      if (!isIntersecting) {
        gsap.killTweensOf(label);
        return;
      }
      ctx[label](config);
    };
    const callback = (entries) => {
      const [entry] = entries;
      [
        { label: "headerAnimate", configCallback: configHeaderAnimation },
        { label: "footerAnimate", configCallback: configFooterAnimation }
      ].forEach(({ label, configCallback }) => toggleAnimate(label, configCallback, entry));
    };
    const interSectionObserver = new IntersectionObserver(callback, options);
    interSectionObserver.observe(target);
    const cleanUp = () => {
      ctx.revert();
      interSectionObserver.unobserve(target);
      smoothScrollEvents.forEach((ev) => window.removeEventListener(ev, smoothScroll, { passive: false }));
    };
    return cleanUp;
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { ref: wrap2, id: "container", className: "grid grid-rows-[minmax(auto, 11.5rem), 1fr, auto]", children: [
      /* @__PURE__ */ jsx("div", { className: "page-contents-wrap z-[100] invisible fixed top-0 bottom-0 left-0 right-0 grid grid-cols-4 md:grid-cols-12 md:gap-x-[--grid-col-gap] mobile:px-[--grid-container-margin] pb-0", children: Array.from({ length: 12 }, () => "cols-span-1").map((span, index) => /* @__PURE__ */ jsx("div", { className: span }, index)) }),
      /* @__PURE__ */ jsx(Header, { menuList: routes, mode }),
      /* @__PURE__ */ jsx("main", { className: CM("relative z-10 min-h-[100vh]", modePalette[mode].class.bg), children }),
      /* @__PURE__ */ jsx(Footer, { menuList: routes, mode: "dark" })
    ] }),
    /* @__PURE__ */ jsx(CursorDot, {})
  ] });
}
PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
Layout.propTypes = {
  children: childrenPropType
};
const logoUrl = "/viteSSR/images/logo.svg";
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "The J";
  const desc = documentProps && documentProps.description || "Anything";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta name="keywords" content="" />
        <meta name="author" content="name" />
        <meta name="og:site_name" content="The J" />
        <meta name="og:title" content=${title} />
        <meta name="og:description" content=${desc} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="" />
        <meta name="og:image" content="" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
export {
  passToClient,
  render
};
