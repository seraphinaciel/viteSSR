// prop type
import { routesPropType, modePropsType } from "../renderer/PropTypeValues";

// node module
import { Fragment, useCallback, useEffect, useRef, useState } from "react";

// components
import Link from "#root/components/Link";
import LogoHomeLink from "#root/components/LogoHomeLink";

// style
import styles from "./Header.module.css";
import { gsap } from "gsap/dist/gsap";
import useCssTheme from "../hooks/useCssTheme";

// utils
import { CM } from "../utils";

function Header({ menuList = [], mode: pageColor }) {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const [gnbActive, setGnbActive] = useState(false);
  const [colorMode, setColorMode] = useState(pageColor);

  const { mobile, md } = useCssTheme(state => state.screens);
  const modalToggleClass = useCssTheme(state => state.modal.toggle);
  const onGNBActive = useCallback(toggleClass => {
    setGnbActive(true);
    setColorMode("dark");
    document.body.classList.add(...toggleClass);
  }, []);

  const onGNBDeactive = useCallback(
    toggleClass => {
      setGnbActive(false);
      setColorMode(pageColor);
      document.body.classList.remove(...toggleClass);
    },
    [pageColor],
  );

  const onGNBReset = useCallback(
    toggleClass => {
      setGnbActive(false);
      setColorMode(pageColor);
      document.body.classList.remove(...toggleClass);
    },
    [pageColor],
  );

  useEffect(() => {
    const { current: menuRootElement } = menuRef;
    const { current: headerRootElement } = headerRef;
    const loaded = menuRootElement instanceof HTMLElement && headerRootElement instanceof HTMLElement;
    if (!loaded) return;

    // create "timeline" instance
    // const tl = gsap.timeline();
    // timeline은 같은 요소를 대상으로 2가지 정의가 안됨.
    // gsap로 만든 객체는 가능.

    const animateTarget = menuRootElement.querySelectorAll("li a");
    const itemDelayRatio = 0.5; // 0 ~ 1
    const itemDelay = (1 / animateTarget.length) * itemDelayRatio;
    // create "matchMedia" instance
    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: `(min-width:${md})`,
        reduceMotion: `(prefers-reduced-motion: reduce)`,
      },
      context => {
        const { desktop, reduceMotion } = context.conditions;
        const duration = 0.75;
        const tween = gsap.fromTo(
          animateTarget,
          {
            xPercent: 100,
            y: 0,
            opacity: 0,
          },
          {
            xPercent: 0,
            y: 0,
            opacity: 1,
            duration: reduceMotion ? 0 : duration,
            stagger: duration * itemDelay, // 대상이 여러개일 때 순서에 비례하여 일괄 지연시킬 수 있음.
            paused: desktop,
          },
        );
        desktop && tween.play();
      },
    );

    mm.add(
      {
        mobile: `(max-width:${mobile.max})`,
        reduceMotion: `(prefers-reduced-motion: reduce)`,
      },
      context => {
        const { reduceMotion } = context.conditions;
        const trigger = document.getElementById("gnb-trigger");
        const duration = 0.6;
        const tween = gsap
          .fromTo(
            animateTarget,
            {
              x: 0,
              y: 100,
              opacity: 0,
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: reduceMotion ? 0 : duration,
              stagger: duration * itemDelay * -1, // 음수 값으로 선언하면 역순으로 딜레이 적용.
              onStart: () => {
                onGNBActive(modalToggleClass);
              },
              onReverseComplete: () => {
                onGNBDeactive(modalToggleClass);
              },
            },
          )
          .reverse();
        context.add("toggleMenu", () => {
          tween.reversed(!tween.reversed());
        });

        trigger.addEventListener("click", context.toggleMenu);
        return () => {
          trigger.removeEventListener("click", context.toggleMenu);
        };
      },
    );

    const breakpoint = window.matchMedia(`(max-width:${mobile.max})`);
    const viewChange = mediaQueryList => {
      if (mediaQueryList.matches) {
        // mobile
      } else {
        // desktop
        onGNBReset(modalToggleClass);
      }
    };
    breakpoint.addEventListener("change", viewChange);

    // unmount
    const cleanUp = () => {
      mm.revert();
      breakpoint.removeEventListener("change", viewChange);
    };

    return cleanUp;
  }, [onGNBActive, onGNBDeactive, onGNBReset, mobile, md, modalToggleClass]);

  return (
    <header
      id="header"
      ref={headerRef}
      className={CM(styles.wrap, {
        "mobile:text-white": colorMode === "dark",
      })}
    >
      <div className={styles.container}>
        {/* Home Link */}
        <div
          className={CM(styles.logo, {
            "mobile:z-[2]": gnbActive,
          })}
        >
          <LogoHomeLink mode={colorMode} />
        </div>

        {/* mobile button */}
        <button
          id="gnb-trigger"
          className={CM(styles.menu_button, {
            "mobile:z-[2]": gnbActive,
          })}
          type="button"
        >
          Menu
        </button>

        {/* GNB */}
        <nav
          id="navigation"
          className={CM(styles.navigation, {
            "mobile:z-[1]": gnbActive,
            "mobile:flex": gnbActive,
            "mobile:hidden": !gnbActive,
            "mobile:bg-black": colorMode === "dark",
          })}
        >
          <ul ref={menuRef} className={styles.menu}>
            {menuList.map(({ id, name, route }) => (
              <Fragment key={id}>
                <li className={styles.menu_item}>
                  <Link href={route}>{name}</Link>
                </li>
              </Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  menuList: routesPropType.isRequired,
  mode: modePropsType.isRequired,
};

export default Header;
