// components/Footer.jsx atau Footer.tsx
"use client";

import Link from "next/link";
import { AiFillFacebook, AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold">Toko sepatu</h2>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>

          
          <div className="flex space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-white">
              About Us
            </Link>
            <Link href="/product" className="text-gray-300 hover:text-white">
              Products
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white">
              FAQ
            </Link>
          </div>
        </div>

        
        <hr className="border-gray-700" />

        
        <div className="flex flex-wrap justify-between items-center mt-8">
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <AiFillFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <AiOutlineInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <AiFillTwitterCircle size={24} />
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-4 lg:mt-0">
            © {new Date().getFullYear()} CasualGear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
