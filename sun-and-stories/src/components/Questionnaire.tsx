'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Razorpay type declarations
interface RazorpayResponse {
  payment_id: string;
  order_id?: string;
  signature?: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    location: string;
    restaurant_preference: string;
  };
  theme: {
    color: string;
  };
  modal: {
    ondismiss: () => void;
  };
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
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
      { value: 'playlist', label: 'Depending on my playlist' },
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
    question: 'How important is humor in your life?',
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
      // Submit to Google Sheets
      await submitToGoogleSheets(answers);
      console.log('✅ Successfully submitted to Google Sheets:', answers);
    } catch (error) {
      console.error('❌ Error submitting to Google Sheets:', error);
      // Continue to payment even if submission fails
      // In production, you might want to show a warning to the user
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

  // Commented out for demo - uncomment for actual Razorpay integration
  // const initializePayment = () => {
  //   const options: RazorpayOptions = {
  //     key: 'rzp_test_1234567890', // Replace with your Razorpay key
  //     amount: 39900, // Amount in paise (₹399 = 39900 paise)
  //     currency: 'INR',
  //     name: 'Table 4 Six',
  //     description: 'Table4Six Experience Ticket',
  //     image: '/logo.png',
  //     handler: function (response: RazorpayResponse) {
  //       console.log('Payment successful:', response);
  //       // Handle successful payment
  //       handlePaymentSuccess(response);
  //     },
  //     prefill: {
  //       name: answers.name || '',
  //       email: '', // Add email field to questionnaire if needed
  //       contact: '', // Add phone field to questionnaire if needed
  //     },
  //     notes: {
  //       location: answers.location || '',
  //       restaurant_preference: answers.restaurant_preference || '',
  //     },
  //     theme: {
  //       color: '#FF6B35'
  //     },
  //     modal: {
  //       ondismiss: function() {
  //         console.log('Payment cancelled');
  //         setLoading(false);
  //         // Optionally show a message or allow retry
  //       }
  //     }
  //   };

  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };

  const handlePaymentSuccess = (response: RazorpayResponse) => {
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
    console.log('📊 Submitting to Google Sheets via API route...');

    const response = await fetch('/api/submit-questionnaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        location: answers.location || '',
        name: answers.name || '',
        age: answers.age || '',
        social: answers.social || '',
        sunday_vibe: answers.sunday_vibe || '',
        personality_type: answers.personality_type || '',
        fashion: answers.fashion || '',
        brunch_plate: answers.brunch_plate || '',
        alcohol: answers.alcohol || '',
        introversion: answers.introversion || '',
        humor: answers.humor || '',
        workout: answers.workout || '',
        motivation: answers.motivation || '',
        ticket: answers.ticket || '',
        restaurant_preference: answers.restaurant_preference || '',
        })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      throw new Error(`Questionnaire submission failed: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('📈 API response:', result);
    return result;
  };

  const renderQuestion = () => {
    const { id, type, question, options = [], ticketOptions = [], restaurantOptions = [], placeholder = '', scaleLabels } = currentQuestion;
    
    return (
      <div className={`w-full ${transitionClass}`}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold mb-4 sm:mb-6 md:mb-8 text-center text-white leading-tight px-1 sm:px-2">{question}</h2>
        
        {type === 'text' || type === 'email' || type === 'instagram' ? (
          <input
            type={type === 'email' ? 'email' : 'text'}
            id={id}
            className="w-full p-3 md:p-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-base md:text-lg shadow-sm"
            placeholder={placeholder}
            value={answers[id] || ''}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        ) : type === 'radio' ? (
          <div className="space-y-2 sm:space-y-3">
            {options.map((option) => (
              <div 
                key={option.value}
                className={`flex items-center p-3 sm:p-3 md:p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                  answers[id] === option.value 
                    ? 'border-white bg-white/20 backdrop-blur-sm' 
                    : 'border-white/30 bg-white/5 hover:bg-white/10'
                }`}
                onClick={() => handleInputChange(option.value)}
              >
                <div 
                  className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 transition-all duration-200 ${
                    answers[id] === option.value ? 'border-white bg-white' : 'border-white/60 bg-transparent'
                  }`}
                >
                  {answers[id] === option.value && (
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-sm sm:text-base md:text-lg font-medium text-white leading-relaxed">{option.label}</span>
              </div>
            ))}
          </div>
        ) : type === 'scale' ? (
          <div>
            <div className="flex justify-between mb-4 px-1">
              <span className="text-sm md:text-base text-white/80 font-medium">{scaleLabels?.min || '1'}</span>
              <span className="text-sm md:text-base text-white/80 font-medium">{scaleLabels?.max || '10'}</span>
            </div>
            <div className="grid grid-cols-5 lg:grid-cols-10 gap-1.5 sm:gap-2 md:gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`h-12 sm:h-10 flex items-center justify-center rounded-lg border transition-all duration-200 font-medium text-sm md:text-base ${
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
                className={`relative p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
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
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{ticket.title}</h3>
                  
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-3xl md:text-4xl font-bold">{ticket.price}</span>
                    {ticket.originalPrice && (
                      <span className="text-base md:text-lg text-white/70 line-through">{ticket.originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    {ticket.description.map((desc, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-white/90 text-base md:text-lg flex-shrink-0">•</span>
                        <span className="text-white/90 text-base md:text-lg leading-relaxed">{desc}</span>
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
                className={`relative p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
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
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{restaurant.title}</h3>
                  
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-base md:text-lg font-bold">{restaurant.price}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {restaurant.description.map((desc, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-white/90 text-base md:text-lg flex-shrink-0">✓</span>
                        <span className="text-white/90 text-base md:text-lg leading-relaxed">{desc}</span>
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
      <div className="mb-6 md:mb-8 text-center animate-fade-in-up">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white mb-2 px-2">{header.title}</h2>
        {header.subtitle && <p className="text-white/80 mb-4 text-sm md:text-base px-2">{header.subtitle}</p>}
        {imgUrl && (
          <div className="mt-4 w-full h-32 md:h-40 lg:h-56 overflow-hidden rounded-xl shadow-md relative border border-white/20">
            <Image src={imgUrl} alt={header.title} fill style={{ objectFit: 'cover' }} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile slide-out menu */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-md transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Close button at the top */}
          <div className="flex justify-end p-4">
            <button 
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col px-6 pt-4">
            <Link 
              href="/" 
              className="text-white font-semibold py-4 border-b border-white/20 font-montserrat hover:bg-white/5 transition-colors rounded px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white font-semibold py-4 border-b border-white/20 font-montserrat hover:bg-white/5 transition-colors rounded px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/faq" 
              className="text-white font-semibold py-4 border-b border-white/20 font-montserrat hover:bg-white/5 transition-colors rounded px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Header - Standardized */}
      <header className="w-full py-2 px-4 md:px-10 flex justify-between items-center bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
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

        {/* Mobile Logo - centered */}
        <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Table 4 Six Logo" width={80} height={80} className="h-20 w-auto" />
          </Link>
        </div>

        {/* Desktop Logo - left aligned */}
        <div className="hidden md:flex flex-1 justify-start">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Table 4 Six Logo" width={128} height={128} className="h-16 lg:h-18 w-auto ml-4" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end">
          <nav className="flex items-center text-white">
            <Link href="/" className="font-semibold hover:opacity-70 transition px-4 py-2 font-montserrat">Home</Link>
            <div className="h-6 w-px bg-white/40 mx-2"></div>
            <Link href="/about" className="font-semibold hover:opacity-70 transition px-4 py-2 font-montserrat">About</Link>
            <div className="h-6 w-px bg-white/40 mx-2"></div>
            <Link href="/faq" className="font-semibold hover:opacity-70 transition px-4 py-2 font-montserrat">FAQ</Link>
          </nav>
        </div>

        {/* Spacer for mobile menu balance */}
        <div className="md:hidden w-10 h-10"></div>
      </header>
      
      {/* Questionnaire content area - Mobile optimized */}
      <main className="flex-1 flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 min-h-0">
        {/* Progress bar - Above questionnaire pane */}
        <div className="w-full max-w-2xl mb-4 sm:mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full h-1.5 sm:h-2 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="w-full max-w-2xl bg-black/30 backdrop-blur-sm border border-white/20 text-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl my-4 sm:my-6 md:my-8">
          {renderSectionHeader()}
          {renderQuestion()}
          
          {/* Navigation buttons - Mobile optimized */}
          <div className="flex justify-between mt-6 sm:mt-8 md:mt-12 pt-3 sm:pt-4 md:pt-6 border-t border-white/20 gap-3 sm:gap-4">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-2.5 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 rounded-full transition-colors text-sm md:text-base ${
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
              className={`bg-white text-black hover:bg-white/90 font-semibold py-2.5 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 rounded-full transition-colors text-sm md:text-base flex-1 max-w-xs ${
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
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 text-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Complete Your Payment</h3>
              <p className="text-white/80 mb-6 text-sm md:text-base">Secure your Table4Six experience</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl mb-6 border border-white/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/80 text-sm md:text-base">Table4Six Ticket</span>
                <span className="font-bold text-sm md:text-base">₹399</span>
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm text-white/60">
                <span>Location: {answers.location === 'sobo' ? 'SoBo' : 'West Mumbai'}</span>
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm text-white/60">
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
                className="w-full bg-white text-black hover:bg-white/90 font-semibold py-2.5 md:py-3 px-6 rounded-full transition-all text-sm md:text-base"
              >
                {loading ? 'Processing Payment...' : 'Pay ₹399'}
              </button>
              
              <button
                onClick={() => {
                  setShowPaymentModal(false);
                  setLoading(false);
                }}
                className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-2.5 md:py-3 px-6 rounded-full transition-all text-sm md:text-base"
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