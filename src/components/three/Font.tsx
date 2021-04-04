import { useMemo, useState } from "react";
import { FontLoader, TextBufferGeometry } from "three";
import { useLoader } from "@react-three/fiber";
import { useSpring, animated, config } from "react-spring/three";

const Font = ({ visible }: { visible: boolean }) => {
  const haoFont = useLoader(FontLoader, "/hao.json");
  const [hovered, setHover] = useState(false);

  const haoChar = "皓";
  const fontConfig = useMemo(
    () => ({
      font: haoFont,
      size: 5,
      height: 0.5
    }),
    [haoFont]
  );

  const geo = new TextBufferGeometry(haoChar, fontConfig);

  const { opacity, opacity2 } = useSpring({
    opacity: hovered ? 0 : 1,
    opacity2: hovered ? 1 : 0,
    config: config.default
  });

  return (
    <group
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      visible={visible}
      scale={0.6}
      position={[0, 0, 1]}
      rotation={[0, -Math.PI, 0]}
    >
      <mesh rotation={[0, -Math.PI, 0]} position={[3.5, -1, -2.2]}>
        <textBufferGeometry args={[haoChar, fontConfig]}></textBufferGeometry>
        <animated.meshPhongMaterial color={0xa6a6a8} transparent opacity={opacity} />
      </mesh>
      <lineSegments rotation={[0, -Math.PI, 0]} position={[3.5, -1, -2.2]}>
        <edgesGeometry args={[geo]}></edgesGeometry>
        <animated.lineBasicMaterial color={0xa6a6a8} transparent opacity={opacity2} />
      </lineSegments>
    </group>
  );
};

export default Font;
