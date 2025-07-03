'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ 
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/background2.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Header - Centered logo design */}
      <header className="w-full py-6 px-6 md:px-10 flex flex-col items-center bg-transparent sticky top-0 z-50">
        <div className="mb-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Table 4 Six Logo" width={128} height={128} className="h-24 md:h-32 w-auto" />
          </Link>
        </div>
        <div className="text-white font-medium bg-black/30 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
          Our Story
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-16">
        <div className="w-full max-w-4xl bg-black/30 backdrop-blur-sm border border-white/20 text-white p-8 md:p-12 rounded-2xl shadow-2xl">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
              THE STORY OF<br />
              <em className="italic">TABLE 4 SIX</em>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-montserrat">
              Born from a simple question: &ldquo;What if strangers could become friends over Sunday brunch?&rdquo;
            </p>
          </div>

          {/* Origin Story */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center" style={{ fontFamily: 'Times New Roman, serif' }}>
              THE MUMBAI <em className="italic">BEGINNING</em>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed font-montserrat">
              <p className="text-white/90">
                July 2023. Three college friends — <strong>Arjun</strong>, <strong>Priya</strong>, and <strong>Vikram</strong> — sat in their usual Bandra café, scrolling phones and complaining: &ldquo;There&rsquo;s nothing interesting to do in Mumbai anymore.&rdquo;
              </p>
              
              <p className="text-white/90">
                Arjun missed the spontaneous connections from his London days. Priya met fascinating people at work but never socially. Vikram wondered: &ldquo;What if we could recreate that travel magic right here?&rdquo;
              </p>
              
              <p className="text-white/90">
                The idea was simple: invite three strangers to Sunday brunch. They posted: <em>&ldquo;Three strangers wanted for Sunday brunch. Come curious, leave connected.&rdquo;</em>
              </p>
              
              <p className="text-white/90">
                That first brunch lasted four hours. Six strangers became friends, sharing dreams, struggles, and hidden Mumbai spots. The magic was undeniable.
              </p>
              
              <p className="text-white/90">
                By December 2023, <strong>Table 4 Six</strong> had grown into a weekly ritual, transforming Sunday brunches into adventures of human connection across Mumbai.
              </p>
            </div>
          </section>

          {/* What is Table 4 Six */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center" style={{ fontFamily: 'Times New Roman, serif' }}>
              WHAT IS <em className="italic">TABLE 4 SIX?</em>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-white">The Experience</h3>
                <p className="text-white/80 leading-relaxed font-montserrat">
                  Every Sunday, six carefully matched strangers gather at Mumbai&rsquo;s finest restaurants for a curated brunch experience. No agendas, no expectations — just authentic conversation, incredible food, and the possibility of genuine connection.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-white">The Philosophy</h3>
                <p className="text-white/80 leading-relaxed font-montserrat">
                  We believe that Mumbai&rsquo;s greatest treasure isn&rsquo;t its skyline or its food — it&rsquo;s its people. Table 4 Six creates intentional spaces for meaningful encounters, proving that the most interesting conversations happen when strangers become friends.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-8 rounded-xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-white">Our Promise</h3>
                <p className="text-white/80 leading-relaxed font-montserrat">
                  Every table is thoughtfully curated. Every restaurant is personally vetted. Every Sunday offers a chance to discover not just new friends, but new perspectives on life in this incredible city we call home.
                </p>
              </div>
            </div>
          </section>


          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
              READY TO JOIN <em className="italic">THE TABLE?</em>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed font-montserrat">
              Your next great friendship might be just one Sunday brunch away. 
              Take the leap, trust the process, and let us introduce you to the extraordinary people of Mumbai.
            </p>
          </section>
          
        </div>
      </main>
    </div>
  );
}