import React from 'react'
import Header from './Header'
import './TodayDeals.css'
import landingpage from '../image/todayDeals/landing-image.jpg'
import bankoffer from '../image/todayDeals/New-Bank_image.jpg'
import ProductTodayDeals from './ProductTodayDeals'
import mobile_image from '../image/mobil_Desktop.jpg'


function TodayDeals() {
  return (
    <div>
       <Header/>
            <img src={landingpage} alt='/' className='landimage' />
            <img src={bankoffer} alt='/' className='landimage' />
        <div className='home-row'>
           <ProductTodayDeals 
           link="/SmartWatch"
           image="https://m.media-amazon.com/images/I/51vHAEYKeWL._AC_UF226,226_FMjpg_.jpg"   discount="Up to 89% off"
            discountTitle="Great Indian Festival"  title ="Smartwatches from Rs.799 - Fire-boltt, Noise, Boat & More"  />
            
           <ProductTodayDeals discountTitle="Great Indian Festiva"
           link="/tv" 
            discount="Up to 60% off" 
            title="Best selling affordable TVs Grab now"
            image="https://m.media-amazon.com/images/I/51xz0+Y1oUL._AC_UF226,226_FMjpg_.jpg" />  

             <ProductTodayDeals discountTitle="Great Indian Festiva "
             link="/washingMachine" 
            discount="Up to 47% off" 
            title="Front Loads Starting 16,990"
            image="https://m.media-amazon.com/images/I/51CcKl1KxZL._AC_UF226,226_FMjpg_.jpg" />
            
            <ProductTodayDeals discountTitle="Great Indian Festiva " 
            link="/computerAccessories"
            discount="Up to 67% off" 
            title="Top Offers on Mice and Keyboard"
            image="https://m.media-amazon.com/images/I/31Y7uI4Uw9L._AC_UF226,226_FMjpg_.jpg" />

        </div >

        <div className='home-row'>

        <ProductTodayDeals 
            link="/suitcase"
            discountTitle="Great Indian Festiva " 
            discount="Up to 75% off" 
            title="Branded Suitcase Trolleys - American Tourister, Safari, Skybags, etc."
            image="https://m.media-amazon.com/images/I/31Q0xVpBphL._AC_UF226,226_FMjpg_.jpg" />

            <ProductTodayDeals 
            link="/laptop"
            discountTitle="Great Indian Festiva " 
            discount="Up to 39% off" 
            title="Gaming Laptops starting INR 44990 - Extra savings of upto 17000 on SBI Credit Cards"
            image="https://m.media-amazon.com/images/I/3178oNp9brL._AC_UF226,226_FMjpg_.jpg" />

            <ProductTodayDeals 
            link="/mobileSection"
            discountTitle="Great Indian Festiva " 
            discount="Up to 51% off" 
            title="Grab or gone festive offers - mobiles"
            image={mobile_image} />

             <ProductTodayDeals 
             link="/earphones"
            discountTitle="Great Indian Festiva " 
            discount="Up to 73% off" 
            title="Best Deals on Earbuds"
            image="https://m.media-amazon.com/images/I/31Tm22hUx1L._AC_UF226,226_FMjpg_.jpg" />

        </div>
        

    
    </div>
  )
}

export default TodayDeals