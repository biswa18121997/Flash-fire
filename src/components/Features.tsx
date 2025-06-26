import React from 'react';
import { Bot, FileText, Target, Zap, Shield, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-orange-500" />,
      title: "AI-Powered Matching",
      description: "Our advanced AI analyzes thousands of job postings to find perfect matches based on your skills, experience, and preferences.",
      highlight: "Smart Algorithm"
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "Dynamic Resume Optimization",
      description: "Automatically tailors your resume for each application using industry-specific keywords and formatting.",
      highlight: "ATS Optimized"
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Precision Targeting",
      description: "Apply only to jobs that match your criteria - salary range, location, company size, and growth stage.",
      highlight: "Quality Over Quantity"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: "Lightning Fast Applications",
      description: "Submit applications within hours of job postings going live, giving you a competitive edge.",
      highlight: "First Mover Advantage"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Privacy Protected",
      description: "Your data is encrypted and secure. We never share your information without explicit consent.",
      highlight: "Enterprise Security"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      title: "Real-Time Analytics",
      description: "Track application status, response rates, and optimize your job search strategy with detailed insights.",
      highlight: "Data-Driven Results"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>Powered by Advanced AI</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose FLASHFIRE?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of job searching with our cutting-edge AI technology that works 24/7 to land you the perfect role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-orange-50 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {feature.highlight}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Time Savings Highlight */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Save 220+ Hours Every Month
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            While our AI handles the tedious work of job applications, you can focus on interview preparation, skill development, and networking.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            Start Saving Time Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;