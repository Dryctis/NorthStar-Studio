"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { motionPresets } from "@/lib/motion";

type RevealVariant = "section" | "card";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
};

export function Reveal({
  children,
  className,
  variant = "section",
  delay = 0,
}: RevealProps) {
  const preset =
    variant === "card"
      ? motionPresets.cardReveal
      : motionPresets.sectionReveal;

  return (
    <motion.div
      className={cn(className)}
      initial={preset.initial}
      whileInView={preset.whileInView}
      viewport={preset.viewport}
      transition={{
        ...preset.transition,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}