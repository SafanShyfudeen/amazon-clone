import React from 'react'
import Header from './Header'
import ProductCategory from './ProductCategory'

function Speaker() {
  return (
    <div>
        <Header/>
        <img className='landimage'src="https://m.media-amazon.com/images/G/31/img23/CEPC/jup23/phase2/hp/header/speakers/Main_Header_Pc_1500x300._CB574723801_.jpg"/>
        <img className='landimage'src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Centralheader/J23_P2_PC_BankStripe.jpg"/>
        <div>
        <ProductCategory image ="https://m.media-amazon.com/images/I/61721FT561L._AC_UL320_.jpg"
          title ="Artis BT12 Classic Retro Wireless BT Speaker with FM/USB/AUX in & Hands Free Calling (5W RMS Output)"
          price="1299" rating={5} mrp="₹2699" />

          <ProductCategory image ="https://images-eu.ssl-images-amazon.com/images/I/41TAKjYMgxL._AC_SX184_.jpg"
          title ="boAt Stone 352 Bluetooth Speaker with 10W RMS Stereo Sound, TWS Feature, 
          Up to 12H Total Playtime, Type-C Charging(Raging Black)"
          price="1399" rating={4} mrp="₹3490" />

           <ProductCategory image ="https://images-eu.ssl-images-amazon.com/images/I/41ssC++20hL._AC_SX184_.jpg"
          title ="boAt Stone 135 Portable Wireless Speaker with 5W RMS Immersive Sound,IPX4 Water Resistance,
           Up to 11H Total Playtime (Active Black)"
          price="799" rating={2} mrp="₹1990" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/41-aKqzl92L._AC_UL320_.jpg"
          title ="Creative Stage 2.1 Channel 160W Under-Monitor Soundbar , and Ultra Wide 
          Monitors Bluetooth/Optical Input/TV ARC/AUX-int (Black)"
          price="5999" rating={4} mrp="₹15999" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/71cZjaZgFoL._AC_UL320_.jpg"
          title ="Krisons Beatz with FM,USB,Aux and Bluetooth with Free Wired Mic 30W Bluetooth Trolley Speaker
          Optical "
          price="1499" rating={3} mrp="₹4999" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/51QQZVRq9zL._AC_UL320_.jpg"
          title ="Creative T60 2.0 Compact Hi-Fi Desktop Speakers with Clear Dialog and Surround by Sound Blaster,
           USB-C Audio, Bluetooth 5.0"
          price="7999" rating={4} mrp="₹14999" />

          

         


        </div>
    </div>
  )
}

export default Speaker