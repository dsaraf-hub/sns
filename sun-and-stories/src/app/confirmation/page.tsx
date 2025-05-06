import Link from 'next/link';
import Image from 'next/image';

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="w-full py-5 px-6 md:px-10 flex justify-between items-center bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-2xl font-display font-semibold text-accent hover:opacity-80 transition">
          Sun & Stories
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="font-medium text-[var(--foreground)] hover:text-accent transition">Home</Link>
          <Link href="/about" className="font-medium text-[var(--foreground)] hover:text-accent transition">About</Link>
          <Link href="/faq" className="font-medium text-[var(--foreground)] hover:text-accent transition">FAQ</Link>
          <Link href="/questionnaire" className="btn btn-primary">Join a Brunch</Link>
        </nav>
        <button className="md:hidden p-2 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-[var(--foreground)]">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-3xl bg-background p-6 sm:p-10 md:p-12 rounded-xl shadow-2xl text-center animate-fade-in-up">
          
          {/* Success Icon - Themed */}
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-success/30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--success)" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-gray-800">
            You&apos;re In! (Almost!)
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-text-light leading-relaxed">
            Thank you for filling out our questionnaire! We&apos;re thrilled you&apos;re interested in joining a Sun & Stories brunch. 
            Our team is now carefully reviewing responses to curate balanced and engaging groups.
          </p>

          {/* What Happens Next - Themed & Updated */}
          <div className="bg-neutral-medium/50 p-6 md:p-8 rounded-lg mb-10 text-left border border-neutral-dark/20">
            <h2 className="text-2xl font-display font-semibold mb-6 text-gray-700 text-center">What Happens Next?</h2>
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
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-md font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-700 mb-1">{item.title}</h3>
                    <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Our Curation Philosophy - New Section */}
          <div className="bg-background p-6 md:p-8 rounded-lg mb-10 text-left border-2 border-secondary/30">
            <h2 className="text-2xl font-display font-semibold mb-6 text-secondary-dark text-center">Crafting Connections: Our Curation Philosophy</h2>
            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                At Sun & Stories, we believe the magic lies in the mix. We don't just randomly group people; we thoughtfully curate each table to foster <strong className="font-medium text-gray-700">genuine connection and stimulating conversation</strong>.
              </p>
              <p>
                Our goal is to create <strong className="font-medium text-gray-700">balanced groups with diverse perspectives</strong>. This means bringing together individuals who might not typically cross paths but who share an openness to new experiences and a desire for authentic interaction. We consider factors like your expressed interests, communication style, and what you hope to gain from the experience.
              </p>
              <p>
                Think of it as a recipe for a great Sunday: a dash of similarity for common ground, a pinch of difference for exciting new flavors, and a whole lot of respect and curiosity.
              </p>
            </div>
          </div>
          
          {/* Visual Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="h-40 sm:h-48 rounded-lg overflow-hidden shadow-md">
              <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" alt="Thoughtful Matching" layout="fill" objectFit="cover" />
            </div>
            <div className="h-40 sm:h-48 rounded-lg overflow-hidden shadow-md">
              <Image src="https://images.unsplash.com/photo-1523289333742-bea4f06ad6b2?q=80&w=2070&auto=format&fit=crop" alt="Diverse Conversations" layout="fill" objectFit="cover" />
            </div>
            <div className="h-40 sm:h-48 rounded-lg overflow-hidden shadow-md">
              <Image src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2070&auto=format&fit=crop" alt="Authentic Connections" layout="fill" objectFit="cover" />
            </div>
          </div>

          <p className="text-md mb-8 text-text-light">
            If you don&apos;t hear from us for this Sunday, don&apos;t worry! We host brunches regularly and will keep your profile for future matching opportunities.
            <br />For any questions, reach out to <a href="mailto:hello@sunandstories.com" className="text-accent hover:underline font-semibold">hello@sunandstories.com</a>.
          </p>
          
          <Link href="/" className="btn btn-accent text-lg py-3 px-8 shadow-lg">
            Explore More About Sun & Stories
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 text-center bg-background border-t border-neutral-dark/20">
        <p className="text-sm text-text-light">
          © {new Date().getFullYear()} Sun & Stories. Curating connections, one brunch at a time.
        </p>
      </footer>
    </div>
  );
} 