import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm.js'

const StyledCanvasWrapper = {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    inset: '0'
}


const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(2000), { radius: 1.2}));
    let frameCount = 0;
    useFrame((state, delta) => {
        if (frameCount % 2 === 0) { // Solo actualiza cada 2 frames
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
        }
    frameCount++;
    });
    return (
        <group rotation = {[0,0,Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial 
                    transparent 
                    color='#f272c8'
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    />
            </Points>
        </group>
    );
};

const StyledStarCanvas = () => {
    return (
        <div style={StyledCanvasWrapper}>
            <Canvas camera={{position: [0,0,1]}} performance={{ dpr: [1, 1.5] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StyledStarCanvas;