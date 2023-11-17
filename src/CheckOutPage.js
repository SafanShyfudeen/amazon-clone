import React from 'react'
import Header from './Components/Header'
import './CheckoutPage.css'
import Subtotal from './Components/Subtotal'
import { useStateValue } from './Components/UserContext'
import CheckoutProduct from './CheckoutProduct'



function CheckOutPage() {
const [{basket, user } , dispatch] = useStateValue();

  return (
    <div> 
      <Header/>
      <div className='checkout'>
        <div className='checkout-left'>
        <h3> {user?.email} </h3>
         <h2 className='checkout-title'>Your Amazon Cart </h2>

         {basket.map(item => (
          <CheckoutProduct 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          mrp={item.mrp}
          rating={item.rating}
          />
         ))}

        </div>

        <div className='checkout-right'>
            <Subtotal/>
          </div>

      </div>
      
       </div>
  )
}

export default CheckOutPage