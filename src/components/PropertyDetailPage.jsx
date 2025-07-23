import React,{useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import logo_fff from "../assets/logo_fff.png";
import logo from "../assets/logo.png";
import { MapPin,Menu, X, Phone, Mail, Share2, Heart, ArrowLeft, Calendar, Home,Star, Car, Bed, Bath, Square, Camera } from 'lucide-react';

const PropertyDetailPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');    
    const [isLiked, setIsLiked] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { id } = useParams();
    const [favorites, setFavorites] = useState(new Set());
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [showFullMap, setShowFullMap] = useState(false);
    
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
   
    const handleNavClick = (path) => {
      console.log('Navigate to:', path);
    };
  
  
    const properties = [
        {
          id: 1,
          title: "Premium Cafe for sale in Indrapuram",
          price: "₹99 Lakh",
          location: "Indrapuram, Ghaziabad",
          status: "For Sale",
          coordinates: { lat: 28.7041, lng: 77.1025 },
          images: [
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
          ],
          type: "Cafe",
          area: "1,200 sq ft",
          established: "2020",
          seatingCapacity: "45 people",
          description: "A well-established cafe in the heart of Indrapuram with excellent foot traffic. The property features modern interiors, fully equipped kitchen, and a prime location with high visibility. Perfect for someone looking to start or expand their F&B business.",
          features: [
            "Prime location with high foot traffic",
            "Fully equipped commercial kitchen",
            "Modern interior design",
            "45 seating capacity",
            "Parking available",
            "All necessary licenses",
            "Established customer base",
            "Staff training included"
          ],
          amenities: [
            "Air Conditioning",
            "WiFi",
            "Sound System",
            "CCTV Security",
            "Fire Safety",
            "Waste Management"
          ],
          contactInfo: {
            name: "Rahul Sharma",
            phone: "+91 98765 43210",
            email: "ksadjj@alk.com",
            whatsapp: "+91 98765 43210"
          }
        },
        {
          id: 2,
          title: "Running Kiosk is on lease in Noida",
          price: "₹90 Thousand/mo",
          location: "Sector 18, Noida",
          status: "For Rent",
          coordinates: { lat: 28.7051, lng: 77.1035 },
          images: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop"
          ],
          type: "Kiosk",
          area: "200 sq ft",
          established: "2019",
          seatingCapacity: "Standing only",
          description: "A profitable kiosk in Sector 18 Noida with excellent visibility and customer flow. Perfect for quick service food business.",
          features: [
            "High visibility location",
            "Established customer base",
            "Quick service setup",
            "Low maintenance",
            "Good profit margins"
          ],
          amenities: [
            "Electricity",
            "Water supply",
            "Waste management"
          ],
          contactInfo: {
            name: "Priya Singh",
            phone: "+91 111 222 334",
            email: "sdkjdjk@jsdh.com",
            whatsapp: "+91 111 222 334"
          }
        },
        {
            id: 3,
            title: "Restaurant for sale in Gurgaon",
            price: "₹1.2 Crore",
            location: "Cyber City, Gurgaon",
            status: "For Sale",
            coordinates: { lat: 28.7061, lng: 77.1045 },
            images: [
              "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1556745750-68295fefafc5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
              "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
            ],
            type: "Restaurent",
            area: "1,200 sq ft",
            established: "2022",
            seatingCapacity: "65 people",
            description: "A well-established restaurent in the great city Gurgaon with excellent foot traffic. The property features modern interiors, fully equipped kitchen, and a prime location with high visibility. Perfect for someone looking to start or expand their F&B business.",
            features: [
              "Prime location with high foot traffic",
              "Fully equipped commercial kitchen",
              "Modern interior design",
              "65 seating capacity",
              "Parking available",
              "All necessary licenses",
              "Established customer base",
              "Staff training included"
            ],
            amenities: [
              "Air Conditioning",
              "WiFi",
              "Sound System",
              "CCTV Security",
              "Fire Safety",
              "Waste Management",
              "Parking"
            ],
            contactInfo: {
              name: "Rahul Sharma",
              phone: "+91 98765 43210",
              email: "ksadjj@alk.com",
              whatsapp: "+91 98765 43210"
            }
          },
          {
            id: 4,
            title: "Coffee Shop for rent in Pune",
            price: "₹75 Thousand",
            location: "Koregaon Park, Pune",
            status: "For Rent",
            coordinates: { lat: 28.7051, lng: 77.1035 },
            images: [
              "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
              "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
              "https://plus.unsplash.com/premium_photo-1686090448301-4c453ee74718?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
            ],
            type: "Coffee Shop",
            area: "1,500 sq ft",
            established: "2020",
            seatingCapacity: "125 people",
            description: "A well-established doffee shop in the Pune with excellent foot traffic. The property features modern interiors, fully equipped kitchen, and a prime location with high visibility. Perfect for someone looking to start or expand their F&B business.",
            features: [
              "Prime location with high foot traffic",
              "Fully equipped commercial kitchen",
              "Modern interior design",
              "150 seating capacity",
              "Parking available",
              "All necessary licenses",
              "Established customer base",
              "Staff training included"
            ],
            amenities: [
              "Air Conditioning",
              "WiFi",
              "Sound System",
              "CCTV Security",
              "Fire Safety",
              "Waste Management",
              "Parking"
            ],
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
    
  // Simple map component using OpenStreetMap tiles
  const MapComponent = ({ coordinates, zoom = 15, height = "300px", interactive = true }) => {
    const mapId = `map-${Math.random().toString(36).substr(2, 9)}`;
    
    useEffect(() => {
      // Create a simple map using div and background image
      const mapElement = document.getElementById(mapId);
      if (mapElement) {
        // This is a simplified map representation
        // In a real implementation, you'd use a proper mapping library
        mapElement.innerHTML = `
          <div style="position: relative; width: 100%; height: 100%; background: linear-gradient(45deg, #e6f3ff, #ccebff); border-radius: 8px; overflow: hidden;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; background: #ef4444; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); z-index: 10;"></div>
            <div style="position: absolute; top: 10px; right: 10px; background: white; border-radius: 4px; padding: 4px 8px; font-size: 12px; font-weight: 500; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              ${coordinates.lat.toFixed(4)}, ${coordinates.lng.toFixed(4)}
            </div>
            <div style="position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.8); color: white; border-radius: 4px; padding: 4px 8px; font-size: 12px;">
              New Delhi, India
            </div>
            ${interactive ? `
              <div style="position: absolute; bottom: 10px; right: 10px; background: white; border-radius: 4px; padding: 4px 8px; font-size: 12px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" onclick="window.open('https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}', '_blank')">
                Open in Google Maps
              </div>
            ` : ''}
          </div>
        `;
      }
    }, [coordinates, mapId, interactive]);  

    return (
      <div
        id={mapId}
        style={{ height }}
        className="w-full rounded-lg border border-gray-200 shadow-sm"
      />
    );
  };
    // Find the property by id from URL
    const property = properties.find(p => p.id === parseInt(id, 10));
    if (!property) {
      return <div className="text-center py-20 text-xl text-gray-500">Property not found.</div>;
    }

    const handleShare = () => {
      if (navigator.share) {
        navigator.share({
          title: property.title,
          text: `Check out this ${property.type} in ${property.location}`,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    };
  
    const handleContact = (type) => {
      const { phone, email, whatsapp } = property.contactInfo;
      
      switch(type) {
        case 'phone':
          window.location.href = `tel:${phone}`;
          break;
        case 'email':
          window.location.href = `mailto:${email}`;
          break;
        case 'whatsapp':
          window.open(`https://wa.me/${whatsapp.replace(/\D/g, '')}`);
          break;
        default:
          break;
      }
    };
    const PropertyCard = ({ property }) => (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative">
          <img 
            src={property.images} 
            alt={property.title}
            className="w-full h-48 object-cover bg-gray-200"
          />
          <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
            {property.price}
          </div>
          <button 
            onClick={() => toggleFavorite(property.id)}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg"
          >
            <Heart 
              size={16} 
              className={favorites.has(property.id) ? "fill-red-500 text-red-500" : "text-gray-400"}
            />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{property.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{property.location}</p>
          <p className="text-gray-500 text-sm mb-3">{property.area}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {property.type}
            </span>
            <div className="flex space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <Share2 size={16} className="text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Phone size={16} className="text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Mail size={16} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );    
  
  

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="relative h-96">
                <img 
                  src={property.images[currentImageIndex]} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property.status}
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                  <Camera className="w-4 h-4" />
                  <span>{currentImageIndex + 1} / {property.images.length}</span>
                </div>
              </div>
              {property.images.length > 1 && (
                <div className="flex p-4 space-x-2 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                        index === currentImageIndex ? 'border-emerald-500' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt={`${property.title} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-800">{property.title}</h1>
                <div className="text-2xl font-bold text-emerald-600">{property.price}</div>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Home className="w-6 h-6 mx-auto text-emerald-600 mb-2" />
                  <div className="text-sm font-medium text-gray-800">{property.type}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Square className="w-6 h-6 mx-auto text-emerald-600 mb-2" />
                  <div className="text-sm font-medium text-gray-800">{property.area}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-6 h-6 mx-auto text-emerald-600 mb-2" />
                  <div className="text-sm font-medium text-gray-800">Est. {property.established}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Bed className="w-6 h-6 mx-auto text-emerald-600 mb-2" />
                  <div className="text-sm font-medium text-gray-800">{property.seatingCapacity}</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <span key={index} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6  top-24">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              
              <div className="mb-4">
                <div className="font-medium text-gray-800 mb-2">{property.contactInfo.name}</div>
                <div className="text-sm text-gray-600 mb-4">Property Agent</div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleContact('phone')}
                  className="w-full bg-emerald-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </button>
                
                <button
                  onClick={() => handleContact('whatsapp')}
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
                
                <button
                  onClick={() => handleContact('email')}
                  className="w-full border border-emerald-500 text-emerald-500 py-3 px-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Quick Info</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property ID:</span>
                    <span className="font-medium">TEN-{property.id.toString().padStart(3, '0')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Listed:</span>
                    <span className="font-medium">2 days ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Views:</span>
                    <span className="font-medium">127</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Report this listing if you find any issues
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">PropertyHub</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Heart size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Property Details Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Address Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Details</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">{currentProperty.address}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-900">City</p>
                    <p className="text-gray-600">{currentProperty.city}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">State</p>
                    <p className="text-gray-600">{currentProperty.state}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Country</p>
                    <p className="text-gray-600">{currentProperty.country}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Floor</p>
                    <p className="text-gray-600">{currentProperty.floor}</p>
                  </div>
                </div>
              </div>

              {/* Features & Amenities */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Square size={16} className="text-gray-400" />
                    <span className="text-gray-600">Ground Floor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-gray-600">Prime Location</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <button 
                  onClick={() => setShowFullMap(!showFullMap)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  {showFullMap ? 'Hide Map' : 'View Full Map'}
                </button>
              </div>
              <MapComponent 
                coordinates={currentProperty.coordinates} 
                height={showFullMap ? "500px" : "300px"}
              />
            </div>
          </div>
        </div>

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

export default PropertyDetailPage;