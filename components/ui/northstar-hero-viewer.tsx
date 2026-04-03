"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import { NorthstarMark } from "@/components/ui/northstar-mark";

const NORTHSTAR_GLTF_JSON = '{"asset":{"version":"2.0","generator":"northstar-text-gltf"},"scene":0,"scenes":[{"nodes":[0]}],"nodes":[{"mesh":0}],"meshes":[{"primitives":[{"attributes":{"POSITION":0,"NORMAL":1},"indices":2,"material":0}]}],"materials":[{"pbrMetallicRoughness":{"baseColorFactor":[0.3,0.41,0.92,1.0],"metallicFactor":0.15,"roughnessFactor":0.35},"emissiveFactor":[0.05,0.06,0.14]}],"buffers":[{"uri":"data:application/octet-stream;base64,AAAAADMzkz8AAAAAAAAAADMzk78AAAAAZmZmvwAAAAAAAAAAZmZmPwAAAAAAAAAAAAAAAAAAAABmZmY/AAAAAAAAAABmZma/AAAAAAAAgD8AAAAAAAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAAAAAAIC/AAAEAAMAAAACAAQAAAAFAAIAAAADAAUAAQADAAQAAQAEAAIAAQACAAUAAQAFAAMA","byteLength":192}],"bufferViews":[{"buffer":0,"byteOffset":0,"byteLength":72,"target":34962},{"buffer":0,"byteOffset":72,"byteLength":72,"target":34962},{"buffer":0,"byteOffset":144,"byteLength":48,"target":34963}],"accessors":[{"bufferView":0,"componentType":5126,"count":6,"type":"VEC3","min":[-0.9,-1.15,-0.9],"max":[0.9,1.15,0.9]},{"bufferView":1,"componentType":5126,"count":6,"type":"VEC3"},{"bufferView":2,"componentType":5123,"count":24,"type":"SCALAR","min":[0],"max":[5]}]}';

type NorthstarHeroViewerProps = {
  className?: string;
};

export function NorthstarHeroViewer({ className }: NorthstarHeroViewerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const modelSrc = useMemo(
    () => `data:model/gltf+json,${encodeURIComponent(NORTHSTAR_GLTF_JSON)}`,
    []
  );

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMedia = () => {
      setIsMobile(mobileQuery.matches);
      setIsReducedMotion(motionQuery.matches);
    };

    handleMedia();
    mobileQuery.addEventListener("change", handleMedia);
    motionQuery.addEventListener("change", handleMedia);

    return () => {
      mobileQuery.removeEventListener("change", handleMedia);
      motionQuery.removeEventListener("change", handleMedia);
    };
  }, []);

  const showStaticFallback = isMobile || isReducedMotion;

  return (
    <div className={className}>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        strategy="afterInteractive"
      />

      {showStaticFallback ? (
        <div className="relative flex h-[260px] items-center justify-center rounded-[1.4rem] border border-border/80 bg-card/80">
          <div className="absolute h-28 w-28 rounded-full bg-accent/20 blur-2xl" />
          <NorthstarMark className="relative h-20 w-20 text-accent" />
        </div>
      ) : (
        <div
          className="relative h-[320px] overflow-hidden rounded-[1.4rem] border border-border/80 bg-card/80"
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const nx = (event.clientX - rect.left) / rect.width - 0.5;
            const ny = (event.clientY - rect.top) / rect.height - 0.5;
            setTilt({ x: ny * -2.2, y: nx * 2.2 });
          }}
          onPointerLeave={() => setTilt({ x: 0, y: 0 })}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 220ms ease-out",
          }}
        >
          <model-viewer
            src={modelSrc}
            alt="Isotipo 3D de Northstar"
            auto-rotate
            auto-rotate-delay="0"
            rotation-per-second="6deg"
            camera-orbit="0deg 78deg 2.25m"
            min-camera-orbit="auto auto 2.1m"
            max-camera-orbit="auto auto 2.35m"
            interaction-prompt="none"
            exposure="1.02"
            shadow-intensity="0.24"
            shadow-softness="0.75"
            style={{ width: "100%", height: "100%", background: "transparent" }}
          />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(111,125,243,0.14),transparent_52%)]" />
        </div>
      )}
    </div>
  );
}
