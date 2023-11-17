import React from 'react'
import Header from './Header'
import ProductCategory from './ProductCategory'

function Earphone() {
  return (
    <div>
        <Header/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/jup23/phase2/hp/header/unrec/Main_Header_Pc_1500x300.jpg" className='landimage'/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Centralheader/J23_P2_PC_BankStripe.jpg" className='landimage'/>
        <div>
          <ProductCategory image ="https://images-eu.ssl-images-amazon.com/images/I/41cU0ptdpWL._AC_SX184_.jpg" 
          title ="boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime, 
           13MM Drivers,Super Low Latency(50ms),  BT v5.3(Opal Black)"
          price="899" rating={3} mrp="₹2999" />

          <ProductCategory image ="https://m.media-amazon.com/images/I/614hH1Cot3L._SL1500_.jpg"
          title ="Noise Buds VS104 Truly Wireless Earbuds  Quad Mic with ENC,
           Instacharge(10 min=200 min), 13mm Driver,Low Latency, BT v5.2 (Charcoal Black)"
          price="999" rating={4} mrp="₹3499" />

          <ProductCategory image ="https://m.media-amazon.com/images/I/719elVA3FvL._SY355_.jpg"
          title ="boAt BassHeads 100 in-Ear Wired Headphones with Mic The powerful 10mm 
          dynamic driver with the speaker resistance of 16 ohm"
          price="349" rating={4} mrp="₹999" />

          <ProductCategory image ="https://m.media-amazon.com/images/I/411UpEbFeRL._AC_UF226,226_FMjpg_.jpg"
          title ="Bose New QuietComfort Earbuds II, Wireless, Bluetooth, World’s
           Best Noise Cancelling in-Ear Headphones with  Triple Black"
          price="19396" rating={4} mrp="₹25900" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/514m1VhSUUL._AC_UL320_.jpg"
          title ="OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers,
          10 Mins Charge - 20 Hrs Music (Beam Blue)"
          price="1599" rating={4} mrp="₹2299" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/41NyHCJybCL._AC_SR400,600_AGcontrast_.jpg"
          title ="Boult Audio Newly Launched Z40 Pro Bluetooth Truly Wireless
           Quad Mic ENC, 45ms Low Latency Gaming,  BTv 5.3 TWS (Jungle)"
          price="1399" rating={4} mrp="₹5499" />
        </div>
        
    </div>
  )
}

export default Earphone