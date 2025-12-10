import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const PARTICLES_COUNT = 3000;

function ParticleWave() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(PARTICLES_COUNT * 3);
    for (let i = 0; i < PARTICLES_COUNT; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 10;
      pos[i3 + 1] = (Math.random() - 0.5) * 10;
      pos[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < PARTICLES_COUNT; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const z = positions[i3 + 2];
      
      positions[i3 + 1] = Math.sin(x * 0.5 + time) * Math.cos(z * 0.5 + time) * 0.5;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.05;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          className="h-full w-full"
        >
          <ParticleWave />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-5xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl lg:text-8xl">
            Mustafa Dalga
          </h1>
          
          <p className="mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 md:text-4xl lg:text-5xl">
            Senior Front-End Engineer
          </p>
          
          <div className="mb-8 inline-block">
            <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 backdrop-blur-sm">
              <p className="text-lg font-medium text-cyan-300 md:text-xl">
                ⚡ Performance Optimization Specialist
              </p>
            </div>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-6 text-white/90">
            <div className="group">
              <p className="text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">7+</p>
              <p className="text-sm text-white/70">Years Experience</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="group">
              <p className="text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform">80%</p>
              <p className="text-sm text-white/70">Load Time Reduction</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="group">
              <p className="text-3xl font-bold text-blue-400 group-hover:scale-110 transition-transform">70%</p>
              <p className="text-sm text-white/70">Performance Boost</p>
            </div>
          </div>

          <a
            href="#background"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/60"
          >
            Explore My Work
            <svg 
              className="h-5 w-5 transition-transform group-hover:translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-white/30">
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
