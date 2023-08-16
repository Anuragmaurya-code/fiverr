import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const {pathname}=useLocation();

  const isActive=()=>{
    window.scrollY>0?setActive(true):setActive(false);
  }
  useEffect(()=>{
    window.addEventListener("scroll",isActive);//element.addEventListener(event, function);

    return ()=>{
      window.removeEventListener("scroll",isActive);// as job is done 
      //it removes event listener and it needs the function too to work or else it
      // will continue to implement it
    }
  },[])

  const navigate=useNavigate()
  const currentUser=JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout=async()=>{
    try {
      await newRequest.post('/auth/logout')
      localStorage.setItem("currentUser",null)
      navigate("/")
      
      
    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <div className={active || pathname!='/' ? "navbar active" : "navbar"}>
      <div className='container'>
        <div className='logo'>
        <Link to="/" className='link'>
          <span className='text'>fiverr</span>
        </Link>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <Link className='link' to="/login"><span>Sign In</span></Link>}
          {!currentUser && <Link className='link' to="/register"><button>Join</button></Link>}
          {currentUser && (
            <div className="user" onClick={()=>{open?setOpen(false):setOpen(true)}}>
            <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open &&<div className="options">
                {
                  currentUser?.isSeller && (
                    <>
                      <Link className='link' to="/mygigs">Gigs</Link>
                      <Link  className='link' to="add" >Add new Gig</Link>
                    </>
                  )}
                <Link  className='link' to="orders">Orders</Link>
                <Link  className='link' to="messages">Messages</Link>
                <Link  className='link' onClick={handleLogout} >Logout</Link>
              </div>
              }
            </div>
          )}
          
          
        </div>
      </div>
      {
        (active || pathname!='/' ) && <>
          <hr />
          <div className='menu'>
            <Link className='link menuLink' to="/">
              Graphic & Design
            </Link>
            <Link className='link menuLink' to="/">
              Video & Animation 
            </Link>
            <Link className='link menuLink' to="/">
              Writing & Translation
            </Link>
            <Link className='link menuLink' to="/">
              AI Services
            </Link>
            <Link className='link menuLink' to="/">
              Digital Marketing
            </Link>
            <Link className='link menuLink' to="/">
              AI Services
            </Link>
            <Link className='link menuLink' to="/">
              Music and Audio
            </Link>
            <Link className='link menuLink' to="/">
               Business
            </Link>
          </div>
        </>
      }
    </div>
  )
}

export default Navbar
