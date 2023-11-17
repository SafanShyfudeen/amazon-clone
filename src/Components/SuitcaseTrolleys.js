import React from 'react'
import Header from './Header'
import ProductCategory from './ProductCategory'

function SuitcaseTrolleys() {
  return (
    <div>
        <Header/>
        <div>
        <ProductCategory image ="https://m.media-amazon.com/images/I/514xUT1xYVL._SX425_.jpg"
          title ="Safari Pentagon 55 Cms Small Cabin Polypropylene Hard Sided 4 Wheels 360 Degree Wheeling System Suitcase/Trolley Bag, Cyan Blue"
          price="1799" rating={4} mrp="₹7775" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/71MyFnSbJmL._SY679_.jpg"
          title ="Skybags Mint 79cms Large Check-in Polycarbonate hardsided 4 Smooth Wheels Trolley, Turquoise (Blue)"
          price="2999" rating={4} mrp="₹23600" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/919+ILK8e5L._SY741_.jpg"
          title ="Safari Prisma 75 cms Large Check-in Polyester Soft Sided 4 Spinner Wheels Luggage/Suitcase/Trolley Bag (Blue)"
          price="2666" rating={4} mrp="₹10600" />

           <ProductCategory image ="https://m.media-amazon.com/images/I/81-0qCBJ5EL._SY879_.jpg"
          title ="Skybags Trooper 55 Cms Small Cabin Polycarbonate Hard Sided 4 Spinner Wheels Suitcase/Trolley Bag- Blue and White"
          price="2500" rating={4} mrp="₹6820" />

          

           {/* <ProductCategory image =""
          title =""
          price="" rating={4} mrp="₹" /> */}
        </div>
    </div>
  )
}

export default SuitcaseTrolleys