import React, { useEffect, useState } from 'react'
import './subtotal.css'
import { useStateValue } from './UserContext';
import { useNavigate } from "react-router-dom"


function Subtotal() {
  const history = useNavigate();
  
  const [{basket}, dispatch] = useStateValue();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(basket.reduce((acc,item)=> acc + Number(item.price) ,0))
  }, [basket]);
 
  return (
    <div className='subtotal'>
     <p className='subtotal-para'>Subtotal ( {basket?.length} item) : <strong>₹{total}</strong> </p>
     <small className='subtotal-gift'>
        <input type='checkbox'/> This order contains a gift
      </small>

    <button onClick={e => history('/payment')} >Proceed to Buy</button>
    
    </div>
  );
}

export default Subtotal