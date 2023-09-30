import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { User } from './pages/Usuario/Usuario.tsx'
import { Prof } from './pages/Profissional/Profissional.tsx'
import { Home } from './pages/Home/Home.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }, 
      {
        path: "User",
        element: <User/>
      },  
      {
        path: "Prof",
        element: <Prof/>
      },
    ],
  },
 
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
