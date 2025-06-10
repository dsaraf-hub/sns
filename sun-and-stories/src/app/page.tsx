'use client';

import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';
import { useEffect, useState } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
      const nowIST = new Date(now.getTime() + istOffset);
      
      // Find next Sunday at noon IST
      const nextSunday = new Date(nowIST);
      const daysUntilSunday = (7 - nowIST.getDay()) % 7;
      
      if (daysUntilSunday === 0 && nowIST.getHours() >= 12) {
        // If it's Sunday and past noon, get next Sunday
        nextSunday.setDate(nowIST.getDate() + 7);
      } else {
        nextSunday.setDate(nowIST.getDate() + daysUntilSunday);
      }
      
      nextSunday.setHours(12, 0, 0, 0); // Set to noon
      
      const difference = nextSunday.getTime() - nowIST.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Header - Updated to match image */}
      <header className="w-full py-4 px-6 md:px-10 flex justify-between items-center bg-[#fefefe] shadow-sm sticky top-0 z-50 border-b-2 border-gray-200">
        <div className="flex items-center gap-4">
          <div className="w-px h-8 bg-gray-300"></div>
          <Link href="/" className="text-2xl font-serif font-light text-gray-800 transition hover:opacity-80 tracking-wide">
            Table 4 Six
          </Link>
          <div className="w-px h-8 bg-gray-300"></div>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/about" className="font-medium text-gray-700 hover:text-gray-900 transition">About</Link>
          <Link href="/blog" className="font-medium text-gray-700 hover:text-gray-900 transition">Blog</Link>
          <Link href="/login" className="font-medium text-gray-700 hover:text-gray-900 transition">Login</Link>
          <Link href="/questionnaire" className="bg-[#d73502] hover:bg-[#b82d02] text-white font-medium px-4 py-2 rounded transition-colors">
            Sign Up
          </Link>
        </nav>
        <button className="md:hidden focus:outline-none p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </header>

      {/* Hero Section - Updated to match design */}
      <section className="flex-1 flex flex-col justify-center items-center px-6 py-16 md:py-24 text-center bg-[#8b9556] min-h-screen text-black font-sans">
        {/* Location Pin */}
        <div className="flex items-center gap-2 mb-8 px-4 py-2 bg-white rounded-full shadow-sm text-gray-800">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span className="text-sm font-medium">Mumbai</span>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <p className="text-lg font-medium mb-2 tracking-wide font-sans text-black">EVERY SUNDAY</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black italic mb-6 leading-tight text-black font-sans tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
            STRANGERS MEET<br />
            FOR BRUNCH.
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg mb-8 max-w-lg leading-relaxed font-sans text-black">
          Book your seat now and <strong>meet 6 strangers over brunch</strong>, all matched by our personality algorithm.
        </p>

        {/* Book Your Seat Button */}
        <button className="bg-[#d73502] hover:bg-[#b82d02] text-white font-semibold py-4 px-12 rounded-full text-lg mb-12 transition-colors shadow-lg font-sans border-2 border-[#b82d02]">
          Book Your Seat
        </button>

        {/* Countdown Timer */}
        <div className="text-center">
          <p className="text-lg font-medium mb-4 font-sans text-black">Next brunch in</p>
          <div className="flex gap-4 justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xl border-2 border-gray-200">
                {timeLeft.days}
              </div>
              <p className="text-xs mt-1 font-sans text-black">days</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xl border-2 border-gray-200">
                {timeLeft.hours}
              </div>
              <p className="text-xs mt-1 font-sans text-black">hours</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xl border-2 border-gray-200">
                {timeLeft.minutes}
              </div>
              <p className="text-xs mt-1 font-sans text-black">mins</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xl border-2 border-gray-200">
                {timeLeft.seconds}
              </div>
              <p className="text-xs mt-1 font-sans text-black">secs</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Updated to horizontal layout */}
      <section className="py-20 px-6 md:px-16 bg-[#f5f1eb]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            HOW DOES IT <em className="italic font-bold">WORK?</em>
          </h2>
          <p className="text-lg mb-4 text-black">It's dining, made effortless.</p>
          <p className="text-lg mb-16 text-black font-semibold">We plan everything, just show up!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="relative bg-[#ff9b47] rounded-2xl p-6 flex flex-col justify-center min-h-[300px] overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <PlaceholderImage text="People taking personality test" bgColor="transparent" textColor="transparent" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold mb-3 text-black">Take our quick personality test</h3>
                <p className="text-black text-sm leading-relaxed">
                  Complete a quick personality test and let our algorithm do the rest.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-[#2dd4bf] rounded-2xl p-6 flex flex-col justify-center min-h-[300px] overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <PlaceholderImage text="Group of 5 people dining" bgColor="transparent" textColor="transparent" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold mb-3 text-black">We match you with 6 strangers</h3>
                <p className="text-black text-sm leading-relaxed">
                  Our algorithm selects 6 compatible humans for an engaging evening and meaningful conversations.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-[#f472b6] rounded-2xl p-6 flex flex-col justify-center min-h-[300px] overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <PlaceholderImage text="Restaurant table setup" bgColor="transparent" textColor="transparent" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold mb-3 text-black">We book and organize</h3>
                <p className="text-black text-sm leading-relaxed">
                  We provide everything you need to have a great night: insights into your group and your restaurant details.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative bg-[#059669] rounded-2xl p-6 flex flex-col justify-center min-h-[300px] overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <PlaceholderImage text="People playing ice breaker games" bgColor="transparent" textColor="transparent" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">Show up, dive into a unique experience</h3>
                <p className="text-white text-sm leading-relaxed">
                  Break the ice with our game and create genuine connections with like-minded strangers.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative bg-[#ff9b47] rounded-2xl p-6 flex flex-col justify-center min-h-[300px] overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <PlaceholderImage text="People connecting and chatting" bgColor="transparent" textColor="transparent" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  5
                </div>
                <h3 className="text-lg font-bold mb-3 text-black">Rate your experience, stay connected</h3>
                <p className="text-black text-sm leading-relaxed">
                  Choose who you want to stay connected with. If it's mutual, start chatting and keep the conversation flowing.
                </p>
              </div>
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="mt-16">
            <Link href="/questionnaire" className="bg-[#d73502] hover:bg-[#b82d02] text-white font-semibold py-4 px-12 rounded-full text-lg transition-colors shadow-lg">
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials section - Themed */}
      <section className="py-20 px-6 md:px-16 bg-background">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center text-[var(--foreground)]">What Our Guests Say</h2>
        <p className="text-center mb-16 max-w-xl mx-auto text-lg text-[var(--foreground)] leading-relaxed">Real stories from a community built on connection.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[ 
            { quote: "It was a refreshing change of pace. I met some genuinely interesting people I wouldn&apos;t have otherwise. The vibe was just right.", name: "Sneha R.", location: "Juhu, Mumbai", color: "var(--accent)", initials: "SR" },
            { quote: "Loved the concept and the execution! The matching felt intentional, and the conversation flowed so naturally. Can&apos;t wait for the next one.", name: "Vikram A.", location: "Bandra, Mumbai", color: "var(--primary)", initials: "VA" },
            { quote: "Table 4 Six is my new favorite Sunday ritual. It&apos;s the perfect antidote to a busy week. Great food, even better company.", name: "Anjali M.", location: "Lower Parel, Mumbai", color: "var(--secondary)", initials: "AM" }
          ].map((testimonial, index) => (
            <div key={index} className="p-8 border border-neutral-dark/20 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-neutral-light/60 flex flex-col animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <p className="italic mb-6 text-lg text-[var(--foreground)] flex-grow">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center mt-auto pt-4 border-t border-neutral-dark/10">
                <div className="w-12 h-12 rounded-full mr-4 overflow-hidden relative shadow-sm flex items-center justify-center text-white font-semibold text-xl" style={{backgroundColor: testimonial.color}}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-lg text-[var(--foreground)]">{testimonial.name}</div>
                  <div className="text-sm text-[var(--foreground)]">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured in section - Subtle Theming */}
      <section className="py-16 px-6 md:px-16 bg-neutral-medium/30">
        <h3 className="text-center text-xl font-semibold mb-12 text-[var(--foreground)]">As Seen In</h3>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 max-w-4xl mx-auto">
          {[ "Mid-Day", "The Mumbai Foodie", "LBB Mumbai", "Homegrown" ].map((feature, index) => (
            <div key={index} className="opacity-70 hover:opacity-100 transition h-10 flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s`}}>
              <PlaceholderImage text={feature} bgColor="transparent" textColor="var(--text-light)" className="font-medium text-lg"/>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA section - Themed */}
      <section className="py-24 px-6 md:px-16 relative bg-gradient-to-br from-primary/20 via-neutral-light to-secondary/20">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[var(--foreground)] animate-fade-in-up">Ready to Join the Table?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-[var(--foreground)] leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your seat at a table of new friends and fascinating conversations is just a few clicks away. 
            Take 5 minutes for a chance at a Sunday you won&apos;t forget.
          </p>
          <Link href="/questionnaire" className="btn btn-accent text-xl py-4 px-10 shadow-xl hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Apply for Sunday Brunch
          </Link>
        </div>
      </section>

      {/* Footer - Themed */}
      <footer className="bg-neutral-dark/5 py-12 px-6 md:px-16 border-t border-neutral-dark/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-[var(--foreground)]">
          <div>
            <div className="text-2xl font-display font-semibold mb-4 text-accent">Table 4 Six</div>
            <p className="mb-4 max-w-xs leading-relaxed text-sm">
              Crafting memorable Sunday brunches that spark connection and conversation in the heart of Mumbai.
            </p>
            <div className="flex gap-3 mt-5">
              {[1,2].map(i => ( // Placeholder for social icons
                <a key={i} href="#" className="w-10 h-10 bg-accent/10 text-accent hover:bg-accent hover:text-white rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    {i === 1 ? <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/> : 
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[var(--foreground)]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent transition block py-1">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition block py-1">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition block py-1">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition block py-1">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[var(--foreground)]">Get in Touch</h3>
            <p className="mb-2 flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:hello@table4six.com" className="hover:text-accent transition">hello@table4six.com</a>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Mumbai, India
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-neutral-dark/10 text-center text-xs text-[var(--foreground)]/80">
          © {new Date().getFullYear()} Table 4 Six. Designed with ❤️ in Mumbai.
        </div>
      </footer>
    </main>
  );
}
