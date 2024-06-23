/* eslint-disable no-unused-vars */
import React from 'react';

const products = [
  {
    name: 'Raju Rassibomb',
    description: 'Quick View',
    image: 'https://res.cloudinary.com/dqan2oply/image/upload/v1719058419/Frame_7_pnxmog.png' 
  },
  {
    name: 'Ladiyon ki Rani Chani',
    description: 'Quick View',
    image: 'https://res.cloudinary.com/dqan2oply/image/upload/v1719058419/Frame_7_pnxmog.png' 
  },
  {
    name: 'Ladiyon ki Rani Chani',
    description: 'Quick View',
    image: 'https://res.cloudinary.com/dqan2oply/image/upload/v1719058419/Frame_7_pnxmog.png' 
  }
];

const ProductLists = () => {
  return (
    <section id="products" className="p-4 sm:p-8 bg-gray-100">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-bold mb-2">{product.name}</h3>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                {product.description}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductLists;
