import { useState } from "react";
import { SkinnedMesh, Bone, MeshStandardMaterial } from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import my3dSuitModal from "../../assets/my3dSuitModal.glb";
import { useSpring, animated, SpringValue, config } from "react-spring/three";

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: SkinnedMesh;
    EyeRight: SkinnedMesh;
    Wolf3D_Glasses: SkinnedMesh;
    Wolf3D_Hair: SkinnedMesh;
    Wolf3D_Hands: SkinnedMesh;
    Wolf3D_Shirt: SkinnedMesh;
    Wolf3D_Head: SkinnedMesh;
    Wolf3D_Teeth: SkinnedMesh;
    Hips: Bone;
  };
  materials: {
    Wolf3D_Eye: MeshStandardMaterial;
    Wolf3D_Glasses: MeshStandardMaterial;
    Wolf3D_Hair: MeshStandardMaterial;
    Wolf3D_Skin: MeshStandardMaterial;
    Wolf3D_Shirt: MeshStandardMaterial;
    Wolf3D_Teeth: MeshStandardMaterial;
  };
};

export interface My3dModalProps extends JSX.IntrinsicElements {
  my3dModal: { visible: boolean };
}

type My3dModal = JSX.IntrinsicElements["my3dModal"] | JSX.IntrinsicElements["group"];

const GlassesMaterial = ({
  material,
  opacity
}: {
  material: MeshStandardMaterial;
  opacity: SpringValue<number>;
}) => {
  return <animated.meshStandardMaterial {...material} transparent opacity={opacity} />;
};

export const Model = ({ visible, ...props }: My3dModal) => {
  const { nodes, materials } = useGLTF(my3dSuitModal) as GLTFResult;
  const [hovered, setHover] = useState(true);

  const { opacity } = useSpring({
    opacity: hovered ? 0 : 1,
    config: config.default
  });

  return (
    <group
      {...props}
      dispose={null}
      position={[0, -8, 0]}
      scale={15}
      visible={visible}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      rotation={[0, Math.PI, 0]}
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
      />
      <skinnedMesh
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      >
        <GlassesMaterial material={materials.Wolf3D_Glasses} opacity={opacity} />
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Shirt.geometry}
        material={materials.Wolf3D_Shirt}
        skeleton={nodes.Wolf3D_Shirt.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload(my3dSuitModal);

export default Model;
