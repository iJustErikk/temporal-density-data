import React from 'react'
import Box from './App.tsx'
import { Canvas, createRoot } from '@react-three/fiber';

createRoot(document.getElementById("root") as HTMLElement).render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>
);
