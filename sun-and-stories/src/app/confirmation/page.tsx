'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface OrderDetails {
  success: boolean;
  order_id: string;
  order_amount: number;
  order_status: string;
}

export default function ConfirmationPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'success' | 'failed' | 'unknown'>('loading');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const orderId = searchParams.get('order_id');
    const status = searchParams.get('status');
    
    if (orderId) {
      verifyPayment(orderId);
    } else if (status === 'success') {
      setPaymentStatus('success');
    } else {
      setPaymentStatus('unknown');
    }
  }, [searchParams]);

  const verifyPayment = async (orderId: string) => {
    try {
      const response = await fetch(`/api/verify-payment?order_id=${orderId}`);
      const data = await response.json();
      
      if (data.success) {
        setOrderDetails(data);
        // Check if payment is successful based on order status
        if (data.order_status === 'PAID') {
          setPaymentStatus('success');
        } else if (data.order_status === 'EXPIRED' || data.order_status === 'CANCELLED') {
          setPaymentStatus('failed');
        } else {
          setPaymentStatus('unknown');
        }
      } else {
        setPaymentStatus('failed');
      }
    } catch (error) {
      console.error('Payment verification error:', error);
      setPaymentStatus('failed');
    }
  };

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
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-4xl bg-black/40 backdrop-blur-lg border border-white/20 text-white p-8 md:p-12 rounded-2xl shadow-2xl text-center">
          
          {paymentStatus === 'loading' && (
            <>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-blue-500/50">
                <svg className="animate-spin w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
                Verifying Payment...
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
                Please wait while we confirm your payment and booking details.
              </p>
            </>
          )}

          {paymentStatus === 'success' && (
            <>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-green-500/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
                Payment Successful!
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
                Welcome to Table 4 Six! Your payment has been processed and you&apos;ve officially joined our table. Check your email for confirmation details and next steps.
              </p>
              
              {orderDetails && (
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8 max-w-md mx-auto">
                  <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
                  <div className="space-y-2 text-sm text-white/80">
                    <div className="flex justify-between">
                      <span>Order ID:</span>
                      <span className="font-mono">{orderDetails.order_id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount Paid:</span>
                      <span>₹{orderDetails.order_amount}</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {paymentStatus === 'failed' && (
            <>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-red-500/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6m0 0L6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
                Payment Failed
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
                Your payment could not be processed. Please try again or contact support if the issue persists.
              </p>
              <div className="space-x-4">
                <Link href="/questionnaire" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg">
                  Try Again
                </Link>
                <Link href="/" className="bg-white text-black hover:bg-white/90 font-semibold py-3 px-8 rounded-full transition-all shadow-lg">
                  Back to Home
                </Link>
              </div>
            </>
          )}

          {paymentStatus === 'unknown' && (
            <>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-green-500/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
                Thank You!
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
                You&apos;ve successfully joined our table! You&apos;ll receive an email shortly with further instructions.
              </p>
            </>
          )}

          {paymentStatus !== 'loading' && paymentStatus !== 'failed' && (
            <Link href="/" className="bg-white text-black hover:bg-white/90 font-semibold py-3 px-8 rounded-full transition-all shadow-lg">
              Back to Home
            </Link>
          )}
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
              <a href="https://www.instagram.com/table4.six/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                  </svg>
                </a>
            </div>
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