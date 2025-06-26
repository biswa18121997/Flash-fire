import React from 'react';
import { Star, Quote, Briefcase } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Senior Software Engineer",
      company: "Meta",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      testimonial: "FLASHFIRE landed me 5 interviews in my first week! The AI perfectly matched my skills with the right opportunities. Got my dream job at Meta within 3 weeks.",
      rating: 5,
      salary: "$180K → $240K"
    },
    {
      name: "Maria Rodriguez",
      role: "Product Manager",
      company: "Stripe",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      testimonial: "The time I saved using FLASHFIRE was incredible. Instead of spending 20+ hours weekly on applications, I focused on interview prep and landed multiple offers.",
      rating: 5,
      salary: "40% salary increase"
    },
    {
      name: "David Kim",
      role: "Data Scientist",
      company: "Netflix",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      testimonial: "The AI's precision is unmatched. Every application was perfectly tailored, and I had a 15% response rate compared to my previous 2%. Game changer!",
      rating: 5,
      salary: "15% response rate"
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer",
      company: "Airbnb",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      testimonial: "FLASHFIRE's resume optimization is phenomenal. Each version was perfectly crafted for the role. Landed my dream design role in just 2 months!",
      rating: 5,
      salary: "Dream role achieved"
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer",
      company: "GitHub",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      testimonial: "The analytics dashboard helped me understand my job search performance. I could see which types of roles were responding and optimize accordingly.",
      rating: 5,
      salary: "Data-driven success"
    },
    {
      name: "Emily Davis",
      role: "Marketing Director",
      company: "Shopify",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      testimonial: "From startup to unicorn! FLASHFIRE helped me transition from a small startup to Shopify. The AI understood exactly what I was looking for.",
      rating: 5,
      salary: "Career transformation"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real People
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who transformed their careers with FLASHFIRE's AI-powered job search automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-orange-200"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-orange-600 text-sm font-medium">
                    @ {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="w-6 h-6 text-orange-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-4 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-3">
                <span className="text-orange-700 font-semibold text-sm">
                  🎯 {testimonial.salary}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join the thousands of professionals who've accelerated their careers with FLASHFIRE's AI-powered job search.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:scale-105"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;