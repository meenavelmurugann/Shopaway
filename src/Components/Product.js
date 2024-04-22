import React, { useEffect, useState } from 'react'
import Slide1 from '../Images/Slide-4.jpg'
import './Product.css'
import axios from 'axios'
import { List } from 'reactstrap'
import toast from 'react-hot-toast'

function Product({ cart,setCart}) {


    //step 3
    const [product, setProduct] = useState([])


    //step 1
    const fetchProduct = () => {
        axios.get('https://65fb125714650eb2100942c3.mockapi.io/product').then((res) => {
            setProduct(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    //step 2

    useEffect(() => {
        fetchProduct()
    }, [])

   const addToCart = (data)=>{
    axios.post('https://65fb125714650eb2100942c3.mockapi.io/cart',data).then((res)=>{
    console.log(res)
    setCart({...cart,data})
    toast.success("Added To Cart")
    }).catch((err)=>{
        console.log(err)
    })
   }

    return (
        <div className='container'>
            <h1 className='ourproduct-btn my-5'>Our Products</h1>
            <div className='row mt-5'>
                {
                    product.map((list)=>{
                        return <div className='col-4 my-3'>
                        <div class="card p-3 product-card" style={{ width: "18rem;" }}>
                            <img src={list.image} class="card-img-top image-design" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{list.product_name}</h5>
                                <h6 className="text-decoration-line-through text-muted">${list.price}</h6>
                                <h6 className="text-success"> Offer Price: ${list.offerPrice}</h6>
                                <h6><span className="badge text-bg-success">{list.rating}<i class="fa fa-star" aria-hidden="true"></i></span></h6>
                                <p class="card-text">{list.description}</p>
                                <div className='d-flex justify-content-space-between align-items-center'>
                                    <button className='product-btn' onClick={()=>addToCart(list)}><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</button>
                                    <button className='product-buy mx-3'><i class="fa fa-bolt" aria-hidden="true"></i> Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    })
                }
                
            </div>
        </div>
    )
}

export default Product