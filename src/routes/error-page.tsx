import { useRouteError } from 'react-router-dom'
import { RouteError } from '../types/errors'

export const ErrorPage = () => {
    const error = useRouteError() as RouteError
    console.log(error)

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
