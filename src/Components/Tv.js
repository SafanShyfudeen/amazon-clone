import React from 'react'
import Header from './Header'
import ProductCategory from './ProductCategory'

function Tv() {
  return (
    <div>
        <Header/>
        <div>
            
           <ProductCategory image ="https://m.media-amazon.com/images/I/71soVCm1bcL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg"
          title ="Redmi 108 cm (43 inches) F Series 4K Ultra HD Smart LED Fire TV L43R8-FVIN (Black) 4K Ultra HD (3840 x 2160) | Refresh Rate : 60 Hertz"
          price="22999" rating={4} mrp="₹42999" />

          
           <ProductCategory image ="https://m.media-amazon.com/images/I/71Twf7HYguL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg"
          title ="Hisense 108 cm (43 inches) 4K Ultra HD QLED Google TV 43U6K (Gray) | with 3 Years Warranty Resolution |HRR Mode 120 Hz | Light Sensing "
          price="21999" rating={4} mrp="₹35990" />

          
           <ProductCategory image ="https://m.media-amazon.com/images/I/81qx8YtutXL._SX355_.jpg"
          title ="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black) 
          Refresh Rate: 60 Hertz | 178 Degree wide viewing angle"
          price="52990" rating={4} mrp="₹99990" />

          
           <ProductCategory image ="https://m.media-amazon.com/images/I/71S8qt+K8hL._SX355_.jpg"
          title ="Samsung 138 cm (55 inches) Crystal iSmart 4K Ultra HD Smart LED TV UA55CUE60AKLXL (Black) Wireless DeX, IoT Sensor, Web Browser"
          price="43990" rating={4} mrp="₹65990" />

          
           <ProductCategory image ="https://m.media-amazon.com/images/I/71EGuVJ2oDL._SX355_.jpg"
          title ="Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV KD-43X64L (Black)  20 Watts Output |Dolby Audio | Clear Phase"
          price="40990" rating={4} mrp="₹59900" />

          <ProductCategory image ="https://m.media-amazon.com/images/I/71NDM3l6ZbL._SX425_.jpg"
          title ="Hisense 139 cm (55 inches) Bezelless Series 4K Ultra HD Smart LED Google TV 55A6K (Gray) | with 3 Years Warranty 10 bit Panel | ALLM "
          price="31999" rating={4} mrp="₹64990" />

          <ProductCategory image ="https://m.media-amazon.com/images/I/619--Jabh2L._SX355_.jpg"
          title ="Acer 126 cm (50 inches) V Series 4K Ultra HD Smart QLED Google TV AR50GR2851VQD (Black) Dual band Wifi | 2 way Bluetooth "
          price="35999" rating={4} mrp="₹59999" />

         


        </div>
    </div>
  )
}

export default Tv