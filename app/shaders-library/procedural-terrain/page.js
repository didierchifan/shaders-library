"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

import {
  ACESFilmicToneMapping,
  CineonToneMapping,
  NoToneMapping,
  ReinhardToneMapping,
} from "three";
import { Leva } from "leva";
import BackButton from "@/app/isometric-room/components/BackButton";

export default function Shader() {
  return (
    <>
      <Canvas
        gl={{ toneMapping: ACESFilmicToneMapping }}
        shadows
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 10, 0],
          zoom: 0.6,
        }}
      >
        {/* <color args={["#181818"]} attach="background" /> */}
        <Experience />
      </Canvas>
      <Leva collapsed />
      <BackButton />
    </>
  );
}
