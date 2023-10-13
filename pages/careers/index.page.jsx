// node module

// components
import { Text } from "#root/components/Text";
import TextPassed from "#root/components/TextPassed/TextPassed";
import HorizonScrollContents from "#root/components/careers/HorizonScrollContents";
import PageTitle from "#root/components/PageTitle";
import ScrollSign from "#root/components/ScrollSign";

// style
import styles from "./Careers.module.css";

// utils
import { CM } from "#root/utils";

export const documentProps = {
  title: "🥰 Careers",
  description: `this is a Careers page.`,
  pageId: "/career",
};

function Page() {
  return (
    <div className="careers">
      <div className="page-contents-wrap">
        <div role="region" className={CM(styles.page_header, "mobile:px-[--grid-container-margin]")}>
          <div
            className={CM("flex", {
              "items-start": true,
              "md:items-center": false,
            })}
          >
            <PageTitle
              layoutId="careers"
              title={["Different people", "come together and", "move in one direction"]}
              description={{
                text: "Projects are people-centered, and the results shine because people come together.",
                transform: "프로젝트는 사람이 중심이며 그 결과물이 빛나는 이유는 함께하는 사람들이 있기 때문입니다.",
              }}
            />
          </div>
          <ScrollSign text="See our job openings" />
        </div>
        {/* page title */}

        {/* <div className="scroll-spread | h-[90vh]"></div> */}

        <section className="overflow-hidden">
          <TextPassed text={"Meet our team"} size={20} runDirection={"left"} />
          <div className="px-[--grid-container-margin] mt-60 mb-100 md:mt-140 md:mb-208">
            <div className="md:grid md:grid-cols-12 md:gap-[--grid-col-gap]">
              <Text tagName="p" className="md:col-span-6 md:col-start-6 text-heading-10 md:text-heading-6">
                We create high-performance outcomes with usability and design that everyone can relate to.
              </Text>
              <Text
                tagName="p"
                className="md:col-span-6 md:col-start-6 text-body-6-kr md:text-body-5-kr mt-30 md:mt-50"
              >
                우리는 누구나 공감할 수 있는 사용성과 디자인으로 하이 퍼포먼스의 결과물을 만들어갑니다.
              </Text>
            </div>
          </div>

          {/* horizon scroll */}
          <HorizonScrollContents />
        </section>
      </div>
    </div>
  );
}

export { Page };
