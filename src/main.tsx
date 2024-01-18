import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './routes/root'
import './styles/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './routes/error-page'
import { First } from './lessons/01'

const router = createBrowserRouter([
    {
        path: '*',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                // path: 'contact/:contactId',
                // element: <Contact/>
            },
        ],
    },
    {
        path: '01/',
        element: <First />,
    },
])

const root = createRoot(document.getElementById('root')!)
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
