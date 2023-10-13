// prop type
import PropTypes from "prop-types";

// node module
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// component
import Video from "../Video";
import SvgLine from "../SvgLine";
import { animateSvg } from "#root/utils/animateSvg";
import { Text } from "#root/components/Text";

// utils
import useCssTheme from "#root/hooks/useCssTheme";

const clipMap = {
  smaller: ["inset(0%)", "inset(40%)"],
};

export default function VisualBox({ id, src, children, conLeft, conRight, change }) {
  const { md } = useCssTheme(state => state.screens);
  const containerRef = useRef(null);
  const centerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      `(min-width:${md})`,
      () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            anticipatePin: 1,
            scrub: true,
            start: "top top",
          },
          onComplete: () => animateSvg(".Thej path", 0.2),
        });

        const [clipStart, clipEnd] = clipMap[id];

        const stream = [
          // 순서 변경 x
          {
            id: 0,
            animate: "fromTo",
            params: [
              ".motion-video",
              { webkitClipPath: clipStart, clipPath: clipStart },
              {
                webkitClipPath: clipEnd,
                clipPath: clipEnd,
                duration: 200,
                ease: "none", // == linear
              },
            ],
          },

          {
            id: 1,
            animate: "fromTo",
            params: [".motion-contents", { y: "0vh" }, { y: "-100%", duration: 200 }, "<+100"],
          },
          {
            id: 2,
            animate: "to",
            params: [".motion-video", { opacity: 0, duration: 1 }],
          },
          {
            id: 3,
            animate: "fromTo",
            params: [
              ".conRight span:first-of-type",
              {
                transform: "perspective(500px) rotateY(0deg)",
                display: "block",
              },
              {
                transform: "perspective(500px) rotateY(90deg)",
                display: "none",
                duration: 200,
              },
              ">",
            ],
          },
          {
            id: 4,
            animate: "to",
            params: [".conLeft span", { duration: 100, x: -20, margin: 0 }, ">"],
          },
          {
            id: 5,
            animate: "fromTo",
            params: [
              ".conRight span:last-of-type",
              {
                transform: "perspective(500px) rotateY(-90deg)",
                display: "none",
              },
              { transform: "perspective(500px) rotateY(0deg)", display: "block", duration: 200 },
              "<",
            ],
          },
          {
            id: 6,
            animate: "from",
            params: [".Thej", { duration: 0.0000001, opacity: 0 }, ">-=10"],
          },
        ];

        // run
        stream.forEach((set, index) => {
          if (index !== set.id) return;
          if (null == set.condition) return tl[set.animate](...set.params);
          if (set.condition) tl[set.animate](...set.params);
        });
      },
      containerRef,
    );

    return () => mm.revert();
  }, [id, md]);

  return (
    <div ref={containerRef}>
      {/* video */}
      <div className="motion-video">
        <Video src={src} />
      </div>

      <article className="motion-contents ">
        {/* text */}
        {children}

        {/* title */}
        <h1>
          <p className="conLeft">
            <Text tagName="span">{conLeft}</Text>
            <SvgLine shape="typo/thej" className="Thej" ref={centerRef} />
          </p>
          <Text tagName="p" className="conRight relative">
            {conRight}
            {change}
          </Text>
        </h1>
      </article>
    </div>
  );
}

VisualBox.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
  conLeft: PropTypes.string,
  conRight: PropTypes.string,
  change: PropTypes.string,
};
