// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-500">
              Logo
            </Link>
          </div>

          
          <div className="hidden md:flex items-center w-full max-w-md mx-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link href="/product" className="text-gray-700 hover:text-blue-500">
              Product
            </Link>

            
            <AiOutlineShoppingCart size={24} className="cursor-pointer text-gray-700" />

            
            <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Login
            </Link>
          </div>

          
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-2 space-y-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <Link href="/" className="block text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link href="/product" className="block text-gray-700 hover:text-blue-500">
              Product
            </Link>
            <div className="flex items-center space-x-4">
              <AiOutlineShoppingCart size={24} className="cursor-pointer text-gray-700" />
              <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
