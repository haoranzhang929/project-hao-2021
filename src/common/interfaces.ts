import { SpringValue } from "react-spring/three";

export interface CustomizedSprings {
  pos: SpringValue<number[]>;
  scale: SpringValue<number[]>;
  rotation: SpringValue<number[]>;
}
