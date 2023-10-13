import { useEffect, useState } from "react";

const useCheckMobile = () => {
  const [mainWidth, setMainWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const main = document.querySelector("main");
      if (main) {
        setMainWidth(main.clientWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mainWidth;
};
export default useCheckMobile;
