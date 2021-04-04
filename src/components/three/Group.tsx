import { useThree } from "@react-three/fiber";
import { useState } from "react";
import { animated, config, SpringValue, useSpring } from "react-spring/three";
import { Euler } from "three";

import Font from "./Font";
import Me from "./Modal";

const GroupObj = ({
  springs
}: {
  springs: {
    pos: SpringValue<number[]>;
    scale: SpringValue<number[]>;
    rotation: SpringValue<number[]>;
  };
}) => {
  const [toggle, setToggle] = useState(false);
  const {
    viewport: { width, height }
  } = useThree();

  const { rotation } = useSpring<{ rotation: Euler }>({
    rotation: toggle ? [0, -Math.PI, 0] : [0, 0, 0],
    config: config.gentle
  });

  return (
    <animated.group
      {...(springs as unknown)}
      rotation={rotation}
      onClick={() => {
        setToggle(!toggle);
        navigator.vibrate(100);
      }}
      position={width > height ? [0, -1, 0] : [0, 0, 0]}
      scale={width > height ? 1 : 0.5}
    >
      <Me visible={!toggle} />
      <Font visible={toggle} />
    </animated.group>
  );
};

export default GroupObj;
