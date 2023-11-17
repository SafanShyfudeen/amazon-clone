import React from 'react'
import './Home.css'
import amazonLandingPage from '../image/amazon-landingpage.jpg'
import Products from './Products'
import product_image from '../image/Headphones_Desktop_Cat_Card.jpg'
import taptop_image from '../image/Desktop-image.jpg'
import international_image from '../image/internationalDeals-image.jpg'
import mobile_image from '../image/mobil_Desktop.jpg'
import renewed_image from '../image/Desktop_CC379.jpg'

import festival from '../image/Amazon-Great-Indian-Festival.avif'
import Header from './Header'



function Home() {
  return (
  
    <div className='home'>
      <Header/>

      <div className='home-container'>
        
        <img src={amazonLandingPage} alt='home'  className='image'/>
      </div>

      <div className='home-row'>
        <Products  link="/earPhones" title = ' Starting ₹999 | Bestselling headphones' image={product_image} />
        <Products  link="/electronics" title = "Up to 80% off | Laptops, smartwatches &..." image={taptop_image} />
       
        <Products link="/international" title = "Up to 70% off | International brands" image={international_image} />
        <Products  link="/laptop" title = "Up to 35% off | laptop from top Brand" image="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" />
      </div>

      <div className='home-row'>
     
      <Products  link='/tv' title = "Up to 75% off | TVs & Appliances" image={festival} />
      <Products  link="/mobileSection" title = "Up to 40% off | Mobiles & Accessories" image={mobile_image} />
      <Products  link="/renewed" title = "Up to 70% off | Amazon Renewed" image={renewed_image} />
      </div>

     

    </div>
    
  )
}

export default Home