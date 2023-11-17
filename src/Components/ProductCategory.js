import React, { useState } from 'react'
import './ProductCategory.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from './UserContext';
import { Link } from "react-router-dom"


function ProductCategory(props) {
  const [{basket} , dispatch ] = useStateValue();

  const addToCard = () => {
    dispatch({
      type: "Add_to_Basket",
      item:{
        title: props.title,
        image: props.image,
        price: props.price,
        mrp:props.mrp,
        rating: props.rating,
       
      },
    });
  };

  const clickToBuy = () => {
    dispatch({
      type: "Add_to_Basket",
      item:{
        title: props.title,
        image: props.image,
        price: props.price,
        mrp:props.mrp,
        rating: props.rating,
      },
    });
  }

  return (
    <div className='productTotal'>
 <img src={props.image} alt='/' className='imagephone'/>
    <div className='product1'>
       
        <div className='product-info1'>
            <p>{props.title}</p>
        </div>
        <div className='product-info1'>
          <small>₹</small> <span className='span1'>{props.price}</span> <small className='small'>  M.R.P:<span className='span2'> {props.mrp} </span> </small>
        </div>
        <div className='product-info1'>
          {Array(props.rating).fill().map(() =>(
             <StarRateIcon className=' star'/>
          ))}
          </div>
        <button className='CardToBuy' onClick={addToCard}>Add to Card</button><br/>
        <Link to="/payment">  <button className='buyButton'onClick={clickToBuy}>Buy Now</button></Link>
        </div>

    </div>
  )
  }

export default ProductCategory