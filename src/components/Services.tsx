import React from 'react';
import { Flower2, Heart, Sparkles, Leaf, Sun, Moon } from 'lucide-react';

const services = [
  {
    icon: <Flower2 className="w-8 h-8" />,
    title: "Facial Rejuvenation",
    description: "Advanced facial treatments combining traditional techniques with modern technology for radiant, youthful skin.",
    price: "From $120",
    duration: "60-90 min",
    gradient: "from-rose-400 to-pink-500"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Body Wellness Therapy",
    description: "Holistic body treatments focusing on relaxation, detoxification, and overall wellness enhancement.",
    price: "From $150",
    duration: "90-120 min",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Anti-Aging Solutions",
    description: "Comprehensive anti-aging programs tailored to your specific needs and skin concerns.",
    price: "From $200",
    duration: "120 min",
    gradient: "from-indigo-400 to-purple-500"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Natural Skincare",
    description: "Organic and natural treatments using pure botanical ingredients for sensitive and conscious clients.",
    price: "From $100",
    duration: "75 min",
    gradient: "from-green-400 to-teal-500"
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Energy Healing",
    description: "Combine beauty treatments with energy work to harmonize your inner and outer radiance.",
    price: "From $180",
    duration: "90 min",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: <Moon className="w-8 h-8" />,
    title: "Relaxation Rituals",
    description: "Evening wellness sessions designed to help you unwind and restore your natural glow.",
    price: "From $160",
    duration: "120 min",
    gradient: "from-blue-400 to-indigo-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Holistic Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each treatment is carefully designed to address your unique needs, combining ancient wisdom with modern techniques for comprehensive beauty and wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div>
                  <div className="text-2xl font-bold text-gray-800">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
                <button className="bg-gray-100 hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-600 hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;