import React, { useState } from 'react';
import data from './Data';
import Header from './Header';
import Basket from './Basket';
import Main from './Main';
import './Eshop.css'


export default function Easyshop() {
  const {products} = data;

  const [cartItems, setCartItems] = useState([]);

  //events logic
  const onAdd = (product) => {
    const exist = cartItems.find((x) => keyboard.id === product.id );
    if(exist) {
      setCartItems(
        cartItems.map((x) => 
        x.id === product.id ? {...exist, qty: exist.qty +1 } : x 
         )
      );
    }else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };


  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(
        cartItems.map((x) >
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className='eshop'>
      <h1>Easyshop</h1>
       < Header />
       <div className='row'>
       < Main products={products} onAdd={onAdd} />
       < Basket products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
       </div>
    </div>
    
   
  )
}
