import React, { useState } from 'react';
// import logo from '../assets/edunav-logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-md animate-fade-in-down">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          
          <a href="/" className="flex items-center space-x-2">
            {/* <img src={logo} alt="EduNav Logo" className="h-8 md:h-10" /> */}
            <span className="text-3xl font-extrabold text-blue-600 tracking-wider">EduNav</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-blue-600 font-medium transition duration-300 ease-in-out transform hover:scale-105"
            >
              Features
            </a>
            <a 
              href="#colleges" 
              className="text-gray-600 hover:text-blue-600 font-medium transition duration-300 ease-in-out transform hover:scale-105"
            >
              Colleges
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-blue-600 font-medium transition duration-300 ease-in-out transform hover:scale-105"
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 font-medium transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/login" 
              className="text-blue-600 font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-gray-100"
            >
              Login
            </a>
            <a 
              href="/signup" 
              className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gray-600 focus:outline-none"
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
                />
              </svg>
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out transform`}
        >
          <div className="flex flex-col space-y-4 px-2 pt-2 pb-4 text-center">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-blue-600 font-medium text-lg transition duration-300"
            >
              Features
            </a>
            <a 
              href="#colleges" 
              className="text-gray-600 hover:text-blue-600 font-medium text-lg transition duration-300"
            >
              Colleges
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-blue-600 font-medium text-lg transition duration-300"
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 font-medium text-lg transition duration-300"
            >
              Contact
            </a>
            <a 
              href="/login" 
              className="mt-4 text-blue-600 font-medium text-lg py-2 rounded-full border-2 border-blue-600 transition duration-300 hover:bg-blue-50"
            >
              Login
            </a>
            <a 
              href="/signup" 
              className="bg-blue-600 text-white font-medium text-lg py-2 rounded-full transition duration-300 hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;