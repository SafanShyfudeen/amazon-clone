import React from 'react'
import Header from './Header'
import ProductCategory from './ProductCategory'

function RenewedProducts() {
  return (
    <div>
        <Header/>
        <ProductCategory image ="https://m.media-amazon.com/images/I/61q6x-ll5FL._SX569_.jpg"
          title ="(Refurbished) Lenovo IdeaPad Slim 3 Ryzen 5 5500U (8GB/512GB SSD),15.6 (39.62cm) FHD Laptop, (Win 11/Al"
          price="32670" rating={4} mrp="₹37990" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/61K-76MiX-L._SY450_.jpg"
          title ="(Refurbished) Lenovo ThinkPad T480 8th Gen Intel Core i5 Thin & Light FHD Touchscreen Laptop (8 GB DDR4 RAM/512 GB SSD/14 (35.6 cm) FHD/Windows 11/MS"
          price="27500" rating={4} mrp="₹58990" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/61cSPtnZ9TL._SY606_.jpg"
          title ="(Refurbished) Redmi Note 10 Pro (Glacial Blue, 6GB RAM, 128GB Storage) -120Hz Super Amoled Display | 64MP with 5MP Super Tele-Macro"
          price="13999" rating={4} mrp="₹19999" />

           <ProductCategory image ="https://images-eu.ssl-images-amazon.com/images/I/41lO+5uQGzL._AC_SX184_.jpg"
          title ="(Refurbished) Samsung Galaxy A23 5G (Light Blue, 6GB, 128GB Storage) | 50 MP No Shake Cam(OIS) | Upto 12 GB RAM with RAM Plus"
          price="17838" rating={4} mrp="₹20999 " />

           <ProductCategory image ="https://m.media-amazon.com/images/I/81N+SDUxR2L._AC_UL320_.jpg"
          title ="(Refurbished) JBL Go 2 Portable Bluetooth Speaker with mic (Deep Sea Blue) Built-in, rechargeable Li-ion battery supports up to 5 hours of playtime."
          price="1899" rating={4} mrp="₹3999" />
    </div>
  )
}

export default RenewedProducts