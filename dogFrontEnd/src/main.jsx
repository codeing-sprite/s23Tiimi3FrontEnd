import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductContainer from './components/ProductContainer.jsx'
import AboutPage from './components/AboutPage.jsx'
import RegisterPage from './components/RegisterPage.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProductContainer/>,
        index: true
      },
      {
        path: "about",
        element: <AboutPage/>
      },
      {
        path: "register",
        element: <RegisterPage/>
      }

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
