import React from 'react'
import Header from './Header'
import ProductCategory from './ProductCategory'

function InternationalBrand() {
  return (
    <div>
        <Header/>
        <img src="https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/Diwali2023/ohl/New/SBB/sub/MOBILE/BAN/3000x700_01._SX3000_QL85_.jpg" style={{ objectFit:"contain" ,height:'398.5px' } } alt='/'/>

        <ProductCategory image ="https://m.media-amazon.com/images/I/71C5UPulGUL._SY355_.jpg"
          title ="ILIFE A80 Pro Robotic Vacuum Cleaner, Dry & Wet, Honeycomb Dust Tank Robotic Floor Cleaner with 2 in 1 Mopping and Vacuum,Ideal for Hard Floor,Alexa, GH"
          price="17900" rating={5} mrp="₹34000" />

          <ProductCategory image ="https://m.media-amazon.com/images/I/71dKjtaMz+L._SY355_.jpg"
          title ="Tribit StormBox Blast Bluetooth Party Speaker,Portable Speaker 90W Loud Stereo Sound with XBass LED Light Show Bluetooth 5.3,IPX7 Waterproof Speaker, PowerBank,TWS,Custom EQ,30H Playtime for Outdoor"
          price="15081" rating={4} mrp="₹22999" />

          <ProductCategory image ="https://m.media-amazon.com/images/I/712S4QaD1bL._SX425_.jpg"
          title ="ESR for iPhone 14 Cover, Ultra-Yellowing Resistant, Shockproof Military-Grade Protection, TPU, Transparent PC Buttons, Krystec Clear Back Case, Clear"
          price="1083" rating={4} mrp="₹2499" />

          <ProductCategory image ="https://m.media-amazon.com/images/I/61gJOkPKOIL._SX342_.jpg"
          title ="Anker Apple MFi Certified MagSafe Power Bank for iPhone 15, 14, 13 Series, MagGo Portable 15W Super Fast Charging, Magnetic Wireless Power Bank, Ultra Slim Design (5,000 mAh with Stand, White)"
          price="4499" rating={4} mrp="₹8999" />
    </div>

  )
}

export default InternationalBrand