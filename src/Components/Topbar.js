import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from './Context/Context'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Login from './Login/Signup/Login'
import toast from 'react-hot-toast'
import './Topbar.css'
import Slide5 from'../Images/shop_away.png'

function Topbar() {
  const navigate = useNavigate()
  const cartTotal = useContext(UserContext)
  const [cart, setCart] = useState([])
  const [isLogin,setIsLogin] = useState(false)
  const[action,setAction] = useState("Sign Up")



const fetchCart = () => {
    axios.get('https://65fb125714650eb2100942c3.mockapi.io/cart').then((res) => {
      setCart(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleClick =()=>{
    if (action === "Login") {
      // Show a toast message indicating that the login button was clicked
      return toast.success("You're Logged In");
    } else if (action === "Sign Up") {
      // Show a toast message indicating that the sign up button was clicked
      return toast.success("You're Signed In");
    }
  };





  useEffect(() => {
    fetchCart()
  }, [])

  const onLogin = ()=>{
    setIsLogin(!isLogin)
  }

  
  return (
    <div>
    <nav class="navbar navbar-expand-lg p-3 mb-2 bg-danger-subtle text-danger-emphasis">
      <div class="container-fluid">
        <a className="navbar-brand fs-3 brand" href="#"><img src={Slide5} alt='shopawaylogo'class='' width="70" height="70"></img> SHOP AWAY</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active mx-5 fs-5" aria-current="page" href="#"><i class="fa fa-home mx-2" aria-hidden="true"></i>Home</a>
            </li>
            <form class="d-flex mx-5" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn-search mx-3" type="submit">Search</button>
            </form>
          </ul>
        </div>
        <div>
          <button className='cart-btn' onClick={() => navigate('/cart')}><i class="fa fa-shopping-cart mx-2" aria-hidden="true"></i><span class="badge text-bg-dark">{cartTotal.length}</span></button>
        </div>
        <div>
          <button className="log-btn mx-3" onClick={()=>onLogin()}><i class="fa fa-user mx-2" aria-hidden="true"> LOGIN</i></button>
        </div>
      </div>
    </nav>
    <Modal isOpen={isLogin} toggle={()=>setIsLogin(!isLogin)}  size="lg" centered className='body'>
      <ModalHeader className='close' toggle={()=>setIsLogin(!isLogin)}></ModalHeader>
      <ModalBody className='body-1'>
      <div className='container-1'>
    <div className='header'>
      <div className='text'>{action}</div>
      <div className='underline'></div>
    </div>
    <div className='inputs'>
      <div className='input'>
      {action==="Login"?<div></div>:<div className=' input-1 my-2 d-flex justify-content-center'>
       <i class="fa fa-user fa-2x" aria-hidden="true"></i><input className='mx-4 w-100 ' type='text' placeholder='Username'/>
       </div>}
      
       <div className=' input-2 my-4 d-flex justify-content-center'>
       <i class="fa fa-envelope fa-2x" aria-hidden="true" ></i><input  className='mx-4 w-100' type='email' placeholder='Email'/>
       </div>
       <div className=' input-3 my-4  d-flex justify-content-center'>
       <i class="fa fa-key fa-2x" aria-hidden="true"></i><input className='mx-4 w-100' type='password' placeholder='Password'/>
       </div>  
       {action==="Sign Up"?<div></div>: <div className='forget-password d-flex justify-content-center' >Lost Password?<span>Click Here!</span></div>}   
     
      <div className='Submit-container d-flex justify-content-center my-3'>
        <div className={action==="Login"?"Submit gray":"Submit"} onClick={()=>{setAction("Sign Up"); handleClick();}}>Sign Up</div>
        <div className={action==="Sign Up"?"Submit gray":"Submit"} onClick={()=>{setAction("Login"); handleClick();}}>Login</div>

      </div>

    </div>
    </div></div>
      </ModalBody>
      <ModalFooter className='sign-btn'>
      </ModalFooter>
    </Modal>
    </div>
  )
}

export default Topbar