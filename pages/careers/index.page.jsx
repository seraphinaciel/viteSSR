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

function ContentsSummary({
  title = "UX UI Planner",
  description = "Various ideas, Strategic Plan",
  paragraph = "비즈니스 분석은 정확하고 Precise하게 아이디어 발산은 다양하고 Flexible하게 프로젝트 진행에 합리적인 일정관리와 기획 설계를 진행합니다.",
}) {
  return (
    <div className={CM("card flex flex-col gap-y-25 md:gap-y-30")}>
      <Title className="text-heading-10 md:text-heading-8" tagName="strong">
        {title}
      </Title>
      <Text className="text-46 leading-54 md:text-heading-4">{description}</Text>
      <Text className="mt-5 md:mt-20 md:text-body-5-kr" tagName="p">
        {paragraph}
      </Text>
    </div>
  );
}

ContentsSummary.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  paragraph: PropTypes.string,
};

function Image({ url, classes = { container: "aspect-[320/255]", image: null }, meta = { alt: "" } }) {
  return (
    <div className={CM(classes.container)}>
      <img className={CM(classes.image)} src={url} alt={meta.alt} />
    </div>
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
        const { matches } = context.conditions;
        console.log("desktop", matches);

        const images = gsap.utils.toArray("img");
        if (0 === images.length) return;

        images.map((image, index) => {
          if (5 < index) return;

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
                  markers: {
                    startColor: "steelblue",
                    endColor: "steelblue",
                    fontSize: "20px",
                    indent: 10,
                  },
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
        <div className="scroll-spread | h-[90vh]"></div>

        <div ref={wrap} className="scroll-wrap | ">
          <div className={CM(styles.container, "scroll-container | flex flex-nowrap col-gap-170")}>
            <section className="grid gap-[--grid-col-gap] grid-cols-12 min-w-full">
              <div className="col-span-6">
                <Image url="https://media.monks.com/data/styles/1172x664/s3/2023-01/Careers-culture-media.monks_.JPG?VersionId=XdwfvcaQjk9TOXSNaj.qIptRT7QWPdHF&h=9eb0d413&itok=5LR_uxW5" />
              </div>
              <div className="col-span-5 col-start-8">
                <Image url="https://media.monks.com/data/styles/1920x1080/s3/2023-01/salesforceexperiencecloudimplementation-builtin-crm-media.monks-4.png?VersionId=agAf0KPVJsOgUgjEqnoSDkuyO3ckarMi&h=70533de6&itok=jm_RDmZF" />
                <ContentsSummary />
              </div>
            </section>
            {/* -- end:section 1 -- */}

            <section className="grid gap-[--grid-col-gap] grid-cols-12 min-w-full">
              <div className="col-span-5 flex flex-col-reverse flex-start justify-between">
                <Image url="https://ortizleon.com/wp-content/uploads/2022/12/EF_01_21009_Atardecer_03-1.jpg" />
                <div>
                  <Image url="https://media.monks.com/data/styles/1100xauto/s3/2023-01/salesforceexperiencecloudimplementation-builtin-crm-media.monks-8.png?VersionId=d3K2kHKqgCSryMKcQoQiXimMFp77yDiO&itok=ERVLR3kq" />
                  <ContentsSummary />
                </div>
              </div>
              <div className="col-span-5 col-start-8 flex flex-col flex-start justify-between">
                <Image url="https://media.monks.com/data/styles/2055x1155_crop/s3/2023-01/salesforceexperiencecloudimplementation-builtin-crm-media.monks-9.png?VersionId=BffGF6lsnjsR7rZAxvcqJ5HIoqqnPbpS&h=60731b13&itok=TDbleFdt" />
                <div>
                  <Image url="https://ortizleon.com/wp-content/uploads/2022/12/EF_01_21009_Atardecer_03-1.jpg" />
                  <ContentsSummary />
                </div>
              </div>
            </section>
            {/* -- end:section 2 -- */}

            <section className="grid gap-[--grid-col-gap] grid-cols-12 min-w-full border-r-1 border-red-600 ">
              <div className="col-span-12 aspect-[320/255]">
                <Image url="https://ortizleon.com/wp-content/uploads/2022/12/EF_01_21009_Atardecer_03-1.jpg" />
              </div>
            </section>
            {/* -- end:section 3 -- */}

            <section className="min-w-full">
              <Title tagName="h1">
                The different <br />
                ones making
                <br />
                the real difference
              </Title>
            </section>
            {/* -- end:section 4 -- */}
          </div>
        </div>

        <Image url="https://ortizleon.com/wp-content/uploads/2022/12/EF_01_21009_Atardecer_03-1.jpg" />
        <Image url="https://ortizleon.com/wp-content/uploads/2022/12/EF_01_21009_Atardecer_03-1.jpg" />
      </div>
    </div>
  );
}

export { Page };
