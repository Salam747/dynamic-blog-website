'use client';
import { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaGlobe, FaBars, FaTimes } from 'react-icons/fa'; // React icons import

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className={`bg-gradient-to-r from-purple-500 to-blue-500 p-4 ${isSticky ? 'fixed top-0 w-full z-50 shadow-lg' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-bold flex items-center">
            <FaGlobe className="mr-2" /> Your Blog 
          </a>
          <div className="hidden md:flex">
            <a href="/" className="text-white flex items-center hover:text-gray-300 mx-2">
              <FaHome className="w-5 h-5 mr-2" /> Home
            </a>
            <a href="/about" className="text-white flex items-center hover:text-gray-300 mx-2">
              <FaInfoCircle className="w-5 h-5 mr-2" /> About
            </a>
            <a href="/contact" className="text-white flex items-center hover:text-gray-300 mx-2">
              <FaEnvelope className="w-5 h-5 mr-2" /> Contact
            </a>
            <a href="/explore" className="text-white flex items-center hover:text-gray-300 mx-2">
              <FaGlobe className="w-5 h-5 mr-2" /> Explore All
            </a>
          </div>
          <button
            className="md:hidden text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden fixed inset-0 flex z-50">
            <div className="flex-1 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-64 h-full p-4 fixed right-0">
              <button
                className="text-white hover:text-gray-300 focus:outline-none mb-4"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <a href="/" className="block text-white hover:text-gray-300 px-2 py-1 text-lg flex items-center">
                <FaHome className="w-5 h-5 mr-2" /> Home
              </a>
              <a href="/about" className="block text-white hover:text-gray-300 px-2 py-1 text-lg flex items-center">
                <FaInfoCircle className="w-5 h-5 mr-2" /> About
              </a>
              <a href="/contact" className="block text-white hover:text-gray-300 px-2 py-1 text-lg flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2" /> Contact
              </a>
              <a href="/explore" className="block text-white hover:text-gray-300 px-2 py-1 text-lg flex items-center">
                <FaGlobe className="w-5 h-5 mr-2" /> Explore All
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
