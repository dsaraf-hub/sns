'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function PrivacyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-screen">
          <Image
            src="/background3.jpg"
            alt="Abstract background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
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

        {/* Desktop Logo */}
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
            <Link href="/about" className="font-semibold hover:opacity-70 transition px-4 py-2 font-montserrat">About</Link>
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
                href="/about" 
                className="text-white font-semibold py-4 border-b border-white/20 font-montserrat"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
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
      <main className="relative z-10 p-4 md:p-8">
        <div className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-lg border border-white/20 text-white p-8 md:p-12 rounded-2xl shadow-2xl space-y-8 md:space-y-12 mt-8">
          
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
              PRIVACY <em className="italic">POLICY</em>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-montserrat">
              Your privacy matters to us. Here&apos;s how we protect and handle your information.
            </p>
            <p className="text-sm text-white/60 mt-4 font-montserrat">
              Last updated: January 2024
            </p>
          </section>

          {/* Privacy Policy Content */}
          <section className="space-y-8">
            
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Information We Collect</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>Personal Information:</strong> When you sign up for Table 4 Six, we collect your name, age, and optional social media handles to create your profile and match you with compatible participants.</p>
                  <p><strong>Questionnaire Responses:</strong> Your personality quiz responses help us create meaningful group dynamics and are stored securely.</p>
                  <p><strong>Communication Data:</strong> We may store communications related to your Table 4 Six experience for customer service purposes.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">How We Use Your Information</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>Matching & Curation:</strong> We use your responses to create balanced groups for Sunday brunches.</p>
                  <p><strong>Communication:</strong> To send you brunch details, location information, and updates about your Table 4 Six experience.</p>
                  <p><strong>Improvement:</strong> Anonymous data helps us improve our matching algorithm and overall service quality.</p>
                  <p><strong>Safety:</strong> We may use information to ensure the safety and security of all participants.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Information Sharing</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>Limited Sharing:</strong> We only share basic information (first name, age range) with your matched group members before the brunch.</p>
                  <p><strong>No Third-Party Sales:</strong> We never sell your personal information to third parties.</p>
                  <p><strong>Service Providers:</strong> We may share data with trusted service providers (payment processors, email services) who help us operate Table 4 Six.</p>
                  <p><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Data Security</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                  <p>Your data is stored on secure servers and encrypted during transmission.</p>
                  <p>Access to personal information is limited to authorized personnel only.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Your Rights</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>Access:</strong> You can request a copy of the personal information we have about you.</p>
                  <p><strong>Correction:</strong> You can update or correct your information at any time.</p>
                  <p><strong>Deletion:</strong> You can request deletion of your account and personal data.</p>
                  <p><strong>Opt-out:</strong> You can unsubscribe from our communications at any time.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Contact Us</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="text-white/90 font-montserrat">
                  <p>If you have any questions about this Privacy Policy or your personal data, please contact us:</p>
                  <p className="mt-4">
                    <strong>Email:</strong> <a href="mailto:privacy@table4six.com" className="text-white hover:text-white/70 transition">privacy@table4six.com</a>
                  </p>
                  <p>
                    <strong>Address:</strong> Mumbai, India
                  </p>
                </div>
              </div>
            </div>

          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">
              READY TO <em className="italic">JOIN US?</em>
            </h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed font-montserrat">
              Now that you understand how we protect your privacy, come join our community of curious minds.
            </p>
            <Link href="/questionnaire" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors shadow-lg font-montserrat">
              Join Table 4 Six
            </Link>
          </section>
          
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black mt-16 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="Table 4 Six Logo" width={128} height={128} className="h-20 md:h-24 w-auto" />
            </div>
            <p className="mb-4 max-w-xs leading-relaxed text-sm text-gray-300">
              Crafting memorable Sunday brunches that spark connection and conversation in the heart of Mumbai.
            </p>
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