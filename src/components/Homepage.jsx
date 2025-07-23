import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, Search, MapPin, Star, Users, Camera, ChevronRight, Play, Award, CheckCircle, Shield } from 'lucide-react';
import girl from '../assets/girl.png';
import logo from "../assets/logo.png";
import logo_fff from "../assets/logo_fff.png";

export default function BrokiHomepage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Real Estate');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
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
  
        
      const listings = [
        {
          id: 1,
          title: "Fine Dining Restaurant for Rent in Greater Kailash - 30 - New Delhi (Delhi)",
          price: "₹5 Lakh",
          period: "/ Per month",
          image: "https://www.broki.in/_next/image?url=https%3A%2F%2Fadmin.broki.in%2Fstorage%2F843%2F1000064828.jpg&w=384&q=75",
          status: "FOR LEASE",
          type: "Restaurant"
        },
        {
          id: 2,
          title: "Restaurant Space for Rent in Connaught Place",
          price: "₹12 Lakh",
          period: "/ Per month", 
          image: "https://www.broki.in/_next/image?url=https%3A%2F%2Fadmin.broki.in%2Fstorage%2F1210%2Fc.jpg&w=384&q=75",
          status: "FOR LEASE",
          type: "Restaurant"
        },
        {
          id: 3,
          title: "Space available on lease in Rajouri Garden",
          price: "₹15,000",
          period: "/ Per month",
          image: "https://www.broki.in/_next/image?url=https%3A%2F%2Fadmin.broki.in%2Fstorage%2F1096%2FSPACE-FOR-LEASE.png&w=384&q=75", 
          status: "FOR LEASE",
          type: "Commercial"
        },
        {
          id: 4,
          title: "Space available on lease in old Rajender Nagar",
          price: "₹75 Thousand",
          period: "/ Per month",
          image: "https://www.broki.in/_next/image?url=https%3A%2F%2Fadmin.broki.in%2Fstorage%2F1096%2FSPACE-FOR-LEASE.png&w=384&q=75",
          status: "FOR LEASE", 
          type: "Commercial"
        }
      ];
    
        const trustedBrands = [
        { name: "Zomato", logo: "https://www.broki.in/_next/image?url=%2Fimages%2Fpartners%2F10.png&w=128&q=75" },
        { name: "Swiggy", logo: "https://www.broki.in/_next/image?url=%2Fimages%2Fpartners%2F5.png&w=128&q=75" },
        { name: "Taj", logo: "https://www.broki.in/_next/image?url=%2Fimages%2Fpartners%2F2.png&w=128&q=75" },
        { name: "Plaza", logo: "https://www.broki.in/_next/image?url=%2Fimages%2Fpartners%2F6.png&w=128&q=75" },
        { name: "Blinkit", logo: "https://www.broki.in/_next/image?url=%2Fimages%2Fpartners%2F4.png&w=128&q=75" },
        { name: "Domino's", logo: "https://www.broki.in/_next/image?url=%2Fimages%2Fpartners%2F13.png&w=128&q=75" },
        { name: "Swiggy", logo: "https://www.broki.in/_next/image?url=%2Fimages%2Fpartners%2F1.png&w=128&q=75" },
        { name: "stranza living", logo: "https://www.broki.in/_next/image?url=%2Fimages%2Fpartners%2F7.png&w=128&q=75" }    
        ];
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        clientType: '',
        location: '',
        brandName: ''
    });
  
    const [visibleItems, setVisibleItems] = useState([]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev.length < 4) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 300);
    return () => clearInterval(timer);
  }, []);
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };
  
  const whyChooseUsItems = [
    {
      icon: <Users className="w-8 h-8 text-orange-500 hover:text-amber-100" />,
      title: "Strategic Partnerships",
      description: "Benefit from our strong network of industry-leading partners and vendors, providing you with the best resources and opportunities."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500 hover:text-amber-100" />,
      title: "Industry Expertise", 
      description: "With years of experience in the B2B industry, our team brings deep market knowledge and innovative strategies to help your business succeed."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-500 hover:text-amber-100" />,
      title: "Customized Solutions",
      description: "Our services are designed to grow with your business, offering scalability and flexibility to meet your evolving needs."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500 hover:text-amber-100" />,
      title: "Quality and Reliability",
      description: "We are committed to delivering high-quality services with a focus on reliability, ensuring your business operations run smoothly."
    }
  ];
  
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=640&q=75",
      date: "27",
      month: "JAN",
      title: "5 Secret Interior From Home",
      category: "Interior Design"
    },
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=640&q=75",
      date: "22", 
      month: "JAN",
      title: "Budget Friendly Restaurant Decor in India",
      category: "Restaurant Design"
    },
    {
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=640&q=75",
      date: "11",
      month: "JAN",
      title: "7 Essential Steps to Modernize Living in 2024", 
      category: "Modern Living"
    }
  ];
  const handleSearch = () => {
    // Add search functionality here
    console.log('Searching for:', { city: selectedCity, category: selectedCategory });
  };

  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
      <div className="min-h-screen bg-white ">
          {/* Header */}
          <header className={`sticky top-0 z-10 transition-colors duration-200 ${scrolled ? 'bg-white shadow' : 'bg-teal-100/50'}`}>
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
                        ? 'bg-emerald-500 text-black' 
                        : 'text-gray-700 hover:text-emerald-500'
                    }`}
                  >
                    Listings
                  </Link>
                  <Link
                    to="/team"
                    className={`px-4 py-2 rounded-md transition-colors ${
                      window.location.pathname === '/team' 
                        ? 'bg-emerald-500 text-white' 
                        : 'text-gray-700 hover:text-emerald-500'
                    }`}
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/services"
                    className={`px-4 py-2 rounded-md transition-colors ${
                      window.location.pathname === '/services' 
                        ? 'bg-emerald-500 text-white' 
                        : 'text-gray-700 hover:text-emerald-500'
                    }`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/blog"
                    className={`px-4 py-2 rounded-md transition-colors ${
                      window.location.pathname === '/blog' 
                        ? 'bg-emerald-500 text-white' 
                        : 'text-gray-700 hover:text-emerald-500'
                    }`}
                  >
                    Blogs
                  </Link>
                  <Link 
                    to="/contact"
                    className={`px-4 py-2 rounded-md transition-colors ${
                      window.location.pathname === '/contact'
                        ? 'bg-emerald-500 text-white' 
                        : 'text-gray-700 hover:text-emerald-500'
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
                      onClick={openModal}
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

    {/* Hero Section */}
          <section className="bg-teal-100/50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ml-8 items-center">
                {/* Left Content */}
                <div>
                  <h1 className=" text-[2.5rem] font-bold text-gray-900 mb-6 leading-tight">
                    One Stop Solution For All Your FnB Business Need
                  </h1>
                  
                  {/* Tabs */}
                  <div className="flex space-x-4 mb-3 text-[poppins] font-bold text-[1rem]">
                    {['Real Estate', 'Services'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-7 py-4 mb-[-15px] transition-colors ${
                          activeTab === tab
                            ? 'bg-white text-black hover:border-b-black hover:border-b-2'
                            : 'bg-white text-gray-700 hover:bg-gray-50 hover:border-b-black hover:border-b-2'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
    
                  {/* Search Form */}
                  <div className="bg-white rounded-lg shadow-lg px-4 py-8 mb-8 w-[730px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div>
                        <input
                          type="text"
                          placeholder="Select a city"
                          className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Select a category  "
                          className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        />
                      </div>
                      <div className="flex">
                        <button className="text-gray-900 pr-15 font-bold px-3">Advanced</button>
                        <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                          <Search className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Right Image */}
                <div className="relative">
                  <img
                    src={girl}
                    alt="Professional woman with laptop"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute bottom-0 w-70 right-32 animate-[bounce_4s_ease-in-out_infinite] bg-white rounded-lg shadow-lg p-4">
                  <img
                    src="https://www.broki.in/_next/image?url=%2Fimages%2Fabout%2Fabout-1.png&w=384&q=75"
                    alt="Professional woman with laptop"
                    className="w-full h-auto rounded-lg"
                  />
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* Trusted Brands */}
          <section className="py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <p className="text-gray-600 font-bold text-xl">Trusted by the world's best</p>
              </div>
                      
                      {/* Animated Brand Slider */}
              <div className="relative">
                <div className="flex animate-scroll">
                  {/* First set of brands */}
                  {trustedBrands.map((brand, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 mx-8 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="w-32 h-16 flex items-center justify-center">
                          <img 
                            src={brand.logo} 
                            alt={brand.name}
                            className="max-w-full max-h-full object-contain hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {trustedBrands.map((brand, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 mx-8 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="w-32 h-16 flex items-center justify-center">
                          <img 
                            src={brand.logo} 
                            alt={brand.name}
                            className="max-w-full max-h-full object-contain hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* CSS Animation Styles */}
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              
              .animate-scroll {
                animation: scroll 20s linear infinite;
                width: fit-content;
              }
              
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
          </section>

    {/* Listings Section */}
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Near By Listings</h2>
              <p className="text-gray-600">Find premium spaces for your business that match your requirements</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                See All
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                List View
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-white transform hover:scale-105  duration-300 group rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative">
                        <div className="w-full h-48 bg-gray-300 hover:scale-110" style={{ backgroundImage: `url(${listing.image})` }}>
                            
                        </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
                      {listing.status}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {listing.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{listing.price}</span>
                      <span className="text-gray-600 text-sm">{listing.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Hire From Best <span className="text-green-400">Photographer</span> for Your Food Photoshoot
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Capture the essence of your culinary creations with our professional food photography services. Let our expert photographers bring your dishes to life through stunning visuals that elevate your brand.
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                <Camera className="w-5 h-5" />
                <span>Explore Photography Services</span>
              </button>
            </div>
            <div className="relative">
              <div className="bg-transparent rounded-xl p-6">
                <div className="w-full h-96 rounded-lg flex items-center justify-center">
                    <img src="https://www.broki.in/_next/image?url=%2Fimages%2Ffood_photography.png&w=640&q=75" />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-orange-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className=" bg-gradient-to-br from-blue-50 to-orange-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 ml-30 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Why Choose Us
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We offer the full spectrum of services to help individuals choose 
                  the right food business at the right price.
                </p>
              </div>

              {/* Animated Features */}
              <div className="space-y-6">
                {whyChooseUsItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-4 p-6 bg-white hover:bg-amber-50 rounded-2xl shadow-lg transform transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                      visibleItems.includes(index) 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-12 opacity-0'
                    }`}
                    style={{
                      animationDelay: `${index * 300}ms`
                    }}
                  >
                    <div className="flex-shrink-0 p-3 hover:bg-amber-600  bg-orange-100 rounded-full">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Professional Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=384&q=75" 
                    alt="Professional woman" 
                    className="w-80 h-80 object-cover rounded-full"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 bg-orange-500 text-white p-3 rounded-full animate-bounce">
                  <Star className="w-6 h-6" />
                </div>
                <div className="absolute bottom-8 left-8 bg-blue-500 text-white p-3 rounded-full animate-pulse">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="absolute top-1/3 -left-4 bg-green-500 text-white p-3 rounded-full animate-ping">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 ml-19 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Left Side - Form */}
            <div className="bg-white ml-10 rounded-3xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Looking For something specific
                  </h2>
                  <p className="text-gray-600">
                    Let us know. Our team will get in touch!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email ID"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Client Type
                    </label>
                    <select
                      name="clientType"
                      value={formData.clientType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select</option>
                      <option value="individual">Individual</option>
                      <option value="business">Business</option>
                      <option value="enterprise">Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Select Location"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      name="brandName"
                      value={formData.brandName}
                      onChange={handleInputChange}
                      placeholder="Eg: Starbucks Cafe Pvt. Ltd."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-4 px-6 rounded-xl hover:from-teal-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Submit ✓
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Animated Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-red-400 rounded-full mx-auto flex items-center justify-center animate-pulse">
                      <div className="w-16 h-20 bg-white rounded-lg flex items-center justify-center">
                        <Users className="w-8 h-8 text-pink-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-20 h-3 bg-blue-300 rounded mx-auto"></div>
                      <div className="w-16 h-3 bg-blue-300 rounded mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* Floating Chat Bubbles */}
                  <div className="absolute top-4 right-4 bg-blue-500 text-white p-3 rounded-full animate-bounce">
                    💬
                  </div>
                  <div className="absolute bottom-8 left-4 bg-green-500 text-white p-3 rounded-full animate-pulse">
                    ❓
                  </div>
                  <div className="absolute top-1/3 -left-8 bg-pink-500 text-white p-3 rounded-full animate-ping">
                    💝
                  </div>
                  <div className="absolute bottom-1/4 -right-8 bg-orange-500 text-white p-3 rounded-full">
                    <div className="animate-spin">
                      ⚡
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 ml-10 mr-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y4 mb-12">
            <h2 className="text-3xl font-bold text-gray-800">From Our Blog</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-lg p-2 text-center shadow-lg">
                    <div className="text-2xl font-bold text-gray-800">{post.date}</div>
                    <div className="text-sm text-gray-600">{post.month}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-500 font-semibold mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
}