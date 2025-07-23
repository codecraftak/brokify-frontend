import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_fff from "../assets/logo_fff.png";
import logo from "../assets/logo.png";
import { Menu, X } from 'lucide-react';
import { Search, Grid, List, ChevronLeft, ChevronRight, MapPin, Home } from 'lucide-react';

const BrokiBlogPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSendOTP = () => {
    // Handle OTP sending logic here
    console.log('Sending OTP to:', phoneNumber);
  };
  

  const blogPosts = [
    {
      id: 1,
      image: "https://www.broki.in/_next/image?url=https%3A%2F%2Fadmin.broki.in%2Fstorage%2F1298%2FHow-to-Set-Up-a-Cloud-Kitchen-in-India.jpg&w=828&q=75",
      title: "How to Set Up a Cloud Kitchen in India: The Ultimate Checklist",
      description: "Cloud kitchens are transforming how food businesses operate in India. With no dine-in setup and a de..."
    },
    {
      id: 2,
      image: "https://www.broki.in/_next/image?url=https%3A%2F%2Fadmin.broki.in%2Fstorage%2F1296%2FHow-to-Set-Up-a-Commercial--Bakery-in-India.jpg&w=828&q=75",
      title: "How to Set Up a Commercial Bakery in India: A Step-by-Step Guide",
      description: "Starting a commercial bakery requires careful planning and understanding of market demands..."
    },
    {
      id: 3,
      image: "https://www.broki.in/_next/image?url=https%3A%2F%2Fadmin.broki.in%2Fstorage%2F1295%2FHow-To-Choose-the-Right-Outlet-Type-For-Your-F%26B-Business.jpg&w=828&q=75",
      title: "How to Choose the Right Outlet Type for Your F&B Business",
      description: "Choosing the right outlet type is crucial for your food and beverage business success..."
    },
    {
      id: 4,
      image: "https://www.broki.in/_next/image?url=https%3A%2F%2Fadmin.broki.in%2Fstorage%2F1267%2FHow-to-start-a-cloud-kitchen-from-home-(1).jpg&w=828&q=75",
      title: "How to Start a Cloud Kitchen from Home",
      description: "Starting a cloud kitchen from home can be a cost-effective way to enter the food business..."
    },
    {
      id: 5,
      image: "https://www.broki.in/_next/image?url=https%3A%2F%2Fadmin.broki.in%2Fstorage%2F1263%2FThings-to-keep-in-mind-before-leasing-a-restaurant-property-in-India.jpg&w=828&q=75",
      title: "Things to Keep in Mind Before Leasing a Restaurant Property",
      description: "Before leasing a restaurant property, consider location, foot traffic, and lease terms..."
    },
    {
      id: 6,
      image: "https://www.broki.in/_next/image?url=https%3A%2F%2Fadmin.broki.in%2Fstorage%2F1042%2F7-Essential-Steps-to-Successfully-Set-Up-a-Cloud-Kitchen-in-India.png&w=828&q=75",
      title: "7 Essential Steps to Successfully Set Up a Cloud Kitchen",
      description: "Follow these essential steps to ensure your cloud kitchen setup is successful..."
    },
    {
      id: 7,
      image: "https://www.broki.in/_next/image?url=https%3A%2F%2Fadmin.broki.in%2Fstorage%2F619%2Fallabout-1240x720.jpg&w=828&q=75",
      title: "All About Restaurant Business in India",
      description: "Complete guide to understanding the restaurant business landscape in India..."
    }
  ];
 

   
  return (
    <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className={`sticky top-0 bg-white z-10 transition-colors duration-200 ${scrolled ? 'bg-white shadow' : 'bg-gray-100 '}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <img src={logo} className='w-22 ml-6 px-2'/>
                <div className="flex items-center">
                  <div className="text-4xl mr-40 font-bold text-black">
                    TEN
                  </div>
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                  className="md:hidden "
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                
                {/* Fixed Navigation */}
                <nav className="hidden md:flex items-center -ml-31 text-sm text-emerald-500 font-bold font-poppins">
                  <Link
                    to="/"
                    className={`px-4 py-2 rounded-md transition-colors ${
                      window.location.pathname === '/' 
                        ? 'font-bold font-poppins' 
                    : 'hover:text-bold'
                    }`}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/listings"
                    className={`px-4 py-2 rounded-md transition-colors ${
                      window.location.pathname === '/listings' 
                        ? 'bg-teal-500 text-white' 
                        : 'text-gray-700 hover:text-emerald-500/50'
                    }`}
                  >
                    Listings
                  </Link>
                  <Link
                    to="/team"
                    className={`px-4 py-2 rounded-md transition-colors ${
                      window.location.pathname === '/team' 
                        ? 'bg-teal-500 text-white' 
                        : 'text-gray-700 hover:text-emerald-500/50'
                    }`}
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/services"
                    className={`px-4 py-2 rounded-md transition-colors ${
                      window.location.pathname === '/services' 
                        ? 'bg-teal-500 text-white' 
                        : 'text-gray-700 hover:text-emerald-500/50'
                    }`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/blog"
                    className={`px-4 py-2 rounded-md transition-colors ${
                      window.location.pathname === '/blog' 
                        ? 'bg-teal-500 text-white' 
                        : 'text-gray-700 hover:text-emerald-500/50'
                    }`}
                  >
                    Blogs
                  </Link>
                  <Link 
                    to="/contact"
                    className={`px-4 py-2 rounded-md transition-colors ${
                      window.location.pathname === '/contact'
                        ? 'bg-teal-500 text-white' 
                        : 'text-gray-700 hover:text-emerald-500/50'
                    }`}
                  >
                    Contact Us
                  </Link>
                </nav>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                  <Link 
                      to="/list-outlet"
                      className="border-2 bg-black text-white px-10 py-5 rounded-2xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-200"
                  >
                      List Your Outlet
                  </Link>
                  <button 
                      onClick={openModal}
                      className=" text-black font-bold px-4 py-2 rounded-md hover:bg-emerald-500 hover:text-white transition-all duration-200 flex items-center space-x-1"
                  >
                      <span>🔐</span>
                      <span>Login / Register</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t z-10">
              <div className="px-4 py-2 space-y-2">
                <Link
                  to="/" 
                  className={`block w-full text-left px-4 py-2 rounded-md ${
                    window.location.pathname === '/' 
                      ? 'bg-emerald-500 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/listings" 
                  className={`block w-full text-left px-4 py-2 rounded-md ${
                    window.location.pathname === '/listings' 
                      ? 'bg-emerald-500 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Listings
                </Link>
                <Link 
                  to="/team"
                  className={`block w-full text-left px-4 py-2 rounded-md ${
                    window.location.pathname === '/team' 
                      ? 'bg-emerald-500 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Our Team
                </Link>
                <Link 
                  to="/services"  
                  className={`block w-full text-left px-4 py-2 rounded-md ${
                    window.location.pathname === '/services' 
                      ? 'bg-emerald-500 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Services
                </Link>
                <Link 
                  to="/blog"
                  className={`block w-full text-left px-4 py-2 rounded-md ${
                    window.location.pathname === '/blog' 
                      ? 'bg-emerald-500 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Blogs
                </Link>
                <Link 
                  to="/contact"
                  className={`block w-full text-left px-4 py-2 rounded-md ${
                    window.location.pathname === '/contact' 
                      ? 'bg-emerald-500 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}

      {/* Login/Register Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay with 50% opacity */}
          <div 
            className="fixed inset-0 bg-black opacity-30" style={{ top:'90px' }}
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white  rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Modal Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
              <p className="text-gray-600">Login to your account or create a new one</p>
            </div>
            
            {/* Login Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
              </div>
              
              <button
                onClick={handleSendOTP}
                className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-200"
              >
                Send OTP
              </button>
              
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  By continuing, you agree to our{' '}
                  <button className="text-emerald-500 hover:text-emerald-600 underline">
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button className="text-emerald-500 hover:text-emerald-600 underline">
                    Privacy Policy
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}          


      {/* Main Content */}
      <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-100 px-4 py-8 md:py-12">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-2">
            Blogs
          </h1>
          <h3 className="text-sm md:text-base text-gray-600">
            Home / Blogs
          </h3>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Blog Posts - Left Column */}
          <div className="lg:col-span-3 space-y- w-200 ">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500 tracking-wide">
                    Start A Restaurant
                  </span>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 mt-2 mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-4 tracking-wide">
                Categories
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
                  Start A Restaurant
                </li>
                <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
                  Start A Cloud Kitchen
                </li>
                <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
                  Start A Bakery
                </li>
              </ul>
            </div>

            {/* Latest Blogs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-4 tracking-wide">
                Latest Blogs
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-1">
                    How to Set Up a Cloud Kitchen in India: The Ultimate Checklist
                  </p>
                  <p className="text-xs text-gray-400">Tue Jul 01 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-1">
                    How to Start a Commercial Bakery in India: A Step-by-Step Guide
                  </p>
                  <p className="text-xs text-gray-400">Tue Jun 24 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-1">
                    How to Choose the Right Outlet Type for Your F&B Business
                  </p>
                  <p className="text-xs text-gray-400">Tue Jun 09 2025</p>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-4 tracking-wide">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
                  Online Food Delivery
                </span>
                <span className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
                  Sell A Restaurant
                </span>
                <span className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 cursor-pointer transition-colors">
                  Start A Restaurant
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

      
      

            {/* Footer */}
            <footer className="bg-black/86 border-t ml-11 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-4">
                      <img src={logo_fff}  className='w-22 ml-0 px-2'/>
                      <div className="flex items-center">
                          <div className="text-4xl ml-2 font-bold text-white">
                              TEN
                          </div>
                      </div>
                    </div>
                    <p className="text-white">
                      Your trusted partner for F&B business solutions. From real estate to services, we've got you covered.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-4">Services</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-white hover:text-green-600">Real Estate</a></li>
                      <li><a href="#" className="text-white hover:text-green-600">Photography</a></li>
                      <li><a href="#" className="text-white hover:text-green-600">Consulting</a></li>
                      <li><a href="#" className="text-white hover:text-green-600">Marketing</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-4">Company</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-white hover:text-green-600">About Us</a></li>
                      <li><a href="#" className="text-white hover:text-green-600">Our Team</a></li>
                      <li><a href="#" className="text-white hover:text-green-600">Careers</a></li>
                      <li><a href="#" className="text-white hover:text-green-600">Contact</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-4">Support</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-white hover:text-green-600">Help Center</a></li>
                      <li><a href="#" className="text-white hover:text-green-600">Terms of Service</a></li>
                      <li><a href="#" className="text-white hover:text-green-600">Privacy Policy</a></li>
                      <li><a href="#" className="text-white hover:text-green-600">FAQ</a></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t mt-12 pt-8 text-center text-white">
                  <p>&copy; 2025 The Entrepreneurship Network. All rights reserved.</p>
                </div>
              </div>
            </footer>
      
    </div>
  );
};

export default BrokiBlogPage;