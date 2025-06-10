'use client';

import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';

// Animated Text Component for the hero title
function AnimatedText() {
  const phrases = useMemo(() => [
    { first: "PATHS", second: "INTERSECT" },
    { first: "SOULS", second: "CONVERGE" },  
    { first: "HEARTS", second: "UNITE" }
  ], []);
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const fullText = `${currentPhrase.first} ${currentPhrase.second}`;
    
    if (isTyping) {
      if (currentText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 100); // Typing speed - faster
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 4000); // Wait 4 seconds after typing completes
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50); // Faster deleting speed
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next phrase
        const timeout = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setIsTyping(true);
        }, 200); // Shorter wait before next phrase
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, isTyping, currentPhraseIndex, phrases]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-block min-h-[1.2em]">
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </span>
  );
}

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
      {/* Header - Centered Table 4 Six */}
      <header className="w-full py-4 px-6 md:px-10 flex justify-center items-center bg-[#CD853F] sticky top-0 z-50 border-b-2 border-black">
        <Link href="/" className="text-3xl font-serif font-bold text-white transition hover:opacity-90 tracking-wide" style={{ textShadow: '-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000' }}>
          <span className="italic font-extrabold">Table</span>
          <span className="mx-2 text-2xl">4</span>
          <span className="italic font-extrabold">Six</span>
        </Link>
      </header>

      {/* Hero Section - Updated to match design */}
      <section className="flex-1 flex flex-col justify-center items-center px-6 py-16 md:py-24 text-center bg-[#8b9556] min-h-screen text-white font-sans border-b border-black">
        {/* Location Pin */}
        <div className="flex items-center gap-2 mb-8 px-4 py-2 bg-white rounded-full shadow-sm text-gray-800 border border-black">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span className="text-sm font-medium">Mumbai</span>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <p className="text-lg font-medium mb-2 tracking-wide font-sans">EVERY SUNDAY</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic mb-6 leading-tight font-sans">
            <AnimatedText /><br />
            OVER BRUNCH.
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg mb-8 max-w-lg leading-relaxed font-sans">
          Reserve your seat for an <strong>intellectual odyssey with 6 fascinating souls</strong>, curated by our algorithmic intuition for extraordinary conversations.
        </p>

        {/* Book Your Seat Button */}
        <Link href="/questionnaire" className="bg-[#CD853F] hover:bg-[#B87355] text-white font-semibold py-4 px-12 rounded-full text-lg mb-12 transition-colors shadow-lg font-sans border border-black inline-block">
          Claim Your Chair
        </Link>

        {/* Countdown Timer */}
        <div className="text-center">
          <p className="text-lg font-medium mb-4 font-sans">Next brunch in</p>
          <div className="flex gap-4 justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xl border border-black">
                {timeLeft.days}
              </div>
              <p className="text-xs mt-1 font-sans">days</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xl border border-black">
                {timeLeft.hours}
              </div>
              <p className="text-xs mt-1 font-sans">hours</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xl border border-black">
                {timeLeft.minutes}
              </div>
              <p className="text-xs mt-1 font-sans">mins</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xl border border-black">
                {timeLeft.seconds}
              </div>
              <p className="text-xs mt-1 font-sans">secs</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Updated to match image */}
      <section className="py-20 px-6 md:px-16 bg-[#F5F5DC] border-b border-black">
        <div className="max-w-7xl mx-auto text-center">
                     <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
             HOW DOES IT <em className="italic">WORK?</em>
           </h2>
           <p className="text-xl mb-4 text-gray-800">A choreographed dance of minds and palates.</p>
           <p className="text-xl mb-16 text-gray-800">We orchestrate the symphony, you simply arrive and immerse.</p>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch mb-12">
            {[ 
                             { 
                 title: "Unveil your intellectual essence", 
                 desc: "Complete our enigmatic psyche mapping—let the algorithm decode your conversational DNA.", 
                 bgColor: "#F4A460",
                 bgImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')"
               },
               { 
                 title: "We curate your constellation", 
                 desc: "Our digital oracle selects 5 kindred spirits—each a puzzle piece in your perfect conversational mosaic.", 
                 bgColor: "#20B2AA",
                 bgImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIj48Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSI4IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ1cmwoI2IpIi8+PC9zdmc+')"
               },
               { 
                 title: "We craft the stage", 
                 desc: "Every detail orchestrated: your venue of discovery awaits, complete with the sacred geometry of your gathering.", 
                 bgColor: "#F08080",
                 bgImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cG9seWdvbiBwb2ludHM9IjEwLDIgMTgsMTggMiwxOCIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjA4Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNjKSIvPjwvc3ZnPg==')"
               },
               { 
                 title: "Enter the realm of connection", 
                 desc: "Cross the threshold into meaningful discourse—where strangers transform into unexpected allies of the mind.", 
                 bgColor: "#20B2AA",
                 bgImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1Ij48cmVjdCB4PSIxMiIgeT0iMTIiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNkKSIvPjwvc3ZnPg==')"
               },
               { 
                 title: "Weave your web of intrigue", 
                 desc: "Choose your new conspirators of conversation. When the feeling is mutual, the dialogue continues beyond the table.", 
                 bgColor: "#F4A460",
                 bgImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1Ij48Y2lyY2xlIGN4PSI3LjUiIGN5PSI3LjUiIHI9IjIiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4xNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZSkiLz48L3N2Zz4=')"
               }
            ].map((item, index) => (
              <div key={index} 
                className="relative overflow-hidden rounded-3xl shadow-lg flex-1 min-h-[400px] max-w-[280px] mx-auto lg:mx-0 flex flex-col" 
                style={{
                  backgroundColor: item.bgColor,
                  backgroundImage: item.bgImage,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 border-2 border-white/30">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white leading-tight">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed text-base mt-auto">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
                     <button className="bg-[#CD853F] hover:bg-[#B87355] text-white font-bold py-4 px-12 rounded-full text-lg transition-colors shadow-lg border border-black">
             Begin Your Journey
           </button>
        </div>
      </section>

      {/* Testimonials section - Themed */}
      <section className="py-20 px-6 md:px-16 bg-background border-b border-black">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center text-[var(--foreground)]">What Our Guests Say</h2>
        <p className="text-center mb-16 max-w-xl mx-auto text-lg text-[var(--foreground)] leading-relaxed">Real stories from a community built on connection.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[ 
            { quote: "It was a refreshing change of pace. I met some genuinely interesting people I wouldn't have otherwise. The vibe was just right.", name: "Sneha R.", location: "Juhu, Mumbai", color: "var(--accent)", initials: "SR" },
            { quote: "Loved the concept and the execution! The matching felt intentional, and the conversation flowed so naturally. Can't wait for the next one.", name: "Vikram A.", location: "Bandra, Mumbai", color: "var(--primary)", initials: "VA" },
            { quote: "Table 4 Six is my new favorite Sunday ritual. It's the perfect antidote to a busy week. Great food, even better company.", name: "Anjali M.", location: "Lower Parel, Mumbai", color: "var(--secondary)", initials: "AM" }
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



      {/* Join CTA section - Olive Green Theme */}
      <section className="py-24 px-6 md:px-16 relative bg-[#8b9556] text-white border-b border-black">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white animate-fade-in-up">Ready to Enter the Circle?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your invitation to an exclusive gathering of curious minds awaits. 
            Step into a realm where every conversation becomes an adventure of the intellect.
          </p>
          <Link href="/questionnaire" className="bg-[#CD853F] hover:bg-[#B87355] text-white font-bold py-4 px-12 rounded-full text-xl transition-colors shadow-xl hover:shadow-2xl animate-fade-in-up border border-black" style={{ animationDelay: '0.4s' }}>
            Accept the Invitation
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
