import { useState } from "react"
import Register from "./Register"
import Profile from "./Profile"

export default function ProfilePage() {

    const [loggedUser, setLoggedUser] = useState(false)
    const [newUser,setNewUser] = useState(true)

    return (
      <>
        {loggedUser ?
        <Profile />
        :
            (newUser ?
            <Register /> 
            :
            <LoginPage />
            )
        }
      </>
    )
  }