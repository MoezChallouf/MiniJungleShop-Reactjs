import React, { useState } from 'react'
import '../styles/Footer.css'

function Footer() {

    const [inputValue, setInputValue] = useState('')
    function handleInput(e){
        setInputValue(e.target.Value)
    }
    function handleBlur (){
        if(!inputValue?.includes('@')){
            alert ("Attention, there is no @, this is not a valid address")
        }
    }
  return (
    <footer className='jh-footer'>
        <div className='jh-footer-elem'>
            For plant enthusiasts
        </div>
        <div className='jh-footer-elem'>
            Subscribe to our newsletter
        </div>
        <input placeholder='Enter your email'
               onChange={handleInput}
               value={inputValue}
               onBlur={handleBlur}>
        </input>
    </footer>
  )
}

export default Footer