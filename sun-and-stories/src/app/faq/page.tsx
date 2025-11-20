'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      answer: "There's a Table4Six experience fee of ₹10 which covers the curation, matching, and coordination. Additionally, you'll pay for your meal directly at the restaurant. We offer three dining packages: Local Favourites (₹700), Gourmet Dining (₹1500), and Bottomless Brunch (₹2300). You choose your preferred package during signup."
    },
    {
      question: "Where do the brunches take place?",
      answer: "We partner with select restaurants and cafes in Mumbai, primarily in South Bombay and the Western suburbs (Bandra, Khar, Juhu, and Andheri). The exact location is shared with confirmed participants."
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

  ];

  return (
    <div className="bg-black text-white">
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-screen">
          <Image src="/background.jpg" alt="Background 1" layout="fill" objectFit="cover" quality={100} />
        </div>
        <div className="absolute top-[100vh] left-0 w-full h-screen">
          <Image src="/background2.jpg" alt="Background 2" layout="fill" objectFit="cover" quality={100} />
        </div>
        <div className="absolute top-[200vh] left-0 w-full h-screen">
          <Image src="/background3.jpg" alt="Background 3" layout="fill" objectFit="cover" quality={100} />
        </div>
      </div>

      <header className="w-full py-2 px-4 md:px-10 flex justify-between items-center bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Logo - centered */}
        <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Table 4 Six Logo" width={80} height={80} className="h-20 w-auto" />
          </Link>
        </div>

        {/* Desktop Logo - left aligned */}
        <div className="hidden md:flex flex-1 justify-start">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Table 4 Six Logo" width={128} height={128} className="h-16 lg:h-18 w-auto ml-4" />
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-end">
          <nav className="flex items-center text-white">
            <Link href="/" className="font-semibold hover:opacity-70 transition px-4 py-2 font-montserrat">Home</Link>
            <div className="h-6 w-px bg-white/40 mx-2"></div>
            <Link href="/questionnaire" className="font-semibold px-6 py-2 transition font-montserrat">
              Join Now
            </Link>
          </nav>
        </div>

        {/* Spacer for mobile menu balance */}
        <div className="md:hidden w-10 h-10"></div>
        <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-md transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col pt-20 px-6">
              <Link 
                href="/" 
                className="text-white font-semibold py-4 border-b border-white/20 font-montserrat"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/questionnaire" 
                className="text-white font-semibold py-4 border-b border-white/20 font-montserrat"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="relative z-10 px-4 py-6 md:p-8">
        <div className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-lg border border-white/20 text-white p-6 md:p-8 lg:p-12 rounded-xl md:rounded-2xl shadow-2xl mt-4 md:mt-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 text-white leading-tight">
              FREQUENTLY ASKED <em className="italic">QUESTIONS</em>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-montserrat px-2">
              Everything you need to know about joining Table 4 Six and our Sunday brunches in Mumbai.
            </p>
          </div>
          <section className="mb-8 md:mb-12 lg:mb-16">
            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/15">
                  <button
                    className="w-full p-4 md:p-6 text-left flex justify-between items-start md:items-center gap-4"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white font-montserrat leading-tight">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 mt-1 md:mt-0">
                      <svg 
                        className={`w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-200 ${openFaq === index ? 'rotate-45' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-screen pb-4 md:pb-6' : 'max-h-0'}`}>
                    <div className="px-4 md:px-6">
                      <div className="border-t border-white/20 pt-3 md:pt-4">
                        <p className="text-white/90 leading-relaxed font-montserrat text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 md:mb-6 text-white leading-tight">
              STILL HAVE <em className="italic">QUESTIONS?</em>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed font-montserrat px-2">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help you get started on your Table 4 Six journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <a 
                href="mailto:hello@table4six.com" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-6 md:px-8 rounded-full transition-colors inline-flex items-center justify-center font-montserrat text-sm md:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Email Us
              </a>
              <Link 
                href="/questionnaire" 
                className="w-full sm:w-auto bg-white text-black hover:bg-white/90 font-semibold py-3 px-6 md:px-8 rounded-full transition-colors inline-flex items-center justify-center font-montserrat text-sm md:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                Join the Table
              </Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="relative z-10 bg-black mt-8 md:mt-16 py-8 md:py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-white">
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <Image src="/logo.png" alt="Table 4 Six Logo" width={128} height={128} className="h-16 md:h-20 lg:h-24 w-auto" />
            </div>
            <p className="mb-4 leading-relaxed text-sm text-gray-300 max-w-xs mx-auto md:mx-0">
              Crafting memorable Sunday brunches that spark connection and conversation in the heart of Mumbai.
            </p>
            <div className="flex justify-center md:justify-start gap-3 mt-5">
              <a href="https://www.instagram.com/table4.six/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition block py-1">About Us</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition block py-1">FAQ</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition block py-1">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition block py-1">Terms & Conditions</Link></li>
              <li><Link href="/payments" className="text-gray-300 hover:text-white transition block py-1">Payments & Cancellation Policy</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <p className="mb-2 flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:hello@table4six.in" className="hover:text-white transition break-all">hello@table4six.in</a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Mumbai, India
            </p>
            <p className="mt-2 text-sm text-gray-300 text-center md:text-left">
              Saaransh Sandeep Harlalka
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-700/50 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Table 4 Six. Designed with ❤️ in Mumbai.
        </div>
      </footer>
    </div>
  );
}