import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


function Cart({headerCart, setHeaderCart}) {
    const [cart, setCart] = useState([])
    const navigate = useNavigate()

    const fetchCart = () => {
        axios.get('https://65fb125714650eb2100942c3.mockapi.io/cart').then((res) => {
            setCart(res.data)
            setHeaderCart(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchCart()
    }, [])

    const removeCart =(id)=>{
        axios.delete(`https://65fb125714650eb2100942c3.mockapi.io/cart/${id}`).then((res)=>{
            toast.success("Removed")
            fetchCart()
        }).catch((err)=>{
            console.log(err)
        })
    }

    const cartTotal = cart.reduce((prev, curr)=>prev+Number(curr.offerPrice),0)
    return (
        <div className='conatiner mx-5 '>
            <div className='row my-5 '>
                <div className='col-8'>
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            {
                                cart.map((item) => {
                                    return ( <li class="list-group-item">
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <img src={item.image} width={'100px'} height={'100px'} />
                                            <h3>{item.product_name}</h3>
                                            {item.offerPrice}
                                            <button className="btn btn-sm btn-outline-danger" onClick={()=>removeCart(item.id)}>Remove</button>
                                        </div>
                                    </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='col-4'>
                    <div class="card ">
                        <div class="card-body">
                            <h4 className="card-title">Payment </h4>
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><div className='d-flex justify-content-between align-items-center'><h5 className='text-muted'>Item in cart</h5><h5>{cart.length}</h5></div></li>
                                    <li class="list-group-item"><div className='d-flex justify-content-between align-items-center'><h5 className='text-muted'>Subtotal</h5><h5>${cartTotal}</h5></div></li>
                                    <li class="list-group-item"><div className='d-flex justify-content-between align-items-center'><h5 className='text-muted'>Delivery Charges</h5><h5 className='text-success'>Free</h5></div></li>
                                    <li class="list-group-item"><div className='d-flex justify-content-between align-items-center'><h5 className='text-muted'>Total</h5><h5>${cartTotal}</h5></div></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className='text-center my-5'>
                    <button className='proceed-btn' onClick={()=>navigate('/Checkout')}>Proceed to Payment</button>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Cart