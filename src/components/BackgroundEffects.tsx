"use client";

import dynamic from "next/dynamic";

const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false });
const CursorGlow = dynamic(() => import("./CursorGlow"), { ssr: false });

export default function BackgroundEffects() {
  return (
    <>
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <ParticleCanvas />
      <CursorGlow />
    </>
  );
}
