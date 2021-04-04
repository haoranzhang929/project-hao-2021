import { SkinnedMesh, Bone, MeshStandardMaterial } from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import my3dModal from "../../assets/my3dModal.glb";

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: SkinnedMesh;
    EyeRight: SkinnedMesh;
    Wolf3D_Hair: SkinnedMesh;
    Wolf3D_Shirt: SkinnedMesh;
    Wolf3D_Teeth: SkinnedMesh;
    Wolf3D_Head: SkinnedMesh;
    Hips: Bone;
  };
  materials: {
    Wolf3D_Eye: MeshStandardMaterial;
    Wolf3D_Hair: MeshStandardMaterial;
    shirt: MeshStandardMaterial;
    Wolf3D_Teeth: MeshStandardMaterial;
    Wolf3D_Skin: MeshStandardMaterial;
  };
};

export interface My3dModalProps extends JSX.IntrinsicElements {
  my3dModal: { visible: boolean };
}

type My3dModal = JSX.IntrinsicElements["my3dModal"] | JSX.IntrinsicElements["group"];

export const Model = ({ visible, ...props }: My3dModal) => {
  const { nodes, materials } = useGLTF(my3dModal) as GLTFResult;
  return (
    <group {...props} dispose={null} position={[0, -8, 0]} scale={15} visible={visible}>
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
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Shirt.geometry}
        material={materials.shirt}
        skeleton={nodes.Wolf3D_Shirt.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload(my3dModal);

export default Model;
