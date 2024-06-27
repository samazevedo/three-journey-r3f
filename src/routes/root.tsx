import { Outlet } from "react-router-dom"
import { APP } from "../App"
import { Header } from "../components/Header"

export const Root = () => {
	return (
		<>
			<Outlet />
			<Header />
			<APP />
		</>
	)
}
