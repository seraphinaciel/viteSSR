import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";

import { Title, Text } from "#root/components/Text";
import Icon from "#root/components/Icon";
import { TextSvg } from "#root/components/TextSvg";
import { Letter, Word, Sentence } from "#root/components/TextSplit";
import SvgIcons from "#root/components/SvgIcons";
import SvgLine from "#root/components/SvgLine";
import TextPassed from "#root/components/TextPassed/TextPassed";
// import TextMarquee from "#root/components/TextMarquee";

import CircleGrid from "#root/components/about/CircleGrid";
import TextMove from "#root/components/about/TextMove";
import AboutTitle from "#root/components/about/AboutTitle";
import AboutImg from "#root/components/about/AboutImg";
import RecruitList from "#root/components/about/RecruitList";
import Marquee from "#root/components/about/Marquee";
import styles from "./About.module.css";

export { Page };

export const documentProps = {
  title: "😁 about",
  description: `this is a about page.`,
  pageId: "/about",
};

function Page() {
  const mainRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const body = document.querySelector("body");

      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 100%",
          end: "+=100%",
          toggleActions: "restart pause resume reverse",
          scrub: true,
        },
      });
      mainTimeline.to(body, { className: "bg-bg-light text-pink" });

      const darkTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".dark",
          start: "top 100%",
          end: "+=100%",
          toggleActions: "restart pause resume reverse",
          scrub: true,
        },
      });
      darkTimeline.to(body, { className: "bg-bg-dark text-white" }, "<");

      const lightTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".light",
          start: "top 20%",
          end: "+=100%",
          toggleActions: "restart pause resume reverse",
          scrub: true,
        },
      });
      lightTimeline
        .to(body, { className: "bg-bg-light text-black" })
        .fromTo(
          ".svgFixed",
          { opacity: 0, position: "static" },
          {
            opacity: 1,
            position: "fixed",
            top: 0,
            left: 0,
          },
          "<-=1",
        )
        .set(".svgFixed", { opacity: 0, position: "static" });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="about" ref={mainRef}>
      <h1>about</h1>
      <section className="title_box">
        <h2>
          <Word tagName="strong" content="We are focusing on" />
          <Word content="creative design" />
          <Word content="and technical work" />
        </h2>

        <article>
          <Sentence
            tagName="strong"
            className="basic_p relative mb-7"
            content="As technology develops, the combination of UX design and technology will be our powerful force."
          />
          <Sentence
            tagName="p"
            className="basic_p_2"
            content="기술이 발달할수록 크리에이티브와 기술의 결합은 우리의 막강한 힘이 될
          것이라고 믿습니다."
          />
        </article>

        <nav>
          <a href="">
            <Text>Learn our services</Text>
            <Icon shape={"arrow/up"} style={{ fill: "black" }} />
          </a>
          SCROLL
        </nav>
      </section>

      <h1>Careers</h1>
      <section className="title_box">
        <h2>
          <Word tagName="strong" content="Different people" />
          <Word content="come together and" />
          <Word content="move in one direction" />
        </h2>

        <article>
          <Sentence
            tagName="strong"
            className="basic_p relative mb-7"
            content="Projects are people-centered, and the results shine because people come together."
          />
          <Sentence
            tagName="p"
            className="basic_p_2"
            content="프로젝트는 사람이 중심이며 그 결과물이 빛나는 이유는 함께하는 사람들이 있기 때문입니다."
          />
        </article>

        <nav>
          <a href="">
            <Text>See our job openings</Text>
            <Icon shape={"arrow/up"} style={{ fill: "black" }} />
          </a>
          SCROLL
        </nav>
      </section>

      <h1>Work</h1>
      <section className="title_box">
        <h2>
          <Word tagName="strong" content="We create designs" />
          <Word content="to inspire people" />
          <Word content="around the world" />
        </h2>

        <article>
          <Sentence
            tagName="strong"
            className="basic_p relative mb-7"
            content="We make the J style. We strive to create
a unique digital experience design."
          />
          <Sentence
            tagName="p"
            className="basic_p_2"
            content="우리는 독특한 디지털 경험 디자인을 만들기 위해 노력합니다."
          />
        </article>
      </section>

      <div className="hidden">
        <CircleGrid className="cCircle ">
          <AboutTitle className="grid grid-cols-2 gap-x-60 capitalize" conLeft="new" conRight="eyes" />
          <div className="w-3/6 text-center">
            <Sentence tagName="h3" content="We see everything with new eyes and make it with empathy and creativity." />
            <Sentence
              tagName="p"
              className="basic_p_2"
              content="우리는 모든 것을 새로운 눈으로 보고 공감과 창의력으로 만들어갑니다."
            />
          </div>
        </CircleGrid>

        <section className="dark ">
          <TextMove className="title_flow" location={["x", "x", "y"]} coord={["-1", "1", "1"]}>
            <Text tagName="div" className="justify-between">
              {"Make Empathy"}
              {"&"}
            </Text>
            <Text>{"Creativity"}</Text>
          </TextMove>
        </section>

        <section className="text_box_side ">
          <Title tagName="h5">Our Philosophy</Title>
          <article>
            <Sentence
              tagName="p"
              className="text-heading-10 desktop:text-heading-6"
              content="We respect the thoughts of people who grew up in different environments. Making my thoughts and other people's thoughts together The beginning is The J's creative momentum."
            >
              <SvgLine id="sBubble_s" color="hotpink" className="svgAni left-[4.2rem]" />
            </Sentence>
            <Sentence
              tagName="p"
              className="basic_p_2"
              content="
              우리는 서로 다른 환경에서 자란 사람들의 생각을 존중합니다. 나의
              생각과 다른 사람들의 생각을 함께 만들어가는 것 그 시작이 더제이의
              크리에이티브 모멘텀입니다."
            />
          </article>
        </section>

        <section className="text_box_side ">
          <Title tagName="h5">Our Philosophy</Title>

          <div>
            <TextSvg className="relative">
              <Text tagName="p" className="text-heading-10 desktop:text-heading-6">
                {
                  "We respect the thoughts of people who grew up in different environments. Making my thoughts and other people's thoughts together The beginning is The J's creative momentum."
                }
              </Text>
              <SvgLine id="sBubble_s" color="hotpink" className="svgAni top-0 left-[4.2rem]" />
              <Text tagName="p" className="basic_p_2">
                {
                  "우리는 서로 다른 환경에서 자란 사람들의 생각을 존중합니다. 나의 생각과 다른 사람들의 생각을 함께 만들어가는 것 그 시작이 더제이의 크리에이티브 모멘텀입니다."
                }
              </Text>
            </TextSvg>
          </div>
        </section>

        <section className="text_box_noSide ">
          <Letter
            content="Neat Arrangement Creative Expression Sophisticated Techniques Good Communication Young Generation Casual and Cozy Office Free-Spirited"
            className="text-heading-8 desktop:text-heading-1"
          />
        </section>

        <section className="light ">
          <SvgIcons types="basic" color="black" className="svgFixed" />
          <TextMove className="title_flow" location={["y", "y", "y"]} coord={["1", "1", "1"]}>
            <Text tagName="div" className="gap-8">
              {"Discover"}
              {"Hidden"}
            </Text>
            <Text>{"Creativity"}</Text>
          </TextMove>
        </section>

        <section className="text_box_side ">
          <Title tagName="h5">Our vision</Title>

          <div>
            <Sentence
              tagName="p"
              className="text-heading-10 desktop:text-heading-6"
              content="Various ideas and trendy experiences increase the branding representation of the project and make it simple and easy to design. By reflecting creativity in technology, we constantly pursue creativity in technical UX design."
            >
              <SvgLine id="sBubble_s" color="black" className="svgAni left-[4.2rem]" />
            </Sentence>
            <Sentence
              tagName="p"
              className="basic_p_2"
              content="
              다양한 아이디어와 트렌디한 경험을 통해 프로젝트의 브랜딩 표현을 높이고 사용성은 간결하고 쉽게 디자인합니다. 기술력에 크리에이티브를 반영하는 과정을 통해 우리는 늘 최상의 크리에이티브 테크니컬 UX 디자인을 만들어가고 있습니다."
            />
          </div>
        </section>

        <AboutImg className={`${styles.spreadImg}`}>
          <div className={styles.txtBox}>
            <Title tagName="h5">Our capability</Title>
            <Sentence
              tagName="h3"
              content="We specialize in global and commerce, from building and rollout to maintenance, and strategy and creative design."
            />
            <Sentence
              tagName="p"
              className="basic_p_2"
              content="전략, 크리에이티브 디자인을 중심으로 구축, 확산, 운영 등 글로벌과 커머스에 특화된 디자인이 가능합니다."
            />
          </div>
        </AboutImg>

        <h1 className="overflow-hidden hidden">
          <TextPassed text="Our service" size="10" runDirection={"left"} />
        </h1>

        {/* <TextMarquee tagName="h1" content="Our service" speed={10}>
          <SvgIcons types="basic" color="black" />
        </TextMarquee> */}

        <section className={`${styles.service} hidden`}>
          <article>
            <Title tagName="h5">What we do</Title>
            <Sentence
              tagName="h3"
              content="We are committed to helping your brand with our high-quality services and integrated approach."
            >
              <SvgLine id="sBubble_s" color="black" className="svgAni absolute top-0 left-[4.2rem]" />
            </Sentence>
            <Sentence
              tagName="p"
              className="basic_p_2"
              content="우리는 우리의 고품질 서비스와 통합된 접근 방식으로 당신의 브랜드를 돕기 위해 최선을 다하고 있습니다."
            />
          </article>
        </section>

        <RecruitList className={`${styles.recruitList} `}>
          <article>
            <div>
              <Title tagName="h2">UX UI Design</Title>
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
              <Title tagName="h2">Contents</Title>
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
              <Title tagName="h2">Global & Platform</Title>
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
              <Title tagName="h2">Development</Title>
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

        <section className={`${styles.partners}`}>
          <Title tagName="h5">Our partners & clients</Title>
          <Marquee />
        </section>
      </div>
    </div>
  );
}
