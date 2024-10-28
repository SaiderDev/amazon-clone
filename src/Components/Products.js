import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'
import Product from './Product'

const Products = (id,image,title,rating,price) => {
  return (
    <>
    <div className='products_row'>
      <Product id='1' title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light"
      image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg"
      rating={3.9}
      price="R899.99"
      />
      <Product id='1' title="Redragon S101 Gaming Keyboard, M601 Mouse, RGB Backlit Gaming Keyboard, Programmable Backlit Gaming Mouse, Value Combo Set [New Version]"
      image="https://m.media-amazon.com/images/I/71QDJHG1PqL._AC_UY327_FMwebp_QL65_.jpg"
      rating={4.8}
      price="R1299.99"
      />
    </div>
    <div className='products_row'>
      <Product id='1' title="AutoFull Gaming Chair, Racing Style Gaming Chair with Ergonomic Lumbar Support,Adjustable High Back PU Leather PC Chair with Footrest,Brown"
      image="https://m.media-amazon.com/images/I/61vRT8YrsHL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
      rating={3.8}
      price="R2999.99"
      />
      <Product id='1' title="ACEMAGIC 2024 Newest Gaming Laptop, 16.1-inch FHD Display Laptop with AMD Ryzen 7 "
      image="https://m.media-amazon.com/images/I/71AT3h80DXL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
      rating={4.6}
      price="R42 799.99"
      />
      <Product id='1' title="ASUS ROG Strix G16 (2024) Gaming Laptop, 16” 16:10 FHD 165Hz Display, NVIDIA® GeForce RTX™ 4060"
      image="https://m.media-amazon.com/images/I/81GrCeuCzxL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
      rating = {4.3}
      price="23 599.99"
      />
    </div>
    </>
  )
}

export default Products