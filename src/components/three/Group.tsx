import { useState } from "react";
import { animated, config, useSpring } from "react-spring/three";
import { Euler } from "three";

import Font from "./Font";
import Modal from "./Modal";
import SuitModal from "./SuitModal";

const GroupObj = () => {
  const [toggle, setToggle] = useState(false);
  // const {
  //   viewport: { width, height }
  // } = useThree();

  const { rotation } = useSpring<{ rotation: Euler }>({
    rotation: toggle ? [0, -Math.PI, 0] : [0, 0, 0],
    config: config.gentle
  });

  return (
    <animated.group
      rotation={rotation}
      onClick={() => {
        setToggle(!toggle);
        navigator.vibrate(100);
      }}
      // position={width > height ? [0, -1, 0] : [0, 0, 0]}
      // scale={width > height ? 1 : 0.5}
      position={[0, -0.5, 0]}
      scale={1}
    >
      <SuitModal visible={toggle} />
      <Modal visible={!toggle} />
      <Font visible={!toggle} />
    </animated.group>
  );
};

export default GroupObj;
