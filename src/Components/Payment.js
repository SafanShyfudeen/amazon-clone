import React, { useEffect, useState } from 'react'
import './payment.css'
import Header from './Header'
import CheckoutProduct from '../CheckoutProduct'
import { useStateValue } from './UserContext'
import {Link, useNavigate} from "react-router-dom"
import PaymentIcon from '@mui/icons-material/Payment';
import { db } from './firebase'
// import { collection, set,doc } from "firebase/compat/firestore"

function Payment() {
    const [total, setTotal] = useState();
  
    const [{basket, user} , dispatch] = useStateValue();
    const history = useNavigate();

    const payload = async (event) => {
        event.preventDefault();
        if (user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .add({
                basket:basket,
                amount:total
            })
    
            dispatch({
                type:'Empty_Basket'
            })
            history('/order')
        } else {
            history('/login')
        }
       
        
        
    }
   



    useEffect(() => {
        setTotal(basket.reduce((acc,item)=> acc + Number(item.price) ,0))
      }, [basket]);
  return (
    <div className='payment'>
        <Header/>
        <div className='payment-container'>
            <h1>CheckOut (
                <Link to="/checkout" >{basket?.length} item 
            )</Link></h1>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment-address'>
                    <p> {user?.email} </p>
                    <p>5/56 ,sidco Nagar</p>
                    <p>Villivakkam, Chennai</p>
                </div>
            </div>

            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Review item to Deliver </h3>
                </div>
                <div className='payment-items'>
                    {basket.map(item =>(
                        <CheckoutProduct
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        mrp={item.mrp}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment-details'>
                    <PaymentIcon />
                    <input type='text' placeholder='Card number' className='cardnum' />
                    <input type='text' placeholder='MM/YY CVV' className='cardnum'/>
                  
                <div>
                    <h4>Order Total: ₹{total} </h4>
                   <button className='buy-button' onClick={payload} >Buy now</button>
                </div>
                </div>

            </div>

        </div>
    </div>

  )
}

export default Payment