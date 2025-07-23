import React, { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import logo_fff from "../assets/logo_fff.png";
import logo from "../assets/logo.png";
import { Menu, X } from 'lucide-react';
import { Search, Grid, List, ChevronLeft, Building,Phone,Send,ChevronRight, Plus, Minus,RotateCcw,MapPin, Home } from 'lucide-react';

const BrokiContactPage = () => {
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    queryType: '',
    address: '',
    brandName: ''
  });

  const [mapState, setMapState] = useState({
    scale: 1,
    translateX: 0,
    translateY: 0,
    isDragging: false,
    dragStart: { x: 0, y: 0 }
  });

  const mapRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleZoomIn = () => {
    setMapState(prev => ({
      ...prev,
      scale: Math.min(prev.scale * 1.2, 3)
    }));
  };

  const handleZoomOut = () => {
    setMapState(prev => ({
      ...prev,
      scale: Math.max(prev.scale / 1.2, 0.5)
    }));
  };

  const handleResetMap = () => {
    setMapState(prev => ({
      ...prev,
      scale: 1,
      translateX: 0,
      translateY: 0
    }));
  };

  const handleMouseDown = (e) => {
    setMapState(prev => ({
      ...prev,
      isDragging: true,
      dragStart: { x: e.clientX - prev.translateX, y: e.clientY - prev.translateY }
    }));
  };

  const handleMouseMove = (e) => {
    if (!mapState.isDragging) return;
    
    setMapState(prev => ({
      ...prev,
      translateX: e.clientX - prev.dragStart.x,
      translateY: e.clientY - prev.dragStart.y
    }));
  };

  const handleMouseUp = () => {
    setMapState(prev => ({
      ...prev,
      isDragging: false
    }));
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setMapState(prev => ({
      ...prev,
      scale: Math.min(Math.max(prev.scale * delta, 0.5), 3)
    }));
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (mapState.isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [mapState.isDragging]);  
 
   
  return (
    <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className={`sticky top-0 z-10 transition-colors duration-200 ${scrolled ? 'bg-white shadow' : 'bg-gray-100 '}`}>
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
                  <Link 
                onClick={ openModal }
                      className=" text-black font-bold px-4 py-2 rounded-md hover:bg-emerald-500 hover:text-white transition-all duration-200 flex items-center space-x-1"
                  >
                      <span>🔐</span>
                      <span>Login / Register</span>
                  </Link>
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
      <div className="relative bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 overflow-hidden">
        {/* Interactive World Map Background */}
        <div 
          className="absolute inset-0 cursor-move select-none"
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
          ref={mapRef}
        >
          <div 
            className="w-full h-full transition-transform duration-200 ease-out"
            style={{
              transform: `scale(${mapState.scale}) translate(${mapState.translateX}px, ${mapState.translateY}px)`,
              transformOrigin: 'center center'
            }}
          >
            {/* SVG World Map */}
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-full opacity-30"
              style={{ minWidth: '100%', minHeight: '100%' }}
            >
              {/* Africa */}
              <path d="M480 150 L520 140 L560 160 L580 200 L570 240 L550 280 L530 320 L510 350 L490 340 L470 300 L460 260 L450 220 L460 180 Z" 
                    fill="#ffffff" stroke="#e0e0e0" strokeWidth="1"/>
              
              {/* Europe */}
              <path d="M450 120 L480 110 L520 115 L540 130 L530 150 L500 145 L470 140 L450 135 Z" 
                    fill="#ffffff" stroke="#e0e0e0" strokeWidth="1"/>
              
              {/* Asia */}
              <path d="M540 120 L620 110 L680 130 L720 150 L740 180 L730 220 L700 240 L670 230 L640 220 L600 200 L570 180 L550 160 Z" 
                    fill="#ffffff" stroke="#e0e0e0" strokeWidth="1"/>
              
              {/* North America */}
              <path d="M150 120 L230 110 L280 130 L320 150 L340 180 L330 220 L300 240 L270 230 L240 220 L200 200 L170 180 L150 160 Z" 
                    fill="#ffffff" stroke="#e0e0e0" strokeWidth="1"/>
              
              {/* South America */}
              <path d="M280 260 L320 250 L340 280 L350 320 L345 360 L335 400 L320 430 L300 420 L285 390 L275 350 L270 310 Z" 
                    fill="#ffffff" stroke="#e0e0e0" strokeWidth="1"/>
              
              {/* Australia */}
              <path d="M720 320 L780 315 L820 330 L830 350 L825 370 L800 375 L760 370 L730 360 L720 340 Z" 
                    fill="#ffffff" stroke="#e0e0e0" strokeWidth="1"/>
              
              {/* India (highlighted) */}
              <path d="M600 200 L630 195 L645 215 L640 235 L625 245 L605 240 L595 220 Z" 
                    fill="#10B981" stroke="#059669" strokeWidth="2"/>
              
              {/* Latitude/Longitude Grid */}
              <defs>
                <pattern id="grid" width="50" height="25" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 25" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Location Markers */}
              <circle cx="625" cy="220" r="4" fill="#EF4444" stroke="#ffffff" strokeWidth="2"/>
              <circle cx="625" cy="225" r="4" fill="#EF4444" stroke="#ffffff" strokeWidth="2"/>
              
              {/* Ocean areas */}
              <circle cx="100" cy="200" r="30" fill="#3B82F6" opacity="0.3"/>
              <circle cx="400" cy="100" r="20" fill="#3B82F6" opacity="0.3"/>
              <circle cx="600" cy="350" r="25" fill="#3B82F6" opacity="0.3"/>
              <circle cx="800" cy="150" r="15" fill="#3B82F6" opacity="0.3"/>
            </svg>
          </div>
        </div>
        
        {/* Map Controls */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          <button 
            onClick={handleZoomIn}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-110"
            title="Zoom In"
          >
            <Plus className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            onClick={handleZoomOut}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-110"
            title="Zoom Out"
          >
            <Minus className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            onClick={handleResetMap}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-110"
            title="Reset View"
          >
            <RotateCcw className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        
        {/* View Larger Map Button */}
        <div className="absolute top-4 right-4">
          <button className="bg-white bg-opacity-90 hover:bg-opacity-100 px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 text-sm font-medium text-gray-700">
            View larger map
          </button>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Have questions? Get in touch!</h2>
              <p className="text-gray-600 mb-6">We'd love to hear from you</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your Phone Number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your Email ID"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Query Type</label>
                  <select
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    rows="3"
                    placeholder="Address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
                  <input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="E.g, Pharmatech Care Pvt Ltd."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors duration-200 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  Submit
                </button>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="text-center text-white">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  We'd Love To Hear<br />
                  From You.
                </h1>
                <p className="text-lg opacity-90 max-w-md mx-auto">
                  We are here to answer any questions you may have, so don't hesitate to reach out to us.
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-white bg-opacity-20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Office Locations Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interested in learning more about what we do? Swing by our office to talk business!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* New Delhi Office */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">New Delhi</h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-medium">
                  Galleria Jyoti Building, G-178, 1st Subhash Place, New Delhi
                </p>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 844 8517 562</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium underline">
                  View Google Map
                </button>
              </div>
            </div>
            
            {/* Noida Office */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Noida</h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-medium">
                  Plot Lordship DTC, Block-C, Industrial Area, Sector 62, Noida
                </p>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 844 3453 645</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium underline">
                  View Google Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Need help? Talk to our expert.</h3>
              <p className="text-gray-600">Talk to our experts or browse through more properties.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-colors">
                Contact Us
              </button>
              <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition-colors">
                +91 987 654 3210 
              </button>
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

export default BrokiContactPage;