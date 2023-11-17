import React, { useEffect, useState } from 'react'
import Header from './Header'
import { db } from './firebase';
import { useStateValue } from './UserContext';
import { Order } from './Order';


const  Orders = () => {
    
  const [{basket, user} , dispatch] = useStateValue();

  const [order, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
    db
    .collection("users")
    .doc(user?.uid)
    .collection('orders')

    .onSnapshot(snapshot =>{
        const orderItems = snapshot.docs.map((doc)=>({
            Id: doc.id,
            ...doc.data()
        }));
        setOrders(orderItems);
    })
} else {
    setOrders([])
}
  }, [])
  
    // console.log(order);
  

  return (
    <div >
      <Header/>
      <div className='orders'>
        <h1>Your Orders</h1>
    

        <div className='orders__order'>
           {order.length > 0 && (
            <div>
              <Order order={order} />
            </div>
            
           )}
        </div>
        </div>
    </div>
)
}

export default Orders