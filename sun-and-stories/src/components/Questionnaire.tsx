'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Define question types
type QuestionOption = {
  value: string;
  label: string;
};

type Question = {
  id: string;
  type: 'text' | 'email' | 'select' | 'scale' | 'radio' | 'instagram';
  question: string;
  options?: QuestionOption[];
  placeholder?: string;
  required?: boolean;
  scaleLabels?: {
    min: string;
    max: string;
  };
};

// Define all the questions based on the provided questionnaire
const questions: Question[] = [
  {
    id: 'name',
    type: 'text',
    question: 'What\'s your name?',
    placeholder: 'Your full name',
    required: true,
  },
  {
    id: 'age',
    type: 'text',
    question: 'How old are you (or how young do you feel 😁)?',
    placeholder: 'e.g., 28',
    required: true,
  },
  {
    id: 'social',
    type: 'instagram',
    question: "Share your Instagram or LinkedIn handle (optional)",
    placeholder: '@yourhandle or linkedin.com/in/yourprofile',
  },
  {
    id: 'budget',
    type: 'radio',
    question: "What's your approximate budget per person for brunch?",
    options: [
      { value: 'below_500', label: '< ₹500' },
      { value: '500_1000', label: '₹500 - ₹1000' },
      { value: '1000_1500', label: '₹1000 - ₹1500' },
      { value: 'above_1500', label: '> ₹1500' },
    ],
    required: true,
  },
  {
    id: 'location',
    type: 'radio',
    question: 'Which Mumbai neighborhood would you prefer?',
    options: [
      { value: 'sobo', label: 'SoBo' },
      { value: 'west', label: 'West Mumbai (Bandra/Khar/Juhu/Andheri)' },
      { value: 'central', label: 'Central Mumbai (Lower Parel/Colaba)' },
    ],
    required: true,
  },
  {
    id: 'sunday_vibe',
    type: 'radio',
    question: 'On a Sunday, are you more:',
    options: [
      { value: 'cozy', label: 'A cozy soul wrapped in a blanket' },
      { value: 'spontaneous', label: 'Out making spontaneous plans' },
      { value: 'between', label: 'Somewhere in between' },
      { value: 'playlist', label: 'Depending on my playlist' },
    ],
    required: true,
  },
  {
    id: 'personality_type',
    type: 'radio',
    question: 'Do you consider yourself more of a...',
    options: [
      { value: 'problem_solver', label: 'Problem solver or idea generator?' },
      { value: 'vibe_curator', label: 'Vibe curator or chaos navigator?' },
      { value: 'listener', label: 'Listener or storyteller?' },
      { value: 'morning_person', label: 'Morning person or night thinker?' },
    ],
    required: true,
  },
  {
    id: 'self_perception',
    type: 'radio',
    question: 'If you had to pick one, would you say you\'re more...',
    options: [
      { value: 'funny', label: 'The funny one' },
      { value: 'smart', label: 'The smart one' },
      { value: 'observant', label: 'The observant one' },
      { value: 'unexpected', label: 'The unexpected twist' },
      { value: 'wildcard', label: 'Honestly, a wildcard' },
    ],
    required: true,
  },
  {
    id: 'fashion',
    type: 'radio',
    question: 'If your life was a fashion statement, it would be:',
    options: [
      { value: 'effortless', label: 'Effortless linen with a bold scent' },
      { value: 'vintage', label: 'Vintage tee with new sneakers' },
      { value: 'all_black', label: 'All black but emotionally colorful' },
      { value: 'cozy', label: 'Cozy hoodie, deep thinker mode' },
      { value: 'tailored', label: 'Tailored chaos — unpredictable but always works' },
    ],
    required: true,
  },
  {
    id: 'brunch_plate',
    type: 'radio',
    question: 'Your dream brunch plate looks like:',
    options: [
      { value: 'indulgent', label: 'Loaded and indulgent (pancakes, waffles, mimosas)' },
      { value: 'fresh', label: 'Fresh and mindful (greens, juices, balance)' },
      { value: 'comfort', label: 'Classic comfort food (eggs, toast, coffee)' },
      { value: 'surprise', label: 'A bit of everything – I like surprises' },
    ],
    required: true,
  },
  {
    id: 'alcohol',
    type: 'radio',
    question: 'Do you drink alcohol during brunch?',
    options: [
      { value: 'yes', label: 'Yes, bring on the bubbly!' },
      { value: 'no', label: 'Prefer non-alcoholic drinks' },
      { value: 'maybe', label: 'I\'m easy, I go with the flow' },
    ],
    required: true,
  },
  {
    id: 'opinions',
    type: 'radio',
    question: 'What are your opinions usually guided by?',
    options: [
      { value: 'logic', label: 'Logic and facts' },
      { value: 'emotions', label: 'Emotions and empathy' },
      { value: 'memes', label: 'Memes I saw last night' },
    ],
    required: true,
  },
  {
    id: 'music',
    type: 'radio',
    question: 'What\'s your music taste?',
    options: [
      { value: 'rap', label: 'RAP' },
      { value: 'rock', label: 'ROCK' },
      { value: 'pop', label: 'POP' },
      { value: 'classic', label: 'CLASSIC' },
      { value: 'house', label: 'HOUSE' },
    ],
    required: true,
  },
  {
    id: 'introversion',
    type: 'scale',
    question: 'On a scale of 1–10, how introverted are you?',
    required: true,
    scaleLabels: {
      min: 'Very introverted',
      max: 'Super social'
    }
  },
  {
    id: 'work_life',
    type: 'scale',
    question: 'Are you happy with your current work/life vibe?',
    required: true,
    scaleLabels: {
      min: 'Not at all',
      max: 'Extremely happy'
    }
  },
  {
    id: 'stress',
    type: 'scale',
    question: 'Do you feel stressed often?',
    required: true,
    scaleLabels: {
      min: 'Rarely stressed',
      max: 'Often stressed'
    }
  },
  {
    id: 'loneliness',
    type: 'scale',
    question: 'Do you often feel lonely?',
    required: true,
    scaleLabels: {
      min: 'Rarely lonely',
      max: 'Often lonely'
    }
  },
  {
    id: 'humor',
    type: 'radio',
    question: 'How important is humour in your life?',
    options: [
      { value: 'everything', label: 'It\'s everything — it\'s how I connect' },
      { value: 'enjoy', label: 'I enjoy it, but I\'m more on the quiet side' },
      { value: 'inside', label: 'I\'m usually laughing on the inside 😅' },
    ],
    required: true,
  },
  {
    id: 'workout',
    type: 'radio',
    question: 'Do you enjoy working out or moving your body?',
    options: [
      { value: 'therapy', label: 'Yes, it\'s my therapy' },
      { value: 'sometimes', label: 'Sometimes, when I\'m motivated' },
      { value: 'not_really', label: 'Not really, but open to trying new things' },
    ],
    required: true,
  },
  {
    id: 'reason',
    type: 'radio',
    question: 'What\'s pulling you toward this experience?',
    options: [
      { value: 'meet', label: 'I\'d love to meet new people' },
      { value: 'new_city', label: 'I\'m new to the city and want to explore' },
      { value: 'different', label: 'I just want to do something different' },
      { value: 'food', label: 'Honestly? Good food & better vibes' },
    ],
    required: true,
  },
];

// Section headers mapping for grouping
const sectionHeaders: Record<number, { title: string; subtitle?: string }> = {
  0: { title: "Let's get to know you" },
  3: { title: 'Budget & Location', subtitle: "Your brunch preferences" },
  5: { title: "Your personality vibe" },
  13: { title: "How you're feeling" },
  19: { title: "All set!" },
};

export default function Questionnaire() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [transitionClass, setTransitionClass] = useState("animate-fade-in");
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  useEffect(() => {
    // Reset transition class when question changes to allow re-animation
    setTransitionClass("");
    const timer = setTimeout(() => setTransitionClass("animate-fade-in"), 50); // Small delay to trigger reflow
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setTransitionClass("animate-fade-out"); // Assuming you have a fade-out animation
      setTimeout(() => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      }, 300); // Match animation duration
    } else {
      handleSubmit();
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setTransitionClass("animate-fade-out");
      setTimeout(() => {
        setCurrentQuestionIndex(prevIndex => prevIndex - 1);
      }, 300);
    }
  };
  
  const handleInputChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };
  
  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push('/confirmation');
  };

  const renderQuestion = () => {
    const { id, type, question, options = [], placeholder = '', scaleLabels } = currentQuestion;
    
    return (
      <div className={`w-full ${transitionClass}`}>
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 text-center text-gray-700">{question}</h2>
        
        {type === 'text' || type === 'email' || type === 'instagram' ? (
          <input
            type={type === 'email' ? 'email' : 'text'}
            id={id}
            className="w-full p-4 border-2 border-neutral-dark rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent text-lg shadow-sm placeholder:text-text-light" // Updated class
            placeholder={placeholder}
            value={answers[id] || ''}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        ) : type === 'radio' ? (
          <div className="space-y-4">
            {options.map((option) => (
              <div 
                key={option.value}
                className={`questionnaire-option flex items-center ${
                  answers[id] === option.value ? 'option-selected' : 'radio-option-hover' // Apply radio-option-hover here
                }`}
                onClick={() => handleInputChange(option.value)}
              >
                <div 
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-all duration-200 ${
                    answers[id] === option.value ? 'border-accent bg-accent' : 'border-neutral-dark bg-white'
                  }`}
                >
                  {answers[id] === option.value && (
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-lg font-medium">{option.label}</span>
              </div>
            ))}
          </div>
        ) : type === 'scale' ? (
          <div>
            <div className="flex justify-between mb-3 px-1">
              <span className="scale-label scale-label-left">{scaleLabels?.min || '1'}</span>
              <span className="scale-label scale-label-right">{scaleLabels?.max || '10'}</span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`scale-button ${
                    parseInt(answers[id] || '0') === value ? 'scale-button-selected' : ''
                  }`}
                  onClick={() => handleInputChange(value.toString())}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  const renderSectionHeader = () => {
    const header = sectionHeaders[currentQuestionIndex];
    if (!header) return null;
    // Map section index to real image URLs
    const headerImages: Record<number, string> = {
      0: 'https://images.unsplash.com/photo-1528150177503-8f58dc9669c8?q=80&w=2070&auto=format&fit=crop', // get to know you
      3: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2070&auto=format&fit=crop', // budget/location oscafe
      5: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', // personality vibes
      13: 'https://images.unsplash.com/photo-1549921296-3c9f59aa73e7?q=80&w=2070&auto=format&fit=crop', // emotional scale mood
      19: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2070&auto=format&fit=crop', // all set celebration
    };
    const imgUrl = headerImages[currentQuestionIndex];
    return (
      <div className="mb-8 text-center animate-fade-in-up">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-[var(--foreground)] mb-2">{header.title}</h2>
        {header.subtitle && <p className="text-[var(--foreground)] opacity-70 mb-4">{header.subtitle}</p>}
        {imgUrl && (
          <div className="mt-4 w-full h-40 md:h-56 overflow-hidden rounded-xl shadow-md">
            <Image src={imgUrl} alt={header.title} layout="fill" objectFit="cover" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background"> {/* White background for the page */}
      {/* Header */}
      <header className="w-full py-5 px-6 md:px-10 flex justify-between items-center bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-2xl font-display font-semibold text-accent transition hover:opacity-80">
          Sun & Stories
        </Link>
        <div className="text-sm font-medium text-gray-600">
          Question {currentQuestionIndex + 1} / {questions.length}
        </div>
      </header>
      
      {/* Progress bar container (moved above main content area for better visibility) */}
      <div className="w-full px-6 md:px-10 py-4">
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Questionnaire content area - Centered */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-2xl bg-background p-6 sm:p-8 md:p-10 rounded-xl shadow-xl">
          {renderSectionHeader()}
          {renderQuestion()}
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-12 pt-6 border-t border-neutral-dark/20">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`btn btn-outline ${
                currentQuestionIndex === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-accent-dark'
              }`}
            >
              Back
            </button>
            
            <button
              onClick={
                currentQuestionIndex === questions.length - 1
                  ? handleSubmit
                  : handleNextQuestion
              }
              disabled={loading || !answers[currentQuestion.id]}
              className={`btn btn-accent ${
                !answers[currentQuestion.id]
                  ? 'opacity-60 cursor-not-allowed'
                  : '' // Normal hover state is handled by .btn-accent:hover
              }`}
            >
              {loading 
                ? 'Submitting...' 
                : currentQuestionIndex === questions.length - 1 
                  ? 'Finish & Submit' 
                  : 'Next Question'}
            </button>
          </div>
        </div>
      </main>
      
      {/* Current question indicator for debugging (optional, can be removed for production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-1.5 rounded-md text-xs shadow-lg opacity-90">
          <div>Q: {currentQuestionIndex + 1} ({currentQuestion.id})</div>
          {answers[currentQuestion.id] && <div>A: {answers[currentQuestion.id]}</div>}
        </div>
      )}
    </div>
  );
} 