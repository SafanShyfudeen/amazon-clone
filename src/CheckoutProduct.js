import React from 'react'
import './CheckoutProduct.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import {useStateValue} from './Components/UserContext'

function CheckoutProduct(props) {

  const [{basket} , dispatch ] = useStateValue();

  const deleteFromCart = () => {
    dispatch({
      type: "delete_from_cart",
      title:props.title,
    })
  }
  return (
    <div className='checkoutProduct'>
      
        <img className='checkoutProduct-image' src={props.image} />

    <div className='checkoutProduct-info'>
        <p className='checkoutProduct-title'>{props.title}</p>
        <p className='checkoutProduct-price'> <small>₹</small><strong>{props.price}</strong> <small className='small'>  M.R.P:<span className='span2'> {props.mrp} </span> </small></p>
        <div className='checkoutProduct-rating'>
        {Array(props.rating).fill().map(() =>(
             <StarRateIcon className=' star'/>
          ))}
        </div>
        {!props.hideButton && (
          <button className='checkoutProduct-button' onClick={deleteFromCart}>Delete</button>
        )}
        
    </div>
    </div>
  )
}

export default CheckoutProduct