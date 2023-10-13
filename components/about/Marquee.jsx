import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const contents = [
  { alt: "EY" },
  { alt: "IBM" },
  { alt: "Cheiil" },
  { alt: "CONCENTRIX CATALYST" },
  { alt: "HYUNDAI AutoEver" },
  { alt: "HYUNDAI MOBIS " },
  { alt: "LG" },
  { alt: "SAMSUNG" },
  { alt: "HYUNDAI" },
  { alt: "GENESIS" },
  { alt: "KN" },
];

export default function Marquee() {
  const marquee = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const parentSelector = marquee.current;
      const clone = parentSelector.innerHTML;
      parentSelector.insertAdjacentHTML("beforeend", clone);
      parentSelector.insertAdjacentHTML("beforeend", clone);

      const firstElement = parentSelector.children[0];
      const distanceX = firstElement.clientWidth;

      gsap.fromTo(
        firstElement,
        { marginLeft: 0 },
        {
          marginLeft: -distanceX,
          duration: 20,
          ease: "none",
          repeat: -1,
        },
      );
    }, marquee);
    return () => ctx.revert();
  }, []);

  return (
    <article className="flex overflow-hidden h-52" ref={marquee}>
      <div className="marquee_wrap flex flex-nowrap gap-6 mr-6">
        {contents.map((con, index) => (
          <span key={index} className={`partner_${index + 1} w-[240px] h-[100px] overflow-hidden border`}>
            <img src={`/images/partner${index + 1}.webp`} alt={con.alt} />
          </span>
        ))}
      </div>
    </article>
  );
}
