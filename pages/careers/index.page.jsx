// props type
import PropTypes from "prop-types";
import { ImagePropType } from "#root/renderer/PropTypeValues";

// node module
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// components
import { Text, Title } from "#root/components/Text";
import TextPassed from "#root/components/TextPassed/TextPassed";
import SvgLine from "#root/components/SvgLine";
import LineMotionText from "../../components/LineMotionText";

// style
import styles from "./Careers.module.css";

// utils
import { CM } from "#root/utils";
import useCssTheme from "../../hooks/useCssTheme";

export const documentProps = {
  title: "🥰 Careers",
  description: `this is a Careers page.`,
  pageId: "/career",
};

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

function Page() {
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
            start: () => {
              const header = document.getElementById("header");
              if (!header) return `top top`;
              // let headerBottom = null;
              // const observer = new ResizeObserver(entries => {
              //   const [entry] = entries;
              //   headerBottom = Math.round(entry.contentRect.bottom);
              //   console.log(headerBottom);
              // });
              // observer.observe(header);
              const { bottom: contentsTop } = header.getBoundingClientRect();
              return `top ${contentsTop}px`;
            },
            end: () => `+=${scrollWidth()}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            markers: true,
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
    <div className="careers">
      <div className="page-contents-wrap">
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
          <div ref={wrap} className="scroll-wrap | ">
            <div className={CM(styles.container, "scroll-container", "mobile:gap-100")}>
              <section className="mobile:hidden">
                <Image url="/images/thej-careers-hz-img01" />
              </section>
              {/* -- end:section 1 -- */}

              <section className="flex flex-col gap-y-60 md:gap-y-110">
                <Image
                  classes={{ container: "mobile:pr-[--grid-container-margin]" }}
                  url="/images/thej-careers-hz-img02"
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
                  url="/images/thej-careers-hz-img03"
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
                  url="/images/thej-careers-hz-img04"
                />
                <ContentsSummary
                  className="mobile:px-[--grid-container-margin]"
                  title="Front-end Developer"
                  description={
                    <>
                      {"Various frameworks"}{" "}
                      <LineMotionText styleId="bRespect" extendLineStyle={styles.pen_line}>
                        technologies
                      </LineMotionText>
                    </>
                  }
                  paragraph="프론트엔드 기술 적용과 최신 기술 트렌드에 필요한 모든 작업을 수행합니다. 크리에이티브에 필요한 스크립트 기술과 백엔드 영향도까지 커버 가능한 실력을 보유하고 있습니다."
                />
              </section>
              {/* -- end:section 4 -- */}

              <section className="w-full">
                <Image url="/images/thej-careers-hz-img05" />
              </section>
              {/* -- end:section 5 -- */}

              <section>
                <Title tagName="h1">
                  The different
                  <br />
                  ones making <br />
                  the real
                  <svg xmlns="http://www.w3.org/2000/svg" width="211" height="52" viewBox="0 0 211 52" fill="none">
                    <g clipPath="url(#clip0_1561_2525)">
                      <path
                        d="M15.7455 0.928964C11.8905 0.859875 8.21442 2.33148 5.35068 4.9016C4.70359 5.79285 5.63981 6.98119 6.26625 7.65136C6.85139 8.23862 8.16623 9.25423 9.00607 8.56333C13.7698 4.12089 21.5969 3.91362 26.8011 7.69281C29.1761 11.2371 27.5102 16.3497 26.629 20.2325C22.9461 28.7927 12.393 35.7845 4.33186 39.9437C6.68617 31.4043 9.27455 22.7266 13.46 14.8366C14.9814 14.9748 14.9194 13.7243 14.1966 12.4807C13.2191 10.788 11.0231 9.09532 9.94918 10.8778C6.28002 17.1442 4.20106 24.219 1.95688 31.0865C0.676466 35.5151 -2.54523 42.7487 3.82244 44.5658C11.1263 44.5174 23.7584 33.3111 28.35 27.6527C36.0394 14.6916 32.1293 1.64058 15.7455 0.928964Z"
                        fill="black"
                      />
                      <path
                        d="M42.554 2.4493C40.4131 4.83288 39.6559 8.29426 38.4994 11.2513C38.3479 12.4189 39.3736 13.4829 40.2341 14.1461C40.599 14.4018 41.2117 14.7472 41.7348 14.7472C42.0859 14.7472 42.3888 14.5952 42.5471 14.153C43.3663 11.6727 44.2681 9.20623 45.5486 6.91938C47.7514 5.68268 44.4058 1.77913 42.554 2.45621V2.4493Z"
                        fill="black"
                      />
                      <path
                        d="M37.354 16.578C35.6399 19.9496 34.6211 23.6666 33.4852 27.273C32.7693 31.2595 28.2328 41.5607 34.3664 42.597H34.3733C34.7312 42.597 35.1443 42.4036 35.1856 41.996C35.5573 36.8212 36.9823 31.826 38.5312 26.9C39.2815 24.7858 40.025 22.1121 41.1471 20.067C41.7047 19.7216 41.4156 18.706 41.0989 18.1671C40.4449 17.0824 38.5036 15.1962 37.354 16.578Z"
                        fill="black"
                      />
                      <path
                        d="M83.3837 19.1757C83.1979 17.6073 81.5526 15.8386 79.9005 15.9354C77.6769 16.2048 75.4465 16.4535 73.223 16.7092C75.4328 12.4602 78.2208 8.59809 82.0207 5.44071C82.0345 5.98651 82.0207 6.53923 81.9932 7.09194C81.9312 7.68611 81.8693 8.26646 81.7385 8.85372C80.9606 10.4566 83.0946 12.4464 84.6091 12.7296C86.1442 12.9645 85.8964 10.6017 86.0685 9.59988C86.9083 2.37314 81.1258 -2.77401 75.8045 4.07965C74.9715 4.92254 74.2143 5.81379 73.4984 6.72577C72.2868 0.735723 68.0187 -3.25764 62.1742 3.61675C58.0438 8.15592 55.4555 13.6278 53.3559 19.3208C50.6918 19.7007 48.0208 20.0255 45.336 20.1844C42.9955 20.7233 46.107 24.2883 47.6422 24.2883C47.6766 24.2883 47.711 24.2883 47.7454 24.2883C49.0878 24.1915 50.4233 24.0672 51.7657 23.929C50.8639 26.6442 50.0103 29.3732 49.0947 32.0332C47.2567 37.0767 45.1089 42.5693 43.9042 47.9237C43.7871 49.1052 44.7578 50.1553 45.6389 50.8255C46.2309 51.2538 46.6853 51.4404 47.0364 51.4404C48.3856 51.4404 48.248 48.7735 48.8606 47.3572C50.9602 40.2548 53.8859 33.4288 55.9787 26.3195C56.3297 25.3246 56.6877 24.309 57.0594 23.2865C59.9576 22.8927 62.8557 22.4574 65.7539 22.0429C64.3014 26.2919 63.0967 30.6514 61.7337 34.8658C60.0677 39.3083 58.45 43.7715 57.0319 48.3037C56.612 49.9342 58.4638 51.62 59.9163 51.9793C59.9989 51.9931 60.0815 52 60.1572 52C61.3895 52 61.2724 50.0448 61.7405 49.1466C65.4235 40.469 67.3854 30.3405 71.1027 21.3243C72.156 21.2 73.2161 21.0756 74.2762 20.972C75.7563 20.4676 83.6522 20.7509 83.4044 19.1757H83.3837ZM67.4749 17.3793C66.0912 17.5452 64.7075 17.7248 63.3307 17.9113C61.8507 18.0841 60.3706 18.2913 58.8975 18.5055C61.2449 12.9507 64.3289 7.68611 69.3542 4.356C69.4231 4.74981 69.4781 5.13671 69.5332 5.53052C69.6915 7.40284 69.7535 9.25444 69.6709 11.1337C69.5263 11.5689 69.5676 12.0456 69.7397 12.5155C68.8999 14.0907 68.1564 15.7212 67.4749 17.3862V17.3793Z"
                        fill="black"
                      />
                      <path
                        d="M97.2376 28.5236C99.5024 26.1745 102.036 23.0863 101.506 19.5972C100.748 16.5919 97.4578 13.8697 94.2912 14.6988C85.5486 18.5954 75.1125 39.1979 88.3572 43.592C88.9561 43.7509 89.5413 43.8269 90.1264 43.8269C93.1898 43.8269 95.9778 41.7956 98.4422 40.0615C99.3303 39.419 98.5042 38.1132 97.9879 37.4983C97.3133 36.759 96.1981 35.7503 95.1379 36.1441C92.584 37.7746 89.6721 40.4691 86.4366 39.5019C85.6312 37.2703 86.4022 34.8107 87.0011 32.6068C90.3329 35.9369 94.6354 30.5755 97.2444 28.5167L97.2376 28.5236ZM88.9492 27.9571C91.0764 24.399 93.4858 20.302 97.4716 18.6784C96.2325 23.2244 92.2191 26.4509 88.4467 28.9519C88.6051 28.6203 88.7772 28.2887 88.9561 27.964L88.9492 27.9571Z"
                        fill="black"
                      />
                      <path
                        d="M110.507 24.5025C111.223 22.4436 111.835 20.212 113.205 18.4641C114.878 18.5608 114.733 17.4485 113.942 16.3292C113.123 15.1685 111.608 14.0078 110.713 14.222C106.686 15.5692 104.552 29.5875 103.347 33.7743C102.735 37.0353 100.697 41.7956 105.206 43.053C105.275 43.0668 105.337 43.0668 105.399 43.0668C106.796 43.0668 106.865 40.4276 107.567 39.4396C110.279 34.0714 112.923 26.4854 119.284 24.8203C120.42 24.5992 119.662 23.0378 119.284 22.4989C116.909 18.8303 112.462 21.96 110.493 24.4956L110.507 24.5025Z"
                        fill="black"
                      />
                      <path
                        d="M138.092 33.4218C137.005 32.8069 134.671 34.6102 132.151 36.4134C129.797 38.1061 127.284 39.7919 125.488 39.5017C125.488 39.4948 125.474 39.481 125.467 39.474C124.552 37.4566 124.696 35.1214 124.965 32.9727C126.355 34.6585 128.069 33.9469 129.577 32.8898C131.787 31.5702 133.976 30.147 135.924 28.4543C141.61 24.8409 139.717 13.8695 132.516 14.0284C122.163 17.0407 114.859 37.9679 126.679 43.3638C127.195 43.4812 127.704 43.5296 128.207 43.5296C132.654 43.5296 136.385 39.3359 140.082 37.201C141.3 35.9298 139.242 33.9883 138.085 33.4218H138.092ZM135.105 18.1323C136.289 23.7769 129.625 26.6718 125.784 29.2695C127.512 24.7995 130.451 19.8941 135.105 18.1323Z"
                        fill="black"
                      />
                      <path
                        d="M160.413 17.3311C156.813 19.9842 153.391 22.9343 150.665 26.5131C151.216 24.247 151.822 21.9878 152.517 19.7631C152.517 19.7493 152.524 19.7354 152.531 19.7216C153.736 18.5471 151.973 16.4192 150.824 15.8043C150.342 15.521 149.254 15.065 148.903 15.8043C147.919 18.0635 147.451 20.5507 146.804 22.9274C145.86 26.6513 145.041 30.4097 144.236 34.1682C143.933 36.7521 142.033 40.0961 144.663 42.0168C146.046 43.2673 147.272 43.1567 147.946 41.319C151.278 34.5966 154.892 28.0054 161.033 23.3557C160.75 27.736 156.372 41.3604 161.012 43.3778C161.301 43.592 161.762 43.7578 162.169 43.7578C162.644 43.7578 163.043 43.5367 163.029 42.9287C162.933 40.027 163.277 37.5052 163.683 34.5206C163.896 29.4356 167.469 22.9205 163.91 18.4987C163.063 17.6213 161.652 16.6886 160.427 17.3242L160.413 17.3311Z"
                        fill="black"
                      />
                      <path
                        d="M186.791 30.4576C186.233 29.9878 185.042 29.2279 184.492 30.0431C182.612 35.1143 176.665 40.3927 171.171 40.6345C167.529 35.5081 177.401 19.0648 183.314 18.2288C183.383 19.8248 182.936 21.3586 182.578 22.8924C182.709 24.3225 184.574 26.3468 186.061 25.6283C188.491 20.8335 186.061 12.9297 179.618 14.8366C174.193 17.151 171.185 23.0029 168.624 28.0257C165.808 33.3525 165.595 41.5188 172.114 44.0682C172.548 44.3101 173.071 44.4137 173.67 44.4137C179.397 44.4137 191.61 34.3266 186.798 30.4576H186.791Z"
                        fill="black"
                      />
                      <path
                        d="M201.121 31.3837C204.908 29.0623 209.251 25.974 209.995 21.2759C210.201 17.3585 205.892 14.1252 202.175 14.7815C191.924 16.9371 185.075 39.0526 197.762 42.2791C198.12 42.3274 198.478 42.3481 198.836 42.3481C202.285 42.3481 205.458 40.2893 208.074 38.1821C208.728 37.2908 207.785 36.0956 207.159 35.4323C206.574 34.845 205.266 33.8294 204.419 34.5134C201.927 36.4548 198.767 38.6933 195.456 38.1406C194.609 36.0472 195.098 33.6843 195.456 31.5288C197.087 33.7603 199.256 32.5927 201.115 31.3837H201.121ZM205.906 18.8025C204.708 23.3279 200.24 26.0569 196.433 28.2677C196.406 28.2677 196.372 28.2539 196.344 28.2539C197.989 24.1224 201.011 19.072 205.906 18.8094V18.8025Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1561_2525">
                        <rect width="211" height="52" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Title>
              </section>
              {/* -- end:section 6 -- */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export { Page };
