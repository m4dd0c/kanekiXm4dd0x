import { BsMouse } from "react-icons/bs";
import { TestimonialInterface } from "../../vite-env";
import { motion } from "framer-motion";
import yoshimura from "../../assets/images/dp/yoshimura_dp.jpg";
import juuzou from "../../assets/images/dp/juuzou_dp.jpeg";
import touka from "../../assets/images/dp/touka_dp.jpeg";
import nishio from "../../assets/images/dp/nishio_dp.jpg";
import { useEffect, useState } from "react";

const TestamonialCard = ({ name, post, desc }: TestimonialInterface) => {
  const [imgSrc, setImgSrc] = useState(juuzou);
  useEffect(() => {
    if (name === "Nishio Senpai") setImgSrc(nishio);
    else if (name === "The Owl") setImgSrc(yoshimura);
    else if (name === "Touka Chan") setImgSrc(touka);
    else setImgSrc(juuzou);
  }, []);
  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        className="lg:h-[200px] lg:w-[450px] w-[300px] rounded-md dark-gradient text-white grid place-items-center px-10 shadow-lg my-5 mx-2"
      >
        <div className="bg-bloodImg lg:h-[200px] lg:w-[400px] w-[250px] h-[210px] bg-contain bg-no-repeat">
          <div className="flex items-center py-4">
            <div className="dp mr-10 h-14 w-14 rounded-full bg-slate-500 grid place-items-center">
              <img
                src={imgSrc}
                alt="dp..."
                className="h-14 w-14 rounded-full object-cover block"
              />
            </div>
            <div className="">
              <h1 className="text-3xl">{name}</h1>
              <p className="text-slate-400">{post}</p>
            </div>
          </div>
          <div className="">{desc}</div>
        </div>
      </motion.div>
      <div className="flex justify-center items-center gap-2">
        <BsMouse />
        <h4 className="tracking-widest opacity-80 cursor-default">scroll</h4>
      </div>
    </>
  );
};

export default TestamonialCard;
