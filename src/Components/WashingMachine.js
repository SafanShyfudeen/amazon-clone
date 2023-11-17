import React from 'react'
import Header from './Header'
import ProductCategory from './ProductCategory'

function WashingMachine() {
  return (
    <div>
        <Header/>
        <div>
        <ProductCategory image ="https://m.media-amazon.com/images/I/71ZMYMhP5TL._AC_UL320_.jpg"
          title ="Samsung 8 Kg 5 Star AI Control & Wi-Fi, Fully-Automatic Front Loading Washing Machine Fully automatic front load washing machine"
          price="34990" rating={4} mrp="₹51800" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/61yvbripxsL._AC_UL320_.jpg"
          title ="IFB 6 Kg 5 Star AI Powered Fully Automatic Front Load Washing Machine 2X Power Steam (DIVA AQUA GBS 6010, 4 years Comprehensive Warranty)"
          price="22990" rating={4} mrp="₹59990" />

            <ProductCategory image ="https://m.media-amazon.com/images/I/71vFhm5F35L._AC_UL320_.jpg"
          title ="LG 9 Kg 5 Star Wi-Fi Inverter AI Direct Drive Fully-Automatic Front Load Washing Machine with In-Built Heater, 6 Motion DD & Steam for Hygiene Wash)"
          price="39990" rating={4} mrp="₹56990" />

            <ProductCategory image ="https://m.media-amazon.com/images/I/61wjegDtB5L._AC_UL320_.jpg"
          title ="Whirlpool 7 Kg 5 Star Superb Atom Semi-Automatic Top Loading Washing Machine (SUPERB ATOM 70I Grey Dazzle, TurboScrub Technology)"
          price="9990" rating={4} mrp="₹12600" />

            <ProductCategory image ="https://m.media-amazon.com/images/I/61uZo6DHB9L._AC_UL320_.jpg"
          title ="Whirlpool 9 Kg 5 Star Bloomwash Pro Fully-Automatic Top Loading Washing Machine - Built In Heater (360 BW PRO H 9.0 MIDNIGHT GREY 10YMW)"
          price="23490" rating={4} mrp="₹30750" />

            <ProductCategory image ="https://m.media-amazon.com/images/I/61a65KTR1uL._AC_UL320_.jpg"
          title ="Samsung 6.5 kg, 5 Star, Digital Inverter Motor, Fully-Automatic Top Load Washing Machine (WA65T4262GG/TL, LIGHT GRAY)"
          price="15490" rating={4} mrp="₹20050" />

            <ProductCategory image ="https://m.media-amazon.com/images/I/71Ikgk7C25L._AC_UL320_.jpg"
          title ="LG 8 Kg 5 Star Inverter TurboDrum Fully Automatic Top Loading Washing Machine (T80SKSF1Z, Waterfall Circulation, Digital Display, Middle Free Silver)"
          price="18990" rating={4} mrp="₹29990" />

          
           
        </div>
    </div>
  )
}

export default WashingMachine