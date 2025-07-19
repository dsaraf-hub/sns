'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function TermsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-screen">
          <Image
            src="/background3.jpg"
            alt="Abstract background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
      </div>

      {/* Mobile slide-out menu */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-md transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Close button at the top */}
          <div className="flex justify-end p-4">
            <button 
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col px-6 pt-4">
            <Link 
              href="/" 
              className="text-white font-semibold py-4 border-b border-white/20 font-montserrat hover:bg-white/5 transition-colors rounded px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white font-semibold py-4 border-b border-white/20 font-montserrat hover:bg-white/5 transition-colors rounded px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/faq" 
              className="text-white font-semibold py-4 border-b border-white/20 font-montserrat hover:bg-white/5 transition-colors rounded px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/questionnaire" 
              className="text-white font-semibold py-4 border-b border-white/20 font-montserrat hover:bg-white/5 transition-colors rounded px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      {/* Header - Standardized */}
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
            <Link href="/about" className="font-semibold hover:opacity-70 transition px-4 py-2 font-montserrat">About</Link>
            <div className="h-6 w-px bg-white/40 mx-2"></div>
            <Link href="/faq" className="font-semibold hover:opacity-70 transition px-4 py-2 font-montserrat">FAQ</Link>
            <div className="h-6 w-px bg-white/40 mx-2"></div>
            <Link href="/questionnaire" className="font-semibold px-6 py-2 transition font-montserrat">
              Join Now
            </Link>
          </nav>
        </div>

        {/* Spacer for mobile menu balance */}
        <div className="md:hidden w-10 h-10"></div>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 p-4 md:p-8">
        <div className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-lg border border-white/20 text-white p-8 md:p-12 rounded-2xl shadow-2xl space-y-8 md:space-y-12 mt-8">
          
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
              TERMS & <em className="italic">CONDITIONS</em>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-montserrat">
              By joining Table 4 Six, you agree to these terms that ensure a safe and enjoyable experience for everyone.
            </p>
            <p className="text-sm text-white/60 mt-4 font-montserrat">
              Last updated: January 2024
            </p>
          </section>

          {/* Terms Content */}
          <section className="space-y-8">
            
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Acceptance of Terms</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p>By accessing or using Table 4 Six services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>
                  <p>If you do not agree with any of these terms, you are prohibited from using or accessing this service.</p>
                  <p>We reserve the right to update these terms at any time without prior notice. Your continued use of the service constitutes acceptance of any changes.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Service Description</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>What We Provide:</strong> Table 4 Six facilitates curated group dining experiences by matching participants based on their questionnaire responses.</p>
                  <p><strong>Booking Process:</strong> Participants complete a questionnaire, make payment, and receive brunch details upon successful matching.</p>
                  <p><strong>Group Dynamics:</strong> We aim to create groups of 4-6 people with complementary personalities and interests.</p>
                  <p><strong>Venue Selection:</strong> Restaurant venues are pre-selected based on location preferences and quality standards.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">User Responsibilities</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>Accurate Information:</strong> You must provide truthful and accurate information in your questionnaire responses.</p>
                  <p><strong>Respectful Behavior:</strong> Participants must treat all other members with respect and courtesy during the brunch experience.</p>
                  <p><strong>Attendance:</strong> Once matched and confirmed, you are expected to attend the scheduled brunch. Cancellations must be made at least 24 hours in advance.</p>
                  <p><strong>Privacy:</strong> You must respect the privacy of other participants and not share their personal information without consent.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Payment & Cancellation</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>Payment Terms:</strong> Full payment is required upon booking confirmation. All payments are processed securely through our payment partners.</p>
                  <p><strong>Cancellation Policy:</strong> Cancellations made 24+ hours before the event are eligible for a full refund minus processing fees.</p>
                  <p><strong>No-Show Policy:</strong> Participants who fail to attend without prior notice forfeit their payment and may be restricted from future bookings.</p>
                  <p><strong>Refunds:</strong> Refunds for valid cancellations will be processed within 5-7 business days to the original payment method.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Prohibited Conduct</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>Harassment:</strong> Any form of harassment, discrimination, or inappropriate behavior towards other participants is strictly prohibited.</p>
                  <p><strong>Commercial Use:</strong> Using Table 4 Six events for business solicitation or commercial purposes is not permitted.</p>
                  <p><strong>Misrepresentation:</strong> Providing false information about yourself or creating fake profiles is grounds for immediate account termination.</p>
                  <p><strong>Disruption:</strong> Behavior that disrupts the dining experience for others or reflects poorly on Table 4 Six is not tolerated.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Limitation of Liability</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>Service Availability:</strong> We strive to provide consistent service but cannot guarantee uninterrupted availability or perfect matches.</p>
                  <p><strong>Third-Party Venues:</strong> Table 4 Six is not responsible for the quality of food, service, or facilities at partner restaurants.</p>
                  <p><strong>Participant Interactions:</strong> We facilitate introductions but are not liable for the actions or behavior of individual participants.</p>
                  <p><strong>Maximum Liability:</strong> Our total liability to you for any claims shall not exceed the amount you paid for the specific service.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Account Termination</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>Right to Terminate:</strong> We reserve the right to suspend or terminate accounts that violate these terms or engage in inappropriate conduct.</p>
                  <p><strong>User Termination:</strong> You may discontinue using our services at any time by contacting our support team.</p>
                  <p><strong>Effect of Termination:</strong> Upon termination, your access to future events will be revoked, but previous payment obligations remain in effect.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Contact Information</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="text-white/90 font-montserrat">
                  <p>For questions about these Terms and Conditions or to report violations, please contact us:</p>
                  <p className="mt-4">
                    <strong>Email:</strong> <a href="mailto:legal@table4six.com" className="text-white hover:text-white/70 transition">legal@table4six.com</a>
                  </p>
                  <p>
                    <strong>Support:</strong> <a href="mailto:hello@table4six.com" className="text-white hover:text-white/70 transition">hello@table4six.com</a>
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
              READY TO <em className="italic">BEGIN?</em>
            </h2>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed font-montserrat">
              Now that you understand our terms, let&apos;s create some unforgettable Sunday brunch memories together.
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