import React from 'react'
import Header from './Header'
import ProductCategory from './ProductCategory'

function SmartWatch() {
  return (
    <div>
        <Header/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Centralheader/J23_P2_PC_BankStripe.jpg" className='landimage'/>
        <h1>Bestselling Smartwatches | Free delivery on 1st order</h1><hr/>

        <div>
            
        <ProductCategory image ="https://images-eu.ssl-images-amazon.com/images/I/41rxRY5TDSL._AC_SX184_.jpg"
          title ="boAt Wave Lite Smart Watch with 1.69 HD Display, Sleek Metal Body, HR & SpO2 Level Monitor, 
          140+ Watch Faces, Activity Tracker"
          price="999" rating={4} mrp="₹6990" />

           <ProductCategory image ="https://images-eu.ssl-images-amazon.com/images/I/41Coma77U+L._AC_SX184_.jpg"
          title ="Noise ColorFit Pulse Grand Smart Watch with 1.69 HD Display,
          Spo2 Monitoring, Call Notification, Quick Replies to Text & Calls (Rose Pink)"
          price="1599" rating={4} mrp="₹3999" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/71aDgJCJviL._SY355_.jpg"
          title ="Fire-Boltt Invincible Plus 1.43 AMOLED Display Smartwatch with Bluetooth Calling,
           TWS Connection, 4GB Storage & AI Voice Assistant (Black SS)"
          price="4499" rating={4} mrp="₹10000" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/61v07h6aREL._AC_UY218_.jpg"
          title ="Samsung Galaxy Watch4 Bluetooth(4.0 cm, Black, Compatible with Android only)Body Composition Analysis, Optical Heart Rate Sensor."
          price="12999" rating={4} mrp="₹26999" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/71Hd5u7gtuL._AC_UL320_.jpg"
          title ="Apple Watch Ultra 2 [GPS + Cellular 49mm] Smartwatch with Rugged Titanium Case . Fitness Tracker,
           Precision GPS, Action Button"
          price="69990" rating={4} mrp="₹89900" />
        </div>
    </div>
  )
}

export default SmartWatch