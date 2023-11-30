// prop type
import PropTypes from "prop-types";
import { localPropsType, modePropsType, routesPropType } from "../renderer/PropTypeValues";

// node module
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

// components
import { Text, Title } from "#root/components/Text";
import LogoHomeLink from "#root/components/LogoHomeLink";
import Icon from "#root/components/Icon";

// style
import styles from "./Footer.module.css";
import useCssTheme from "../hooks/useCssTheme";

// static data
const footerInfo = {
  business: "business@the-jey.com",
  recruit: "recruit@the-jey.com",
  tel: "+82 2 515 4240",
  fax: "+82 2 515 2480",
  address: {
    en: "Vogoze Bldg 3F, 6, Samseong-ro 126-gil, Gangnam-gu, Seoul, Republic of Korea",
    kr: "서울시 강남구 삼성로 126길 6 보고재빌딩 3층",
  },
  copyright: {
    start: "2011",
    now: new Date().getFullYear(),
  },
};

function BackToTop() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(context => {
      context.add("backToTop", ({ toFocusElement, duration }) => {
        gsap.to(window, {
          scrollTo: { autoKill: true, y: 0 },
          ease: "power2.inOut", // 걍 아무거나 넣어요.
          duration, // 페이지 길이에 따라 달라짐.
          onComplete: () => toFocusElement.focus(), // scrollY값이 0이 되면, header의 logo로 포커스 반환.
        });
      });
    });

    if (null == ref.current) return;

    const eventName = "click";
    const handler = () => {
      const target = document.getElementById("header");
      const toFocusElement = target.querySelector("a");
      const duration = Math.round(document.body.offsetHeight / 3000);

      ctx.backToTop({ toFocusElement, duration });
    };

    ref.current.addEventListener(eventName, handler, false);

    // unmount
    const cleanUp = () => {
      ctx.revert();
      ref.current.removeEventListener(eventName, handler, false);
    };

    return cleanUp;
  }, []);

  return (
    <button ref={ref} type="button" className="flex items-center gap-[0.5rem]">
      <Text>Back to Top</Text>
      <span className="block w-[1.6rem] md:w-[2rem]">
        <Icon shape={"arrow/up"} style={{ stroke: "white" }} />
      </span>
    </button>
  );
}

function Copyright({ year = footerInfo.copyright }) {
  return <Text>{`ⓒ ${year.start}-${year.now}, the J`}</Text>;
}

function Complementary({ info = footerInfo, local = "en" }) {
  return (
    <>
      {/* address */}
      <div className={`md:col-span-3 ${styles.box}`}>
        <Title className={styles.box_title} tagName="strong">
          Address
        </Title>
        <Text tagName="address">{info.address[local]}</Text>
      </div>

      {/* contact us */}
      <div className={`md:col-span-2 ${styles.box}`}>
        <Title className={styles.box_title} tagName="strong">
          Contact Us
        </Title>
        <Text>
          <span>{`Tel. ${info.tel}`}</span>
          <span>{`Tax. ${info.fax}`}</span>
        </Text>
      </div>

      {/* mail:recruit */}
      <div className={`md:col-span-3 ${styles.box}`}>
        <Title className={styles.box_title} tagName="strong">
          Be the New J
        </Title>
        <Text tagName="span">
          <a href={`mailto:${info.recruit}`}>{info.recruit}</a>
        </Text>
      </div>

      {/* mail:business */}
      <div className={`md:col-span-4 ${styles.box}`}>
        <Text className="text-heading-9 md:text-heading-6" tagName="span">
          E-mail us your inquiries to start a new project
        </Text>
        <Text tagName="span">
          <a href={`mailto:${info.business}`}>{info.business}</a>
        </Text>
      </div>
    </>
  );
}

function Footer({ menuList, mode = "dark" }) {
  const [cssTheme] = useCssTheme();
  const { bg, text } = cssTheme.mode[mode].class;
  return (
    <footer id="footer" className={`${styles.wrap} ${bg} ${text}`}>
      <div className={styles.container}>
        {/* FNB */}
        <ul className={styles.navigation}>
          {menuList.map(({ id, name, route }) => (
            <li key={id}>
              <a href={route}>{name}</a>
            </li>
          ))}
        </ul>

        {/* line */}
        <hr className={styles.line} />

        {/* info n ui */}
        <div className={styles.complementary}>
          <Complementary local="en" />
        </div>

        <div className={styles.logo}>
          <LogoHomeLink mode={mode} iconType="the j/thin" />
        </div>

        <div className={styles.rest}>
          <Copyright />
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}

// Component props type
Complementary.propTypes = {
  info: PropTypes.object,
  local: localPropsType,
};

Copyright.propTypes = {
  year: PropTypes.shape({
    start: PropTypes.string,
    now: PropTypes.string,
  }),
};

Footer.propTypes = {
  menuList: routesPropType.isRequired,
  mode: modePropsType,
};

export default Footer;
