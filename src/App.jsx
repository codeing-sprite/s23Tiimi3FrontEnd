import { Link, Outlet } from 'react-router-dom'
import './App.css'
import { Button } from '@mui/material'


export default function App() {
  return (
    <>
      <nav className='nav-button'>
        <Link to={"/"}><Button>Doggystore</Button></Link> 
        <Link to={"/about"}><Button>About</Button></Link>
        <Link to={"/profile"}><Button>Profile</Button></Link>
      </nav>
		<Outlet/>
    </>
  )
}

