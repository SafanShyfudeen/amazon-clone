import React from 'react'
import Header from './Header'
import ProductCategory from './ProductCategory'

function Laptop() {
  return (
    <div>
        <Header/>
        <h2>Gaming Laptops starting INR 47990 - Upto INR 17000 off on HDFC Credit Card EMI Transactions -<br/> No cost EMI available</h2>
        <div>
        <ProductCategory image ="https://m.media-amazon.com/images/I/61xzutxSl8L._SX569_.jpg"
          title ="Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen (16 GB/512 GB SSD/Win11 Home/4GB
           Graphics/RTX 2050) A515-57G (15.6 FHD Display, 1.8 Kg)"
          price="51990" rating={4} mrp="₹82999" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/61WBYAPTV2L._SX425_.jpg"
          title ="Lenovo IdeaPad Gaming 3 Laptop Intel Core i5 11th Gen 15.6 FHD IPS (8GB/512GB SSD/4GB NVIDIA GTX 1650/120Hz/Win 11/Backlit/Shadow Black/2.25Kg), 82K101KGIN"
          price="47990" rating={4} mrp="₹82490" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/41LDfnScXZS._AC_SR400,600_AGcontrast_.jpg"
          title ="ASUS TUF Gaming F15, 15.6(39.62 cms) FHD 144Hz, Intel Core i5-11400H 11th Gen, RTX 3050 4GB Graphics, Gaming Laptop (8GB/512GB SSD/90WHrs Battery/Windows 11/Black/2.3 kg), FX506HC-"
          price="59490" rating={4} mrp="₹80990" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/415zArrvm9L._AC_SR400,600_AGcontrast_.jpg"
          title ="HP Victus Gaming Laptop, 12th Gen Intel Core i5-12450H, NVIDIA RTX 3050 GPU, 15.6-inch (39.6 cm), FHD, IPS, 144Hz, 9 ms Response time, 16GB DDR4, 512GB SSD, Backlit KB fa0666TX"
          price="69990" rating={4} mrp="₹86343" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/41dCsY9mw-L._AC_SR400,600_AGcontrast_.jpg"
          title ="Acer Nitro 5 Gaming Laptop AMD Ryzen™ 7 7735HS Octa-Core Processor- (16GB/ 512 GB SSD/NVIDIA GeForce RTX 3050
           4GB Graphics/Windows 11 Home) (15.6 Inch) IPS Display"
          price="68990" rating={4} mrp="₹111999" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/41J4IzmCKCL._AC_SR400,600_AGcontrast_.jpg"
          title ="SUS ROG Strix G16 (2023) Intel Core i5-13450HX 13th Gen, 16 FHD+ 165Hz, 6GB RTX 
          3050, Gaming Laptop (16GB/512GB SSD/Windows 11/Office 2021/Gray/2.50 Kg) G614JJ-N3086WS"
          price="89990" rating={4} mrp="₹119990" />

        </div>
    </div>
  )
}

export default Laptop