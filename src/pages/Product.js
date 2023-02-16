import React, { useState } from 'react'
import Products from '../components/products/Products'
import Productshorting from '../components/productshorting/Productshorting'

export default function Product() {
  const[row, setrow] = useState(false)
  return (
    <div className='productmainpage w-[80%] m-auto'>
      <div className=''>
        <Productshorting></Productshorting>
      </div>
      <hr className='mt-8'/>
      <div className='mt-8'>
        <Products row={row}></Products>
      </div>
    </div>
  )
}
