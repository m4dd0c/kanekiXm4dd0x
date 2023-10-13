import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const MotionWrapper = ({
  children,
  dir = "y",
  reverse = false,
  hold = 0.7, //delay for seconds
}: {
  children: JSX.Element;
  dir?: "x" | "y";
  reverse?: boolean;
  hold?: number;
}) => {
  const ref = useRef(null);
  const isInView: boolean = useInView(ref, {amount:'all'});
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        transition: { duration: 1, type: "spring", delay: hold , stiffness: 120},
        [dir]: 0,
        opacity: 1,
      });
    }else{
      controls.stop();
    }
  }, [isInView]);

  return (
    <motion.div ref={ref} initial={{ [dir]: reverse ? "10vw" : "-10vw", opacity: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
