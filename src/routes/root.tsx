import { Outlet, Link } from 'react-router-dom'

export const Root = () => {
    return (
        <>
            <main>
                <Outlet />
                <header className='header'>
                    <h1>Three.js Journey </h1>
                    <p>R3F - React Three Fiber</p>
                </header>
                <section>
                    <ul>
                        <li>
                            <Link to={`01`}>01 - First App</Link>
                        </li>
                        <li>
                            <Link to={'02'}>02 - Second</Link>
                        </li>
                        <li>
                            <Link to={'02'}>02 - Second</Link>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    )
}
