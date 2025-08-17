import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Executive",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "The holistic approach here is truly transformative. Not only do I look radiant, but I feel completely renewed from within. The staff's expertise and genuine care make every visit exceptional."
  },
  {
    name: "Emily Rodriguez",
    role: "Yoga Instructor",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "I've never experienced such a perfect blend of beauty and wellness treatments. The natural products and energy healing sessions have become an essential part of my self-care routine."
  },
  {
    name: "Jessica Thompson",
    role: "Interior Designer",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "Beauty Holistic has redefined my understanding of beauty treatments. The personalized approach and attention to both physical and emotional wellbeing is simply unmatched."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why hundreds of clients trust us with their beauty and wellness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-rose-400 mb-4" />
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;