import * as THREE from "three"
import { useMemo, useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
interface ObjectProps {
	position?: [number, number, number]
	rotation?: [number, number, number]
	scale?: number
}
export const Objects = ({ position, rotation, scale }: ObjectProps) => {
	const groupRef = useRef<THREE.Group>(null!)

	// const [object, setObject] = useState()
	const texture = useLoader(THREE.TextureLoader, "/assets/matcaps/orange.png")

	// create geometry and material
	const geometry = useMemo(() => new THREE.TorusGeometry(0.5, 0.2, 16, 32), [])
	const material = useMemo(
		() => new THREE.MeshMatcapMaterial({ matcap: texture }),
		[texture]
	)
	// memorize positions
	const objects = useMemo(() => {
		const objects: ObjectProps[] = []
		const range = 10 // define the range around the camera
		const offset = 5 // center around the origin, adjust depending on the camera position
		for (let i = 0; i < 100; i++) {
			objects.push({
				position: [
					Math.random() * range - offset, // positions from -5 to +5
					Math.random() * range - offset,
					Math.random() * range - offset,
				],
				scale: 0.2 + Math.random() * 0.2,
				rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
				// position: [
				// 	(Math.random() - 5) * 10,
				// 	(Math.random() - 5) * 10,
				// 	(Math.random() - 5) * 10,
				// ],
				// scale: 0.2 + Math.random() * 0.2,
				// rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
			})
		}
		return objects
	}, [])

	useFrame((state, delta) => {
		if (groupRef.current) {
			for (const obj of groupRef.current.children) {
				obj.rotation.y += delta * 0.2
			}
			groupRef.current.rotation.y += delta * 0.1
			groupRef.current.rotation.x += delta * 0.1
		}
	})

	return (
		<group ref={groupRef}>
			{objects.map((obj, i) => (
				<mesh
					key={i}
					position={obj.position}
					rotation={obj.rotation}
					scale={obj.scale}
					material={material}
					geometry={geometry}
				/>
			))}
		</group>
	)
}
