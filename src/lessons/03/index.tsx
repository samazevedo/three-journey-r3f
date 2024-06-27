import * as THREE from "three"
import { Suspense, useRef } from "react"
import { Text3D, Center } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { useSpring, a } from "@react-spring/three"
import { Link } from "react-router-dom"
import { Objects } from "./Objects"

export const Text = () => {
	const meshRef = useRef<THREE.Mesh>(null!)
	const texture = useLoader(THREE.TextureLoader, "/assets/matcaps/blue.png")

	const [props] = useSpring(() => ({
		from: { trasform: "translate3d(100%, 0, -500px)" },
		to: { trasform: "translate3d(0%, 0, -10px)" },
		config: { mass: 1, tension: 80, friction: 10, precision: 0.0001 },
	}))

	return (
		<>
			<Center>
				<a.mesh ref={meshRef} {...props}>
					<Text3D
						font="/fonts/philosopher/bold.json"
						size={0.2}
						height={0.01}
						curveSegments={12}
						bevelEnabled
						bevelThickness={0.01}
						bevelSize={0.01}
						bevelOffset={0}
						bevelSegments={5}
					>
						SAM AZEVEDO
						<meshMatcapMaterial matcap={texture} />
					</Text3D>
				</a.mesh>
			</Center>
		</>
	)
}

export const Logo3D = () => {
	return (
		<>
			<Link to={"/"}>Return</Link>

			<Canvas
				dpr={[1, 2]}
				camera={{ position: [0, 0, 2], fov: 75 }}
				style={{
					width: "100%",
					height: "100vh",
					position: "absolute",
				}}
			>
				<Suspense fallback={null}>
					<Text />
					<Objects />
				</Suspense>
			</Canvas>
		</>
	)
}

{
	/* <rawShaderMaterial
				vertexShader={vertex}
				fragmentShader={fragment}
				uniforms={uniforms}
				transparent
				glslVersion={THREE.GLSL3}
			/> */
}
