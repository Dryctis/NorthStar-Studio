"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { NorthstarMark } from "@/components/ui/northstar-mark";

type Northstar3DMarkProps = {
  className?: string;
};

type Vec2 = { x: number; y: number };

export function Northstar3DMark({ className }: Northstar3DMarkProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [scriptFailed, setScriptFailed] = useState(false);

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

  useEffect(() => {
    if (scriptReady || scriptFailed) return;
    const timeout = window.setTimeout(() => {
      setScriptFailed(true);
    }, 3500);
    return () => window.clearTimeout(timeout);
  }, [scriptReady, scriptFailed]);

  useEffect(() => {
    if (!scriptReady || isMobile || isReducedMotion || !mountRef.current || scriptFailed) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const THREE = (window as unknown as { THREE?: any }).THREE;
    if (!THREE) return;

    const container = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 6.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const materialFront = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#f8f2e8"),
      metalness: 0.12,
      roughness: 0.36,
      emissive: new THREE.Color("#5f69dd"),
      emissiveIntensity: 0.03,
    });

    const materialBack = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#d7d0c3"),
      metalness: 0.1,
      roughness: 0.48,
    });

    // Geometría de prueba temporal para validar pipeline 3D visible
    const probe = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 16, 16),
      new THREE.MeshStandardMaterial({ color: new THREE.Color("#7d8cff"), emissive: new THREE.Color("#7d8cff"), emissiveIntensity: 0.15 })
    );
    probe.position.set(0, 0, 0.34);

    const core = new THREE.Mesh(new THREE.SphereGeometry(0.22, 20, 20), materialFront);
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.028, 20, 100), materialFront);

    const axisGeometry = new THREE.CylinderGeometry(0.04, 0.04, 1.06, 14);
    const diagonalGeometry = new THREE.CylinderGeometry(0.035, 0.035, 0.82, 14);
    const detailGeometry = new THREE.CylinderGeometry(0.022, 0.022, 0.26, 10);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bars: any[] = [];

    const top = new THREE.Mesh(axisGeometry, materialFront);
    top.position.set(0, 0.88, 0);
    bars.push(top);

    const bottom = new THREE.Mesh(axisGeometry, materialFront);
    bottom.position.set(0, -0.88, 0);
    bars.push(bottom);

    const left = new THREE.Mesh(axisGeometry, materialFront);
    left.rotation.z = Math.PI / 2;
    left.position.set(-0.88, 0, 0);
    bars.push(left);

    const right = new THREE.Mesh(axisGeometry, materialFront);
    right.rotation.z = Math.PI / 2;
    right.position.set(0.88, 0, 0);
    bars.push(right);

    const diag1 = new THREE.Mesh(diagonalGeometry, materialFront);
    diag1.rotation.z = Math.PI / 4;
    diag1.position.set(0.63, 0.63, 0);
    bars.push(diag1);

    const diag2 = new THREE.Mesh(diagonalGeometry, materialFront);
    diag2.rotation.z = -Math.PI / 4;
    diag2.position.set(-0.63, 0.63, 0);
    bars.push(diag2);

    const diag3 = new THREE.Mesh(diagonalGeometry, materialFront);
    diag3.rotation.z = Math.PI / 4;
    diag3.position.set(-0.63, -0.63, 0);
    bars.push(diag3);

    const diag4 = new THREE.Mesh(diagonalGeometry, materialFront);
    diag4.rotation.z = -Math.PI / 4;
    diag4.position.set(0.63, -0.63, 0);
    bars.push(diag4);

    const detailTop = new THREE.Mesh(detailGeometry, materialBack);
    detailTop.position.set(0, 0.48, 0.03);
    bars.push(detailTop);

    const detailBottom = new THREE.Mesh(detailGeometry, materialBack);
    detailBottom.position.set(0, -0.48, 0.03);
    bars.push(detailBottom);

    const detailLeft = new THREE.Mesh(detailGeometry, materialBack);
    detailLeft.rotation.z = Math.PI / 2;
    detailLeft.position.set(-0.48, 0, 0.03);
    bars.push(detailLeft);

    const detailRight = new THREE.Mesh(detailGeometry, materialBack);
    detailRight.rotation.z = Math.PI / 2;
    detailRight.position.set(0.48, 0, 0.03);
    bars.push(detailRight);

    group.add(core);
    group.add(halo);
    group.add(probe);
    bars.forEach((bar) => group.add(bar));

    const ambient = new THREE.AmbientLight(0xf8f2e8, 0.78);
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(2.6, 2.1, 3.4);
    const fill = new THREE.DirectionalLight(0xc9cfff, 0.56);
    fill.position.set(-2.4, -1.2, 2.8);
    const rim = new THREE.DirectionalLight(0xa9b4ff, 0.48);
    rim.position.set(0, 2.4, -3.2);

    scene.add(ambient, key, fill, rim);

    const tiltCurrent: Vec2 = { x: 0, y: 0 };
    const tiltTarget: Vec2 = { x: 0, y: 0 };

    const onMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      tiltTarget.x = ny * -0.22;
      tiltTarget.y = nx * 0.24;
    };

    const onLeave = () => {
      tiltTarget.x = 0;
      tiltTarget.y = 0;
    };

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);
    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerleave", onLeave);

    const tick = () => {
      tiltCurrent.x += (tiltTarget.x - tiltCurrent.x) * 0.08;
      tiltCurrent.y += (tiltTarget.y - tiltCurrent.y) * 0.08;

      group.rotation.y += 0.0018;
      group.rotation.x = tiltCurrent.x;
      group.rotation.z = tiltCurrent.y * 0.36;
      group.position.y = Math.sin(performance.now() * 0.0006) * 0.03;

      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
      renderer.dispose();
      container.innerHTML = "";
    };
  }, [scriptReady, isMobile, isReducedMotion, scriptFailed]);

  const simpleMode = isMobile || isReducedMotion || scriptFailed;

  return (
    <div className={className}>
      <Script
        src="https://unpkg.com/three@0.169.0/build/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
        onError={() => setScriptFailed(true)}
      />

      {simpleMode ? (
        <div className="relative flex h-[260px] items-center justify-center rounded-[1.4rem] border border-border/80 bg-card/80 sm:h-[300px]">
          <div className="absolute h-32 w-32 rounded-full bg-accent/16 blur-3xl" />
          <NorthstarMark className="relative h-22 w-22 text-accent" />
        </div>
      ) : (
        <div className="relative h-[320px] overflow-hidden rounded-[1.4rem] border border-border/80 bg-card/80 sm:h-[340px]">
          <div ref={mountRef} className="absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_14%,rgba(111,125,243,0.15),transparent_54%)]" />
        </div>
      )}
    </div>
  );
}
