import { HeroPropType } from "../../../vite-env";

const HeroChild = ({
  text,
  inlinePos,
  itemId,
  setPreventScroll,
}: HeroPropType) => {
  const handleScroll = () => {
    if (itemId === 2) {
      setPreventScroll(false);
    } else {
      setPreventScroll(true);
    }
  };
  return (
    <div
      onMouseOver={handleScroll}
      className={`my-snap gradient w-screen h-screen overflow-hidden flex justify-between items-center ${
        inlinePos === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex-col`}
    >
      <div className="w-screen lg:w-1/2">
        <h1 className={`big-title text-center lg:mt-0 mt-10`}>
          <span
            className={`${
              inlinePos === "right" ? "text-red-600" : "text-black"
            }`}
          >
            {text[0]}
          </span>{" "}
          <br />{" "}
          <span
            className={`${
              inlinePos === "left" ? "text-red-600" : "text-black"
            }`}
          >
            {text[1]}
          </span>
        </h1>
      </div>
      <div className="bg-hero lg:h-screen h-1/2 lg:w-1/2 w-screen bg-contain bg-bottom bg-no-repeat"></div>
    </div>
  );
};

export default HeroChild;
