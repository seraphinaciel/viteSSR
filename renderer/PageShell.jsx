// prop type
import PropTypes from "prop-types";
import { childrenPropType } from "./PropTypeValues";

// node module
import React, { useEffect, useRef, useState } from "react";
import { PageContextProvider, usePageContext } from "./usePageContext";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// hooks
import useCssTheme from "../hooks/useCssTheme";

// components
import CursorDot from "../components/CursorDot";
import Header from "../components/Header";
import Footer from "../components/Footer";

// style:global
import "../styles/index.css";
import { CM } from "../utils";

export { PageShell };

// gsap setting
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
  ignoreMobileResize: false,
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
    route: "/work",
  },
  {
    id: "about",
    name: "About",
    route: "/about",
  },
  {
    id: "careers",
    name: "Careers",
    route: "/careers",
  },
  {
    id: "contact",
    name: "Contact",
    route: "/contact",
  },
];

const queryClient = new QueryClient();

function PageShell({ pageContext, children }) {
  // pageContext의 exports.documentProps가 undefined인 이슈.
  // image 참조가 안되는 경우 호출을 위해 한번 더 컴포넌트를 호출하는 듯...
  // 이때 documentProps가 undefined으로 반환된다.
  useEffect(() => {
    const cleanUp = () => {};
    return cleanUp;
  }, []);
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <QueryClientProvider client={queryClient}>
          <Layout>{children}</Layout>
        </QueryClientProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}

// trigger를 footer 자신으로 줄 경우,
// animation에 의해 footer의 top 값이 원래 위치보다 올라오기 때문에
// 스크롤의 시작, 끝 위치가 top 값만큼 올라와 동작에 오류가 생김.
// footer.children[0] 기준으로 변경. 23.09.12
const configFooterAnimation = footerElement => {
  const animateTarget = footerElement.children[0];
  const arrange = {
    element: {
      start: "top",
      end: "95%",
    },
    viewport: {
      start: "bottom",
      end: `bottom`,
    },
  };
  const from = {
    yPercent: (100 / 3) * -1,
  };
  const to = {
    yPercent: 0,
    scrollTrigger: {
      trigger: footerElement,
      start: `${arrange.element.start} ${arrange.viewport.start}`,
      end: `${arrange.element.end} ${arrange.viewport.end}`,
      invalidateOnRefresh: true,
      scrub: true,
      // markers: {
      //   startColor: "steelblue",
      //   endColor: "steelblue",
      //   fontSize: "20px",
      //   indent: 10,
      // },
    },
  };
  return [animateTarget, from, to];
};

// trigger를 main으로 줄 경우,
// 비동기, csr, lazyload 컨텐츠가 있으면,
// 높이값 변화로 인해 스크롤의 시작, 끝 위치가 어그러짐.
// footer 기준으로 변경. 23.09.12
const configHeaderAnimation = triggerElement => {
  const animateTarget = "#header";
  const arrange = {
    element: {
      start: "top",
      end: "+=100px", // 시작 위치에서 + 100px
    },
    viewport: {
      start: "center",
      end: `center`,
    },
  };
  const to = {
    opacity: 0,
    scrollTrigger: {
      trigger: triggerElement,
      start: `${arrange.element.start} ${arrange.viewport.start}`,
      end: `${arrange.element.end} ${arrange.viewport.end}`,
      scrub: true,
      // markers: true,
    },
  };
  return [animateTarget, to];
};

const normalizeWheelDelta = (event, ratio = 1) => {
  const value = event?.detail || event?.wheelDelta || event?.wheelDeltaY || 1;
  return (value / value) * ratio;
};

function Layout({ children }) {
  const pageContext = usePageContext();
  const [mode, setMode] = useState(pageContext.exports?.documentsProps?.mode || "light");
  const modePalette = useCssTheme(state => state.mode);
  const { modal } = useCssTheme(state => state);
  pageContext.exports.mode = [mode, setMode];

  const wrap = useRef(null);
  useEffect(() => {
    // gsap 이벤트 등록
    const ctx = gsap.context(context => {
      // console.log("context", context);

      // page scroll
      context.add("pageScroll", ({ scrollTarget, y }) => {
        gsap.to(scrollTarget, {
          scrollTo: { autoKill: window === scrollTarget, y },
          duration: 1,
        });
      });
      // header
      context.add("headerAnimate", params => gsap.to(...params));
      // footer
      context.add("footerAnimate", params => gsap.fromTo(...params));
    }, wrap);

    // interaction
    // - page scroll
    const smoothScrollEvents = ["wheel"];
    const smoothScroll = event => {
      event.preventDefault();
      // wheel 동작에 의한 native 스크롤을 막음.
      // 이 동작이 선행되어야 gsap의 scrollTo로 움직이는 위치를 스크롤 위치로 적용/환원시킬 수 있음.

      // escape : if floating modal include gnb/mobile full window
      const isFloatingModal = document.body.classList.contains(...modal.toggle);
      if (isFloatingModal) return;

      const smoothness = 200;
      const scrollTarget = event?.view || window;
      const direction = event.deltaY < 0 ? -1 : 1;
      const delta = normalizeWheelDelta(event, smoothness);
      const pageHeight = document.body.offsetHeight - window.innerHeight;
      const y = Math.max(0, Math.min(pageHeight, window.scrollY + delta * direction));

      ctx.pageScroll({ scrollTarget, y });
    };
    smoothScrollEvents.forEach(ev => window.addEventListener(ev, smoothScroll, { passive: false }));

    // - header / footer
    // 페이지 높이가 비동기, lazyload에 의해 가변적이므로
    // 스크롤이 끝까지 갔을 때 gsap가 동작하도록 함.
    const target = document.getElementById("footer");
    const options = {
      rootMargin: "20px 0px 0px",
      thresholds: [0.001],
    };
    const toggleAnimate = (label, configCallback, observeObject) => {
      const { target, isIntersecting } = observeObject;
      const config = configCallback(target);
      if (!isIntersecting) {
        gsap.killTweensOf(label);
        return;
      }
      ctx[label](config);
    };
    const callback = entries => {
      const [entry] = entries;
      [
        { label: "headerAnimate", configCallback: configHeaderAnimation },
        { label: "footerAnimate", configCallback: configFooterAnimation },
      ].forEach(({ label, configCallback }) => toggleAnimate(label, configCallback, entry));
    };
    const interSectionObserver = new IntersectionObserver(callback, options);
    interSectionObserver.observe(target);

    // unmount
    const cleanUp = () => {
      ctx.revert();
      interSectionObserver.unobserve(target);
      smoothScrollEvents.forEach(ev => window.removeEventListener(ev, smoothScroll, { passive: false }));
    };

    return cleanUp;
  }, []);
  return (
    <>
      <div ref={wrap} id="container">
        {/* grid guide */}
        <div className="page-contents-wrap z-[100] invisible fixed top-0 bottom-0 left-0 right-0 grid grid-cols-4 md:grid-cols-12 md:gap-x-[--grid-col-gap] mobile:px-[--grid-container-margin] pb-0">
          {Array.from({ length: 12 }, () => "cols-span-1").map((span, index) => (
            <div key={index} className={span} />
          ))}
        </div>

        {/* header */}
        <Header menuList={routes} mode={mode} />

        {/* page contents */}
        <main className={CM("relative z-10 min-h-[100vh]", modePalette[mode].class.bg)}>{children}</main>

        {/* footer */}
        <Footer menuList={routes} mode={"dark"} />
      </div>
      {/* cursor */}
      <CursorDot />
    </>
  );
}

// props type
PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};
Layout.propTypes = {
  children: childrenPropType,
};
