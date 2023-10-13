import { gsap } from "gsap/dist/gsap";

export function animateSvg(selector, duration) {
  const paths = document.querySelectorAll(selector);

  let tl = gsap.timeline();

  paths.forEach(p => {
    const pathLength = p.getTotalLength();

    tl.from(p, { duration: 0.000001, opacity: 0 }, ">")
      .set(p, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      })
      .to(
        p,
        {
          duration: duration,
          opacity: 1,
          ease: "power3.out",
          strokeDashoffset: 0,
        },
        ">",
      );
  });
}
