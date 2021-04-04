import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Group from "./Group";
import LoadingBox from "./LoadingBox";

import { CustomizedSprings } from "../../common/interfaces";

const ThreeComponent = ({ springs }: { springs: CustomizedSprings }) => {
  return (
    <Canvas dpr={window.devicePixelRatio || 1} camera={{ position: [0, 0.5, 7] }}>
      <ambientLight />
      <pointLight position={[15, 15, 15]} intensity={0.5} />
      {/* <OrbitControls /> */}
      <Suspense fallback={<LoadingBox />}>
        <Group springs={springs} />
      </Suspense>
      {/* <axesHelper scale={100} /> */}
    </Canvas>
  );
};

export default ThreeComponent;
