import { ContextType } from "react";
import {
  VisibilityContext,
  getItemsPos,
  slidingWindow,
} from "react-horizontal-scrolling-menu";
import {
  HandlesInterface,
  ProjectInterface,
  TestimonialInterface,
} from "../../vite-env";

export const footerData: HandlesInterface[] = [
  {
    link: "https://linkedin.com/in/m4dd0c",
    name: "linkedin",
  },
  {
    link: "https://github.com/m4dd0c",
    name: "github",
  },
  {
    link: "https://instagram.com/m4dd0x_",
    name: "instagram",
  },
  {
    link: "https://www.youtube.com/channel/UCRcKNykeg3pf6cvzZc9WEDA",
    name: "youtube",
  },
];
export const iconData: string[] = [
  "HTML5",
  "CSS3",
  "Tailwind",
  "Bootstrap6",
  "Javascript",
  "NodeJS",
  "Express",
  "MongoDB",
  "ReactJS",
  "NextJS",
  "Typescript",
];

export const projectData: ProjectInterface[] = [
  {
    id: "1",
    link: "https://swaaad.netlify.app",
    title: "Swaaad Restaurant",
    description: "A restaurant landing page with an elegant design.",
  },
  {
    id: "2",
    link: "https://swaaad.netlify.app",
    title: "StudyUnknown - Your Virtual Teacher",
    description:
      "An innovative virtual teaching platform with a focus on interactive learning.",
  },
  {
    id: "3",
    link: "https://swaaad.netlify.app",
    title: "Todo - Create, Edit, Check & Delete",
    description:
      "A simple and intuitive to-do list application for managing tasks efficiently.",
  },
  {
    id: "4",
    link: "https://swaaad.netlify.app",
    title: "An E-commerce Store",
    description:
      "A fully functional e-commerce website for buying and selling products online.",
  },
];

export const testimonialsData: TestimonialInterface[] = [
  {
    name: "Juuzou Suzuya",
    post: "Senior Investigator",
    dp: "/src/assets/images/dp/juuzou_dp.jpeg",
    desc: "Coding with Kaneki was a thrilling experience. His precision and flair in tackling our toughest projects were truly remarkable. The results spoke for themselves.",
  },
  {
    name: "Touka Chan",
    post: "Student",
    dp: "/src/assets/images/dp/touka_dp.jpeg",
    desc: "Learning from Kaneki felt like a transformation, just like Touka's journey. Patient and insightful, our guide through the coding world made it an enjoyable experience.",
  },
  {
    name: "The Owl",
    post: "Manager",
    dp: "/src/assets/images/dp/yoshimura_dp.jpg",
    desc: "Our coding manager, The Owl, is like Yoshimura in the digital realm. His leadership style ensures projects are well-organized and results-driven under Kaneki's guidance.",
  },
  {
    name: "Nishio Senpai",
    post: "Student",
    dp: "/src/assets/images/dp/nishio_dp.jpg",
    desc: "Learning from our coding senpai Kaneki was an enjoyable journey filled with expertise and patience, much like Nishio's guidance in Tokyo Ghoul.",
  },
];

type scrollVisibilityApiType = ContextType<typeof VisibilityContext>;

export const onWheel = (
  { getItemById, items, visibleItems, scrollToItem }: scrollVisibilityApiType,
  ev: React.WheelEvent
): void => {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    // NOTE: for center items
    const nextGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).next();
    const { center } = getItemsPos(nextGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  } else if (ev.deltaY > 0) {
    const prevGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).prev();
    const { center } = getItemsPos(prevGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  }
};

export const heroOnWheel = (
  { getItemById, items, visibleItems, scrollToItem }: scrollVisibilityApiType,
  ev: React.WheelEvent
): void => {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    // NOTE: for center items
    const nextGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).prev();
    const { center } = getItemsPos(nextGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  } else if (ev.deltaY > 0) {
    const prevGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).next();
    const { center } = getItemsPos(prevGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  }
};
