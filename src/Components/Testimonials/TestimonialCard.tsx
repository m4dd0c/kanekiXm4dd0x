import { BsMouse } from "react-icons/bs";
import { TestimonialInterface } from "../../vite-env";
import {motion} from 'framer-motion'
const TestamonialCard = ({ name, dp, post, desc }: TestimonialInterface) => {
  return (
    <>
    <motion.div whileHover={{y: -10}} className="lg:h-[200px] lg:w-[450px] w-[300px] rounded-md dark-gradient text-white grid place-items-center px-10 shadow-lg my-5 mx-2">
      <div className="bg-bloodImg lg:h-[200px] lg:w-[400px] w-[250px] h-[210px] bg-contain bg-no-repeat">
        <div className="flex items-center py-4">
          <div className="dp mr-10 h-14 w-14 rounded-full bg-slate-500 grid place-items-center">
            <img src={dp} alt="dp..." className="h-14 w-14 rounded-full object-cover block" />
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
