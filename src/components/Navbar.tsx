"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Use Airlin
          </Link>

          <div className="hidden lg:flex space-x-8">
            <Link
              href="/solutions"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Recommendations
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Plans
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Find Best Airline
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-b border-gray-200"
        >
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/solutions"
              className="block text-gray-600 hover:text-blue-600"
            >
              Recommendations
            </Link>
            <Link
              href="/blog"
              className="block text-gray-600 hover:text-blue-600"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-600 hover:text-blue-600"
            >
              Plans
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-blue-600"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="block text-gray-600 hover:text-blue-600"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block text-gray-600 hover:text-blue-600"
            >
              Find Best Airline
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
