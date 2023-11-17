import React from 'react'
import Header from './Header'
import './MobileSection.css'
import mobileLanding_image from '../image/mobilPhoneLanding_Image.gif'
import bankOfferPage from '../image/New-Bank-Stripe.jpg'
import ProductCategory from './ProductCategory'
import iqoo1 from '../mobileimage/Iqoophone_image.jpg'
import s23ultra from '../mobileimage/samsungs23ultra-image.jpg'
import iphone15promax from '../mobileimage/Iphone15promax-image.jpg'
import oneplus11r from '../mobileimage/oneplus11r_image.jpg'
import mi15pro from '../mobileimage/mi12pro-image.jpg'
import vivoV29 from '../mobileimage/vivoV29-image.jpg'
import realme15pro from '../mobileimage/realme15pro-image.jpg'
import pixel7a from '../mobileimage/pixel7a-image.jpg'
import samsunga34 from '../mobileimage/samsunga34-image.jpg'

function MobileSection() {
  return (
    <div>
        <Header/>
        <div>
        <img src={mobileLanding_image} className='image1' alt='/' />
        <img src={bankOfferPage} alt='/' className='image2'/>
        </div>
        <div>
          <ProductCategory  image={s23ultra} title="Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage) | Snapdragon® 8+ Gen 2 For Galaxy | 200 MP Camera"
          price="107990" mrp={"149999"}  rating={5} />
          
          <ProductCategory  image={iphone15promax} title="Apple iPhone 14 Pro (256 GB) - Gold | Dynamic Island, a Magical New way to interact with iPhone | 48MP Main camera"
          price="139990" mrp={"199999"} rating={5} />
          
          <ProductCategory  image={iqoo1} title="IQOO Neo 7 Pro 5G (Dark Storm, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 | Gaming Chip | Flagship 50MP OIS Camera | AG Glass Design"
          price="39999" mrp={"61999 "} rating={5} />
          
          <ProductCategory image={oneplus11r} title="OnePlus 11R 5G (Solar Red, 18GB RAM, 512GB Storage ) | Sensor: 50MP Main Camera with Sony IMX890 (OIS supported)"
          price="45999" mrp={"69999"} rating={5} />
          
          <ProductCategory image={mi15pro} title="Xiaomi 12 Pro | 5G (Noir Black, 12GB RAM, 256GB Storage) | Snapdragon 8 Gen 1 | 50+50+50MP Flagship Cameras (OIS) | Sound by Harman Kardon"
          price="41999" mrp={"65999"} rating={5} /> 

          <ProductCategory image={pixel7a} title="Pixel 7a 5G (Snow, 8GB RAM, 128GB Storage) | Tensor G2 and the certified Titan M2 chip add layers of security to keep your personal info safe"
          price="42490" mrp={"69000"} rating={5} />
          
          <ProductCategory image={vivoV29} title="VIVO V27 5G (Magic Blue, 128 GB) (8 GB RAM) | 50MP (OIS) + 8MP + 2MP | 50MP Front Camera | Mediatek Dimensity 7200 5G Processor"
          price="31990" mrp={"49000"} rating={5} /> 
          
          <ProductCategory image={realme15pro} title="realme narzo 60 Pro (Cosmic Black,12GB+256GB) Ultra Smooth 120 Hz Super Amoled Curved Display | 100 MP OIS Camera"
          price="23999" mrp={"35999"} rating={5} />

           <ProductCategory image={samsunga34} title="Samsung Galaxy A34 5G (Awesome Violet, 8GB, 256GB Storage) | 48MP(OIS)+8MP+5MP Triple camera setup"
          price="26999" mrp={"35999"} rating={3} />


          

          
          

          
          
        </div>
        </div>

  )
}

export default MobileSection