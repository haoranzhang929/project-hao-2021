import { ReactThreeFiber } from "react-three-fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      my3dModal: ReactThreeFiber.Object3DNode<{
        object: Group;
        position: [number, number, number];
        scale: number;
      }>;
    }
  }
}
