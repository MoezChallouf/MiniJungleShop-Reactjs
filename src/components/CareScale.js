import React from 'react'
import Sun from "../assets/sun.svg"
import Water from "../assets/water.svg"

function CareScale({scaleValue,careType}) {
    
const quantityLabel={
    1:"little",
    2:"moderate",
    3:"much"
}
const range =[1,2,3]
const scaleType = careType ==="light"?
(<img src={Sun} alt="sun-icon"/>):
(<img src={Water} alt="water-icon"/>)
  return (
    <div onClick={()=> 
    alert(`this plant requires ${quantityLabel[scaleValue]} ${careType==='light'?'light':'water'}`)}>
        {range.map((elm)=>scaleValue>=elm?(
            <span key={elm.toString()}>{scaleType}</span>):null )}
    </div>
  )
}

export default CareScale

