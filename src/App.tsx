import { Link } from "react-router-dom"

export const APP = () => {
	return (
		<main>
			<ul>
				<li>
					<Link to={`01`}>01 - First App</Link>
				</li>
				<li>
					<Link to={"02"}>02 - Second</Link>
				</li>
				<li>
					<Link to={"03"}>03 - 3D Text</Link>
				</li>
			</ul>
		</main>
	)
}
