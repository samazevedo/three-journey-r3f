import { Canvas, useFrame, RootState } from '@react-three/fiber'
import { useRef, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// extend({ OrbitControls })
import { OrbitControls } from '@react-three/drei'

export const Box = (props: JSX.IntrinsicElements['mesh']) => {
    const boxRef = useRef<THREE.Mesh>(null!)

    useFrame((state: RootState, delta: number) => {
        boxRef.current.rotation.x += delta * 0.5
        boxRef.current.rotation.y += delta * 0.5
    })

    return (
        <mesh scale={1} position={[-2, 0, 0]} ref={boxRef} {...props}>
            <boxGeometry args={[1.5, 1, 1]} />
            <meshStandardMaterial color='blue' />
        </mesh>
    )
}

export const Sphere = () => {
    const sphereRef = useRef<THREE.Mesh>(null!)

    useFrame(() => {
        sphereRef.current.rotation.x += 0.01
    })
    return (
        <mesh ref={sphereRef}>
            <sphereGeometry />
            <meshStandardMaterial color='green' />
        </mesh>
    )
}

export const Plane = () => {
    return (
        <mesh scale={7} rotation={[-1.5, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[2, 2, 100]} />
            <meshBasicMaterial color={'#1F1F1F'} wireframe />
        </mesh>
    )
}
export const CanvasEl = () => {
    // const { camera, gl } = useThree()

    return (
        <Canvas
            // orthographic
            // flat
            dpr={[1, 2]}
            gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                outputColorSpace: THREE.SRGBColorSpace,
            }}
            camera={{
                fov: 60,
                near: 0.01,
                far: 200,
                // position: [1, 1, 1],
                // zoom: -10,
            }}
        >
            <OrbitControls />
            <pointLight />
            <directionalLight position={[1, 2, 2]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            <Box />
            <Sphere />
            <CustomObject />
            <Plane />
        </Canvas>
    )
}

export const CustomObject = () => {
    const objRef = useRef<THREE.BufferGeometry>(null!)
    const verticesCount = 10 * 3

    const positions = useMemo(() => {
        const positions = new Float32Array(verticesCount * 3)
        for (let i = 0; i < verticesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 3
        }
        return positions
    }, [verticesCount])

    useEffect(() => {
        console.log(objRef.current)
        objRef.current.computeVertexNormals()
    }, [])
    return (
        <mesh position={[3, 1, 1]}>
            <bufferGeometry ref={objRef}>
                <bufferAttribute
                    attach='attributes-position'
                    count={verticesCount}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
            <meshBasicMaterial color='purple' side={THREE.DoubleSide} />
        </mesh>
    )
}

export const First = () => {
    return (
        <>
            <CanvasEl />
            <Link to={`/`} className='returnBtn'>
                Return
            </Link>
        </>
    )
}
