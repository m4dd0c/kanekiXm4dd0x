import { MouseEventHandler } from "react";
import MotionWrapper from "../FramerMotion/MotionWrapper";
import { motion } from "framer-motion";
import { btnAnim, hoverTitle } from "../FramerMotion/variants";

const Contact = () => {
  const submitHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen gradient flex justify-center items-center lg:flex-row flex-col my-snap overflow-hidden">
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 300 },
        }}
        className="bg-kaneki bg-left-top h-[30vh] lg:h-screen lg:w-1/2 w-screen bg-contain bg-no-repeat"
      ></motion.div>
      <div className="pt-10 mx-auto lg:w-1/3 h-1/2 lg:h-screen">
        <motion.h1
          whileHover={hoverTitle}
          className="text-center text-5xl mt-10  underline underline-offset-2"
        >
          Connect w/ me
        </motion.h1>
        <MotionWrapper reverse={true}>
          <form method="post" className="py-10 px-2">
            <div className="w-[46%] inline-block mr-2">
              <label htmlFor="name">First Name</label>
              <br />
              <input type="text" name="name" id="name" required />
            </div>
            <div className="w-[46%] inline-block mx-2">
              <label htmlFor="name">Last Name</label>
              <br />
              <input type="text" name="name" id="name" required />
            </div>
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" id="email" required />
            <br />
            <br />
            <label htmlFor="feedback">Feedback or Message</label>
            <br />
            <textarea name="feedback" id="feedback" rows={5} required />
            <br />
            <motion.button
              whileHover={btnAnim.hover}
              whileTap={btnAnim.tap}
              onClick={submitHandler}
              type="submit"
              className="bg-red-600 px-2 py-1 text-center w-1/3 text-white hover:bg-black hover:text-white"
            >
              Send Message
            </motion.button>
          </form>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default Contact;
