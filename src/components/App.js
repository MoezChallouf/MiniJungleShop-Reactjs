import React, { useState } from "react";
import Banner from "./Banner";
import Cart  from "./Cart";
import ShoppingList  from "./ShoppingList";
import '../styles/Layout.css'
import Footer from "./Footer";


function App () {
    const[cart,updateCart]=useState([])
    return(
       <div> <Banner/>
       <div className="jh-layout-inner">
       <Cart cart={cart} updateCart={updateCart}/>
       <ShoppingList cart={cart} updateCart={updateCart}/>
       
       </div>
       <Footer/>
       </div>
    )
}

export default App