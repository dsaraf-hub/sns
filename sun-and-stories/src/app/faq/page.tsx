import Link from 'next/link';
import Image from 'next/image';

export default function FAQPage() {
  const faqs = [
    {
      question: "What exactly is Table 4 Six?",
      answer: "Table 4 Six is a platform that connects strangers for Sunday brunch in Mumbai. Each Sunday, we create groups of 6 people who've never met before to enjoy delicious food and meaningful conversations in a carefully selected location."
    },
    {
      question: "How does the matching process work?",
      answer: "We use your responses to our personality and vibe questionnaire to create balanced groups of 6 strangers. We look for complementary personalities, diverse backgrounds, and shared interests to ensure engaging conversations."
    },
    {
      question: "What does it cost to join?",
      answer: "Each participant pays for their own brunch (typically ₹800-1500 depending on the venue). We don't charge any matching or membership fees as we're focused on building community connections."
    },
    {
      question: "Where do the brunches take place?",
      answer: "We partner with select restaurants and cafes in Mumbai, primarily in South Bombay and the Western suburbs (Bandra, Khar, Juhu, and Andheri). The exact location is shared with confirmed participants."
    },
    {
      question: "What if I need to cancel?",
      answer: "We understand plans change. Please let us know at least 48 hours in advance so we can find a replacement. Last-minute cancellations make it difficult to maintain the group dynamic."
    },
    {
      question: "Is this a dating service?",
      answer: "No, Table 4 Six is not a dating platform. We're focused on meaningful conversations and new friendships. While connections may naturally develop, our goal is to create a pressure-free environment for authentic interactions."
    },
    {
      question: "What kind of people typically attend?",
      answer: "Our brunchers come from diverse backgrounds - professionals, creatives, entrepreneurs, students, and more. What they share is a curiosity about others and a desire for genuine connections outside their usual social circles."
    },
    {
      question: "What happens after I fill out the questionnaire?",
      answer: "After you complete the questionnaire, we'll review your responses and match you with a group. By Thursday, you'll receive an email with the details for the upcoming Sunday brunch, including time, location, and a brief (anonymous) overview of your group."
    },
    {
      question: "Can I request to be matched with specific types of people?",
      answer: "While we don't allow requests for specific individuals, your questionnaire responses help us understand what types of conversations and connections you value. Our goal is to create groups with complementary perspectives."
    },
    {
      question: "How often can I participate?",
      answer: "You can join once a month to ensure we're creating diverse groups and giving opportunities to new participants. After your brunch, you'll have the option to join the waitlist for a future date."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="w-full py-5 px-6 md:px-10 flex justify-between items-center bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-2xl font-display font-semibold text-accent hover:opacity-80 transition">
          Sun & Stories
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
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
      
      {/* Hero banner */}
      <section className="bg-neutral-light py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Image src="https://images.unsplash.com/photo-1499960049225-af8013f47abc?q=80&w=2070&auto=format&fit=crop" alt="Brunch table" layout="fill" objectFit="cover" className="mx-auto rounded-xl shadow-md h-48 object-cover mb-6" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--foreground)] mb-4">Frequently Asked <span className="text-accent">Questions</span></h1>
          <p className="text-lg text-[var(--foreground)]">Everything you need to know about Table 4 Six and our Sunday brunches.</p>
        </div>
      </section>
      
      {/* FAQ Content */}
      <main className="flex-1 py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-neutral-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2 flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-accent/20 text-accent rounded-full">?</span>
                  {faq.question}
                </h3>
                <p className="pl-8 text-[var(--foreground)] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-dark/10">
            <h2 className="text-2xl font-display font-bold mb-6 text-[var(--foreground)]">Still have questions?</h2>
            <p className="mb-8 text-[var(--foreground)]">
              If you didn&apos;t find the answer you were looking for, feel free to reach out to us directly. 
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <a href="mailto:hello@table4six.com" className="btn btn-primary inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Email Us
              </a>
              <Link href="/questionnaire" className="btn btn-accent inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                Join Next Brunch
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-neutral-medium/30 py-8 px-6 md:px-16 border-t border-neutral-dark/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-[var(--foreground)]">
          <div>
            <div className="text-2xl font-display font-bold mb-4 text-accent">Table 4 Six</div>
            <p className="mb-4 max-w-xs">Crafting authentic brunch experiences and connections in Mumbai.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[var(--foreground)]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent transition block py-1">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition block py-1">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition block py-1">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition block py-1">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[var(--foreground)]">Contact</h3>
            <p className="mb-2"><a href="mailto:hello@table4six.com" className="hover:text-accent transition">hello@table4six.com</a></p>
            <p>Mumbai, India</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-neutral-dark/10 text-center text-xs text-[var(--foreground)]/70">
          © {new Date().getFullYear()} Table 4 Six. Curating conversation, one brunch at a time.
        </div>
      </footer>
    </div>
  );
} 