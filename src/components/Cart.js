import React, { useEffect, useState } from 'react'
import '../styles/Cart.css'

function Cart({cart,updateCart}) {
    const[isOpen , setIsOpen]=useState(true)
    const total=cart.reduce((acc,plantType)=>
    acc+plantType.amount*plantType.price,0)

    useEffect(()=>{
        alert (`you have a total purchase of ${total}`)
    },[total])
  return (
    isOpen?(
        <div className='jh-cart'>
            <button className='jh-cart-toggle-button' onClick={()=>setIsOpen(false)}>close</button>
{cart.length>0 ?(
    <div><h2>Cart</h2>
    <ul>
        {cart.map (({name,price,amount},index)=>(
            <div key={`${name}-${index}`}>{name} {price}£ * {amount}</div>
        ))}
    </ul>
    <h3>Total:{total}£</h3>
    <button onClick={()=>updateCart([])}>Empty the cart</button>

        </div>):(<div>your cart is empty</div>)}
        </div>):(<div className='jh-cart-closed'>
            <button className='jh-cart-toggle-buttom' 
            onClick={()=>setIsOpen(true)}>Open Cart</button>
        </div>)
  )}
    
  


export default Cart;