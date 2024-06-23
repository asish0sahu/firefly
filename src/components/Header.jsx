/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../assets/Frame.svg';

const Headers = () => {
  return (
    <header className="relative bg-cover bg-center h-64 sm:h-80 md:h-96" style={{ backgroundImage: 'url(https://res.cloudinary.com/dqan2oply/image/upload/v1719051873/Frame_6_nkdvjo.png)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
        <nav className="w-full flex flex-col sm:flex-row justify-between items-center mb-4 px-4">
          <img src={logo} className="h-10 mb-2 sm:mb-0" alt="logo" />
          <div className="flex space-x-4">
            <a href="#about" className="mx-2">About</a>
            <a href="#products" className="mx-2">Products</a>
          </div>
        </nav>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Move Beyond Fire</h2>
          <p className="text-xs sm:text-sm md:text-base mb-4">The Choice is yours Because they donot have one.</p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Quick View</button>
        </div>
      </div>
    </header>
  );
}

export default Headers;
