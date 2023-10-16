/// <reference types="vite/client" />

import { Dispatch, SetStateAction } from "react";

type SetStateType = Dispatch<SetStateAction<boolean>>;
interface SetPreventScrollInterface {
  setPreventScroll: SetStateType;
}

interface HeroPropType {
  text: string[];
  inlinePos: "right" | "left";
  itemId: number;
  setPreventScroll: SetStateType;
}

interface cPosType {
  left: number;
  top: number;
}

interface IconType {
  skill: string;
}
type DirectionType = "left" | "right" | "";
interface DirectionTypeInterface {
  dir: DirectionType;
}

interface ProjectInterface {
  readonly id: string;
  title: string;
  description: string;
  link: string;
}
interface TestimonialInterface {
  name: string;
  desc: string;
  post: string;
  dp: string;
}

interface HandlesInterface {
  link: string;
  name: string;
}
