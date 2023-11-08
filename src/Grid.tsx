import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Box, Plane } from "@react-three/drei";

const Grid: React.FC = () => {
  const gridSize = 9;
  const cellSize = 20;

  const floorCells = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = col * cellSize;
      const y = row * cellSize;
      const color = (row + col) % 2 === 0 ? "white" : "gray";
      floorCells.push(
        <Plane key={`${row}-${col}`} args={[cellSize, cellSize]} receiveShadow>
          <meshStandardMaterial color={color} attach="material" />
          <mesh position={[x, -0.5, y]} rotation-x={-Math.PI / 2} />
        </Plane>
      );
    }
  }

  return <>{floorCells}</>;
};

export default Grid;
