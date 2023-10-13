import { useContext } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { DirectionTypeInterface } from "../../vite-env";

export const ArrowBtn = ({ dir }: DirectionTypeInterface) => {
  const { isFirstItemVisible, isLastItemVisible, scrollPrev, scrollNext } =
    useContext(VisibilityContext);

  return dir === "left" ? (
    <button
      className="text-white flex justify-center items-center"
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
    >
      <IoIosArrowBack size={50} className='text-slate-900' />
    </button>
  ) : (
    <button
      className="text-white flex justify-center items-center"
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
    >
      <IoIosArrowForward size={50} className='text-slate-900' />
    </button>
  );
};
