'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function PaymentsPage() {
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
              PAYMENTS & <em className="italic">CANCELLATION</em> POLICY
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-montserrat">
              At Table 4 Six, we are committed to providing a smooth and secure payment experience for all your curated dining experiences.
            </p>
            <p className="text-sm text-white/60 mt-4 font-montserrat">
              Last Updated: [06/05/2025]
            </p>
          </section>

          {/* Policy Content */}
          <section className="space-y-8">
            
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="text-white/90 font-montserrat">
                  <p>At Table 4 Six, we are committed to providing a smooth and secure payment experience for all your curated dining experiences. This policy outlines how payments are processed and the conditions under which refunds may be issued.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">1. Payment Methods</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>1.1 Accepted Payment Methods:</strong> Payment can be made securely through the Table 4 Six app or website using our integrated payment gateway. We accept Credit Cards, Debit Cards, UPI (Unified Payments Interface), and Net Banking.</p>
                  
                  <p><strong>1.2 Advance Payment Requirement:</strong> Full payment is required at the time of booking to confirm your spot at the dinner event. Bookings without payment will not be considered valid.</p>
                  
                  <p><strong>1.3 Payment Security:</strong> We use industry-standard encryption protocols and secure payment gateways. Table 4 Six does not store or share your card details with third parties.</p>
                  
                  <p><strong>1.4 Invoice:</strong> An email confirmation and invoice will be sent to the registered email address upon successful payment. A separate receipt will be provided by the restaurant after the dinner event.</p>
                  
                  <p><strong>1.5 Additional Charges:</strong> There are no hidden fees. The amount paid during booking is a service fee charged by Table 4 Six to curate the group and book the restaurant. Guests pay for their dinner directly at the venue using the available payment modes there.</p>
                  
                  <p><strong>1.6 Cash Payments:</strong> We do not accept cash payments for advance bookings. Bookings must be confirmed through the Table 4 Six platform. Payments made at the restaurant are only applicable for the dinner cost.</p>
                  
                  <p><strong>1.7 Failed Payments:</strong> In case of a failed transaction, the amount (if debited) is typically refunded by the bank within 7 working days. For delays beyond this, please contact your bank directly.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">2. Refund Policy</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>2.1 User-Initiated Cancellations:</strong> No refund will be provided for any cancellations. However, you may reschedule your booking for the next available date free-of-charge up to 48 hours prior to the dinner.</p>
                  
                  <p><strong>2.2 No-Shows:</strong> If a guest fails to attend the event without prior cancellation, no refund will be issued. This includes late arrivals beyond 60 minutes of the scheduled start time.</p>
                  
                  <p><strong>2.3 Late Arrivals:</strong> Guests arriving more than 60 minutes after the event start time will be considered no-shows, and no refund will be applicable.</p>
                  
                  <p><strong>2.4 Table 4 Six-Initiated Cancellations:</strong> In the rare case that Table 4 Six cancels an event (due to low turnout, venue issues, or other unforeseen circumstances), guests will be entitled to either a full refund or a reschedule option for a future dinner event.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">3. Booking & Participation</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="space-y-4 text-white/90 font-montserrat">
                  <p><strong>3.1 Rescheduling Policy:</strong> Rescheduling is permitted up to 48 hours before the event, subject to availability. This can be done through the app under the &quot;My Booking&quot; section.</p>
                  
                  <p><strong>3.2 Booking Confirmation:</strong> Your booking is confirmed only after successful payment and will be reflected under &quot;My Booking&quot; in your Table 4 Six account.</p>
                  
                  <p><strong>3.3 Attendance Guidelines:</strong> Punctuality is encouraged. While short delays are understandable, arriving over an hour late may disrupt the group dynamic and will be treated as a no-show.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Contact Information</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="text-white/90 font-montserrat">
                  <p>For questions about this Payment & Cancellation Policy, please contact us:</p>
                  <p className="mt-4">
                    <strong>Email:</strong> <a href="mailto:hello@table4six.in" className="text-white hover:text-white/70 transition">hello@table4six.in</a>
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
              Now that you understand our payment and cancellation policy, come join our community of curious minds.
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
              <li><Link href="/payments" className="text-gray-300 hover:text-white transition block py-1">Payments & Cancellation Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <p className="mb-2 flex items-center gap-2 text-sm text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:hello@table4six.in" className="hover:text-white transition">hello@table4six.in</a>
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Mumbai, India
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Saaransh Sandeep Harlalka
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