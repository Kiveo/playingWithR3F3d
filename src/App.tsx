import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Rectangle from "./Rectangle";
import Cube from "./Cube";
import Model from "./Model";
import Grid from "./Grid";

export default function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [1, 5, 30], fov: 60 }}>
        <ambientLight intensity={0.25} />
        <directionalLight intensity={1} position={[1, 1, 1]} />
        <Grid />
        <Rectangle />
        <Cube />
        <Model />
        <axesHelper args={[20]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
