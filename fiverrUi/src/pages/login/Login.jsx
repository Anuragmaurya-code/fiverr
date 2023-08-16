import React, { useState } from 'react'
import './Login.scss'
import newRequest from "../../utils/newRequest.js"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res=await newRequest.post("http://localhost:8000/api/auth/login", {
        username, 
        password,
      })//axios is used because it handles error and parsers data automatically
      //based on content type compared to normal fetch
      // with credentials for cookies
      localStorage.setItem("currentUser",JSON.stringify(res.data))
      navigate("/")
      
    } catch (err) {
      setError(err.response.data)
    }


  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input name="username" type="text" placeholder='joe' onChange={(e)=> setUsername(e.target.value)} />
        <label htmlFor="">Password</label>
        <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
        {error && error} 

      </form>
    </div>
  )
}

export default Login