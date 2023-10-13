// prop type
import PropTypes from "prop-types";

// node module
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// component
import { Text } from "#root/components/Text";
import MainTitle from "#root/components/main/MainTitle";
import SvgLine from "#root/components/SvgLine";
import Video from "../Video";

// style
// import styles from "./Video.module.css";

gsap.registerPlugin(ScrollTrigger);

const arrange = {
  target: {
    start: "top",
    end: "bottom",
  },
  viewport: {
    start: "top",
    end: "top",
  },
};
const clipMap = {
  bigger: ["inset(40%)", "inset(0%)"],
  smaller: ["inset(0%)", "inset(40%)"],
};

export default function MotionBox({ id, src }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // create timeline instance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: `${arrange.target.start} ${arrange.viewport.start}`,
          end: `${arrange.target.end} ${arrange.viewport.end}`,
          pin: true,
          anticipatePin: 1,
          scrub: true,
          // markers: true,
        },
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
              duration: 14,
              ease: "none", // == linear
            },
          ],
        },
        {
          id: 1,
          animate: "fromTo",
          params: [".motion-contents", { y: "50vh" }, { y: "0vh", duration: 5 }, "<+15"],
        },
        {
          id: 2,
          animate: "to",
          params: [".motion-video", { opacity: 0, duration: 10, display: "none" }],
        },
      ];

      // run
      stream.forEach((set, index) => {
        if (index !== set.id) return;
        if (null == set.condition) return tl[set.animate](...set.params);
        if (set.condition) tl[set.animate](...set.params);
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [id]);

  return (
    <section ref={containerRef} className="h-screen flex flex-col items-center justify-center bg-slate-200 mb-10">
      {/* text */}
      <div className="motion-contents | absolute w-full">
        <Text className="hidden desktop:block desktop:text-heading-6 text-center">
          {"LG Global Pilot Website"}
          {"Platform Building"}
        </Text>
        <MainTitle conLeft="make" conRight="work" change="moment">
          <SvgLine id="sThej" />
        </MainTitle>
        <Text tagName="p" className="basic_p_2 | absolute flex justify-between w-full top-[100%]">
          {"Our latest"}
          {"SCROLL"}
        </Text>
      </div>

      {/* video */}
      <div className="motion-video | relative w-full h-full bg-orange-400">
        <Video src={src} />
      </div>
    </section>
  );
}

MotionBox.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
};
