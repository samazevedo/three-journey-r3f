import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import * as THREE from 'three'

export const Box = (props: JSX.IntrinsicElements['mesh']) => {
    const boxRef = useRef<THREE.Mesh>(null!)

    useFrame(() => {
        boxRef.current.rotation.x += 0.01
        boxRef.current.rotation.y += 0.02
    })

    return (
        <mesh scale={1} position={[-2, 0, 0]} ref={boxRef} {...props}>
            <boxGeometry args={[1.5, 1, 1]} />
            <meshBasicMaterial color='blue' />
        </mesh>
    )
}

export const First = () => {
    return (
        <>
            <Canvas>
                <mesh scale={1} position={[2, 0.5, 0.5]}>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshBasicMaterial color='lime' wireframe />
                </mesh>
                <mesh scale={5} position={[0, -2, 0]} rotation={[-1.5, 0, 0]}>
                    <planeGeometry args={[1, 1, 100]} />
                    <meshBasicMaterial color='red' />
                </mesh>
                <Box />
            </Canvas>
            <Link to={`/`} className='returnBtn'>
                Return
            </Link>
        </>
    )
}
