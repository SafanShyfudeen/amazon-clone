import React from 'react'
import './Products.css'
import {Link} from "react-router-dom"


function Products(props) {
  return (
    <Link to={props.link} className='product' >
    <div>
        <div className='product-info'>
            <p>{props.title}</p>
        </div>
        <img src={props.image} alt='/' className='productImage'/>
    </div>
    </Link>
  )
}

export default Products