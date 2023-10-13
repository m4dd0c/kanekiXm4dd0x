import { useEffect, useState } from "react";
import { BsMouse } from "react-icons/bs";
import { ProjectInterface, cPosType } from "../../vite-env";

const ProjectCard = ({
  data,
  itemId,
}: {
  data: ProjectInterface;
  itemId: ProjectInterface["id"];
}) => {
  const [mouseOverActive, setMouseOverActive] = useState<boolean>(false);
  const [gif, setGif] = useState<"bg-c1" | "bg-c2" | "bg-c3" | "bg-c4">(
    "bg-c1"
  );
  const [cPos, setCPos] = useState<cPosType>({ top: 0, left: 0 });
  const mouseEnter = () => setMouseOverActive(true);
  const mouseLeave = () => setMouseOverActive(false);

  //setting dynamic mouse bg
  useEffect(() => {
    if (itemId === "1") {
      setGif("bg-c1");
    } else if (itemId === "2") {
      setGif("bg-c2");
    } else if (itemId === "3") {
      setGif("bg-c3");
    } else {
      setGif("bg-c4");
    }
  }, [itemId]);

  useEffect(() => {
    if (mouseOverActive) {
      //tracking mouse position
      const handleMouseMove = (e: MouseEvent): void => {
        if(itemId !== '4'){
            setCPos({
                top: e.clientY-220,
                left: e.clientX-150,
            });
        }else {
            setCPos({
                left: e.clientX-200,
                top: e.clientY-220,
            })
        }
      };
      // calling handlemousemove on every mouse movement
      window.addEventListener("mousemove", handleMouseMove);
      //removing event
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseOverActive]);


  return (
    <>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={`${gif} relative overflow-hidden bg-cover bg-center lg:h-[240px] lg:w-[400px] h-[200px] w-[300px] rounded-xl shadow-lg my-5 mx-2`}
      >
        <a href="https://google.com/" target="_blank">
          <div
            className={`project-card-mouse-effect ${gif} flex justify-center items-center cursor-none shadow-xl border-2`}
            id="cursor"
            style={{ top: cPos.top, left: cPos.left }}
          >
            <h1 className="text-3xl bg-black text-white p-1 shadow-md">Live View</h1>
          </div>
          <div className="project-card-overlay tracking-wider text-white px-2 py-4">
            <h1 className="ml-5">{data.title}</h1>
            <h1 className="ml-5 text-sm">{data.description}</h1>
          </div>
        </a>
      </div>
             
      <div className="flex justify-center items-center gap-2 text-white">
        <BsMouse />
        <h4 className="tracking-widest opacity-80 cursor-default">scroll</h4>
      </div>
    </>
  );
};

export default ProjectCard;
