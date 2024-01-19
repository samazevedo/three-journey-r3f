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

export const Sphere = () => {
    const sphereRef = useRef<THREE.Mesh>(null!)

    useFrame(() => {
        sphereRef.current.rotation.x += 0.01
    })
    return (
        <mesh ref={sphereRef}>
            <sphereGeometry />
            <meshNormalMaterial wireframe />
        </mesh>
    )
}

export const Plane = () => {
    return (
        <mesh scale={5} rotation={[-1.5, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry />
            <meshStandardMaterial color='orange' />
        </mesh>
    )
}

export const First = () => {
    return (
        <>
            <Canvas>
                <Box />
                <Sphere />
                <Plane />
            </Canvas>
            <Link to={`/`} className='returnBtn'>
                Return
            </Link>
        </>
    )
}
