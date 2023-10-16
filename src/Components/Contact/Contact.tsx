import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import MotionWrapper from "../FramerMotion/MotionWrapper";
import { motion, useAnimation, useInView } from "framer-motion";
import { bgVariant, btnAnim, hoverTitle } from "../FramerMotion/variants";
import { useRef, useEffect } from "react";
import MagnaticWrapper from "../FramerMotion/MagnaticWrapper";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    feed: "",
  });

  const inputHandler: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (
      data.fname.trim().length <= 0 ||
      data.lname.trim().length <= 0 ||
      data.email.trim().length <= 0 ||
      data.feed.trim().length <= 0
    ) {
      return alert("Please fill all fields!");
    }
    setTimeout(() => {
      alert("Mail Sent Successfully");
    }, 1000);
  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  useEffect(() => {
    if (isInView)
      controls.start({ ...bgVariant.visible, transition: { delay: 0.5 } });
  }, [isInView]);

  const isMobile = window.innerWidth < 768;
  return (
    <div
      id="Contact"
      className="min-h-screen gradient flex justify-center items-center lg:flex-row flex-col my-snap overflow-hidden"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial={bgVariant.hidden}
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 300 },
        }}
        className="bg-kaneki lg:bg-left-top bg-top lg:-mt-0 -mt-10 h-[25vh] lg:h-screen lg:w-1/2 w-screen bg-contain bg-no-repeat"
      ></motion.div>
      <div className="pt-10 mx-auto lg:w-1/3 h-1/2 lg:h-screen">
        <MagnaticWrapper>
          <motion.h1
            whileHover={hoverTitle}
            className="text-center text-5xl mt-10  underline underline-offset-2"
          >
            Connect w/ me
          </motion.h1>
        </MagnaticWrapper>
        {isMobile ? (
          <form method="post" className="py-10 px-2">
            <div className="w-[46%] inline-block mr-2">
              <label htmlFor="name">First Name</label>
              <br />
              <input
                type="text"
                name="fname"
                id="name"
                required
                onChange={inputHandler}
                value={data.fname}
              />
            </div>
            <div className="w-[46%] inline-block mx-2">
              <label htmlFor="name">Last Name</label>
              <br />
              <input
                type="text"
                name="lname"
                id="name"
                required
                onChange={inputHandler}
                value={data.lname}
              />
            </div>
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              required
              onChange={inputHandler}
              value={data.email}
            />
            <br />
            <br />
            <label htmlFor="feedback">Feedback or Message</label>
            <br />
            <textarea
              name="feed"
              id="feedback"
              rows={5}
              required
              onChange={inputHandler}
              value={data.feed}
            />
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
        ) : (
          <MotionWrapper reverse={true}>
            <form method="post" className="py-10 px-2">
              <div className="w-[46%] inline-block mr-2">
                <label htmlFor="name">First Name</label>
                <br />
                <input
                  type="text"
                  name="fname"
                  id="name"
                  required
                  onChange={inputHandler}
                  value={data.fname}
                />
              </div>
              <div className="w-[46%] inline-block mx-2">
                <label htmlFor="name">Last Name</label>
                <br />
                <input
                  type="text"
                  name="lname"
                  id="name"
                  required
                  onChange={inputHandler}
                  value={data.lname}
                />
              </div>
              <br />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                required
                onChange={inputHandler}
                value={data.email}
              />
              <br />
              <br />
              <label htmlFor="feedback">Feedback or Message</label>
              <br />
              <textarea
                name="feed"
                id="feedback"
                rows={5}
                required
                onChange={inputHandler}
                value={data.feed}
              />
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
        )}
      </div>
    </div>
  );
};

export default Contact;
