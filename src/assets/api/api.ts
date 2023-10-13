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

export const headerData: string[] = [
  "Home",
  "Skills",
  "Projects",
  "Testimonials",
  "Contact",
];
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
    gif: "/src/assets/images/project/giphy01.gif",
    title: "Clock Project",
    description: "Your Virtual Analog & Digital Clock",
  },
  {
    id: "2",
    gif: "/src/assets/images/project/giphy02.gif",
    title: "Clock Project",
    description: "Your Virtual Analog & Digital Clock",
  },
  {
    id: "3",
    gif: "/src/assets/images/project/giphy03.gif",
    title: "Clock Project",
    description: "Your Virtual Analog & Digital Clock",
  },
  {
    id: "4",
    gif: "/src/assets/images/project/giphy04.gif",
    title: "Clock Project",
    description: "Your Virtual Analog & Digital Clock",
  },
];

export const testimonialsData: TestimonialInterface[] = [
  {
    name: "Juuzou Suzuya",
    post: "Senior Investigator",
    dp: "/src/assets/images/dp/juuzou_dp.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum nobis obcaecati ipsa, voluptas pariatur nisi sapiente quas sequi nemo!",
  },
  {
    name: "Touka Chan",
    post: "Student",
    dp: "/src/assets/images/dp/touka_dp.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum nobis obcaecati ipsa, voluptas pariatur nisi sapiente quas sequi nemo!",
  },
  {
    name: "The Owl",
    post: "Manager",
    dp: "/src/assets/images/dp/yoshimura_dp.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum nobis obcaecati ipsa, voluptas pariatur nisi sapiente quas sequi nemo!",
  },
  {
    name: "Nishio Senpai",
    post: "Student",
    dp: "/src/assets/images/dp/nishio_dp.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum nobis obcaecati ipsa, voluptas pariatur nisi sapiente quas sequi nemo!",
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

  console.log('Insider');
  
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
