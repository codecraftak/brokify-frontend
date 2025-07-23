import React,{useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import logo_fff from "../assets/logo_fff.png";
import logo from "../assets/logo.png";
import { MapPin,Menu, X, Phone, Mail, Share2, Heart, ArrowLeft, Calendar, Home,Star, Car, Bed, Bath, Square, Camera } from 'lucide-react';

const ProductPhotography = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');    
    const [isLiked, setIsLiked] = useState(false);
    const { id } = useParams();
    const [favorites, setFavorites] = useState(new Set());
    
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
   
  
    const properties = [
        {
          id: 1,
          title: "Anamika",
          price: "₹500",
          location: "Anamika Vaishnav",
          status: "For Sale",
          coordinates: { lat: 28.7041, lng: 77.1025 },
          images: [
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
          ],
          type: "Cafe",
          area: "1,200 sq ft",
          established: "2020",
          seatingCapacity: "45 people",
          description: "Professional food photography with creative styling and lighting",
          featured: true,
          contactInfo: {
            name: "Rahul Sharma",
            phone: "+91 98765 43210",
            email: "ksadjj@alk.com",
            whatsapp: "+91 98765 43210"
          }
        },
  
    ];

    const currentProperty = {
      address: "28°30'50.6\"N 77°12'03.3\"E",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      floor: "Ground",
      coordinates: { lat: 28.514057, lng: 77.201222 }
    };
  
    const toggleFavorite = (id) => {
      const newFavorites = new Set(favorites);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      setFavorites(newFavorites);
    };  
    

 

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
                  <button 
                    onClick={openModal}
                    className="text-black font-bold px-4 py-2 rounded-md hover:bg-emerald-500 hover:text-white transition-all duration-200 flex items-center space-x-1"
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
 
 
      {/* Header with back button */}
      <div className="bg-white shadow-sm top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => window.history.back()} className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Listings</span>
            </button>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors ${
                  isLiked ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


        {/* Nearby Listings Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Discover Nearby Listings</h2>
            <p className="text-gray-600">Find properties close to this location that match your preferences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-friendly floating action button */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <button 
          onClick={() => window.open(`https://www.google.com/maps?q=${currentProperty.coordinates.lat},${currentProperty.coordinates.lng}`, '_blank')}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        >
          <MapPin size={24} />
        </button>
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

export default ProductPhotography;