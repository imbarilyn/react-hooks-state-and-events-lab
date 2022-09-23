import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddtoCart] =useState(false);
  function handleCart (){
    setAddtoCart((addToCart)=> !addToCart)
  }

  const cartClass = addToCart? "in-cart": "";
  const btnColor = addToCart? "remove": "add";
  return (
    <li className= {cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {btnColor} onClick ={handleCart}>{addToCart? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
