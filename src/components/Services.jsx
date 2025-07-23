import React, {useEffect, useState ,useMemo, use} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo_fff from "../assets/logo_fff.png";
import logo from "../assets/logo.png";
import { Menu, X } from 'lucide-react';
import {
  Search, Grid, List, ChevronDown, Star, Grid3X3, Heart,
  Share2, Eye, ChevronLeft, ChevronRight, MapPin, Home,
  ArrowLeft, Camera, Clock, Phone, Mail, Check
} from 'lucide-react';

const BrokiServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('Newest');
  const [viewMode, setViewMode] = useState('Grid');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentView, setCurrentView] = useState('listing');
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();
  
  
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

  
  const handleBackToListing = () => {
    setCurrentView('listing');
    setSelectedService(null);
  };  
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setCurrentView('detail');
  };

  const photographers = [
    {
      id: 1,
      name: 'Anamika',
      title: 'Food Photography by Anamika',
      category: "Food Photography",
      price: 500,
      rating: 4.8,
      reviews: 45,
      location: 'Delhi NCR',
      service: 'Food Photography',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      gallery: [
        "https://plus.unsplash.com/premium_photo-1694547926001-f2151e4a476b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
      ],
      featured: true,
      dateAdded: '2024-01-15',
      description: 'Anamika is a Delhi-based photographer with over 5 years of professional experience, specializing in food photography. She brings exceptional artistic vision and technical expertise to every project.',
      portfolio: 120,
      experience: '5+ years',
      features: [
        "Professional food photography",
        "High-resolution images",
        "Creative styling and composition",
        "Quick turnaround time"
      ],
      packages: [
        { name: "Basic Package", price: 3000, features: ["20 edited photos", "Basic styling", "2-hour session"] },
        { name: "Standard Package", price: 5000, features: ["50 edited photos", "Professional styling", "4-hour session", "Props included"] },
        { name: "Premium Package", price: 8000, features: ["100 edited photos", "Premium styling", "Full day session", "All props included", "Rush delivery"] }
      ]      
    },
    {
      id: 2,
      name: 'Hridyansh',
      title: 'Food Photography by Hridyansh',
      price: 4500,
      rating: 4.9,
      reviews: 78,
      location: 'Mumbai',
      service: 'Food Photography',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
      gallery: [
        "https://plus.unsplash.com/premium_photo-1694547926001-f2151e4a476b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
      ],
      featured: true,
      dateAdded: '2024-01-20',
      description: 'Hridyansh specializes in vibrant food photography with a focus on restaurant and cafe branding.' ,
      portfolio: 200,
      experience: '8+ years',
      features: [
        "Restaurant photography",
        "Menu photography",
        "Social media content",
        "Brand photography"
      ],
      packages: [
        { name: "Basic Package", price: 2500, features: ["15 edited photos", "Basic styling", "2-hour session"] },
        { name: "Standard Package", price: 4500, features: ["40 edited photos", "Professional styling", "4-hour session"] },
        { name: "Premium Package", price: 7000, features: ["80 edited photos", "Premium styling", "Full day session"] }
      ]      
    },
    {
      id: 3,
      name: 'Maninder',
      title: 'Food Photography by Maninder',
      price: 2500,
      rating: 4.7,
      reviews: 32,
      location: 'Banglore',
      service: 'Food Photography',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
      gallery: [
        "https://plus.unsplash.com/premium_photo-1694547926001-f2151e4a476b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
      ],
      featured: true,
      dateAdded: '2024-01-10',
      description: 'Maninder brings creative vision to food photography with expertise in both traditional and modern styling.',
      portfolio: 95,
      experience: '4+ years',
      
      features: [
        "Creative food styling",
        "Product photography",
        "Editorial photography",
        "Commercial shoots"
      ], 
      packages: [
        { name: "Basic Package", price: 3500, features: ["25 edited photos", "Basic styling", "3-hour session"] },
        { name: "Standard Package", price: 5500, features: ["60 edited photos", "Professional styling", "5-hour session"] },
        { name: "Premium Package", price: 8500, features: ["120 edited photos", "Premium styling", "Full day session"] }
      ]      
    },
    {
      id: 4,
      name: 'Krishn',
      title: 'Food Photography by Krishn',
      price: 1000,
      rating: 4.6,
      reviews: 56,
      location: 'Krishn Chatterjee',
      service: 'Food Photography',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      featured: true,
      dateAdded: '2024-01-25',
      description: 'Traditional and modern food photography with cultural touch',
      portfolio: 150,
      experience: '6+ years'
    },
    {
      id: 5,
      name: 'Manish',
      title: 'Food Photography by Manish',
      price: 15000,
      rating: 4.8,
      reviews: 89,
      location: 'Manish Upadhayay',
      service: 'Food Photography',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
      featured: false,
      dateAdded: '2024-01-05',
      description: 'Premium food photography for high-end restaurants and brands',
      portfolio: 300,
      experience: '10+ years'
    },
    {
      id: 6,
      name: 'Ishant',
      title: 'Food Photography by krishant',
      price: 1750,
      rating: 4.9,
      reviews: 67,
      location: 'Krishant yaadav',
      service: 'Food Photography',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
      featured: false,
      dateAdded: '2024-01-18',
      description: 'Creative food photography with social media optimization and brands',
      portfolio: 180,
      experience: '7+ years'
    }
  ];

  // Listing Page Component
  const ListingPage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
            {/* Main Content */}
      <div className='w-300 h-35 mt-10'>
        <h1 className='text-center font-poppins mt-20 tracking-wide text-[37px] font-semibold'>Professional Food Photography for Your F&B Business</h1>
        <h4 className='text-left ml-22 mt-2 tracking-wide font' >Home / Food Photography</h4>
      </div>
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm font-medium">Sort by</span>
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                  <option>Most Reviews</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            
          </div>
          
          <div className="flex items-center gap-2 bg-white rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setViewMode('Grid')}
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                viewMode === 'Grid' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
              Grid
            </button>
            <button
              onClick={() => setViewMode('List')}
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                viewMode === 'List' 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <List className="w-4 h-4" />
              List
            </button>
          </div>
        </div>
      </div>


      

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photographers.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Featured
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{service.title}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{service.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{service.location}</span>
                  <span className="mx-2">•</span>
                  <span>{service.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900">
                    ₹{service.price.toLocaleString()}
                    <span className="text-sm font-normal text-gray-500"> /project</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ); 


  // Detail Page Component
  const DetailPage = ({ service }) => (
    <div className="min-h-screen bg-gray ml-7 mr-7">
      {/* Header */}
      <header className="bg-gray-50 shadow-sm border-b-gray-200 ">
        <div className="max-w-7xl mx-auto px-4 py-4 ">
          <button
            onClick={handleBackToListing}
            className="flex items-center mt-3 text-blue-600 hover:text-blue-800 mb-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to all services
          </button>
          <h1 className="text-[35px] mt-6 font-bold text-gray-900">{service.title}</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {service.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-20 object-cover rounded-md"
                />
              ))}
            </div>

            {/* Overview */}
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">₹{service.price}</div>
                  <div className="text-sm text-gray-600">per item</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{service.category}</div>
                  <div className="text-sm text-gray-600">Category</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">On Site Service</div>
                  <div className="text-sm text-gray-600">Service Type</div>
                </div>
              </div>
            </div>

            {/* Provider Description */}
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Provider Description</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">What does the photoshoot package include?</h3>
                  <p className="text-gray-700 text-sm">Our packages include professional photography, basic editing, and high-resolution images delivered within 48 hours.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can I choose style of photography?</h3>
                  <p className="text-gray-700 text-sm">Yes, we offer various photography styles including modern, traditional, and artistic approaches to match your brand.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1 sticky">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-4">Enhance Your Service</h3>
              
              {/* Package Options */}
              <div className="space-y-3 mb-6">
                {service.packages.map((pkg, index) => (
                  <div key={index} className="border rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{pkg.name}</h4>
                        <div className="text-lg font-bold text-blue-600">₹{pkg.price.toLocaleString()}</div>
                      </div>
                      <button className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50">
                        Add
                      </button>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-3 h-3 text-green-500 mr-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 mb-6">
                <h4 className="font-medium mb-3">Price Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Base Service Fee</span>
                    <span>₹{service.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Basic Styling Package</span>
                    <span>₹500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional Editing Fee</span>
                    <span>₹300</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total</span>
                    <span>₹{(service.price + 800).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mb-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>contact@foodphotography.com</span>
                </div>
              </div>

              {/* Book Button */}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Login to Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


     
  return (
    <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className={`sticky top-0 z-10 transition-colors duration-200 ${scrolled ? 'bg-gray shadow' : 'bg-white '}`}>
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

          


        <div>
          {currentView === 'listing' ? (<ListingPage />) :
          (
            <DetailPage service={selectedService} />
          )}
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

export default BrokiServicesPage;