'use client';

import Image from 'next/image';
import Questionnaire from '@/components/Questionnaire';

export default function QuestionnairePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0 opacity-40">
        <Image
          src="/background.jpg"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      
      <main className="relative z-10">
        <Questionnaire />
      </main>
    </div>
  );
} 