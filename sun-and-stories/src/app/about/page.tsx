import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
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
      
      {/* About content */}
      <main className="flex-1 py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto bg-background p-8 md:p-12 rounded-xl shadow-lg">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[var(--foreground)]">
                About <span className="text-accent">Sun & Stories</span>
              </h1>
              <p className="text-lg mb-6 text-[var(--foreground)] leading-relaxed">
                In a world of constant scrolling, Sun &amp; Stories invites you to pause and connect. Each Sunday, we curate intimate tables where strangers become friends over a shared meal.
              </p>
            </div>
            <div className="md:w-1/2 w-full rounded-xl overflow-hidden shadow-lg relative">
              <Image
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop"
                alt="Group enjoying brunch"
                width={600}
                height={400}
                className="object-cover w-full h-80"
              />
            </div>
          </div>
          
          {/* Our Story Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-semibold mb-4 text-[var(--foreground)]">Our Story</h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              What started as a small brunch among friends in 2023 sparked a movement: genuine connection over shared meals. We witnessed magic as strangers opened up, exchanged stories, and left with lasting friendships.
            </p>
            <p className="text-[var(--foreground)] leading-relaxed">
              Sun &amp; Stories was born to recreate that magic every Sunday in Mumbai, handpicking six individuals to spark conversations that wouldn&apos;t happen otherwise.
            </p>
          </section>
          
          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-semibold mb-4 text-[var(--foreground)]">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: 1, title: "Fill the Questionnaire", desc: "Answer a quick style & vibe survey to help us know you." },
                { num: 2, title: "We Curate", desc: "Our team matches you with five complementary strangers." },
                { num: 3, title: "Enjoy Brunch", desc: "Join at a curated cafe or restaurant for lasting connections." }
              ].map(item => (
                <div key={item.num} className="bg-neutral-light p-6 rounded-lg shadow-md text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">{item.num}</div>
                  <h3 className="font-semibold mb-2 text-[var(--foreground)]">{item.title}</h3>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-semibold mb-4 text-[var(--foreground)]">Our Values</h2>
            <ul className="space-y-4 text-[var(--foreground)] leading-relaxed">
              <li><strong>Authenticity:</strong> Be yourself, no filters.</li>
              <li><strong>Presence:</strong> Phones away, hearts open.</li>
              <li><strong>Curiosity:</strong> Embrace new perspectives.</li>
              <li><strong>Inclusivity:</strong> All backgrounds welcome.</li>
            </ul>
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-neutral-medium/30 py-8 px-6 md:px-16 border-t border-neutral-dark/10">
        <div className="max-w-4xl mx-auto text-center text-sm text-[var(--foreground)]">
          © {new Date().getFullYear()} Sun & Stories. Curating connections, one brunch at a time.
        </div>
      </footer>
    </div>
  );
} 