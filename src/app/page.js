// First, create new Next.js project
// In your terminal:
// npx create-next-app@latest restaurant-website
// cd restaurant-website
// npm install lucide-react
"use client"
// pages/index.js
import React from 'react';
import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Menu as MenuIcon 
} from 'lucide-react';

// Restaurant data
const restaurantData = {
  foods: [
    {
      id: 1,
      name: "Butter Chicken",
      description: "Creamy, rich tomato-based curry with tender chicken pieces",
      price: 499,
      image: "/images/butter-chicken.jpg"
    },
    {
      id: 2,
      name: "Biryani",
      description: "Fragrant rice dish with aromatic spices and tender meat",
      price: 449,
      image: "/images/biryani.jpg"
    },
    {
      id: 3,
      name: "Paneer Tikka",
      description: "Grilled cottage cheese with spicy marinade",
      price: 399,
      image: "/images/paneer-tikka.jpg"
    }
  ],
  specialOffers: [
    {
      id: 1,
      title: "Weekend Special",
      description: "20% off on family platters",
    },
    {
      id: 2,
      title: "Happy Hours",
      description: "Buy 1 Get 1 on mocktails (2 PM - 5 PM)",
    }
  ]
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">Bangalore Spice</h1>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                <MenuIcon />
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-600">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                Reserve Table
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Home</a>
                <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Menu</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">About</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img 
          src="/images/hero-bg.jpg" 
          alt="Restaurant Ambiance" 
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Bangalore Spice</h1>
            <p className="text-xl md:text-2xl mb-8">Experience authentic Indian cuisine</p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-orange-700">
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* Featured Dishes */}
      <section id="menu" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurantData.foods.map((food) => (
              <div key={food.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={food.image} 
                  alt={food.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
                  <p className="text-gray-600">{food.description}</p>
                  <p className="text-orange-600 font-bold mt-4">₹{food.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurantData.specialOffers.map((offer) => (
              <div key={offer.id} className="bg-orange-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{offer.title}</h3>
                <p className="text-gray-700">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-orange-600 mr-2" />
                  <p>123 Indiranagar, Bangalore - 560038</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-orange-600 mr-2" />
                  <p>+91 98765 43210</p>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-orange-600 mr-2" />
                  <p>Open daily: 12 PM - 11 PM</p>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-600 hover:text-orange-600 cursor-pointer" />
                <Facebook className="w-6 h-6 text-gray-600 hover:text-orange-600 cursor-pointer" />
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5999772776656!2d77.6345!3d12.9715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzI3LjQiTiA3N8KwMzgnMDQuMiJF!5e0!3m2!1sen!2sin!4v1645500000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Bangalore Spice</h3>
              <p className="text-gray-400">Authentic Indian Cuisine</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#menu" className="text-gray-400 hover:text-white">Menu</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Reservations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Private Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-l-lg w-full text-black"
                />
                <button className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}