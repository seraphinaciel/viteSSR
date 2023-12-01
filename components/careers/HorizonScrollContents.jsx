// prop type
import PropTypes from "prop-types";
import { ImagePropType } from "#root/renderer/PropTypeValues";
// node module
import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// components
import { Text, Title } from "#root/components/Text";
import LineMotionText from "#root/components/LineMotionText";
import SvgLine from "../SvgLine";

// style
import styles from "./horizonScrollContents.module.css";

// hook
import useCssTheme from "#root/hooks/useCssTheme";

// utils
import { CM } from "#root/utils";

// temporary
// function preset({ image, index }) {
//   image.style.position = "relative";
//   image.style.zIndex = index * -1;
//   image.style.maxWidth = `${window.innerWidth * 0.65}px`;

//   console.group();
//   console.log(image.getBoundingClientRect());
//   const { x, y, width, height } = image.parentElement.getBoundingClientRect();
//   console.log(width * 0.5, window.innerWidth * 0.5, x, window.innerWidth * 0.5 - width * 0.5 - x);
//   console.groupEnd();

//   image.style.left = `${window.innerWidth * 0.5 - window.innerWidth * 0.65 * 0.5 - x}px`;
//   image.style.top = `${window.innerHeight * 0.5 - height * 0.5 - y}px`;
//   image.style.transform = `rotate(${index * 1.4 * -1}deg)`;
// }

function ContentsSummary({ title, description, paragraph, className = null }) {
  return (
    <div className={CM("card flex flex-col gap-y-25 md:gap-y-30", className)}>
      <Title className="text-heading-10 md:text-heading-8" tagName="strong">
        {title}
      </Title>
      <Text className="text-[4.6rem] leading-[5.4rem] md:text-heading-4">{description}</Text>
      <Text className="mt-5 md:mt-20 text-body-7-kr md:text-body-5-kr" tagName="p">
        {paragraph}
      </Text>
    </div>
  );
}
ContentsSummary.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  paragraph: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
};

function Image({
  url,
  classes = { container: "aspect-[365/274] md:aspect-[365/274]", image: null },
  meta = { alt: "" },
}) {
  const { md, mobile } = useCssTheme(state => state.screens);
  return (
    <picture className={CM(classes.container)}>
      <source media={`(max-width:${mobile.max})`} srcSet={`${url}-m.webp`} />
      <source media={`(min-width:${md})`} srcSet={`${url}.webp`} />
      <img className={CM(classes.image)} src={`${url}-m.webp`} alt={meta.alt} />
    </picture>
  );
}
Image.propTypes = {
  ...ImagePropType,
  classes: PropTypes.shape({
    container: PropTypes.string,
    image: PropTypes.string,
  }),
};

function HorizonScrollContents() {
  const wrap = useRef(null);
  const { md } = useCssTheme(state => state.screens);

  useEffect(() => {
    if (null == wrap.current) return;
    // https://greensock.com/forums/topic/33360-how-do-i-make-scroller-start-responsive/
    // You can use a function-based value which will get called every time there's a ScrollTrigger.refresh()
    // (which happens every time the page gets resized):
    // 이 옵션 설정도 필요.
    // invalidateOnRefresh: true

    const mm = gsap.matchMedia();
    mm.add(
      `(min-width:${md})`,
      context => {
        const { matches } = context.conditions;
        console.log("desktop", matches);

        const scrollContainer = wrap.current.children[0];
        if (!scrollContainer) return;

        const scrollWidth = () => scrollContainer.scrollWidth - window.innerWidth;
        const to = {
          x: () => scrollWidth() * -1,
          duration: 3,
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            // start: () => {
            //   const header = document.getElementById("header");
            //   if (!header) return `top top`;
            //   // let headerBottom = null;
            //   // const observer = new ResizeObserver(entries => {
            //   //   const [entry] = entries;
            //   //   headerBottom = Math.round(entry.contentRect.bottom);
            //   //   console.log(headerBottom);
            //   // });
            //   // observer.observe(header);
            //   const { bottom: contentsTop } = header.getBoundingClientRect();
            //   return `top ${contentsTop}px`;
            // },
            start: "top top",
            end: () => `+=${scrollWidth()}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            markers: false,
          },
        };
        gsap.to(scrollContainer, to);
      },
      wrap,
    );

    mm.add(
      `(min-width:${md})`,
      context => {
        const images = gsap.utils.toArray("img");
        if (0 === images.length) return;

        images.map((image, index) => {
          if (3 < index) return;

          const parent = image.parentElement;
          if (!parent) return;
          const imageWidth = () => window.innerWidth * 0.65;
          context.add(`spread${index + 1}`, () =>
            gsap.fromTo(
              image,
              {
                css: {
                  position: "relative",
                  transform: `rotate(${index * 1.4 * -1}deg)`,
                  maxWidth: () => `${imageWidth()}px`,
                  left: () => `${window.innerWidth * 0.5 - imageWidth() * 0.5 - parent.getBoundingClientRect().x}px`,
                  top: () =>
                    `${
                      window.innerHeight * 0.5 -
                      parent.getBoundingClientRect().height * 0.5 -
                      parent.getBoundingClientRect().y
                    }px`,
                },
              },
              {
                css: {
                  maxWidth: "100%",
                  position: "relative",
                  left: 0,
                  top: 0,
                  transform: `rotate(0deg)`,
                },
                duration: 0.75,
                scrollTrigger: {
                  trigger: wrap.current,
                  start: "-50%, 20%",
                  end: "-15% 20%",
                  scrub: true,
                  invalidateOnRefresh: true,
                  // markers: {
                  //   startColor: "steelblue",
                  //   endColor: "steelblue",
                  //   fontSize: "20px",
                  //   indent: 10,
                  // },
                },
              },
            ),
          );
          context[`spread${index + 1}`]();
        });
      },
      wrap,
    );

    const cleanUp = () => {
      mm.revert();
    };
    return cleanUp;
  }, [md]);
  return (
    <div ref={wrap} className="scroll-wrap | ">
      <div className={CM(styles.container, "scroll-container", "mobile:gap-100")}>
        <section className="mobile:hidden">
          <Image url="${import.meta.env.BASE_URL}images/thej-careers-hz-img01" />
        </section>
        {/* -- end:section 1 -- */}

        <section className="flex flex-col gap-y-60 md:gap-y-110">
          <Image
            classes={{ container: "mobile:pr-[--grid-container-margin]" }}
            url="${import.meta.env.BASE_URL}images/thej-careers-hz-img02"
          />
          <ContentsSummary
            className="mobile:px-[--grid-container-margin] md:pl-50"
            title="UX UI Planner"
            description="Various ideas, Strategic Plan"
            paragraph="비즈니스 분석은 정확하고 Precise하게 아이디어 발산은 다양하고 Flexible하게 프로젝트 진행에 합리적인 일정관리와 기획 설계를 진행합니다."
          />
        </section>
        {/* -- end:section 2 -- */}

        <section className="flex flex-col gap-y-60 md:gap-y-110">
          <Image
            classes={{ container: "mobile:pl-[--grid-container-margin]" }}
            url="${import.meta.env.BASE_URL}images/thej-careers-hz-img03"
          />
          <ContentsSummary
            className="mobile:px-[--grid-container-margin]"
            title="UX UI Designer"
            description="UX experience, creative design "
            paragraph="크리에이티브 디자인부터 SI와 영상까지 다양한 도메인에 대한 디자인 경험을 보유하고 있으며 최신 트렌드 기술에 적합한 UX-UI 디자인을 진행합니다."
          />
        </section>
        {/* -- end:section 3 -- */}

        <section className="flex flex-col gap-y-60 md:gap-y-110">
          <Image
            classes={{ container: "mobile:pr-[--grid-container-margin]" }}
            url="${import.meta.env.BASE_URL}images/thej-careers-hz-img04"
          />
          <ContentsSummary
            className="mobile:px-[--grid-container-margin]"
            title="Front-end Developer"
            description={
              <>
                {"Various frameworks"}{" "}
                <LineMotionText styleId="circle/16.up" extendLineStyle={styles.pen_line}>
                  technologies
                </LineMotionText>
              </>
            }
            paragraph="프론트엔드 기술 적용과 최신 기술 트렌드에 필요한 모든 작업을 수행합니다. 크리에이티브에 필요한 스크립트 기술과 백엔드 영향도까지 커버 가능한 실력을 보유하고 있습니다."
          />
        </section>
        {/* -- end:section 4 -- */}

        <section className="w-full">
          <Image url="${import.meta.env.BASE_URL}images/thej-careers-hz-img05" />
        </section>
        {/* -- end:section 5 -- */}

        <section>
          <Text className="text-heading-1">
            The different
            <br />
            ones making <br />
            the real
            <SvgLine shape="typo/difference" />
          </Text>
        </section>
        {/* -- end:section 6 -- */}
      </div>
    </div>
  );
}

export default HorizonScrollContents;
