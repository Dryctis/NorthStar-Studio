"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { NorthstarMark } from "@/components/ui/northstar-mark";

type NorthstarHeroViewerProps = {
  className?: string;
};

const depthLayers = [
  { offset: 10, opacity: 0.14 },
  { offset: 7, opacity: 0.2 },
  { offset: 4, opacity: 0.32 },
  { offset: 0, opacity: 1 },
];

export function NorthstarHeroViewer({ className }: NorthstarHeroViewerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

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

  const isSimpleMode = isMobile || isReducedMotion;

  return (
    <div className={className}>
      <motion.div
        className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-[1.4rem] border border-border/80 bg-card/80 sm:h-[320px]"
        onPointerMove={(event) => {
          if (isSimpleMode) return;
          const rect = event.currentTarget.getBoundingClientRect();
          const nx = (event.clientX - rect.left) / rect.width - 0.5;
          const ny = (event.clientY - rect.top) / rect.height - 0.5;
          setTilt({ x: ny * -2, y: nx * 2 });
        }}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        animate={
          isSimpleMode
            ? undefined
            : {
                y: [0, -2, 0],
              }
        }
        transition={
          isSimpleMode
            ? undefined
            : {
                duration: 7.5,
                ease: "easeInOut",
                repeat: Infinity,
              }
        }
        style={{
          transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 220ms ease-out",
        }}
      >
        <div className="pointer-events-none absolute h-36 w-36 rounded-full bg-accent/18 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(111,125,243,0.14),transparent_56%)]" />

        <div className="relative h-42 w-42 sm:h-48 sm:w-48">
          {depthLayers.map((layer, index) => (
            <div
              key={layer.offset}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `translate3d(${layer.offset * 0.45}px, ${layer.offset * 0.28}px, 0)`,
                opacity: layer.opacity,
              }}
              aria-hidden={index !== depthLayers.length - 1}
            >
              <NorthstarMark
                className={
                  index === depthLayers.length - 1
                    ? "h-full w-full text-accent"
                    : "h-full w-full text-accent/70"
                }
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}