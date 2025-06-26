import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does ScoutBetter save me 220+ hours per month?",
      answer: "Traditional job searching requires 15-20 hours per week for applications, research, and follow-ups. Our team handles all of this for you, allowing you to focus on interview preparation and your current role while we manage the entire application process."
    },
    {
      question: "What makes your resume different from others?",
      answer: "Our resumes are crafted by experts who have worked at FAANG companies and understand what recruiters look for. We use ATS-optimization techniques and industry-specific keywords while tailoring each application to match specific job requirements."
    },
    {
      question: "How do you ensure quality applications?",
      answer: "Each application is individually researched and tailored. We don't use mass application tools. Our team reads job descriptions, researches companies, and customizes your resume and cover letter for each position to maximize your chances of getting noticed."
    },
    {
      question: "What if I don't get any interviews?",
      answer: "While our 91% success rate speaks for itself, we continuously optimize your resume and approach based on market feedback. If needed, we'll revise your resume and target different types of roles to improve your response rate."
    },
    {
      question: "Can I track the progress of my applications?",
      answer: "Yes! You'll have access to a comprehensive dashboard where you can see all applications submitted, companies applied to, application statuses, and interview invitations. We also provide weekly progress reports."
    },
    {
      question: "Do you apply to jobs in specific industries or locations?",
      answer: "We work with you to define your target roles, industries, and preferred locations. Our team then focuses applications on positions that match your criteria and career goals, ensuring relevance and quality over quantity."
    },
    {
      question: "How quickly will I start seeing results?",
      answer: "Most clients start receiving interview invitations within 2-3 weeks of starting the service. Our data shows that 91% of clients get calls within the first month, with many receiving multiple opportunities."
    },
    {
      question: "What level of support do I get?",
      answer: "All plans include WhatsApp support for quick questions and updates. Higher-tier plans include priority support, weekly progress calls, and LinkedIn optimization to maximize your job search success."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about transforming your job search
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-xl border border-gray-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand how we can transform your job search and save you 220+ hours every month.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;