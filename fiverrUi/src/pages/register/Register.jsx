import React, { useState } from 'react'
import './Register.scss'
import upload from '../../utils/upload'
import newRequest from '../../utils/newRequest.js'
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const [file, setFile] = useState(null)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  })
  const navigate=useNavigate()
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value } // [] are required so that the property name is set as 
      // the value as e.target.name and not "e.target.name" literally
    })
  }
  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked } // [] are required so that the property name is set as 
      // the value as e.target.name and not "e.target.name" literally
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const url=await upload(file)
    try {
      await newRequest.post("/auth/register",{...user,img:url})
      navigate("/")
      
    } catch (error) {
      
    }
  }
  return (

    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" placeholder='joerogan' onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder='joerogan@gmail.com' onChange={handleChange} />
          <label htmlFor="password">Passwort</label>
          <input name="password" type="password" placeholder='enter password' onChange={handleChange} />
          <label htmlFor="photo">Profile Picture</label>
          <input name="photo" type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="country">Country</label>
          <input name="country" type="text" placeholder='usa' onChange={handleChange} />
          <button type='submit'>Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="phone">Phone Number</label>
          <input name="phone" type="number" placeholder='+1 875 732 837' onChange={handleChange} />
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            cols={30}
            row={10}
            placeholder='A short descrition of you self' onChange={handleChange} />

        </div>

      </form>
    </div>

  )
}

export default Register
