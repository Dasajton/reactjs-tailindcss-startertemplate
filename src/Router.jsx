import { createBrowserRouter } from 'react-router-dom'
import { Home, About, Contact, NotFound } from './pages'
import App from './App.jsx'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])
