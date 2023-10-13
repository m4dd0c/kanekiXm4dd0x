import {
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { IconType } from "../../vite-env";

export const IconContainer = ({ skill }: IconType) => {
  return (
    <div className="flex items-center m-2">
      {skill.toLowerCase() === "html5".toLowerCase() && (
        <SiHtml5 size={25} color="white" />
      )}
      {skill.toLowerCase() === "css3".toLowerCase() && (
        <SiCss3 size={25} color="white" />
      )}
      {skill.toLowerCase() === "tailwind".toLowerCase() && (
        <SiTailwindcss size={25} color="white" />
      )}
      {skill.toLowerCase() === "bootstrap6".toLowerCase() && (
        <SiBootstrap size={25} color="white" />
      )}
      {skill.toLowerCase() === "javascript".toLowerCase() && (
        <SiJavascript size={25} color="white" />
      )}
      {skill.toLowerCase() === "nodejs".toLowerCase() && (
        <SiNodedotjs size={25} color="white" />
      )}
      {skill.toLowerCase() === "express".toLowerCase() && (
        <SiExpress size={25} color="white" />
      )}
      {skill.toLowerCase() === "mongodb".toLowerCase() && (
        <SiMongodb size={25} color="white" />
      )}
      {skill.toLowerCase() === "reactjs".toLowerCase() && (
        <SiReact size={25} color="white" />
      )}
      {skill.toLowerCase() === "typescript".toLowerCase() && (
        <SiTypescript size={25} color="white" />
      )}
      {skill.toLowerCase() === "nextjs".toLowerCase() && (
        <SiNextdotjs size={25} color="white" />
      )}
      <h1 className="text-red-100 text-lg ml-1 tracking-wider">{skill}</h1>
    </div>
  );
};
