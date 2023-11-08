import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { Mesh } from "three";

const Cube = () => {
  const meshRef = useRef<Mesh>(null!);
  useFrame((state, delta) => (meshRef.current.rotation.z += delta / 4));

  return (
    <Box
      ref={meshRef}
      rotation={[0.75, 0, 0]}
      position={[0, -10, -1]}
      args={[2, 2, 2]}
      material-color="pink"
    >
      <meshStandardMaterial />
    </Box>
  );
};

export default Cube;
