import React from "react";
import { useParams } from "react-router-dom";

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

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = photographers.find(p => p.id === Number(id));

  if (!service) {
    return <div className="text-center py-20 text-xl text-gray-500">Service not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto my-10 bg-white rounded-lg shadow-lg p-8">
      <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-2xl font-bold mb-2">{service.title}</h1>
      <div className="text-lg text-gray-700 mb-4">{service.description}</div>
      <div className="text-gray-500 mb-2">Location: {service.location}</div>
      <div className="text-gray-500 mb-2">Price: ₹{service.price}</div>
      <div className="text-gray-500 mb-2">Rating: {service.rating} ({service.reviews} reviews)</div>
      {/* Add more details as needed */}
    </div>
  );
};

export default ServiceDetailPage;