import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { SetPreventScrollInterface } from "../../vite-env";
import HeroChild from "./Children/HeroChild";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { heroOnWheel } from "../../assets/api/api";
import { useSwipe } from "../hook/useSwipe";

const Hero = ({ setPreventScroll }: SetPreventScrollInterface) => {
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe();
  return (
    <div id="Home" className="my-snap">
      <div className="w-screen">
        <ScrollMenu
          scrollContainerClassName="hide-scroll"
          onWheel={heroOnWheel}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          onTouchStart={onTouchStart}
        >
          <HeroChild
            text={["Hello Ghoul", "What's up"]}
            inlinePos="right"
            itemId={1}
            setPreventScroll={setPreventScroll}
          />
          <HeroChild
            text={["It's Me", "Ken Kaneki"]}
            setPreventScroll={setPreventScroll}
            inlinePos="left"
            itemId={2}
          />
        </ScrollMenu>
      </div>
    </div>
  );
};

export default Hero;
