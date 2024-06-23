/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../assets/Frame 62.png'; 
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-teal-800 text-white p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <img src={image} alt="img-logo" className="h-10 mb-4 sm:mb-0" />
        <img src={image} alt="img-logo" className="h-10 mb-4 sm:mb-0" />
      </div>
      <div className="text-center mb-4">
        <p className="text-xl sm:text-2xl">Follow us on</p>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://facebook.com" className="text-xl sm:text-2xl hover:text-gray-400">
          <FaFacebook />
        </a>
        <a href="https://linkedin.com" className="text-xl sm:text-2xl hover:text-gray-400">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" className="text-xl sm:text-2xl hover:text-gray-400">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" className="text-xl sm:text-2xl hover:text-gray-400">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
