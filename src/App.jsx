import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrokiHomepage from "./components/Homepage";
import Listings from "./components/Listings";
import Team from "./components/Team";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ListOutlet from "./components/ListOutlet";
import Login from "./components/Login";
import PropertyDetailPage from "./components/PropertyDetailPage";
import ProductPhotography from "./components/ProductPhotography";
import ServiceDetailPage from "./components/ServiceDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BrokiHomepage />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/team" element={<Team />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/list-outlet" element={<ListOutlet />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
        <Route path="/product-photography" element={<ProductPhotography />} />
      </Routes>
    </Router>
  );
}

export default App;