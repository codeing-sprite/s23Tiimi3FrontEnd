import { useState } from "react"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import axios from 'axios';


export default function RegisterPage() {

    const [username, setUsername] = useState("")
    const [passwordHash, setPasswordHash] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    const REST_URL = 'http://localhost:8080';

    const register = (e) => {
      e.preventDefault()
      const newUser = {
          username: username,
          passwordHash: passwordHash,
          email: email,
          role: role
      }

        axios.post(`${REST_URL}/rest/register`, newUser,{
          headers: {
            'Content-Type' : 'application/json'
          },
        })
			.then((response) => {
				console.log(response.data);
			})  
    }

    return (
      <Card className="user" sx={{maxWidth: 400, backgroundColor: ""}}>
        <CardActionArea>
          <CardContent>
            <Typography component="div">
            <form onSubmit={(e) => register(e)}>
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    PasswordHash:
                    <input type="text" name="passwordHash" value={passwordHash} onChange={(e) => setPasswordHash(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Role:
                    <input type="text" name="role" value={role} onChange={(e) => setRole(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }