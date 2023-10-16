import { useEffect, useState, useRef } from "react";
import { iconData } from "../../assets/api/api";
import { IconContainer } from "./IconContainer";
import { useInView } from "framer-motion";
import { btnAnim, hoverTitle } from "../FramerMotion/variants";
import { motion } from "framer-motion";
import MagnaticWrapper from "../FramerMotion/MagnaticWrapper";
export const Skills = () => {
  const [cPos, setCPos] = useState({ left: 0, top: 0 });
  const [showOverlay, setShowOverlay] = useState<boolean>(true);

  const trackPosition = (e: MouseEvent) => {
    setCPos({
      left: e.clientX,
      top: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", trackPosition);
    return () => window.removeEventListener("mousemove", trackPosition);
  }, []);

  // Calculate the percentage position relative to the window size
  const leftPercentage = (cPos.left / window.innerWidth) * 100;
  const topPercentage = (cPos.top / window.innerHeight) * 100;

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50%" });

  return (
    <div id="Skills" className="my-snap">
      <div
        className="pt-10 lg:pt-0 min-h-screen bg-black flex justify-between items-center lg:flex-row flex-col snap-start relative"
        ref={ref}
      >
        <button
          className="p-2 bg-yellow-300 lg:inline-block hidden"
          onClick={() => setShowOverlay(!showOverlay)}
        >
          Lights {showOverlay ? "on" : "off"}
        </button>
        <div className="lg:w-1/2 w-5/6">
          <motion.h1
            whileHover={{ ...hoverTitle, originX: 0 }}
            className="lg:w-5/6 w-full mx-auto tracking-wider text-white text-5xl underline underline-offset-2 my-5"
          >
            About Me
          </motion.h1>
          <div className="lg:w-5/6 w-full mx-auto tracking-wider">
            <h1 className="text-5xl text-red-600 mb-2">
              Hey We met again, <br />
              You Remember I'm <span className="text-red-300">Ken Kaneki</span>
              ,, <br /> Just Kidding XD
            </h1>
            <h1 className="text-red-400 text-lg">Alias: Code Ghoul</h1>
            <h1 className="text-red-300 text-lg my-2">
              Kagune: Full-stack Sorcery
            </h1>
            <h1 className="text-red-200 text-lg mb-4">
              Unveiling the Code Abyss:
              <br />
              In the vast digital realm, I am{" "}
              <span className="text-red-600 text-3xl">Manish Suthar</span>, the
              enigmatic Code Ghoul. Just as Ken Kaneki embraced his ghoul side,
              I wield code like a sorcerer to conjure mesmerizing web & app
              experiences. Join me in this digital Tokyo, where innovation meets
              artistry, and let's craft digital spells together.
            </h1>
            <motion.button
              whileHover={btnAnim.hover}
              whileTap={btnAnim.tap}
              className="bg-red-600 px-2 py-1 text-center lg:w-1/4 mr-2 text-white hover:bg-white hover:text-black"
            >
              Hire me
            </motion.button>
            <motion.button
              whileHover={btnAnim.hover}
              whileTap={btnAnim.tap}
              className="bg-black px-2 py-1 text-center lg:w-1/4 text-white hover:bg-red-600 border border-red-600"
            >
              Download Resume
            </motion.button>
          </div>
        </div>
        <div className="lg:h-screen lg:w-1/2 my-10 w-screen bg-bloodImg bg-center lg:bg-cover bg-contain bg-no-repeat flex justify-center items-center flex-col">
          <MagnaticWrapper>
            <motion.h1
              whileHover={hoverTitle}
              className="text-white text-5xl underline-offset-2 underline my-5"
            >
              Skills
            </motion.h1>
          </MagnaticWrapper>
          <div className="flex flex-wrap w-1/2">
            {iconData.map((i) => (
              <IconContainer skill={i} key={i} />
            ))}
          </div>
        </div>
      </div>
      {isInView && showOverlay && (
        <div
          id="light"
          className="h-screen w-full fixed top-0 left-0 pointer-events-none hidden lg:block"
          style={{
            background: `radial-gradient(circle at ${leftPercentage}% ${topPercentage}%, transparent 5%, rgba(0,0,0,0.95) 15%)`,
          }}
        ></div>
      )}
    </div>
  );
};

export default Skills;
