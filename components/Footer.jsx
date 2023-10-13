// prop type
import PropTypes from "prop-types";
import { localPropsType, modePropsType, routesPropType } from "../renderer/PropTypeValues";

// components
import { Text, Title } from "#root/components/Text";
import Icon from "./Icon";

// style
import styles from "./Footer.module.css";
import { LogoHomeLink } from "./Header";

// static data
const footerInfo = {
  business: "bussiness@the-jey.com",
  recruit: "recruit@the-jey.com",
  tel: "+82 2 515 4240",
  fax: "+82 2 515 2480",
  address: {
    en: "Vogoze Bldg 3F, 6, Samseong-ro 126-gil, Gangnam-gu, Seoul, Republic of Korea",
    kr: "",
  },
  copyright: {
    start: "2011",
    now: new Date().getFullYear(),
  },
};

function BackToTop() {
  return (
    <button type="button" className="flex items-center gap-[0.5rem]">
      <Text>Back to Top</Text>
      <span className="block w-[1.6rem] md:w-[2rem]">
        <Icon shape={"arrow/up"} style={{ fill: "white" }} />
      </span>
    </button>
  );
}

function Complementary({ info = footerInfo, local = "en" }) {
  return (
    <>
      {/* address */}
      <div className={`${styles.box} ${"md:col-span-3"}`}>
        <Title className={styles["box-title"]} tagName="strong">
          Address
        </Title>
        <Text tagName="address">{info.address[local]}</Text>
      </div>

      {/* contact us */}
      <div className={`${styles.box} ${"md:col-span-2"}`}>
        <Title className={styles["box-title"]} tagName="strong">
          Contact Us
        </Title>
        <Text>
          <span>{`Tel. ${info.tel}`}</span>
          <span>{`Tax. ${info.fax}`}</span>
        </Text>
      </div>

      {/* mail:recruit */}
      <div className={`${styles.box} ${"md:col-span-3"}`}>
        <Title className={styles["box-title"]} tagName="strong">
          Be the New J
        </Title>
        <Text tagName="span">
          <a href={`mailto:${info.recruit}`}>{info.recruit}</a>
        </Text>
      </div>

      {/* mail:business */}
      <div className={`${styles.box} ${"md:col-span-4"}`}>
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

function Copyright({ year = footerInfo.copyright }) {
  return <Text>{`ⓒ ${year.start}-${year.now}, the J`}</Text>;
}

function Footer({ menuList, mode = "dark" }) {
  return (
    <footer className={styles.wrap}>
      <div className={styles.container}>
        {/* FNB */}
        <ul className={styles.fnb}>
          {menuList.map(({ name, url }) => (
            <li key={name}>
              <a href={url}>{name}</a>
            </li>
          ))}
        </ul>

        {/* line */}
        <hr className={styles.line} />

        {/* info n ui */}
        <div className={styles.complementary}>
          <Complementary />
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
  info: PropTypes.object.isRequired,
  local: localPropsType,
};

Copyright.propTypes = {
  year: {
    start: PropTypes.string,
    now: PropTypes.string,
  },
};

Footer.propTypes = {
  menuList: routesPropType.isRequired,
  mode: modePropsType,
};

export default Footer;
