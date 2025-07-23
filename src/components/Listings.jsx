import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_fff from "../assets/logo_fff.png";
import logo from "../assets/logo.png";
import { Menu, X } from 'lucide-react';
import { Search, Grid, List, ChevronLeft, ChevronRight, MapPin, Home } from 'lucide-react';

const BrokiListingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSendOTP = () => {
    // Handle OTP sending logic here
    console.log('Sending OTP to:', phoneNumber);
    alert(`OTP sent to ${phoneNumber}`);
    closeModal();
  };

  const [filters, setFilters] = useState({
    status: '',
    propertyType: '',
    minPrice: 0,
    maxPrice: 100000,
    location: ''
  });

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Cafe for sale in Indrapuram",
      price: "₹99 Lakh",
      location: "Indrapuram, Ghaziabad",
      status: "For Sale",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
      type: "Cafe"
    },
    {
      id: 2,
      title: "Running Kiosk is on lease in Noida",
      price: "₹90 Thousand / mo",
      location: "Sector 18, Noida",
      status: "For Rent",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      type: "Kiosk"
    },
    {
      id: 3,
      title: "Restaurant for sale in Gurgaon",
      price: "₹1.2 Crore",
      location: "Cyber City, Gurgaon",
      status: "For Sale",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      type: "Restaurant"
    },
    {
      id: 4,
      title: "Coffee Shop for rent in Pune",
      price: "₹75 Thousand / mo",
      location: "Koregaon Park, Pune",
      status: "For Rent",
      image: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      type: "Coffee Shop"
    }
  ];

  // Navigation functions (placeholder implementations)
  const navigateToHomepage = () => console.log('Navigate to homepage');
  const navigateToListings = () => console.log('Navigate to listings');
  const navigateToTeam = () => console.log('Navigate to team');
  const navigateToServices = () => console.log('Navigate to services');
  const navigateToBlog = () => console.log('Navigate to blog');
  const navigateToContact = () => console.log('Navigate to contact');
  const navigateToListOutlet = () => console.log('Navigate to list outlet');
  const navigateToLogin = () => console.log('Navigate to login');

  const handleSearch = () => {
    alert('Searching properties with applied filters...');
    // Implement search logic here
  };

  const clearFilters = () => {
    setFilters({
      status: '',
      propertyType: '',
      minPrice: 0,
      maxPrice: 100000,
      location: ''
    });
    alert('All filters have been reset');
  };

  const PropertyCard = ({ property }) => {
    if (viewMode === 'list') {
      return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex overflow-hidden">
          <div className="w-48 h-32 relative">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {property.price}
            </div>
          </div>
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">{property.title}</h3>
              <div className="text-emerald-600 font-bold text-lg mb-1">{property.price}</div>
              <div className="flex items-center text-gray-600 text-sm mb-1">
                <MapPin className="w-4 h-4 mr-1" />
                {property.location}
              </div>
            </div>
            <div className="text-sm text-gray-500">{property.status}</div>
          </div>
        </div>
      );
    }

    return (

     <Link to={`/property/${property.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="relative h-48">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.price}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2">{property.title}</h3>
          <div className="text-emerald-600 font-bold text-lg mb-2">{property.price}</div>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </div>
          <div className="text-sm text-gray-500">{property.status}</div>
        </div>
      </div>
     </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className={`sticky top-0 z-10 transition-colors duration-200 ${scrolled ? 'bg-white shadow' : 'bg-gray-100'}`}>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-6">Filters</h3>
              
              {/* Listing Status */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Listing Status
                </label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  value={filters.status}
                  onChange={(e) => setFilters({...filters, status: e.target.value})}
                >
                  <option value="">All Status</option>
                  <option value="for-sale">For Sale</option>
                  <option value="for-rent">For Rent</option>
                  <option value="sold">Sold</option>
                </select>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  value={filters.propertyType}
                  onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                >
                  <option value="">All Types</option>
                  <option value="cafe">Cafe</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="shop">Shop</option>
                  <option value="office">Office</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="flex items-center space-x-2">
                  <input 
                    type="number" 
                    placeholder="Min"
                    className="w-20 p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                  />
                  <span>-</span>
                  <input 
                    type="number" 
                    placeholder="Max"
                    className="w-20 p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                >
                  <option value="">All Locations</option>
                  <option value="indrapuram">Indrapuram</option>
                  <option value="noida">Noida</option>
                  <option value="gurgaon">Gurgaon</option>
                  <option value="pune">Pune</option>
                </select>
              </div>

              {/* Search Button */}
              <button 
                onClick={handleSearch}
                className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>

              {/* Clear Filters */}
              <button 
                onClick={clearFilters}
                className="w-full mt-3 text-emerald-500 hover:text-emerald-600 text-sm flex items-center justify-center space-x-1"
              >
                <span>🗑️</span>
                <span>Reset all filters</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-4">
              <span className="cursor-pointer hover:text-emerald-500" onClick={navigateToHomepage}>Home</span>
              <span className="mx-2">/</span>
              <span>Listings</span>
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Find the best listing for your brand</h1>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-600">
                Showing 1-4 of {properties.length} results
              </div>

              <div className="flex items-center space-x-4">
                {/* View Toggle */}
                <div className="flex border border-gray-300 rounded-md overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-emerald-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort */}
                <select 
                  className="p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>

            {/* Property Listings */}
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[1, 2].map(page => (
                <button 
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 border rounded-md transition-colors ${
                    currentPage === page 
                      ? 'bg-emerald-500 text-white border-emerald-500' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-4 h-4" />
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

export default BrokiListingPage;