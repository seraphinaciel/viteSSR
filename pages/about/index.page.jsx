// node module
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// components
// common
import { Title, Text } from "#root/components/Text";
import { Word } from "#root/components/TextSplit";

import SvgIcons from "#root/components/SvgIcons";
import TextPassed from "#root/components/TextPassed/TextPassed";
import PageTitle from "#root/components/PageTitle";
import ScrollSign from "#root/components/ScrollSign";

// about components
import CircleGrid from "#root/components/about/CircleGrid";
import TextMove from "#root/components/about/TextMove";
import AboutTitle from "#root/components/about/AboutTitle";
import SpreadImg from "#root/components/about/SpreadImg";
import RecruitList from "#root/components/about/RecruitList";
import Marquee from "#root/components/about/Marquee";

// style
import styles from "./About.module.css";

// utils
import { CM } from "#root/utils";

export { Page };

export const documentProps = {
  title: "😁 about",
  description: `this is a about page.`,
  pageId: "/about",
};

const animation = {
  title: { arrange: { start: "top 70%", end: "+=70%" } },
  description: {
    arrange: {
      start: "top 95%",
    },
  },
};

function Page() {
  const mainRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const main = document.querySelector("main");
      const createTimeline = (triggerSelector, startTrigger, endTrigger, bgColorClass, textColorClass) => {
        return gsap
          .timeline({
            scrollTrigger: {
              trigger: triggerSelector,
              start: startTrigger,
              end: endTrigger,
              toggleActions: "restart pause resume reverse",
              scrub: true,
            },
          })
          .to(main, {
            className: `relative z-10 min-h-[100vh] ${bgColorClass} ${textColorClass}`,
          });
      };
      createTimeline(document.querySelector(".dark"), "-30% 100%", "+=100%", "bg-bg-dark", "text-white");
      createTimeline(document.querySelector(".light"), "top 20%", "+=100%", "bg-bg-light", "text-black");
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="about" ref={mainRef}>
      <div className="page-contents-wrap">
        {/* page header */}
        <div role="region" className={CM(styles.page_header, "mobile:px-[--grid-container-margin]")}>
          <div
            className={CM("flex", {
              "items-start": true,
              "md:items-center": false,
            })}
          >
            <PageTitle
              title={["We are focusing on", "creative design", "and technical work"]}
              description={{
                text: "As technology develops, the combination of UX design and technology will be our powerful force.",
                transform: "기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될 것이라고 믿습니다.",
              }}
            />
          </div>
          <ScrollSign text="Learn our services" />
        </div>

        <CircleGrid className={CM(styles.cCircle)}>
          <AboutTitle conLeft="new" conRight="eyes" />
          <div className={styles.textBox}>
            <Word
              tagName="h3"
              className="text-heading-10 md:text-heading-4 justify-center"
              content="We see everything with new eyes and make it with empathy and creativity."
              animationConfig={animation.description}
              splitType="none"
            />
            <Word
              tagName="p"
              className="basic_p_2 justify-center"
              content="우리는 모든 것을 새로운 눈으로 보고 공감과 창의력으로 만들어갑니다."
              animationConfig={animation.description}
              splitType="none"
            />
          </div>
        </CircleGrid>

        <section className={CM("dark", styles.title_flow)}>
          <TextMove className={CM(styles.tflow_01)} location={["x", "x", "y"]} coord={["-1", "1", "1"]}>
            <Text tagName="div">
              {"Make Empathy"}
              {"&"}
            </Text>
            <Text>{"Creativity"}</Text>
          </TextMove>
        </section>

        <section className="layout_text_box">
          <Title tagName="h5" className="text-heading-9 md:text-heading-8">
            Our Philosophy
          </Title>

          <article>
            <Word
              className="title_p"
              content="We respect the thoughts of people who grew up in different environments. Making my thoughts and other people's thoughts together The beginning is The J's creative momentum."
              animationConfig={animation.description}
              // svg path
              location="respect"
              styleId="circle/4.down"
              color="white"
            />
            <Word
              className="basic_p_2"
              content="우리는 서로 다른 환경에서 자란 사람들의 생각을 존중합니다. 나의 생각과 다른 사람들의 생각을 함께 만들어가는 것 그 시작이 더제이의 크리에이티브 모멘텀입니다."
              animationConfig={animation.description}
              animationType="fade in"
            />
          </article>
        </section>

        <section className={CM(styles.split_text_box)}>
          <Word
            content="Neat Arrangement Creative Expression Sophisticated Techniques Good Communication Young Generation Casual and Cozy Office Free-Spirited"
            className="text-heading-6 md:text-heading-1 leading-loose"
            splitType="letter"
            animationType="fill"
            animationConfig={{
              markers: true,
              arrange: {
                start: "top 40%",
                end: "bottom 40%",
              },
            }}
          />
        </section>

        <section className={CM("light", styles.title_flow)}>
          <TextMove className={CM(styles.tflow_02)} location={["y", "y", "y"]} coord={["1", "1", "1"]}>
            <p>
              <SvgIcons types="basic" />
            </p>
            <Text tagName="div">
              {"Discover"}
              {"Hidden"}
            </Text>
            <Text>{"Creativity"}</Text>
          </TextMove>
        </section>

        <section className="layout_text_box mt-88">
          <Title tagName="h5" className="text-heading-9 md:text-heading-8">
            Our vision
          </Title>
          <article>
            <Word
              className="title_p"
              content="Various ideas and trendy experiences increase the branding representation of the project and make it simple and easy to design. By reflecting creativity in technology, we constantly pursue creativity in technical UX design."
              animationConfig={animation.description}
              location="creativity"
              styleId="circle/8.up"
            />

            <Word
              className="basic_p_2"
              content="다양한 아이디어와 트렌디한 경험을 통해 프로젝트의 브랜딩 표현을 높이고 사용성은 간결하고 쉽게 디자인합니다. 기술력에 크리에이티브를 반영하는 과정을 통해 우리는 늘 최상의 크리에이티브 테크니컬 UX 디자인을 만들어가고 있습니다."
              animationConfig={animation.description}
              animationType="fade in"
            />
          </article>
        </section>

        <SpreadImg className={CM(styles.spreadImg)}>
          <article>
            <Title tagName="h5" className="text-heading-9 md:text-heading-8">
              Our capability
            </Title>
            <Word
              tagName="h3"
              className="mb-25 text-heading-10 md:text-heading-4"
              content="We specialize in global and commerce, from building and rollout to maintenance, and strategy and creative design."
              animationConfig={animation.description}
              splitType="none"
            />
            <Word
              tagName="p"
              className="basic_p_2"
              content="전략, 크리에이티브 디자인을 중심으로 구축, 확산, 운영 등 글로벌과 커머스에 특화된 디자인이 가능합니다."
              animationConfig={animation.description}
              splitType="none"
            />
          </article>
        </SpreadImg>

        <section className={CM(styles.service)}>
          <h1 className="overflow-hidden">
            <TextPassed text={"Our service"} size={20} runDirection={"left"} />
          </h1>
          <article>
            <Title tagName="h5" className="text-heading-9 md:text-heading-8">
              What we do
            </Title>
            <Word
              tagName="h3"
              className="mb-19 text-heading-10 md:text-heading-4"
              content="We are committed to helping your brand with our high-quality services and integrated approach."
              animationConfig={animation.description}
              location="high-quality"
              styleId="circle/14.up"
            />
            <Word
              className="basic_p_2"
              content="우리는 우리의 고품질 서비스와 통합된 접근 방식으로 당신의 브랜드를 돕기 위해 최선을 다하고 있습니다."
              animationConfig={animation.description}
              animationType="fade in"
            />
          </article>
        </section>

        <RecruitList className={CM(styles.recruitList)}>
          <article>
            <div>
              <Title tagName="h2" className="text-heading-5 md:text-heading-1 font-light">
                UX UI Design
              </Title>
            </div>
            <Text tagName="div" className="box">
              {"UX UI Strategy"}
              {"UX Research"}
              {"UX Planning & Insight"}
              {"UX Writing"}
              {"UI Design"}
              {"Brand Experience"}
              {"SEO"}
            </Text>
          </article>
          <article>
            <div>
              <Title tagName="h2" className="text-heading-5 md:text-heading-1 font-light">
                Contents
              </Title>
            </div>
            <Text tagName="div" className="box">
              {"Contents Strategy"}
              {"Visual Communication"}
              {"Interaction Design"}
              {"3D & Motion Graphics"}
              {"Digital Design Strategy"}
              {"Graphic Design"}
              {"Copywriting"}
            </Text>
          </article>
          <article>
            <div>
              <Title tagName="h2" className="text-heading-5 md:text-heading-1 font-light">
                Global & Platform
              </Title>
            </div>
            <Text tagName="div" className="box">
              {"Global Strategy"}
              {"E-Commerce Strategy"}
              {"Global Rollout"}
              {"Contents Translation Work"}
              {"AEM & CMS Platform Building"}
              {"Adobe Experience Management"}
              {"Contents Creation"}
            </Text>
          </article>
          <article>
            <div>
              <Title tagName="h2" className="text-heading-5 md:text-heading-1 font-light">
                Development
              </Title>
            </div>
            <Text tagName="div" className="box">
              {"Web Front-end Development"}
              {"Web & App Publishing"}
              {"Responsive Web"}
              {"Interaction Engineering"}
              {"Web Accessibility"}
              {"Cross Browsing"}
              {"Performance Optimization"}
            </Text>
          </article>
        </RecruitList>

        <section className={CM(styles.partners)}>
          <Title tagName="h5" className="text-heading-9 md:text-heading-8">
            Our partners & clients
          </Title>
          <Marquee />
        </section>
      </div>
    </div>
  );
}
