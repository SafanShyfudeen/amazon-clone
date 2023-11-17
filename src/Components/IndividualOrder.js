import React from 'react'
import CheckoutProduct from '../CheckoutProduct';
import { useStateValue } from './UserContext'
import './order.css'

export const IndividualOrder = ({order}) => {
    const [{basket, user} , dispatch] = useStateValue();
  return (
    <div className='order'>
      <div>
      <h2>Order id:</h2><span className='order-id'>{order.Id} </span></div><br/>
         
        {order.basket?.map(item => (
                <CheckoutProduct
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    mrp={item.mrp}
                    rating={item.rating}
                    hideButton
                    
                />
            ))}

            <h3 className='order-total'>Order Total: ₹{order.amount}</h3>
    </div>
  )
}
