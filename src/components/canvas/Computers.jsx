import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float, MeshDistortMaterial, GradientTexture } from "@react-three/drei";
import CanvasLoader from "../Loader.jsx";

const AbstractModel = ({ isMobile }) => {
    const meshRef = useRef();
    const torusRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;
        }
        if (torusRef.current) {
            torusRef.current.rotation.x = time * 0.1;
            torusRef.current.rotation.y = time * 0.1;
        }
    });

    return (
        <group scale={isMobile ? 0.6 : 1} position={isMobile ? [0, -1, 0] : [0, -0.5, 0]}>
            {/* Central Distorted Sphere */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[1, 16]} />
                    <MeshDistortMaterial
                        color="#915EFF"
                        attach="material"
                        distort={0.6}
                        speed={2}
                        roughness={0}
                        metalness={0.8}
                    />
                </mesh>
            </Float>

            {/* Outer Rotating Ring */}
            <mesh ref={torusRef} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.5, 0.2, 16, 100]} />
                <meshStandardMaterial color="#ffffff" wireframe opacity={0.1} transparent />
            </mesh>

            {/* Inner Rotating Ring */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.8, 0.1, 16, 100]} />
                <meshStandardMaterial color="#915EFF" wireframe opacity={0.2} transparent />
            </mesh>

            {/* Floating Particles */}
            <Float speed={4} rotationIntensity={2} floatIntensity={4}>
                <mesh position={[3, 1, -2]}>
                    <sphereGeometry args={[0.2, 32, 32]} />
                    <meshStandardMaterial color="#ff0080" emissive="#ff0080" emissiveIntensity={2} />
                </mesh>
            </Float>
            <Float speed={3} rotationIntensity={2} floatIntensity={3}>
                <mesh position={[-3, -1, 2]}>
                    <sphereGeometry args={[0.15, 32, 32]} />
                    <meshStandardMaterial color="#00ff80" emissive="#00ff80" emissiveIntensity={2} />
                </mesh>
            </Float>
            <Float speed={5} rotationIntensity={3} floatIntensity={5}>
                <mesh position={[1, 3, 1]}>
                    <boxGeometry args={[0.3, 0.3, 0.3]} />
                    <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
                </mesh>
            </Float>
        </group>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='always'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight
                    position={[-20, 50, 10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={1}
                    castShadow
                />
                <AbstractModel isMobile={isMobile} />
            </Suspense>

            {/* <Preload all /> */}
        </Canvas>
    );
};

export default ComputersCanvas;
