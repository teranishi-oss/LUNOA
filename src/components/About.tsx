import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const stats = [
  { icon: <Award className="w-6 h-6" />, value: "15+", label: "Years Experience" },
  { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Clients" },
  { icon: <Clock className="w-6 h-6" />, value: "5000+", label: "Treatments Completed" },
  { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Natural Products" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Your Wellness Journey
                <span className="block text-rose-500">Starts Here</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                At Beauty Holistic, we believe true beauty radiates from within. Our approach combines time-tested holistic practices with cutting-edge beauty treatments to create transformative experiences that nurture both body and soul.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by certified wellness practitioners and beauty experts, we've created a sanctuary where you can escape the stresses of daily life and reconnect with your natural radiance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-md">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Spa treatment" 
                  className="w-full h-48 object-cover rounded-3xl shadow-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Natural products" 
                  className="w-full h-32 object-cover rounded-3xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Relaxing environment" 
                  className="w-full h-32 object-cover rounded-3xl shadow-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/3997380/pexels-photo-3997380.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Professional care" 
                  className="w-full h-48 object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-3xl -z-10 transform rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;