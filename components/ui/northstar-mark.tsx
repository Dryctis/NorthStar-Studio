"use client";

import { motion } from "motion/react";

type NorthstarMarkProps = {
  className?: string;
};

export function NorthstarMark({ className }: NorthstarMarkProps) {
  return (
    <motion.svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{ transformOrigin: "50% 50%" }}
    >
      <motion.g
        animate={{
          opacity: [1, 0.94, 1],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3.2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ transformOrigin: "70px 70px" }}
      >
        {/* Halo exterior más visible */}
        <motion.circle
          cx="70"
          cy="70"
          r="10"
          stroke="currentColor"
          strokeWidth="1.6"
          initial={{ opacity: 0.22, scale: 1 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 1.9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
          style={{ transformOrigin: "70px 70px" }}
        />

        {/* Destello interior */}
        <motion.circle
          cx="70"
          cy="70"
          r="6.5"
          fill="currentColor"
          initial={{ opacity: 0.04, scale: 0.9 }}
          animate={{
            opacity: [0.04, 0.16, 0.04],
            scale: [0.9, 1.35, 0.9],
          }}
          transition={{
            duration: 1.9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
          style={{ transformOrigin: "70px 70px" }}
        />

        {/* Núcleo principal más notorio */}
        <motion.circle
          cx="70"
          cy="70"
          r="3.5"
          fill="currentColor"
          animate={{
            opacity: [1, 0.45, 1],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 1.9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
          style={{ transformOrigin: "70px 70px" }}
        />

        {/* Ejes principales */}
        <path
          d="M70 16V48"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M70 92V124"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M16 70H48"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M92 70H124"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Diagonales */}
        <path
          d="M34 34L54 54"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M86 86L106 106"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M106 34L86 54"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M34 106L54 86"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Detalles internos */}
        <path
          d="M70 54V60"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M70 80V86"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M54 70H60"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M80 70H86"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.55"
        />
      </motion.g>
    </motion.svg>
  );
}