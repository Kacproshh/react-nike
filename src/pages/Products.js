import React from 'react'
import '../styles/Products.css'
import { ProductsList } from "../helpers/ProductsList"
import ProductsItem from '../components/ProductsItem'
function Products() {
  return (
    <div className='products'>
      <h1 className='title'>Our Sneakers</h1>
      <div className='productsList'>{ProductsList.map((productsItem, key) => {
        return <ProductsItem 
        key={key}
        image={productsItem.image} name={productsItem.name} price={productsItem.price} />
      })}</div> 
    </div>
  )
}

export default Products
