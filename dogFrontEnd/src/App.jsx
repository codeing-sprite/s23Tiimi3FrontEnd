import { Link, Outlet } from 'react-router-dom'
import './App.css'
import { Button } from '@mui/material'


export default function App() {

  
  
  return (
    <>
        <nav>

		<Button>
		<Link to={"/"}>Doggystore</Link>
		</Button>
        <Button>
			<Link to={"/about"}>About</Link>
		</Button>

		

        </nav>
		<Outlet/>
    </>
  )
}

