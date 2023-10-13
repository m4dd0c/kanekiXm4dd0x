import { onWheel, projectData } from "../../assets/api/api";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { ArrowBtn } from "../Projects/ArrowBtn";
import ProjectCard from "./ProjectCard";
import { SetPreventScrollInterface } from "../../vite-env";
import MotionWrapper from "../FramerMotion/MotionWrapper";
import {motion} from 'framer-motion'
import { hoverTitle } from "../FramerMotion/variants";

const Projects = ({ setPreventScroll }: SetPreventScrollInterface) => {
  // Prevent scrolling when over horizontal-scroll
  const handleHorizontalScrollEnter = () => setPreventScroll(true);
  // Resume body scrolling
  const handleHorizontalScrollLeave = () => setPreventScroll(false);

  return (
    <div className="gradient h-screen flex pt-10 justify-center items-center lg:flex-row flex-col overflow-hidden my-snap">
      <div className="lg:h-full h-1/2 lg:w-1/2 w-screen flex justify-center items-center flex-col">
        <MotionWrapper>
          <motion.h1 whileHover={hoverTitle} className="py-10 text-5xl tracking-wider text-center  underline underline-offset-2">
            Projects
          </motion.h1>
        </MotionWrapper>
        <MotionWrapper>
          <div
            className="lg:w-[550px] lg:h-full h-[650px] w-screen mx-auto py-5"
            onMouseEnter={handleHorizontalScrollEnter}
            onMouseLeave={handleHorizontalScrollLeave}
          >
            <ScrollMenu
              scrollContainerClassName="hide-scroll"
              LeftArrow={<ArrowBtn dir="left" />}
              RightArrow={<ArrowBtn dir="right" />}
              onWheel={onWheel}
            >
              {projectData.map((data) => (
                <ProjectCard
                  itemId={data.id} // NOTE: itemId is required for track items
                  data={data}
                  key={data.id}
                />
              ))}
            </ScrollMenu>
          </div>
        </MotionWrapper>
      </div>
      <motion.div whileHover={{scale:.95, x:40}}  className="bg-rize lg:h-screen h-1/2 lg:w-1/2 w-screen bg-contain bg-right-bottom bg-no-repeat"></motion.div>
    </div>
  );
};

export default Projects;
