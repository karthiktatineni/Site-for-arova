"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PresentationControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function FloatingSculpture() {
  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh scale={1.2}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#6c5c44"
            speed={2}
            distort={0.4}
            radius={1}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2, 1, -1]} scale={0.4}>
          <boxGeometry />
          <meshStandardMaterial color="#d8c3a5" roughness={0.3} />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[-1.5, -1.2, 1]} scale={0.6}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#ede7e3" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <PresentationControls
        global
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <FloatingSculpture />
      </PresentationControls>

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={4.5}
      />
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
