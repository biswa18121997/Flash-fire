import { Mail, Calendar, MessageCircle, Zap } from 'lucide-react';

const Contact = ({bookSlotFormStatus, setBookSlotFormStatus}) => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about FLASHFIRE? Our team is here to help you get started on your journey to landing your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Email Us</p>
                    <p className="text-gray-600">feedback.flashfire@gmail.com</p>
                  </div>
                </div>

                {/* Book a Demo */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div onClick={() => setBookSlotFormStatus(true)} className="cursor-pointer">
                    <p className="text-gray-900 font-semibold">Book a Demo</p>
                    <p className="text-gray-600">Schedule a free consultation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-2xl text-white shadow-lg">
              <h4 className="text-xl font-bold mb-4">Why Choose FLASHFIRE?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-orange-100 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">220+</div>
                  <div className="text-orange-100 text-sm">Hours Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-orange-100 text-sm">Jobs Landed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-orange-100 text-sm">AI Working</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    // placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    // placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  // placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Role
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  // placeholder="Software Engineer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your job search goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Zap className="w-8 h-8 text-orange-500" />
              <h3 className="text-3xl font-bold text-gray-900">
                Ready to Transform Your Career?
              </h3>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've accelerated their careers with FLASHFIRE's AI-powered job search automation.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:scale-105"
            >
              Start Your Free Trial Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
