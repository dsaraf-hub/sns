'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly is Table 4 Six?",
      answer: "Table 4 Six is a platform that connects strangers for Sunday brunch in Mumbai. Each Sunday, we create groups of 6 people who've never met before to enjoy delicious food and meaningful conversations in a carefully selected location."
    },
    {
      question: "How does the matching process work?",
      answer: "We use your responses to our personality and vibe questionnaire to create balanced groups of 6 strangers. We look for complementary personalities, diverse backgrounds, and shared interests to ensure engaging conversations."
    },
    {
      question: "What does it cost to join?",
      answer: "Each participant pays for their own brunch (typically ₹800-1500 depending on the venue). We don't charge any matching or membership fees as we're focused on building community connections."
    },
    {
      question: "Where do the brunches take place?",
      answer: "We partner with select restaurants and cafes in Mumbai, primarily in South Bombay and the Western suburbs (Bandra, Khar, Juhu, and Andheri). The exact location is shared with confirmed participants."
    },
    {
      question: "What if I need to cancel?",
      answer: "We understand plans change. Please let us know at least 48 hours in advance so we can find a replacement. Last-minute cancellations make it difficult to maintain the group dynamic."
    },
    {
      question: "Is this a dating service?",
      answer: "No, Table 4 Six is not a dating platform. We're focused on meaningful conversations and new friendships. While connections may naturally develop, our goal is to create a pressure-free environment for authentic interactions."
    },
    {
      question: "What kind of people typically attend?",
      answer: "Our brunchers come from diverse backgrounds - professionals, creatives, entrepreneurs, students, and more. What they share is a curiosity about others and a desire for genuine connections outside their usual social circles."
    },
    {
      question: "What happens after I fill out the questionnaire?",
      answer: "After you complete the questionnaire, we'll review your responses and match you with a group. By Thursday, you'll receive an email with the details for the upcoming Sunday brunch, including time, location, and a brief (anonymous) overview of your group."
    },
    {
      question: "Can I request to be matched with specific types of people?",
      answer: "While we don't allow requests for specific individuals, your questionnaire responses help us understand what types of conversations and connections you value. Our goal is to create groups with complementary perspectives."
    },
    {
      question: "How often can I participate?",
      answer: "You can join once a month to ensure we're creating diverse groups and giving opportunities to new participants. After your brunch, you'll have the option to join the waitlist for a future date."
    }
  ];

  return (
    <div className="min-h-screen" style={{ 
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/background2.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Header - Same style as about page */}
      <header className="w-full py-6 px-6 md:px-10 flex flex-col items-center bg-transparent sticky top-0 z-50">
        <div className="mb-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Table 4 Six Logo" width={128} height={128} className="h-24 md:h-32 w-auto" />
          </Link>
        </div>
        <div className="text-white font-medium bg-black/30 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
          Frequently Asked Questions
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-16">
        <div className="w-full max-w-4xl bg-black/30 backdrop-blur-sm border border-white/20 text-white p-8 md:p-12 rounded-2xl shadow-2xl">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
              FREQUENTLY ASKED<br />
              <em className="italic">QUESTIONS</em>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-montserrat">
              Everything you need to know about joining Table 4 Six and our Sunday brunches in Mumbai.
            </p>
          </div>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/15">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="text-xl font-semibold text-white font-montserrat pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg 
                        className={`w-6 h-6 text-white transition-transform duration-200 ${openFaq === index ? 'rotate-45' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <div className="px-6">
                      <div className="border-t border-white/20 pt-4">
                        <p className="text-white/90 leading-relaxed font-montserrat">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
              STILL HAVE <em className="italic">QUESTIONS?</em>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed font-montserrat">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help you get started on your Table 4 Six journey.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:hello@table4six.com" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-8 rounded-full transition-colors inline-flex items-center font-montserrat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Email Us
              </a>
              <Link 
                href="/questionnaire" 
                className="bg-white text-black hover:bg-white/90 font-semibold py-3 px-8 rounded-full transition-colors inline-flex items-center font-montserrat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                Join Next Brunch
              </Link>
            </div>
          </section>
          
        </div>
      </main>
    </div>
  );
}