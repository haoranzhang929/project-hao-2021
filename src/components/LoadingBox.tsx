import { useRef } from "react";
import { Box, Text, MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const LoadingBox = () => {
  const boxRef = useRef<Mesh>();
  const speed = 0.02;
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotateX(speed);
      boxRef.current.rotateY(speed);
      boxRef.current.rotateZ(0.5 * speed);
    }
  });
  return (
    <>
      <Box ref={boxRef} scale={0.5} position={[0, 1, 0]}>
        <MeshWobbleMaterial factor={1} speed={1} />
      </Box>
      <Text position={[0, 0.4, 0]} fontSize={0.18} color={0x6b5152}>
        loading...
      </Text>
    </>
  );
};

export default LoadingBox;
