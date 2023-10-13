import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

export default function useMouseUpdatePosition() {
  // const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = event => {
      const target = document.querySelector(".cursor-dot");
      const { clientX, clientY } = event;

      // setMousePosition({ x: clientX, y: clientY });

      gsap.to(target, {
        x: clientX,
        y: clientY,
        duration: 1,
        ease: "circ.out",
      });

      const pageScrollBarWidth = 20;
      const isX = window.innerWidth - pageScrollBarWidth <= clientX || 0 >= clientX;
      const isY = window.innerHeight <= clientY || 0 >= clientY;
      const action = isX || isY ? "add" : "remove";
      target.classList[action]("hidden");
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  // return mousePosition;
}
