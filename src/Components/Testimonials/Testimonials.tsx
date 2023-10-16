import TestimonialCard from "./TestimonialCard";
import { onWheel, testimonialsData } from "../../assets/api/api";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { ArrowBtn } from "../Projects/ArrowBtn";
import { SetPreventScrollInterface } from "../../vite-env";
import MotionWrapper from "../FramerMotion/MotionWrapper";
import { bgVariant, hoverTitle } from "../FramerMotion/variants";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import MagnaticWrapper from "../FramerMotion/MagnaticWrapper";
const Testimonials = ({ setPreventScroll }: SetPreventScrollInterface) => {
  // Prevent scrolling when over horizontal-scroll
  const handleHorizontalScrollEnter = () => setPreventScroll(true);
  // Resume body scrolling
  const handleHorizontalScrollLeave = () => setPreventScroll(false);

  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  useEffect(() => {
    if (isInView)
      controls.start({ ...bgVariant.visible, transition: { delay: .5} });
  }, [isInView]);

  return (
    <div
      id="Testimonials"
      className="gradient h-screen flex pt-10 justify-center items-center lg:flex-row flex-col overflow-hidden my-snap"
    >
      <div className="lg:h-full h-1/2 lg:w-1/2 w-screen flex justify-center items-center flex-col">
        <MagnaticWrapper>
          <motion.h1
            whileHover={hoverTitle}
            className="py-10 text-5xl tracking-wide text-center  underline underline-offset-2"
          >
            Testimonials
          </motion.h1>
        </MagnaticWrapper>
        <MotionWrapper>
          <div
            className="lg:w-[570px] w-screen mx-auto py-5"
            onMouseEnter={handleHorizontalScrollEnter}
            onMouseLeave={handleHorizontalScrollLeave}
          >
            <ScrollMenu
              scrollContainerClassName="hide-scroll"
              LeftArrow={<ArrowBtn dir="left" />}
              RightArrow={<ArrowBtn dir="right" />}
              onWheel={onWheel}
            >
              {testimonialsData.map((data) => (
                <TestimonialCard
                  key={data.name}
                  desc={data.desc}
                  dp={data.dp}
                  name={data.name}
                  post={data.post}
                />
              ))}
            </ScrollMenu>
          </div>
        </MotionWrapper>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial={bgVariant.hidden}
        whileHover={{ scale: 0.95, x: 40 }}
        className="bg-testimonial lg:h-screen h-1/2 lg:w-1/2 w-screen bg-contain bg-right-bottom bg-no-repeat"
      ></motion.div>
    </div>
  );
};

export default Testimonials;
