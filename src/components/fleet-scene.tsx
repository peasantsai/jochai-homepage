'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

const ACCENT = '#2563eb';
const NODE = '#6b7280';
const NODE_DIM = '#3b424c';
const HARNESS = '#2f343d';

const LABELS = [
  'OpenAI',
  'Claude',
  'Gemini',
  'Microsoft',
  'LangGraph',
  'CrewAI',
  'Ollama',
  'vLLM',
  'llama.cpp',
];

function CentralYoke() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.12;
  });
  return (
    <group ref={ref} scale={0.48}>
      {/* Crossbar — flattened box */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.6, 0.32, 0.32]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.35}
          metalness={0.1}
          roughness={0.55}
        />
      </mesh>
      {/* Center post */}
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[0.32, 0.6, 0.32]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.3} />
      </mesh>
      {/* Outer collars */}
      <mesh position={[1.05, -0.4, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color={NODE} emissive={ACCENT} emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[-1.05, -0.4, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color={NODE} emissive={ACCENT} emissiveIntensity={0.15} />
      </mesh>
    </group>
  );
}

function Agent({
  index,
  total,
  radius,
  speed,
  hovered,
  onHover,
}: {
  index: number;
  total: number;
  radius: number;
  speed: number;
  hovered: number | null;
  onHover: (i: number | null) => void;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const phase = (index / total) * Math.PI * 2;
  const tilt = ((index % 3) - 1) * 0.4;

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + phase;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.5) * 0.6 + tilt,
      Math.sin(t) * radius * 0.7,
    );
  });

  const isHover = hovered === index;
  return (
    <mesh
      ref={ref}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(index);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        onHover(null);
        document.body.style.cursor = 'auto';
      }}
    >
      <icosahedronGeometry args={[isHover ? 0.16 : 0.11, 0]} />
      <meshStandardMaterial
        color={isHover ? ACCENT : NODE}
        emissive={isHover ? ACCENT : NODE_DIM}
        emissiveIntensity={isHover ? 0.6 : 0.2}
        metalness={0.2}
        roughness={0.4}
      />
    </mesh>
  );
}

function HarnessLines({ count }: { count: number }) {
  // Static thin lines from origin to a sphere shell — gives the "harness"
  // feeling without animating per frame (cheaper).
  const positions = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < count; i++) {
      const phase = (i / count) * Math.PI * 2;
      const r = 1.6;
      arr.push(0, 0, 0);
      arr.push(Math.cos(phase) * r, Math.sin(phase) * 0.3, Math.sin(phase) * r * 0.7);
    }
    return new Float32Array(arr);
  }, [count]);

  const ref = useRef<THREE.LineSegments>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.05;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color={HARNESS} transparent opacity={0.5} />
    </lineSegments>
  );
}

function ParallaxRig() {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });
  useEffect(() => {
    function onMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.4;
      target.current = { x, y };
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  useFrame(() => {
    camera.position.x += (target.current.x - camera.position.x) * 0.04;
    camera.position.y += (-target.current.y - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene({ count }: { count: number }) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 6]} intensity={1.0} color="#ffffff" />
      <pointLight position={[-4, -2, -4]} intensity={0.4} color={ACCENT} />
      <CentralYoke />
      <HarnessLines count={count} />
      {Array.from({ length: count }).map((_, i) => (
        <Agent
          key={i}
          index={i}
          total={count}
          radius={1.6}
          speed={0.18 + (i % 3) * 0.04}
          hovered={hovered}
          onHover={setHovered}
        />
      ))}
      <ParallaxRig />
      {hovered !== null && (
        <Hud label={LABELS[hovered % LABELS.length]} />
      )}
    </>
  );
}

function Hud({ label }: { label: string }) {
  // Render the label by mutating a DOM element via ref — keeps the canvas
  // simple and avoids pulling drei/Html.
  useEffect(() => {
    const el = document.getElementById('fleet-hud-label');
    if (el) el.textContent = label;
    return () => {
      if (el) el.textContent = '';
    };
  }, [label]);
  return null;
}

export default function FleetScene({ count = 9 }: { count?: number }) {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 32 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <Scene count={count} />
      </Canvas>
      <div
        id="fleet-hud-label"
        className="pointer-events-none absolute bottom-4 right-4 font-mono text-[11px] uppercase tracking-wider text-accent"
        aria-hidden
      />
    </div>
  );
}
