import { footerData } from "../../../assets/api/api";
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import MotionWrapper from "../../FramerMotion/MotionWrapper";
import { motion, useAnimation, useInView } from "framer-motion";
import { bgVariant, btnAnim } from "../../FramerMotion/variants";
import MagnaticWrapper from "../../FramerMotion/MagnaticWrapper";
import { useEffect, useRef } from "react";
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  useEffect(() => {
    if (isInView)
      controls.start({ ...bgVariant.visible, transition: { delay: 0.5 } });
  }, [isInView]);

  return (
    <div className="gradient text-red-600 my-snap">
      <div className="flex justify-evenly items-center">
        <div className="h-1/2 text-red-600">
          <div className="box">
            <MotionWrapper>
              <h1 className="text-5xl text-center py-10 underline underline-offset-4">
                Thanks For Visiting
              </h1>
            </MotionWrapper>
          </div>
          <div className="flex py-5 justify-evenly items-center ">
            <MotionWrapper dir="x" reverse={true} hold={1}>
              <div className="b2">
                <div className="box">
                  <h1 className="text-xl">Follow me</h1>
                  <ul className="text-black flex gap-4 py-4">
                    {footerData.map((i) => (
                      <MagnaticWrapper key={i.link}>
                        <motion.a
                          whileHover={{
                            scale: 1.2,
                            transition: { type: "spring", stiffness: 200 },
                          }}
                          whileTap={{
                            scale: 0.95,
                            transition: { type: "spring", stiffness: 200 },
                          }}
                          href={i.link}
                          className="hover:text-red-600"
                          target="_blank"
                        >
                          {i.name === "linkedin" && <SiLinkedin size={20} />}
                          {i.name === "instagram" && <SiInstagram size={20} />}
                          {i.name === "github" && <SiGithub size={20} />}
                          {i.name === "youtube" && <SiYoutube size={20} />}
                        </motion.a>
                      </MagnaticWrapper>
                    ))}
                  </ul>
                </div>
                <div className="box my-2">
                  <MagnaticWrapper>
                    <motion.button
                      whileHover={btnAnim.hover}
                      whileTap={btnAnim.tap}
                      className="bg-red-600 px-2 py-1 text-center text-white hover:bg-black hover:text-white"
                    >
                      Download Resume
                    </motion.button>
                  </MagnaticWrapper>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial={bgVariant.hidden}
          whileHover={{ x: 120 }}
          className="lg:h-[50vh] lg:w-[40vw] h-1 bg-haise bg-no-repeat bg-right-bottom bg-contain"
        ></motion.div>
      </div>
      <div className="box py-2 border-t-2 text-center border-slate-50">
        Copyright © 2023
      </div>
    </div>
  );
};

export default Footer;
