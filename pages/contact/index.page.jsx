// node module
import { useCallback } from "react";
import { usePageContext } from "#root/renderer/usePageContext";

// components
import PageTitle from "#root/components/PageTitle";
import { Word } from "#root/components/TextSplit";
import TextPassed from "#root/components/TextPassed/TextPassed";
import { Text, Title } from "#root/components/Text";

// style
import styles from "./Contact.module.css";

// utils
import { CM } from "#root/utils";

export const documentProps = {
  title: "🥰 Contact",
  description: `this is a Contact page.`,
  pageId: "/contact",
};

function Page() {
  const pageContext = usePageContext();
  const pageRef = useCallback(wrap => {
    if (null == wrap) return;
    console.log("pageContext", pageContext);
  });
  return (
    <div ref={pageRef} className="contact">
      <div className="page-contents-wrap">
        {/* page title */}
        <div role="region" className={CM(styles.page_header)}>
          <div>
            <PageTitle title={["We would love to", " hear from you"]} />
          </div>
        </div>

        <section className={CM(styles.map)}>
          <img src="/images/contact_01.webp" alt="" />
          <dl>
            <dt className="font-medium mb-40 md:mb-50">Address</dt>
            <dd className="mb-30 md:mb-45">
              Vogoze Bldg 3F, 6, Samseong-ro 126-gil, Gangnam-gu, Seoul, Republic of Korea{" "}
            </dd>
            <dd className="text-body-6-kr md:text-body-5-kr text-base-1">
              서울특별시 강남구 삼성로126길 6, 보고재빌딩 3층
            </dd>
            <dd className="mt-40 mb-60 md:mt-70 md:mb-50">
              <a href="" className="link">
                Naver map
              </a>
            </dd>
          </dl>
        </section>

        <h1 className={CM(styles.rolling)}>
          <TextPassed text={"Cheongdam Office"} size={20} runDirection={"left"} />
        </h1>

        <address className={CM(styles.number)}>
          <a href="tel:+82 02 515 4240">+82 02 515 4240</a>
          <a href="mailto:bussiness@the-jey.com">bussiness@the-jey.com</a>
          <a href="mailto:recruit@the-jey.com">recruit@the-jey.com</a>
        </address>
      </div>
    </div>
  );
}

export { Page };
