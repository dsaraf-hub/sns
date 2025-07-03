'use client';

import Link from 'next/link';
import Image from 'next/image';
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
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

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
  }, [isClient]);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="hero-section">
        {/* Header - Responsive navigation */}
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

        {/* Hero Section - Updated to match design */}
        <section className="flex-1 flex flex-col justify-center items-center px-4 md:px-6 py-4 md:py-8 text-center text-white font-sans">
          {/* Mobile Logo - centered above Mumbai */}
          <div className="md:hidden mb-6">
            <Link href="/" className="flex items-center justify-center">
              <Image src="/logo.png" alt="Table 4 Six Logo" width={160} height={160} className="h-24 w-auto" />
            </Link>
          </div>

          {/* Location Pin */}
          <div className="flex items-center gap-2 mb-6 px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full shadow-sm text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-sm font-medium">Mumbai</span>
          </div>

          {/* Main Heading */}
          <div className="mb-4 md:mb-6">
            <p className="text-base md:text-lg font-medium mb-2 tracking-wide font-montserrat">EVERY SUNDAY</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic mb-3 md:mb-4 leading-tight text-shadow-lg px-2">
              <AnimatedText /><br />
              <span style={{ fontFamily: 'Times New Roman, serif' }}>MEET FOR BRUNCH.</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base mb-4 md:mb-6 max-w-2xl leading-relaxed font-montserrat text-shadow px-4">
            Six intriguing individuals. One <strong>unforgettable</strong> brunch.
          </p>

          {/* Book Your Seat Button */}
          <Link href="/questionnaire" className="bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-6 md:px-8 rounded-full text-sm md:text-base mb-6 md:mb-8 transition-colors shadow-sm inline-block font-montserrat">
            Join the Table
          </Link>

          {/* Countdown Timer */}
          <div className="text-center px-4">
            <p className="text-base md:text-lg font-medium mb-3 font-montserrat">Next brunch in</p>
            {isClient ? (
            <div className="flex gap-3 md:gap-4 justify-center">
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl font-montserrat">
                  {timeLeft.days}
                </div>
                <p className="text-xs mt-1 font-montserrat">days</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl font-montserrat">
                  {timeLeft.hours}
                </div>
                <p className="text-xs mt-1 font-montserrat">hours</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl font-montserrat">
                  {timeLeft.minutes}
                </div>
                <p className="text-xs mt-1 font-montserrat">mins</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black/30 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl font-montserrat">
                  {timeLeft.seconds}
                </div>
                <p className="text-xs mt-1 font-montserrat">secs</p>
              </div>
            </div>
            ) : null}
          </div>
        </section>
      </div>

      <div className="content-section">
        {/* Carefully Curated Restaurants Section */}
        <section className="restaurants-section py-12 md:py-20 px-4 md:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black animate-fade-in-up px-2" style={{ fontFamily: 'Times New Roman, serif' }}>
              HOW WE SELECT OUR<br />
              <em className="italic">RESTAURANTS?</em>
            </h2>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-black max-w-2xl mx-auto animate-fade-in-up font-montserrat px-4" style={{ animationDelay: '0.2s' }}>
              We handpick restaurants using carefully tailored criteria to guarantee you the finest dining experiences.
            </p>
            
            <div className="max-w-4xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
              <p className="text-sm md:text-lg text-black leading-relaxed font-montserrat">
                Our selection process involves a rigorous evaluation of each establishment&apos;s culinary excellence, 
                ambiance, service quality, and overall dining experience. We consider factors such as ingredient 
                sourcing, chef expertise, menu diversity, dietary accommodations, and customer satisfaction ratings. 
                Every restaurant in our network has been personally visited by our team and meets our exacting standards 
                for creating the perfect backdrop for meaningful conversations and memorable Sunday brunches.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works - Redesigned with elegant cards */}
        <section className="py-12 md:py-20 px-4 md:px-16 texture-section relative">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white animate-fade-in-up px-2" style={{ fontFamily: 'Times New Roman, serif' }}>
              HOW DOES IT <em className="italic">WORK?</em>
            </h2>
            <p className="text-base md:text-xl mb-3 md:mb-4 text-white animate-fade-in-up font-montserrat px-4" style={{ animationDelay: '0.1s' }}>A choreographed dance of minds and palates.</p>
            <p className="text-base md:text-xl mb-8 md:mb-16 text-white animate-fade-in-up font-montserrat px-4" style={{ animationDelay: '0.2s' }}>We orchestrate the symphony, you simply arrive and immerse.</p>
            
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto gap-6 pb-4 px-4 scrollbar-hide snap-x snap-mandatory">
                {[
                  {
                    number: 1,
                    title: "TELL US MORE ABOUT YOU",
                    description: "Take a quick personality quiz, so we can match you with a group that vibes with your energy.",
                    image: "/step1.jpg"
                  },
                  {
                    number: 2,
                    title: "PICK YOUR DINING DATE", 
                    description: "Choose from curated dining events near you—because good conversations start over great meals!",
                    image: "/step2.jpg"
                  },
                  {
                    number: 3,
                    title: "GET MATCHED WITH LIKE-MINDED INDIVIDUALS",
                    description: "Our algorithm connects you with five others for an exciting social dining experience.",
                    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop"
                  },
                  {
                    number: 4,
                    title: "DINE, LAUGH & CONNECT",
                    description: "Meet up, break the ice, and let the conversations (and connections) flow naturally!",
                    image: "/step4.jpg"
                  },
                  {
                    number: 5,
                    title: "STAY CONNECTED & KEEP STEPPING OUT",
                    description: "Choose who you want to stay connected with and keep the conversation flowing.",
                    image: "/step5.jpg"
                  }
                ].map((step, index) => (
                  <div key={index} className="how-it-works-card group flex-shrink-0 w-72 snap-center animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-orange-500 text-sm mb-2 uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <p className="text-center text-white/60 text-sm mt-4">Swipe to see all steps</p> */}
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {/* Step 1 */}
              <div className="how-it-works-card group animate-fade-in-up p-6" style={{ animationDelay: '0.3s' }}>
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/step1.jpg" 
                    alt="Tell us more about you"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                    1
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-orange-500 text-sm mb-2 uppercase tracking-wide">
                    TELL US MORE<br />ABOUT YOU
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Take a quick personality quiz, so we can match you with a group that vibes with your energy.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="how-it-works-card group animate-fade-in-up p-6" style={{ animationDelay: '0.4s' }}>
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/step2.jpg" 
                    alt="Pick your dining date"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                    2
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-orange-500 text-sm mb-2 uppercase tracking-wide">
                    PICK YOUR DINING DATE
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Choose from curated dining events near you—because good conversations start over great meals!
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="how-it-works-card group animate-fade-in-up p-6" style={{ animationDelay: '0.5s' }}>
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop" 
                    alt="Get matched with like-minded individuals"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                    3
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-orange-500 text-sm mb-2 uppercase tracking-wide">
                    GET MATCHED WITH LIKE-<br />MINDED INDIVIDUALS
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Our algorithm connects you with five others for an exciting social dining experience.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="how-it-works-card group animate-fade-in-up p-6" style={{ animationDelay: '0.6s' }}>
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/step4.jpg" 
                    alt="Dine, laugh & connect"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                    4
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-orange-500 text-sm mb-2 uppercase tracking-wide">
                    DINE, LAUGH & CONNECT
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Meet up, break the ice, and let the conversations (and connections) flow naturally!
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="how-it-works-card group animate-fade-in-up p-6" style={{ animationDelay: '0.7s' }}>
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/step5.jpg" 
                    alt="Stay connected & keep stepping out"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                    5
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-orange-500 text-sm mb-2 uppercase tracking-wide">
                    STAY CONNECTED<br />& KEEP STEPPING OUT
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Choose who you want to stay connected with and keep the conversation flowing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Gradient fade at the bottom for smooth transition */}
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-40 md:h-300" style={{background: 'linear-gradient(to top, #18181b 0%, #18181b 30%, transparent 100%)'}}></div>
        </section>

        {/* Sections with background image */}
        <div className="hero-section-alt">
          {/* Testimonials section - Updated for background */}
          <section className="py-12 md:py-20 px-4 md:px-16 relative">
            {/* Top fade overlay for smooth transition from above section */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-50 md:h-300" style={{background: 'linear-gradient(to bottom, #18181b 0%, #18181b 18%, transparent 100%)'}}></div>
            <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 md:mb-6 text-center text-white animate-fade-in-up px-2">What Our Guests Say</h2>
            <p className="text-center mb-8 md:mb-16 max-w-xl mx-auto text-sm md:text-lg text-white/90 leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.1s' }}>Real stories from a community built on connection.</p>
            
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div className="flex overflow-x-auto gap-6 pb-4 px-4 scrollbar-hide snap-x snap-mandatory">
                {[ 
                  { quote: "It was a refreshing change of pace. I met some genuinely interesting people I wouldn&apos;t have otherwise. The vibe was just right.", name: "Sneha R.", location: "Juhu, Mumbai", color: "var(--accent)", initials: "SR" },
                  { quote: "Loved the concept and the execution! The matching felt intentional, and the conversation flowed so naturally. Can&apos;t wait for the next one.", name: "Vikram A.", location: "Bandra, Mumbai", color: "var(--primary)", initials: "VA" },
                  { quote: "Table 4 Six is my new favorite Sunday ritual. It&apos;s the perfect antidote to a busy week. Great food, even better company.", name: "Anjali M.", location: "Lower Parel, Mumbai", color: "var(--secondary)", initials: "AM" }
                ].map((testimonial, index) => (
                  <div key={index} className="testimonial-card flex-shrink-0 w-80 snap-center animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                    <p className="italic mb-6 text-lg text-white flex-grow">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center mt-auto pt-4 border-t border-white/20">
                      <div className="w-12 h-12 rounded-full mr-4 overflow-hidden relative shadow-sm flex items-center justify-center text-white font-semibold text-xl" style={{backgroundColor: testimonial.color}}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-lg text-white">{testimonial.name}</div>
                        <div className="text-sm text-white/80">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[ 
                { quote: "It was a refreshing change of pace. I met some genuinely interesting people I wouldn&apos;t have otherwise. The vibe was just right.", name: "Sneha R.", location: "Juhu, Mumbai", color: "var(--accent)", initials: "SR" },
                { quote: "Loved the concept and the execution! The matching felt intentional, and the conversation flowed so naturally. Can&apos;t wait for the next one.", name: "Vikram A.", location: "Bandra, Mumbai", color: "var(--primary)", initials: "VA" },
                { quote: "Table 4 Six is my new favorite Sunday ritual. It&apos;s the perfect antidote to a busy week. Great food, even better company.", name: "Anjali M.", location: "Lower Parel, Mumbai", color: "var(--secondary)", initials: "AM" }
              ].map((testimonial, index) => (
                <div key={index} className="testimonial-card animate-fade-in-up" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                  <p className="italic mb-6 text-lg text-white flex-grow">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center mt-auto pt-4 border-t border-white/20">
                    <div className="w-12 h-12 rounded-full mr-4 overflow-hidden relative shadow-sm flex items-center justify-center text-white font-semibold text-xl" style={{backgroundColor: testimonial.color}}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/80">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </section>

          {/* Join CTA section - Updated for background */}
          <section className="py-16 md:py-24 px-4 md:px-16 relative">
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 text-white animate-fade-in-up px-2">Ready to Enter the Circle?</h2>
              <p className="text-base md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
                Your invitation to an exclusive gathering of curious minds awaits. 
                Step into a realm where every conversation becomes an adventure of the intellect.
              </p>
              <Link href="/questionnaire" className="bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 md:py-4 px-8 md:px-12 rounded-full text-lg md:text-xl transition-colors shadow-sm animate-fade-in-up font-montserrat" style={{ animationDelay: '0.4s' }}>
                Accept the Invitation
              </Link>
            </div>
          </section>
        </div>

        {/* Footer - Themed */}
        <footer className="bg-black py-12 px-6 md:px-16 relative">
          {/* Gradient overlay for seamless transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white relative z-10">
            <div>
              <div className="mb-4">
                <Image src="/logo.png" alt="Table 4 Six Logo" width={128} height={128} className="h-20 md:h-24 w-auto" />
              </div>
              <p className="mb-4 max-w-xs leading-relaxed text-sm text-gray-300">
                Crafting memorable Sunday brunches that spark connection and conversation in the heart of Mumbai.
              </p>
              <div className="flex gap-3 mt-5">
                {[1,2].map(i => ( // Placeholder for social icons
                  <a key={i} href="#" className="w-10 h-10 bg-gray-800 text-white hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      {i === 1 ? <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/> : 
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
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
          <div className="mt-10 pt-8 border-t border-gray-700/50 text-center text-xs text-gray-400 relative z-10">
            © {new Date().getFullYear()} Table 4 Six. Designed with ❤️ in Mumbai.
          </div>
        </footer>
      </div>
    </main>
  );
}
