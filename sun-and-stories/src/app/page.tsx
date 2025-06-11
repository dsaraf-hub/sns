'use client';

import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';

// Animated Text Component for the hero title
function AnimatedText() {
  const phrases = useMemo(() => [
    { first: "KINDRED", second: "UNKNOWNS" },
    { first: "CURIOUS", second: "MINDS" },  
    { first: "", second: "NEWCOMERS" }
  ], []);
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out completes, change phrase and fade in
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500); // Wait for fade out to complete (0.5s)
      
    }, 4500); // Total cycle time: 4s visible + 0.5s fade out

    return () => clearInterval(interval);
  }, [phrases]);

  const currentPhrase = phrases[currentPhraseIndex];
  const fullText = `${currentPhrase.first} ${currentPhrase.second}`;

  return (
    <span 
      className={`inline-block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ minHeight: '1.2em', fontFamily: 'Times New Roman, serif' }}
    >
      {fullText}
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
              {/* Header - Simple navigation */}
        <header className="w-full py-4 px-6 md:px-10 flex justify-between items-center bg-[#FAFBFA] sticky top-0 z-50 border-b border-black">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Table 4 Six Logo" className="h-20 md:h-24 w-auto ml-4" />
            </Link>
          </div>
          
          {/* Center - Mumbai Skyline */}
          <div className="flex-1 flex justify-center">
            <img src="/mumbai-skyline.png" alt="Mumbai Skyline" className="h-16 md:h-20" />
          </div>
          
          {/* Navigation */}
          <div className="flex-1 flex justify-end">
            <nav className="flex items-center text-black">
              <Link href="/about" className="font-semibold hover:opacity-70 transition px-4 py-2 font-montserrat">About</Link>
              <div className="h-6 w-px bg-black/40 mx-2"></div>
              <Link href="/questionnaire" className="font-semibold px-6 py-2 transition font-montserrat">
                Join Now
              </Link>
            </nav>
          </div>
        </header>

      {/* Hero Section - Updated to match design */}
      <section className="flex-1 flex flex-col justify-center items-center px-6 py-12 md:py-16 text-center bg-[#FAFBFA] min-h-[85vh] text-black font-sans">
        {/* Location Pin */}
        <div className="flex items-center gap-2 mb-8 px-4 py-2 bg-[#E8E4C9] rounded-full shadow-sm text-black">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span className="text-sm font-medium">Mumbai</span>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <p className="text-lg font-medium mb-2 tracking-wide font-montserrat">EVERY SUNDAY</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic mb-6 leading-tight">
            <AnimatedText /><br />
            <span style={{ fontFamily: 'Times New Roman, serif' }}>MEET FOR BRUNCH.</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-base mb-8 max-w-2xl leading-relaxed font-montserrat">
          Six intriguing individuals. One <strong>unforgettable</strong> brunch.
        </p>

        {/* Book Your Seat Button */}
        <Link href="/questionnaire" className="bg-[#E8E4C9] hover:bg-[#9A9470] text-black font-semibold py-3 px-8 rounded-full text-base mb-12 transition-colors shadow-lg inline-block font-montserrat">
          Join the Table
        </Link>

        {/* Countdown Timer */}
        <div className="text-center">
          <p className="text-lg font-medium mb-4 font-montserrat">Next brunch in</p>
          <div className="flex gap-4 justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E8E4C9] text-black rounded-full flex items-center justify-center font-bold text-xl font-montserrat">
                {timeLeft.days}
              </div>
              <p className="text-xs mt-1 font-montserrat">days</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E8E4C9] text-black rounded-full flex items-center justify-center font-bold text-xl font-montserrat">
                {timeLeft.hours}
              </div>
              <p className="text-xs mt-1 font-montserrat">hours</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E8E4C9] text-black rounded-full flex items-center justify-center font-bold text-xl font-montserrat">
                {timeLeft.minutes}
              </div>
              <p className="text-xs mt-1 font-montserrat">mins</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E8E4C9] text-black rounded-full flex items-center justify-center font-bold text-xl font-montserrat">
                {timeLeft.seconds}
              </div>
              <p className="text-xs mt-1 font-montserrat">secs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carefully Curated Restaurants Section */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#FAFBFA] to-[#E8E4C9]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black animate-fade-in-up" style={{ fontFamily: 'Times New Roman, serif' }}>
            HOW WE SELECT OUR<br />
            <em className="italic">RESTAURANTS</em>
          </h2>
          <p className="text-xl mb-8 text-black max-w-2xl mx-auto animate-fade-in-up font-montserrat" style={{ animationDelay: '0.2s' }}>
            We handpick restaurants using carefully tailored criteria to guarantee you the finest dining experiences.
          </p>
          
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-black leading-relaxed font-montserrat">
              Our selection process involves a rigorous evaluation of each establishment's culinary excellence, 
              ambiance, service quality, and overall dining experience. We consider factors such as ingredient 
              sourcing, chef expertise, menu diversity, dietary accommodations, and customer satisfaction ratings. 
              Every restaurant in our network has been personally visited by our team and meets our exacting standards 
              for creating the perfect backdrop for meaningful conversations and memorable Sunday brunches.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Updated with green background and gradient */}
      <section className="py-20 px-6 md:px-16 bg-[#E8E4C9]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black animate-fade-in-up" style={{ fontFamily: 'Times New Roman, serif' }}>
            HOW DOES IT <em className="italic">WORK?</em>
          </h2>
          <p className="text-xl mb-4 text-black animate-fade-in-up font-montserrat" style={{ animationDelay: '0.1s' }}>A choreographed dance of minds and palates.</p>
          <p className="text-xl mb-16 text-black animate-fade-in-up font-montserrat" style={{ animationDelay: '0.2s' }}>We orchestrate the symphony, you simply arrive and immerse.</p>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch mb-12">
            {[ 
              { 
                title: "Take our quick personality test", 
                desc: "Complete a quick personality test and let our algorithm do the rest.", 
                bgColor: "#e8c9dd"
              },
              { 
                title: "We curate your perfect match", 
                desc: "Our algorithm selects 5 kindred spirits for your perfect conversational experience.", 
                bgColor: "#C9E8D5"
              },
              { 
                title: "We set the stage", 
                desc: "Every detail is orchestrated: your venue awaits with the perfect atmosphere.", 
                bgColor: "#c9cde8"
              },
              { 
                title: "Connect and converse", 
                desc: "Enter meaningful discourse where strangers become unexpected allies of the mind.", 
                bgColor: "#C9E8D5"
              },
              { 
                title: "Build lasting connections", 
                desc: "Choose your conversation partners. When it's mutual, the dialogue continues beyond brunch.", 
                bgColor: "#e8c9dd"
              }
            ].map((item, index) => (
              <div key={index} 
                className="rounded-2xl shadow-lg flex-1 min-h-[300px] max-w-[280px] mx-auto lg:mx-0 flex flex-col p-8 text-center animate-fade-in-up" 
                style={{ backgroundColor: item.bgColor, animationDelay: `${0.3 + index * 0.1}s` }}>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black leading-tight">{item.title}</h3>
                <p className="text-black leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Begin Your Journey Section - White background with green text */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#E8E4C9] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <button className="bg-white hover:bg-gray-50 text-[#E8E4C9] font-bold py-4 px-12 rounded-full text-lg transition-colors shadow-lg border-2 border-[#E8E4C9] animate-fade-in-up">
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Testimonials section - Themed */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-black animate-fade-in-up" style={{ fontFamily: 'Times New Roman, serif' }}>What Our Guests Say</h2>
        <p className="text-center mb-16 max-w-xl mx-auto text-lg text-black leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Real stories from a community built on connection.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[ 
            { quote: "It was a refreshing change of pace. I met some genuinely interesting people I wouldn't have otherwise. The vibe was just right.", name: "Sneha R.", location: "Juhu, Mumbai", color: "var(--accent)", initials: "SR" },
            { quote: "Loved the concept and the execution! The matching felt intentional, and the conversation flowed so naturally. Can't wait for the next one.", name: "Vikram A.", location: "Bandra, Mumbai", color: "var(--primary)", initials: "VA" },
            { quote: "Table 4 Six is my new favorite Sunday ritual. It's the perfect antidote to a busy week. Great food, even better company.", name: "Anjali M.", location: "Lower Parel, Mumbai", color: "var(--secondary)", initials: "AM" }
          ].map((testimonial, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
              <p className="italic mb-6 text-lg text-black flex-grow">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center mt-auto pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full mr-4 overflow-hidden relative shadow-sm flex items-center justify-center text-white font-semibold text-xl" style={{backgroundColor: testimonial.color}}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-lg text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA section - Updated Theme */}
      <section className="py-24 px-6 md:px-16 relative bg-white text-black">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black animate-fade-in-up">Ready to Enter the Circle?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-700 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your invitation to an exclusive gathering of curious minds awaits. 
            Step into a realm where every conversation becomes an adventure of the intellect.
          </p>
          <Link href="/questionnaire" className="bg-[#E8E4C9] hover:bg-[#9A9470] text-white font-bold py-4 px-12 rounded-full text-xl transition-colors shadow-xl hover:shadow-2xl animate-fade-in-up border border-black" style={{ animationDelay: '0.4s' }}>
            Accept the Invitation
          </Link>
        </div>
      </section>

      {/* Footer - Themed */}
      <footer className="bg-white py-12 px-6 md:px-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-black">
          <div>
            <div className="text-2xl font-display font-semibold mb-4 text-[#E8E4C9]">Table 4 Six</div>
            <p className="mb-4 max-w-xs leading-relaxed text-sm text-gray-700">
              Crafting memorable Sunday brunches that spark connection and conversation in the heart of Mumbai.
            </p>
            <div className="flex gap-3 mt-5">
              {[1,2].map(i => ( // Placeholder for social icons
                <a key={i} href="#" className="w-10 h-10 bg-gray-100 text-[#E8E4C9] hover:bg-[#E8E4C9] hover:text-white rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    {i === 1 ? <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/> : 
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-700 hover:text-[#E8E4C9] transition block py-1">About Us</Link></li>
              <li><Link href="/faq" className="text-gray-700 hover:text-[#E8E4C9] transition block py-1">FAQ</Link></li>
              <li><Link href="/privacy" className="text-gray-700 hover:text-[#E8E4C9] transition block py-1">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-700 hover:text-[#E8E4C9] transition block py-1">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-black">Get in Touch</h3>
            <p className="mb-2 flex items-center gap-2 text-sm text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:hello@table4six.com" className="hover:text-[#E8E4C9] transition">hello@table4six.com</a>
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Mumbai, India
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Table 4 Six. Designed with ❤️ in Mumbai.
        </div>
      </footer>
    </main>
  );
}
