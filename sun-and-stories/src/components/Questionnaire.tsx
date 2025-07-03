'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Razorpay type declarations
declare global {
  interface Window {
    Razorpay: any;
  }
}

// Define question types
type QuestionOption = {
  value: string;
  label: string;
};

type TicketOption = {
  value: string;
  title: string;
  price: string;
  originalPrice?: string;
  description: string[];
};

type RestaurantOption = {
  value: string;
  title: string;
  price: string;
  description: string[];
};

type Question = {
  id: string;
  type: 'text' | 'email' | 'select' | 'scale' | 'radio' | 'instagram' | 'ticket' | 'restaurant';
  question: string;
  options?: QuestionOption[];
  ticketOptions?: TicketOption[];
  restaurantOptions?: RestaurantOption[];
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
    id: 'location',
    type: 'radio',
    question: 'Where would you love to brunch this Sunday?',
    options: [
      { value: 'sobo', label: 'SoBo' },
      { value: 'west', label: 'West Mumbai (Bandra / Khar / Juhu / Andheri)' },
    ],
    required: true,
  },
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
    type: 'text',
    question: 'Drop your Instagram or LinkedIn, if you\'re cool with it.',
    placeholder: '@yourhandle or linkedin.com/in/yourprofile',
    required: false,
  },
  {
    id: 'sunday_vibe',
    type: 'radio',
    question: 'On a Sunday, are you more:',
    options: [
      { value: 'cozy', label: 'A cozy soul wrapped in a blanket' },
      { value: 'spontaneous', label: 'Out making spontaneous plans' },
      { value: 'between', label: 'Somewhere in between' },
      { value: 'playlist', label: 'depending on my playlist' },
    ],
    required: true,
  },
  {
    id: 'personality_type',
    type: 'radio',
    question: 'If you had to pick one, would you say you\'re more...',
    options: [
      { value: 'funny', label: 'The funny one' },
      { value: 'smart', label: 'The smart one' },
      { value: 'observant', label: 'The observant one,' },
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
      { value: 'vintage', label: 'Vintage tee with new sneakers,' },
      { value: 'all_black', label: 'All black but emotionally colorful,' },
      { value: 'cozy', label: 'Cozy hoodie, deep thinker mode,' },
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
      { value: 'comfort', label: 'Classic comfort food (eggs, toast, coffee),' },
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
      { value: 'flow', label: 'I\'m easy, I go with the flow' },
    ],
    required: true,
  },
  {
    id: 'introversion',
    type: 'scale',
    question: 'On a scale of 1–10, how introverted are you?',
    required: true,
    scaleLabels: {
      min: '1',
      max: '10'
    }
  },
  {
    id: 'humor',
    type: 'radio',
    question: 'How important is humour in your life?',
    options: [
      { value: 'everything', label: 'It\'s everything — it\'s how I connect' },
      { value: 'quiet', label: 'I enjoy it, but I\'m more on the quiet side' },
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
      { value: 'open', label: 'Not really, but open to trying new things' },
    ],
    required: true,
  },
  {
    id: 'motivation',
    type: 'radio',
    question: 'What\'s pulling you toward this experience?',
    options: [
      { value: 'meet_people', label: 'I\'d love to meet new people' },
      { value: 'new_city', label: 'I\'m new to the city and want to explore' },
      { value: 'different', label: 'I just want to do something different' },
      { value: 'food_vibes', label: 'Honestly? Good food & better vibes' },
    ],
    required: true,
  },
  {
    id: 'ticket',
    type: 'ticket',
    question: 'Select your Table4Six ticket',
    ticketOptions: [
      {
        value: 'table4six_ticket',
        title: 'One Table4Six ticket',
        price: '₹ 399',
        description: [
          'This price includes one curated Table4Six experience with a like-minded group',
          'Meal cost to be paid at the restaurant'
        ]
      }
    ],
    required: true,
  },
  {
    id: 'restaurant_preference',
    type: 'restaurant',
    question: 'Select your dining preference',
    restaurantOptions: [
      {
        value: 'bottomless_brunch',
        title: 'Bottomless Brunch',
        price: '₹2300 per person',
        description: [
          'Approximate price of a meal ₹2300 per person',
          'Includes unlimited drinks & food options',
          'Pay for your meal directly at the restaurant'
        ]
      },
      {
        value: 'gourmet_dining',
        title: 'Gourmet Dining',
        price: '₹1500 per person',
        description: [
          'Approximate price of a meal ₹1500 per person',
          'Pay for your meal directly at the restaurant'
        ]
      },
      {
        value: 'local_favourites',
        title: 'Local Favourites',
        price: '₹700 per person',
        description: [
          'Approximate price of a meal ₹700 per person',
          'Pay for your meal directly at the restaurant'
        ]
      }
    ],
    required: true,
  },
];

// Section headers mapping for grouping
const sectionHeaders: Record<number, { title: string; subtitle?: string }> = {
  0: { title: "Let's get to know you", subtitle: "Tell us about your brunch preferences" },
  4: { title: 'Your personality vibe', subtitle: "Help us understand who you are" },
  10: { title: "Final questions", subtitle: "Almost done!" },
  13: { title: "Choose your experience", subtitle: "Select your Table4Six ticket" },
  14: { title: "Choose your dining experience", subtitle: "Select your restaurant preference" },
};

export default function Questionnaire() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [transitionClass, setTransitionClass] = useState("animate-fade-in");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
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
    
    try {
      // Submit to Google Sheets (you'll need to add your API key and sheet ID)
      await submitToGoogleSheets(answers);
      console.log('Successfully submitted to Google Sheets:', answers);
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      // Continue to payment even if submission fails
    }
    
    // Open payment gateway
    await openPaymentGateway();
  };

  const openPaymentGateway = async () => {
    // For demo purposes, show a payment modal
    // In production, you would integrate with actual payment gateway
    setShowPaymentModal(true);
    setLoading(false);
    
    // Uncomment below for actual Razorpay integration
    /*
    // Load Razorpay script dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      initializePayment();
    };
    document.body.appendChild(script);
    */
  };

  const initializePayment = () => {
    const options = {
      key: 'rzp_test_1234567890', // Replace with your Razorpay key
      amount: 39900, // Amount in paise (₹399 = 39900 paise)
      currency: 'INR',
      name: 'Table 4 Six',
      description: 'Table4Six Experience Ticket',
      image: '/logo.png',
      handler: function (response: any) {
        console.log('Payment successful:', response);
        // Handle successful payment
        handlePaymentSuccess(response);
      },
      prefill: {
        name: answers.name || '',
        email: '', // Add email field to questionnaire if needed
        contact: '', // Add phone field to questionnaire if needed
      },
      notes: {
        location: answers.location || '',
        restaurant_preference: answers.restaurant_preference || '',
      },
      theme: {
        color: '#FF6B35'
      },
      modal: {
        ondismiss: function() {
          console.log('Payment cancelled');
          setLoading(false);
          // Optionally show a message or allow retry
        }
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  const handlePaymentSuccess = (response: any) => {
    console.log('Payment Response:', response);
    // Here you would typically:
    // 1. Verify payment on your backend
    // 2. Update user status in database
    // 3. Send confirmation email
    
    // For now, redirect to confirmation page
    router.push('/confirmation');
  };

  // Google Sheets submission function
  const submitToGoogleSheets = async (answers: Record<string, string>) => {
    const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    if (!SHEET_ID || !API_KEY) {
      console.warn('Google Sheets credentials not configured');
      return;
    }

    // Prepare the row data in the order of your sheet columns
    const rowData = [
      new Date().toISOString(), // Timestamp
      answers.location || '',
      answers.name || '',
      answers.age || '',
      answers.social || '',
      answers.sunday_vibe || '',
      answers.personality_type || '',
      answers.fashion || '',
      answers.brunch_plate || '',
      answers.alcohol || '',
      answers.introversion || '',
      answers.humor || '',
      answers.workout || '',
      answers.motivation || '',
      answers.ticket || '',
      answers.restaurant_preference || '',
    ];

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1:append?valueInputOption=RAW&key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [rowData]
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Google Sheets submission failed: ${response.statusText}`);
    }

    return response.json();
  };

  const renderQuestion = () => {
    const { id, type, question, options = [], ticketOptions = [], restaurantOptions = [], placeholder = '', scaleLabels } = currentQuestion;
    
    return (
      <div className={`w-full ${transitionClass}`}>
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 text-center text-white">{question}</h2>
        
        {type === 'text' || type === 'email' || type === 'instagram' ? (
          <input
            type={type === 'email' ? 'email' : 'text'}
            id={id}
            className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg shadow-sm"
            placeholder={placeholder}
            value={answers[id] || ''}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        ) : type === 'radio' ? (
          <div className="space-y-4">
            {options.map((option) => (
              <div 
                key={option.value}
                className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                  answers[id] === option.value 
                    ? 'border-white bg-white/20 backdrop-blur-sm' 
                    : 'border-white/30 bg-white/5 hover:bg-white/10'
                }`}
                onClick={() => handleInputChange(option.value)}
              >
                <div 
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-all duration-200 ${
                    answers[id] === option.value ? 'border-white bg-white' : 'border-white/60 bg-transparent'
                  }`}
                >
                  {answers[id] === option.value && (
                    <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-lg font-medium text-white">{option.label}</span>
              </div>
            ))}
          </div>
        ) : type === 'scale' ? (
          <div>
            <div className="flex justify-between mb-3 px-1">
              <span className="text-sm text-white/80 font-medium">{scaleLabels?.min || '1'}</span>
              <span className="text-sm text-white/80 font-medium">{scaleLabels?.max || '10'}</span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`h-12 flex items-center justify-center rounded-lg border transition-all duration-200 font-medium ${
                    parseInt(answers[id] || '0') === value 
                      ? 'border-white bg-white text-black' 
                      : 'border-white/30 bg-white/5 hover:bg-white/10 text-white'
                  }`}
                  onClick={() => handleInputChange(value.toString())}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ) : type === 'ticket' ? (
          <div className="space-y-4">
            {ticketOptions.map((ticket) => (
              <div 
                key={ticket.value}
                className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-200 ${
                  answers[id] === ticket.value 
                    ? 'border-white bg-white/20 backdrop-blur-sm shadow-lg' 
                    : 'border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/15'
                }`}
                onClick={() => handleInputChange(ticket.value)}
                style={{
                  background: answers[id] === ticket.value 
                    ? 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)'
                    : 'linear-gradient(135deg, rgba(255, 107, 53, 0.8) 0%, rgba(255, 142, 83, 0.8) 100%)',
                }}
              >
                {/* Selection indicator */}
                <div className="absolute top-4 right-4">
                  <div 
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      answers[id] === ticket.value ? 'border-white bg-white' : 'border-white/60 bg-transparent'
                    }`}
                  >
                    {answers[id] === ticket.value && (
                      <svg className="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Ticket content */}
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-3">{ticket.title}</h3>
                  
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-4xl font-bold">{ticket.price}</span>
                    {ticket.originalPrice && (
                      <span className="text-lg text-white/70 line-through">{ticket.originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    {ticket.description.map((desc, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-white/90 text-lg">•</span>
                        <span className="text-white/90 text-lg leading-relaxed">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : type === 'restaurant' ? (
          <div className="space-y-4">
            {restaurantOptions.map((restaurant) => (
              <div 
                key={restaurant.value}
                className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-200 ${
                  answers[id] === restaurant.value 
                    ? 'border-white bg-white/20 backdrop-blur-sm shadow-lg' 
                    : 'border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/15'
                }`}
                onClick={() => handleInputChange(restaurant.value)}
                style={{
                  background: restaurant.value === 'bottomless_brunch' 
                    ? (answers[id] === restaurant.value 
                        ? 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)'
                        : 'linear-gradient(135deg, rgba(124, 58, 237, 0.8) 0%, rgba(168, 85, 247, 0.8) 100%)')
                    : restaurant.value === 'gourmet_dining' 
                      ? (answers[id] === restaurant.value 
                          ? 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)'
                          : 'linear-gradient(135deg, rgba(184, 134, 11, 0.8) 0%, rgba(218, 165, 32, 0.8) 100%)')
                      : (answers[id] === restaurant.value 
                          ? 'linear-gradient(135deg, #6B7280 0%, #9CA3AF 100%)'
                          : 'linear-gradient(135deg, rgba(107, 114, 128, 0.8) 0%, rgba(156, 163, 175, 0.8) 100%)'),
                }}
              >
                {/* Selection indicator */}
                <div className="absolute top-4 right-4">
                  <div 
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      answers[id] === restaurant.value ? 'border-white bg-white' : 'border-white/60 bg-transparent'
                    }`}
                  >
                    {answers[id] === restaurant.value && (
                      <svg className="w-3.5 h-3.5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Restaurant content */}
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-3">{restaurant.title}</h3>
                  
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-lg font-bold">{restaurant.price}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {restaurant.description.map((desc, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-white/90 text-lg">✓</span>
                        <span className="text-white/90 text-lg leading-relaxed">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
      3: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2070&auto=format&fit=crop', // budget/location oscafe
      5: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', // personality vibes
      19: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2070&auto=format&fit=crop', // all set celebration
    };
    const imgUrl = headerImages[currentQuestionIndex];
    return (
      <div className="mb-8 text-center animate-fade-in-up">
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-2">{header.title}</h2>
        {header.subtitle && <p className="text-white/80 mb-4">{header.subtitle}</p>}
        {imgUrl && (
          <div className="mt-4 w-full h-40 md:h-56 overflow-hidden rounded-xl shadow-md relative border border-white/20">
            <Image src={imgUrl} alt={header.title} fill style={{ objectFit: 'cover' }} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Centered logo design */}
      <header className="w-full py-6 px-6 md:px-10 flex flex-col items-center bg-transparent">
        <div className="mb-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Table 4 Six Logo" width={128} height={128} className="h-24 md:h-32 w-auto" />
          </Link>
        </div>
      </header>
      
      {/* Progress bar container with landing page styling */}
      <div className="w-full px-6 md:px-16 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-full h-2 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Questionnaire content area - Landing page style */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-16">
        <div className="w-full max-w-2xl bg-black/30 backdrop-blur-sm border border-white/20 text-white p-8 md:p-12 rounded-2xl shadow-2xl">
          {renderSectionHeader()}
          {renderQuestion()}
          
          {/* Navigation buttons - Landing page style */}
          <div className="flex justify-between mt-12 pt-6 border-t border-white/20">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-8 rounded-full transition-colors ${
                currentQuestionIndex === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
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
              className={`bg-white text-black hover:bg-white/90 font-semibold py-3 px-8 rounded-full transition-colors ${
                !answers[currentQuestion.id]
                  ? 'opacity-60 cursor-not-allowed'
                  : '' // Normal hover state is handled by .btn-accent:hover
              }`}
            >
              {loading 
                ? 'Processing...' 
                : currentQuestionIndex === questions.length - 1 
                  ? 'Proceed to Payment' 
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

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 text-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Complete Your Payment</h3>
              <p className="text-white/80 mb-6">Secure your Table4Six experience</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-6 border border-white/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/80">Table4Six Ticket</span>
                <span className="font-bold">₹399</span>
              </div>
              <div className="flex justify-between items-center text-sm text-white/60">
                <span>Location: {answers.location === 'sobo' ? 'SoBo' : 'West Mumbai'}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-white/60">
                <span>Restaurant: {answers.restaurant_preference?.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  // Simulate payment processing
                  setLoading(true);
                  setTimeout(() => {
                    handlePaymentSuccess({ payment_id: 'demo_' + Date.now() });
                  }, 2000);
                }}
                disabled={loading}
                className="w-full bg-white text-black hover:bg-white/90 font-semibold py-3 px-6 rounded-full transition-all"
              >
                {loading ? 'Processing Payment...' : 'Pay ₹399'}
              </button>
              
              <button
                onClick={() => {
                  setShowPaymentModal(false);
                  setLoading(false);
                }}
                className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-6 rounded-full transition-all"
              >
                Cancel
              </button>
            </div>

            <p className="text-xs text-white/60 text-center mt-4">
              🔒 This is a demo payment gateway. No actual payment will be processed.
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 