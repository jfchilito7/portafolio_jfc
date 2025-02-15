import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Earth = () => {
    const { scene } = useGLTF('/planet/scene.gltf');

    // Memoiza el modelo para evitar renders innecesarios
    const earthModel = useMemo(() => scene, [scene]);

    return <primitive object={earthModel} scale={3} position-y={0} rotation={[0, 0, 0]} />;
};

// Fallback válido dentro del Canvas
const Loader = () => (
    <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="gray" />
    </mesh>
);

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.5}
                    enableZoom
                    minDistance={5}
                    maxDistance={10}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;