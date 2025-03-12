// app/page.js
"use client"
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu as MenuIcon,
  ChevronDown,
  ChevronUp,
  Star,
  Calendar,
  Users,
  MessageCircle
} from 'lucide-react';


// Hotel data
const hotelData = {
  rooms: [
    {
      id: 1,
      name: "Deluxe King Room",
      description: "Spacious room with king-sized bed, city view, and modern amenities",
      price: 7999,
      image: "/images/deluxe-king.jpg",
      capacity: 2,
      amenities: ["Free WiFi", "Breakfast Included", "Air Conditioning", "Flat-screen TV", "Mini Bar"]
    },
    {
      id: 2,
      name: "Executive Suite",
      description: "Luxury suite with separate living area, premium furnishings and panoramic views",
      price: 12999,
      image: "/images/executive-suite.jpg",
      capacity: 2,
      amenities: ["Free WiFi", "Breakfast Included", "Air Conditioning", "Jacuzzi", "Mini Bar", "Lounge Access"]
    },
    {
      id: 3,
      name: "Family Room",
      description: "Comfortable room for families with two double beds and extra space",
      price: 9999,
      image: "/images/family-room.jpg",
      capacity: 4,
      amenities: ["Free WiFi", "Breakfast Included", "Air Conditioning", "Flat-screen TV", "Mini Bar"]
    },
    {
      id: 4,
      name: "Ocean View Suite",
      description: "Premium suite with breathtaking ocean views, balcony, and luxury amenities",
      price: 14999,
      image: "/images/ocean-suite.jpg",
      capacity: 2,
      amenities: ["Free WiFi", "Breakfast Included", "Air Conditioning", "Private Balcony", "Mini Bar", "Lounge Access"]
    },
  ],
  specialOffers: [
    {
      id: 1,
      title: "Weekend Getaway",
      description: "20% off on weekend stays, includes complimentary spa session",
    },
    {
      id: 2,
      title: "Extended Stay",
      description: "Stay 7 nights, pay for 5 with daily breakfast included",
    },
    {
      id: 3,
      title: "Honeymoon Package",
      description: "Special romantic setup with champagne, flowers, and private dining",
    },
    {
      id: 4,
      title: "Corporate Discount",
      description: "Special 15% discount for business travelers with meeting room access",
    }
  ],
  reviews: [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      comment: "The room was absolutely luxurious! Amazing staff and excellent service.",
      date: "March 5, 2025"
    },
    {
      id: 2,
      name: "Rahul Verma",
      rating: 4,
      comment: "Great location and excellent amenities. The breakfast buffet was outstanding.",
      date: "February 24, 2025"
    },
    {
      id: 3,
      name: "Aisha Khan",
      rating: 5,
      comment: "Best city view from our suite! The spa services were exceptional.",
      date: "March 10, 2025"
    }
  ],
  faqs: [
    {
      id: 1,
      question: "What is the check-in and check-out time?",
      answer: "Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out can be arranged based on availability."
    },
    {
      id: 2,
      question: "Do you offer airport transfers?",
      answer: "Yes, we provide airport transfers at an additional cost. Please contact our concierge desk to arrange transportation before your arrival."
    },
    {
      id: 3,
      question: "Is there a parking facility available?",
      answer: "Yes, we have complimentary valet parking for our guests. There's also a public parking lot within 100 meters of our hotel."
    },
    {
      id: 4,
      question: "Do you offer room service?",
      answer: "Yes, we offer 24/7 room service with a variety of dining options. You can find the menu in your room or request it from our staff."
    },
    {
      id: 5,
      question: "Are pets allowed?",
      answer: "We welcome pets in designated pet-friendly rooms. There is a pet fee of ₹1500 per stay. Please inform us in advance if you'll be bringing a pet."
    },
    {
      id: 6,
      question: "What are your COVID-19 safety protocols?",
      answer: "We maintain strict hygiene and safety protocols including regular sanitization, temperature checks, socially distanced seating, and fully vaccinated staff."
    }
  ]
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(2);
  
  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Ocean View Hotel</h1>
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
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#rooms" className="text-gray-700 hover:text-blue-600">Rooms</a>
              <a href="#amenities" className="text-gray-700 hover:text-blue-600">Amenities</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600">Reviews</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
                <a href="#rooms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Rooms</a>
                <a href="#amenities" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Amenities</a>
                <a href="#reviews" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Reviews</a>
                <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600">FAQ</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img 
          src="/images/hotel-hero.jpg" 
          alt="Hotel Exterior" 
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Ocean View Hotel</h1>
            <p className="text-xl md:text-2xl mb-8">Experience luxury and comfort in every stay</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
                Book a Room
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Amenities
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="relative -mt-20 z-30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Check Availability</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Check-in Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                  />
                  <Calendar className="absolute top-2 right-2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Check-out Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                  />
                  <Calendar className="absolute top-2 right-2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Guests</label>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5 Guests</option>
                  </select>
                  <Users className="absolute top-2 right-2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>
          
          {/* Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotelData.rooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm rounded-bl-lg">
                    Up to {room.capacity} Guests
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.slice(0, 4).map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                        +{room.amenities.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-blue-600 font-bold">₹{room.price} <span className="text-gray-500 text-sm font-normal">/ night</span></p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Special Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotelData.specialOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
                <div className="flex items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{offer.title}</h3>
                    <p className="text-gray-700">{offer.description}</p>
                    <button className="mt-4 text-blue-600 font-medium hover:text-blue-800">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hotel Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Spa & Wellness</h3>
              <p className="text-gray-600">Indulge in our premium spa services including massages, facials, and body treatments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fitness Center</h3>
              <p className="text-gray-600">State-of-the-art fitness equipment, personal trainers, and yoga classes available.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Swimming Pool</h3>
              <p className="text-gray-600">Enjoy our infinity pool with ocean views and poolside service.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Room Service</h3>
              <p className="text-gray-600">Enjoy gourmet meals and snacks delivered to your room any time of day or night.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Concierge Service</h3>
              <p className="text-gray-600">Our knowledgeable concierge team is available to assist with all your needs and requests.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
              <p className="text-gray-600">Multiple dining options featuring international and local cuisine by renowned chefs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hotelData.reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              View All Reviews
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {hotelData.faqs.map((faq) => (
              <div 
                key={faq.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-700">
              Still have questions? <a href="#contact" className="text-blue-600 font-medium">Contact us</a>
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Fixed code */}
<section id="about" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">About Ocean View Hotel</h2>
        <p className="text-gray-700 mb-4">
          Established in 2010, Ocean View Hotel has become one of the premier luxury destinations in the region. Located right on the beachfront, our hotel offers breathtaking views and exceptional service.
        </p>
        <p className="text-gray-700 mb-4">
          Our commitment to excellence has earned us numerous accolades and a loyal clientele who return year after year. We pride ourselves on attention to detail, personalized service, and creating memorable experiences for every guest.
        </p>
        <p className="text-gray-700">
          At Ocean View Hotel, we believe in sustainable luxury. Our eco-friendly practices and commitment to the local community reflect our values and responsibility toward the environment.
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">Our Values</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <span>Exceptional hospitality and service</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <span>Environmental sustainability</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <span>Local community engagement</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <span>Innovation in luxury and comfort</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <img 
          src="/images/hotel-about.jpg" 
          alt="Ocean View Hotel Exterior" 
          className="rounded-lg shadow-lg w-full h-[600px] object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Years of Excellence</h4>
              <p className="text-3xl font-bold">15+</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Happy Guests</h4>
              <p className="text-3xl font-bold">50K+</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Luxury Rooms</h4>
              <p className="text-3xl font-bold">200+</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Awards Won</h4>
              <p className="text-3xl font-bold">25+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
  )
}