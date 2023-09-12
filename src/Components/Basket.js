import React from 'react'

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;



  return (
    <aside className='block col-1'>Basket</aside>
  )
}
