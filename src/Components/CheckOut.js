import React, { useContext } from 'react'
import UserContext from './Context/Context'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import './CheckOut.css'

function CheckOut() {
    const cartData = useContext(UserContext)
    const cartTotal = cartData.reduce((prev, curr) => prev + Number(curr.offerPrice), 0)


    const orderNow = ()=>{
        toast.success("Your Order has been Placed")
    }
    return (
        <div className='container'>
            <div className='row my-5'>
                <div className='col-8'>
                    <div class="card w-50">
                        <div class="card-body">
                            <div className='row'>
                                <div className='col-12'>
                                    <div class="mb-3">
                                        <label class="form-label">Card Number</label>
                                        <input type="number"maxLength={16} placeholder="1234 5678 9012 3456"class="form-control" />
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div class="mb-3">
                                        <label className="form-label">Card Holder Name</label>
                                        <input type="text" placeholder="Enter Name"class="form-control" />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label className="form-label">Expiry Date</label>
                                        <input type="date" placeholder="MM/YY"class="form-control" />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label className="form-label">CVV</label>
                                        <input type="number" placeholder="123"class="form-control" />
                                    </div>
                                </div>
                                <button className='btn btn-sm btn-outline-success' onClick={()=>orderNow()}>Pay Now ${cartTotal}</button>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div className='col-4'>
                    <div class="card ">
                        <div class="card-body">
                            <h4 class="card-title">Payment</h4>
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><div className='d-flex justify-content-between align-items-center'><h5 className='text-muted'>Item in cart</h5><h5>{cartData.length}</h5></div></li>
                                    <li class="list-group-item"><div className='d-flex justify-content-between align-items-center'><h5 className='text-muted'>Subtotal</h5><h5>${cartTotal}</h5></div></li>
                                    <li class="list-group-item"><div className='d-flex justify-content-between align-items-center'><h5 className='text-muted'>Delivery Charges</h5><h5 className='text-success'>Free</h5></div></li>
                                    <li class="list-group-item"><div className='d-flex justify-content-between align-items-center'><h5 className='text-muted'>Total</h5><h5>${cartTotal}</h5></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut