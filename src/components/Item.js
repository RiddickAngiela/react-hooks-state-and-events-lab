import React from "react";
import {useState} from "react"

function Item({ name, category }) {
  const[cart,setCart]=useState (false)

  function handleClick() {
    setCart((cart)=> !cart)
  }
  const inCart = cart ? "in-cart" : ""
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
