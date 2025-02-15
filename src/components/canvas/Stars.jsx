import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm.js';

const StyledCanvasWrapper = {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    inset: '0'
};

const Stars = (props) => {
    const ref = useRef();
    const frameCount = useRef(0);

    // Memoiza la posición de las estrellas para evitar cálculos innecesarios
    const sphere = useMemo(
        () => random.inSphere(new Float32Array(2000), { radius: 1.2 }),
        []
    );

    useFrame((_, delta) => {
        if (frameCount.current % 2 === 0 && ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
        frameCount.current++;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StyledStarCanvas = () => {
    return (
        <div style={StyledCanvasWrapper}>
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StyledStarCanvas;