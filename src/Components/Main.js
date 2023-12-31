import React from 'react'
import Product from './Product'

export default function Main(props) {
    const {product, onAdd} = props;
  return (
    <div className='block col-2'>
        <h2>Product</h2>
        <div className='row'>
            {products.map((product) => (
                < Product key={product.id} product={product} onAdd={onAdd} />
            ) )}
        </div>
        </div>
  )
}
