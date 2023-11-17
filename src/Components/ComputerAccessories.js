import React from 'react'
import Header from './Header'
import ProductCategory from './ProductCategory'

function ComputerAccessories() {
  return (
    <div>
        <Header/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/pcacc/jup/Bestselling-Computer-Accessories_PC-Header.jpg" className='landimage'/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Centralheader/J23_P2_PC_BankStripe.jpg" className='landimage' />

        <div>
        <ProductCategory image ="https://m.media-amazon.com/images/I/71l+Z8gJMIL._AC_UY218_.jpg"
          title ="Dell Alienware 25 inch (63.5cm) Full HD Gaming Monitor with HDMI and DP Ports, IPS Panel, 240Hz,
           1ms, Height-Adjustable (Black)"
          price="41599" rating={4} mrp="₹69999" />   

        <ProductCategory image ="https://m.media-amazon.com/images/I/51r3E7G78VL._SX679_.jpg"
          title ="Portronics Bubble Multimedia Wireless Keyboard 2.4 GHz, Compact Size, 
          Shortcut Keys Function for iOS iPad Air, Pro, Mini, Android"
          price="838" rating={4} mrp="₹1999" />

         <ProductCategory image ="https://images-eu.ssl-images-amazon.com/images/I/31N1BZUZLwL._AC_SX184_.jpg"
          title ="Razer Basilisk V3 Customizable Ergonomic Gaming Wired Mouse: 
          Chroma RGB Lighting 11 Programmable Buttons "
          price="3089" rating={4} mrp="₹7499" />

          <ProductCategory image ="https://images-eu.ssl-images-amazon.com/images/I/31sSNZUSkfL._AC_SX184_.jpg"
          title ="APC Back-UPS BX600C-IN 600VA / 360W, 230V, UPS System, Protection for Home Office, Desktop PC & Home Electronics"
          price="3098" rating={4} mrp="₹4275" />

           <ProductCategory image ="https://images-eu.ssl-images-amazon.com/images/I/21AipfHtGVL._AC_SX184_.jpg"
          title ="XP-Pen Deco Fun L Black Graphics Tablet 10 x 6.27 Inch Pen Tablet
           Battery-Free Stylus, 60 Degrees of tilt Action and Android Support"
          price="4299" rating={4} mrp="₹6999" />

           <ProductCategory image ="https://images-eu.ssl-images-amazon.com/images/I/41lxtwVcaoL._AC_SX184_.jpg"
          title ="HyperX Cloud Core On-Ear Wired Gaming Headset with Mic for PC, DTS Headpone:X (Black) DTS Heapdhone:X* Spatial Audio"
          price="4290" rating={4} mrp="₹8599" />

          


        </div>
    </div>
  )
}

export default ComputerAccessories