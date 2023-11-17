import React from 'react'
import Header from './Header'
import './Electronics.css'
import {Link} from "react-router-dom"

function Electronics() {
  return (
    
        <div className='main' ><Header/>
        <img src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Eelctronics/Page/Main/Event/Header/Unrec/Header_1500x300_Unrec._CB577605934_.gif" className='landimage'/> 
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Centralheader/New-Bank_Stripe_Unrec_PC_01.jpg" className='landimage'/>
        <div className="optionpage">  
        <Link to="/earPhones"><img className="optionimage" src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Creatives/Teaser/1/Header/Unrec/Headphones._CB578343311_.jpg"/></Link>
        <Link to="/SmartWatch"> <img className="optionimage"src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Creatives/Teaser/1/Header/Unrec/Smartwatches._CB578343310_.jpg"/></Link>
        <Link to="/computerAccessories"><img className="optionimage" src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Creatives/Teaser/1/Header/Unrec/Computer-Accessories._CB578343311_.jpg"/></Link> 
        <Link to="/speaker"> <img className="optionimage" src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Creatives/ATF/Halos/Revised/Speakers._CB578711153_.jpg"/></Link>
        <Link to="/wifiRouters"> <img className="optionimage" src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Creatives/ATF/Halos/Revised/Wi-Fi-Routers._CB578711153_.jpg"/></Link>
        </div>
        <div className="optionTitle">
          <h3>Extra savings this festive season : Shop Now</h3>
          <img className="optionimage" src="https://m.media-amazon.com/images/G/31/img22/Electronics/Page/Jupiter/23/Creatives/Revised/ATF/Halos/Laptops/New/Kiosk-T3_2._CB577555606_.gif"/>
           <img className="optionimage" src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Eelctronics/Page/Header/COOP/Creatives/Kiosk-T3-11._CB575824592_.gif"/>
           <img className="optionimage" src="https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Eelctronics/Page/Header/COOP/Creatives/Kiosk-T3-2._CB575825378_.gif"/>
           <img className="optionimage" src="https://m.media-amazon.com/images/G/31/img23/Jupiter23/Laptops_Updated/Happy-hours_Kiosk._CB576390296_.gif"/>
           <img className="optionimage" src="https://m.media-amazon.com/images/G/31/img22/CEPC/Electronics/Jupiter/23/Savings/Section/Updated/Creatives/Kiosk_BMSM._CB576343952_.png"/>
           <img className="optionimage" src="https://m.media-amazon.com/images/G/31/img22/CEPC/Electronics/Jupiter/23/Savings/Section/Updated/Creatives/Kiosk_Combos1._CB576343952_.png"/>
        </div>
        </div>
      
  )
}

export default Electronics