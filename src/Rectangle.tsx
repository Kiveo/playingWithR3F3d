import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const Rectangle = () => {
  const cubeRef = useRef<Mesh>(null!);
  useFrame((state, delta) => (cubeRef.current.rotation.x += delta / 2));

  return (
    <mesh position={[1, 4, 10]} ref={cubeRef}>
      <boxGeometry args={[0.75, 0.25, 0.25]} />
      <meshStandardMaterial color="teal" />
    </mesh>
  );
};

export default Rectangle;
