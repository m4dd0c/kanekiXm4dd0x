import { HeroPropType } from "../../../vite-env";
import MotionWrapper from "../../FramerMotion/MotionWrapper";
import { motion, useAnimation, useInView } from "framer-motion";
import { bgVariant } from "../../FramerMotion/variants";
import { useRef, useEffect } from "react";

const HeroChild = ({
  text,
  itemId,
  inlinePos,
  setPreventScroll,
}: HeroPropType) => {
  const handleScroll = () => {
    if (itemId === 2) {
      setTimeout(() => {
        setPreventScroll(false);
      }, 1000);
    } else {
      setPreventScroll(true);
    }
  };

  const bgRef = useRef(null);
  const isInView = useInView(bgRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start(bgVariant.visible);
    else controls.start(bgVariant.hidden);
  }, [isInView]);
  const isMobile = window.innerWidth < 768;

  return (
    <div
      onMouseOver={handleScroll}
      className={`my-snap gradient w-screen h-screen overflow-hidden flex justify-between items-center ${
        inlinePos === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex-col`}
    >
      <div className="w-screen lg:w-1/2">
        {isMobile ? (
          <h1 className={`big-title text-center lg:mt-0 mt-10`}>
            <span
              className={`${
                inlinePos === "right" ? "text-red-600" : "text-black"
              }`}
            >
              {text[0]}
            </span>{" "}
            <br />{" "}
            <span
              className={`${
                inlinePos === "left" ? "text-red-600" : "text-black"
              }`}
            >
              {text[1]}
            </span>
          </h1>
        ) : (
          <MotionWrapper>
            <h1 className={`big-title text-center lg:mt-0 mt-10`}>
              <span
                className={`${
                  inlinePos === "right" ? "text-red-600" : "text-black"
                }`}
              >
                {text[0]}
              </span>{" "}
              <br />{" "}
              <span
                className={`${
                  inlinePos === "left" ? "text-red-600" : "text-black"
                }`}
              >
                {text[1]}
              </span>
            </h1>
          </MotionWrapper>
        )}
      </div>

      <motion.div
        ref={bgRef}
        initial={bgVariant.hidden}
        animate={controls}
        whileHover={{ scale: 1.1 }}
        className="bg-hero lg:h-screen h-1/2 lg:w-1/2 w-screen bg-contain bg-bottom bg-no-repeat"
      ></motion.div>
    </div>
  );
};

export default HeroChild;
