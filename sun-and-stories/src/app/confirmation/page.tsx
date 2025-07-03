'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ConfirmationPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 opacity-40">
        <Image
          src="/background.jpg"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Header */}
      <header className="w-full py-4 px-4 md:px-10 flex justify-between items-center bg-transparent sticky top-0 z-50">
        {/* Mobile hamburger menu */}
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

        {/* Desktop Logo - left aligned */}
        <div className="hidden md:flex flex-1 justify-start">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Table 4 Six Logo" width={128} height={128} className="h-24 lg:h-32 w-auto ml-4" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end">
          <nav className="flex items-center text-white">
            <Link href="/" className="font-semibold hover:opacity-70 transition px-4 py-2 font-montserrat">Home</Link>
            <div className="h-6 w-px bg-white/40 mx-2"></div>
            <Link href="/questionnaire" className="font-semibold px-6 py-2 transition font-montserrat">
              Join Now
            </Link>
          </nav>
        </div>

        {/* Mobile slide-out menu */}
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

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-4xl bg-black/40 backdrop-blur-lg border border-white/20 text-white p-8 md:p-12 rounded-2xl shadow-2xl text-center">
          
          {/* Success Icon */}
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-white/30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
            You&apos;re In! (Almost!)
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Thank you for filling out our questionnaire! We&apos;re thrilled you&apos;re interested in joining a Table 4 Six brunch. 
            Our team is now carefully reviewing responses to curate balanced and engaging groups.
          </p>

          {/* What Happens Next */}
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl mb-10 text-left border border-white/20">
            <h2 className="text-2xl font-display font-semibold mb-6 text-white text-center">What Happens Next?</h2>
            <ol className="space-y-5">
              {[ 
                { 
                  title: "Curation in Progress", 
                  desc: "Our team personally reviews each application. We focus on creating groups with a good mix of personalities, interests, and conversation styles to ensure a vibrant experience."
                },
                { 
                  title: "Selection & Notification", 
                  desc: "If your profile aligns well for an upcoming brunch, you'll receive an email from us by Thursday evening. This email will contain all the details: your brunch time, the restaurant location, and a little intro to your group theme (if any)."
                },
                { 
                  title: "Confirm Your Spot", 
                  desc: "Please confirm your attendance via the link in the email by Friday evening. This helps us finalize reservations with the restaurant and ensure everyone who is matched can attend."
                },
                { 
                  title: "Enjoy Your Sunday!", 
                  desc: "Arrive on Sunday ready to meet new people, enjoy delicious food, and engage in meaningful conversations. We handle the rest!"
                }
              ].map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 mt-1 shadow-md font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Our Curation Philosophy */}
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl mb-10 text-left border border-white/20">
            <h2 className="text-2xl font-display font-semibold mb-6 text-white text-center">Crafting Connections: Our Curation Philosophy</h2>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                At Table 4 Six, we believe the magic lies in the mix. We don&apos;t just randomly group people; we thoughtfully curate each table to foster <strong className="font-medium text-white">genuine connection and stimulating conversation</strong>.
              </p>
              <p>
                Our goal is to create <strong className="font-medium text-white">balanced groups with diverse perspectives</strong>. This means bringing together individuals who might not typically cross paths but who share an openness to new experiences and a desire for authentic interaction. We consider factors like your expressed interests, communication style, and what you hope to gain from the experience.
              </p>
              <p>
                Think of it as a recipe for a great Sunday: a dash of similarity for common ground, a pinch of difference for exciting new flavors, and a whole lot of respect and curiosity.
              </p>
            </div>
          </div>
          
          {/* Visual Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg border border-white/20">
              <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" alt="Thoughtful Matching" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <div className="h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg border border-white/20">
              <Image src="https://images.unsplash.com/photo-1523289333742-bea4f06ad6b2?q=80&w=2070&auto=format&fit=crop" alt="Diverse Conversations" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <div className="h-40 sm:h-48 rounded-xl overflow-hidden shadow-lg border border-white/20">
              <Image src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2070&auto=format&fit=crop" alt="Authentic Connections" width={400} height={300} className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="text-md mb-8 text-white/90">
            If you don&apos;t hear from us for this Sunday, don&apos;t worry! We host brunches regularly and will keep your profile for future matching opportunities.
            <br />For any questions, reach out to <a href="mailto:hello@table4six.com" className="text-white hover:text-white/80 underline font-semibold">hello@table4six.com</a>.
          </p>
          
          <Link href="/" className="bg-white text-black hover:bg-white/90 font-semibold py-3 px-8 rounded-full transition-all shadow-lg">
            Learn More 
          </Link>
        </div>
      </main>

      <footer className="relative z-10 bg-black mt-16 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="Table 4 Six Logo" width={128} height={128} className="h-20 md:h-24 w-auto" />
            </div>
            <p className="mb-4 max-w-xs leading-relaxed text-sm text-gray-300">
              Crafting memorable Sunday brunches that spark connection and conversation in the heart of Mumbai.
            </p>
            <div className="flex gap-3 mt-5">
              {[1,2].map(i => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-800 text-white hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    {i === 1 ? <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/> : 
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zM8 19H5v-11h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition block py-1">About Us</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition block py-1">FAQ</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition block py-1">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition block py-1">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Get in Touch</h3>
            <p className="mb-2 flex items-center gap-2 text-sm text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:hello@table4six.com" className="hover:text-white transition">hello@table4six.com</a>
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Mumbai, India
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700/50 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Table 4 Six. Designed with ❤️ in Mumbai.
        </div>
      </footer>
    </div>
  );
} 