import React from 'react'
import Header from './Header'
import ProductCategory from './ProductCategory'

function WifiRouters() {
  return (
    <div>
        <Header/>
        <img className='landimage' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/JUP23/clp-mock/networking/header/Networking_jup_ph2_PC_Header2.jpg"/>
        <img className='landimage' src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Centralheader/J23_P2_PC_BankStripe.jpg"/>

        <div>
        <ProductCategory image ="https://m.media-amazon.com/images/I/41fQ5NSkEWL._AC_UL320_.jpg"
          title ="TP-link N300 WiFi Wireless Router TL-WR845N | 300Mbps Wi-Fi Speed | Three 5dBi high gain Antennas |
           IPv6 Compatible| Guest Network"
          price="998" rating={4} mrp="₹1799" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/51ax8peHlPL._AC_UL320_.jpg"
          title ="TP-Link Archer AC1200 Archer C6 Wi-Fi Speed Up to 867 Mbps/5 GHz + 400Mbps/2.4 GHz, 5 Gigabit Ports, 4 External
           Antennas, Access Point Mode, Black"
          price="2398" rating={4} mrp="₹4999" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/61Mbl0e228L._AC_UL320_.jpg"
          title ="OAKTER Mini Ups For 12V Wifi Router Broadband Modem|Backup Upto 4 Hours|Wifi Router Ups Power Backup During
           |Current Surge&Deep Discharge Protection"
          price="929" rating={4} mrp="₹3490" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/41eyLfRsPIL._AC_UL320_.jpg"
          title ="TP-Link AC750 Wifi Range Extender | Up to 750Mbps | Dual Band WiFi Extender, Repeater, Wifi Signal Booster, 
          Access Point| Easy Set-Up  (RE200)"
          price="1698" rating={4} mrp="₹5499" />

          <ProductCategory image ="https://m.media-amazon.com/images/I/71yKtk9XHGL._AC_UL320_.jpg"
          title ="TP-Link USB Bluetooth Adapter for PC, 5.0 Bluetooth Dongle Receiver,
           Laptop, Mouse, Keyboard, Printers, Headsets, Speakers"
          price="549" rating={4} mrp="₹899" />

          <ProductCategory image ="https://m.media-amazon.com/images/I/51sVgdFV33L._AC_UL320_.jpg"
          title ="Sounce USB to RJ45 Gigabit Ethernet Network Adapter/RJ45 LAN Wired Adapter ,
           Desktop, Plug & Play, USB 3.0,"
          price="279" rating={4} mrp="₹499" />

         
        </div>
    </div>
  )
}

export default WifiRouters