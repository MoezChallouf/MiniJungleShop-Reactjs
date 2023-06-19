import React, { useState } from "react";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem.js"
import '../styles/ShoppingList.css'
import Categories from "./Categories";



function ShoppingList({cart,updateCart}) {
  const[activeCategory, setActiveCategory]= useState('')
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  function addToCart(name,price){
    const plantSaved=cart.find((plant)=>plant.name===name)
    if(plantSaved){
      const cartFiltred=cart.filter((plant)=>plant.name!==name)
      updateCart([...cartFiltred,{name,price,amount:plantSaved.amount+1}])
    }else{
      updateCart([...cart,{name,price,amount:1}])
    }
  }

  return (
    <div className="jh-shopping-list">
      <Categories categories={categories}
      setActiveCategory={setActiveCategory}
      activeCategory={activeCategory}/>
      <ul className="jh-plant-list">
        
            
       {
        plantList.map(({id,cover,name,water,light,price,category})=>(
          !activeCategory || activeCategory === category ?(
          <div key={id}>
          <PlantItem 
          key={id}
          water={water}
          light={light}
          name={name}
          cover={cover}
          price={price}
          /> <button onClick={()=> addToCart(name,price)}>Add</button> 
          </div>
        ):null
        ))
       }

      </ul>
    </div>
  );
      }

export default ShoppingList;
