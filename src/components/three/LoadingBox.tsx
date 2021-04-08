import { useRef } from "react";
import { Box, MeshWobbleMaterial, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import Typography from "@material-ui/core/Typography";

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
      <Box ref={boxRef} scale={1} position={[0, 1, 0]}>
        <MeshWobbleMaterial factor={1} speed={1} />
      </Box>
      <Html position={[-0.4, 0.1, 0]}>
        <Typography align="center" variant="caption">
          loading...
        </Typography>
      </Html>
    </>
  );
};

export default LoadingBox;
