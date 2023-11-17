import React from 'react'
import './ProductTodayDeals.css'
import {Link} from "react-router-dom"

function ProductTodayDeals(props) {
  return (
    <Link to={props.link} className='productDeals'>
    <div >
       <img src={props.image} alt='/' className='productImageDeals'/>
       <div className='productDeals-info'>
       <p> <span className='paraSpan'>{props.discount}</span> <span className='para'>{props.discountTitle} </span> </p>
            <p className='paraTitle'>{props.title} </p>
        </div>
    </div>
    </Link>
  )
}

export default ProductTodayDeals