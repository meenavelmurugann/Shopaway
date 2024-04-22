import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './Components/Topbar';
import Slides from './Components/Slides';
import Product from './Components/Product.js';
import Cart from './Components/Cart.js';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './Components/Context/Context.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CheckOut from './Components/CheckOut.js';
import Login from './Components/Login/Signup/Login.js';

function App() {
  const [cart,setCart]=useState([])

  const toastOptions={
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
}

  const fetchCart = ()=>{
    axios.get('https://65fb125714650eb2100942c3.mockapi.io/cart').then((res)=>{
      setCart(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    fetchCart() 
  },[cart])
  return (
    <BrowserRouter>
    <UserProvider value={cart}>
    <Topbar/>
    <Slides/>
    <Login></Login>
    <Routes>
      <Route path='/' element={<Product  cart={cart} setCart={setCart}/>}/>
      <Route path='/cart' element={<Cart  headerCart={cart} setHeaderCart={setCart}/>}/>
      <Route path='/Checkout' element={<CheckOut/>}/>
   
    </Routes>
    <Toaster position="bottom-center" toastOptions = {toastOptions}/>
    </UserProvider>
    </BrowserRouter>
  );
}

export default App;
