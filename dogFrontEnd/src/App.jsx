import './App.css'
import PrductContainer from './PrductContainer'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <div className='nav-bar'>
            <Link to="/">Doggystore</Link>
            <Link to="about">About Us</Link>
          </div>
          <PrductContainer />
        </div>
      ),
    },
    {
      path: "about",
      element: (
        <div>
          <div className='nav-bar'>
            <Link to="/">Doggystore</Link>
            <Link to="about">About Us</Link>
          </div>
          <div>About</div>
        </div>
      ),
    },
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
