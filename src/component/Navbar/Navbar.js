import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = (props) => {
  let navigate = useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token');
    props.showalert("logged out", 'success')
    navigate('/');
  }
  return (
    <div className='navbar-body'>
      {
      localStorage.getItem('token') &&
      <button className='logout' onClick={handleLogout}>LOGOUT</button> 
      }
    </div>
  )
}

export default Navbar