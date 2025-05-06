module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/Questionnaire.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Questionnaire)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// Define all the questions based on the provided questionnaire
const questions = [
    {
        id: 'name',
        type: 'text',
        question: 'What\'s your name?',
        placeholder: 'Your full name',
        required: true
    },
    {
        id: 'age',
        type: 'text',
        question: 'How old are you (or how young do you feel 😁)?',
        placeholder: 'e.g., 28',
        required: true
    },
    {
        id: 'social',
        type: 'instagram',
        question: "Share your Instagram or LinkedIn handle (optional)",
        placeholder: '@yourhandle or linkedin.com/in/yourprofile'
    },
    {
        id: 'budget',
        type: 'radio',
        question: "What's your approximate budget per person for brunch?",
        options: [
            {
                value: 'below_500',
                label: '< ₹500'
            },
            {
                value: '500_1000',
                label: '₹500 - ₹1000'
            },
            {
                value: '1000_1500',
                label: '₹1000 - ₹1500'
            },
            {
                value: 'above_1500',
                label: '> ₹1500'
            }
        ],
        required: true
    },
    {
        id: 'location',
        type: 'radio',
        question: 'Which Mumbai neighborhood would you prefer?',
        options: [
            {
                value: 'sobo',
                label: 'SoBo'
            },
            {
                value: 'west',
                label: 'West Mumbai (Bandra/Khar/Juhu/Andheri)'
            },
            {
                value: 'central',
                label: 'Central Mumbai (Lower Parel/Colaba)'
            }
        ],
        required: true
    },
    {
        id: 'sunday_vibe',
        type: 'radio',
        question: 'On a Sunday, are you more:',
        options: [
            {
                value: 'cozy',
                label: 'A cozy soul wrapped in a blanket'
            },
            {
                value: 'spontaneous',
                label: 'Out making spontaneous plans'
            },
            {
                value: 'between',
                label: 'Somewhere in between'
            },
            {
                value: 'playlist',
                label: 'Depending on my playlist'
            }
        ],
        required: true
    },
    {
        id: 'personality_type',
        type: 'radio',
        question: 'Do you consider yourself more of a...',
        options: [
            {
                value: 'problem_solver',
                label: 'Problem solver or idea generator?'
            },
            {
                value: 'vibe_curator',
                label: 'Vibe curator or chaos navigator?'
            },
            {
                value: 'listener',
                label: 'Listener or storyteller?'
            },
            {
                value: 'morning_person',
                label: 'Morning person or night thinker?'
            }
        ],
        required: true
    },
    {
        id: 'self_perception',
        type: 'radio',
        question: 'If you had to pick one, would you say you\'re more...',
        options: [
            {
                value: 'funny',
                label: 'The funny one'
            },
            {
                value: 'smart',
                label: 'The smart one'
            },
            {
                value: 'observant',
                label: 'The observant one'
            },
            {
                value: 'unexpected',
                label: 'The unexpected twist'
            },
            {
                value: 'wildcard',
                label: 'Honestly, a wildcard'
            }
        ],
        required: true
    },
    {
        id: 'fashion',
        type: 'radio',
        question: 'If your life was a fashion statement, it would be:',
        options: [
            {
                value: 'effortless',
                label: 'Effortless linen with a bold scent'
            },
            {
                value: 'vintage',
                label: 'Vintage tee with new sneakers'
            },
            {
                value: 'all_black',
                label: 'All black but emotionally colorful'
            },
            {
                value: 'cozy',
                label: 'Cozy hoodie, deep thinker mode'
            },
            {
                value: 'tailored',
                label: 'Tailored chaos — unpredictable but always works'
            }
        ],
        required: true
    },
    {
        id: 'brunch_plate',
        type: 'radio',
        question: 'Your dream brunch plate looks like:',
        options: [
            {
                value: 'indulgent',
                label: 'Loaded and indulgent (pancakes, waffles, mimosas)'
            },
            {
                value: 'fresh',
                label: 'Fresh and mindful (greens, juices, balance)'
            },
            {
                value: 'comfort',
                label: 'Classic comfort food (eggs, toast, coffee)'
            },
            {
                value: 'surprise',
                label: 'A bit of everything – I like surprises'
            }
        ],
        required: true
    },
    {
        id: 'alcohol',
        type: 'radio',
        question: 'Do you drink alcohol during brunch?',
        options: [
            {
                value: 'yes',
                label: 'Yes, bring on the bubbly!'
            },
            {
                value: 'no',
                label: 'Prefer non-alcoholic drinks'
            },
            {
                value: 'maybe',
                label: 'I\'m easy, I go with the flow'
            }
        ],
        required: true
    },
    {
        id: 'opinions',
        type: 'radio',
        question: 'What are your opinions usually guided by?',
        options: [
            {
                value: 'logic',
                label: 'Logic and facts'
            },
            {
                value: 'emotions',
                label: 'Emotions and empathy'
            },
            {
                value: 'memes',
                label: 'Memes I saw last night'
            }
        ],
        required: true
    },
    {
        id: 'music',
        type: 'radio',
        question: 'What\'s your music taste?',
        options: [
            {
                value: 'rap',
                label: 'RAP'
            },
            {
                value: 'rock',
                label: 'ROCK'
            },
            {
                value: 'pop',
                label: 'POP'
            },
            {
                value: 'classic',
                label: 'CLASSIC'
            },
            {
                value: 'house',
                label: 'HOUSE'
            }
        ],
        required: true
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
            {
                value: 'everything',
                label: 'It\'s everything — it\'s how I connect'
            },
            {
                value: 'enjoy',
                label: 'I enjoy it, but I\'m more on the quiet side'
            },
            {
                value: 'inside',
                label: 'I\'m usually laughing on the inside 😅'
            }
        ],
        required: true
    },
    {
        id: 'workout',
        type: 'radio',
        question: 'Do you enjoy working out or moving your body?',
        options: [
            {
                value: 'therapy',
                label: 'Yes, it\'s my therapy'
            },
            {
                value: 'sometimes',
                label: 'Sometimes, when I\'m motivated'
            },
            {
                value: 'not_really',
                label: 'Not really, but open to trying new things'
            }
        ],
        required: true
    },
    {
        id: 'reason',
        type: 'radio',
        question: 'What\'s pulling you toward this experience?',
        options: [
            {
                value: 'meet',
                label: 'I\'d love to meet new people'
            },
            {
                value: 'new_city',
                label: 'I\'m new to the city and want to explore'
            },
            {
                value: 'different',
                label: 'I just want to do something different'
            },
            {
                value: 'food',
                label: 'Honestly? Good food & better vibes'
            }
        ],
        required: true
    }
];
// Section headers mapping for grouping
const sectionHeaders = {
    0: {
        title: "Let's get to know you"
    },
    3: {
        title: 'Budget & Location',
        subtitle: "Your brunch preferences"
    },
    5: {
        title: "Your personality vibe"
    },
    13: {
        title: "How you're feeling"
    },
    19: {
        title: "All set!"
    }
};
// Image backgrounds for question types
const backgroundImages = {
    general: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    location: "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=1974&auto=format&fit=crop",
    personality: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=2072&auto=format&fit=crop",
    food: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop"
};
function Questionnaire() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [backgroundImage, setBackgroundImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(backgroundImages.general);
    const [transitionClass, setTransitionClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("animate-fade-in");
    const currentQuestion = questions[currentQuestionIndex];
    const progress = (currentQuestionIndex + 1) / questions.length * 100;
    // Set background image based on question type
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Select background image based on question content
        let newBackground = backgroundImages.general;
        if (currentQuestion.id === 'location') {
            newBackground = backgroundImages.location;
        } else if ([
            'personality_type',
            'self_perception',
            'introversion'
        ].includes(currentQuestion.id)) {
            newBackground = backgroundImages.personality;
        } else if ([
            'brunch_plate',
            'alcohol'
        ].includes(currentQuestion.id)) {
            newBackground = backgroundImages.food;
        }
        setBackgroundImage(newBackground);
    }, [
        currentQuestion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Reset transition class when question changes to allow re-animation
        setTransitionClass("");
        const timer = setTimeout(()=>setTransitionClass("animate-fade-in"), 50); // Small delay to trigger reflow
        return ()=>clearTimeout(timer);
    }, [
        currentQuestionIndex
    ]);
    const handleNextQuestion = ()=>{
        if (currentQuestionIndex < questions.length - 1) {
            setTransitionClass("animate-fade-out"); // Assuming you have a fade-out animation
            setTimeout(()=>{
                setCurrentQuestionIndex((prevIndex)=>prevIndex + 1);
            }, 300); // Match animation duration
        } else {
            handleSubmit();
        }
    };
    const handlePreviousQuestion = ()=>{
        if (currentQuestionIndex > 0) {
            setTransitionClass("animate-fade-out");
            setTimeout(()=>{
                setCurrentQuestionIndex((prevIndex)=>prevIndex - 1);
            }, 300);
        }
    };
    const handleInputChange = (value)=>{
        setAnswers((prev)=>({
                ...prev,
                [currentQuestion.id]: value
            }));
    };
    const handleSubmit = async ()=>{
        setLoading(true);
        await new Promise((resolve)=>setTimeout(resolve, 1500));
        router.push('/confirmation');
    };
    const canProceed = !currentQuestion.required || !!answers[currentQuestion.id];
    const renderQuestion = ()=>{
        const { id, type, question, options = [], placeholder = '', scaleLabels } = currentQuestion;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full ${transitionClass}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-display font-semibold mb-10 text-center text-gray-700",
                    children: question
                }, void 0, false, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this),
                type === 'text' || type === 'email' || type === 'instagram' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: type === 'email' ? 'email' : 'text',
                    id: id,
                    className: "w-full p-4 border-2 border-neutral-dark rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent text-lg shadow-sm placeholder:text-text-light" // Updated class
                    ,
                    placeholder: placeholder,
                    value: answers[id] || '',
                    onChange: (e)=>handleInputChange(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 340,
                    columnNumber: 11
                }, this) : type === 'radio' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `questionnaire-option flex items-center ${answers[id] === option.value ? 'option-selected' : 'radio-option-hover' // Apply radio-option-hover here
                            }`,
                            onClick: ()=>handleInputChange(option.value),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-all duration-200 ${answers[id] === option.value ? 'border-accent bg-accent' : 'border-neutral-dark bg-white'}`,
                                    children: answers[id] === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-3.5 h-3.5 text-white",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Questionnaire.tsx",
                                            lineNumber: 365,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Questionnaire.tsx",
                                        lineNumber: 364,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 358,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-medium",
                                    children: option.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 369,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, option.value, true, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 351,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 349,
                    columnNumber: 11
                }, this) : type === 'scale' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mb-3 px-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "scale-label scale-label-left",
                                    children: scaleLabels?.min || '1'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "scale-label scale-label-right",
                                    children: scaleLabels?.max || '10'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 375,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-5 sm:grid-cols-10 gap-2",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10
                            ].map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `scale-button ${parseInt(answers[id] || '0') === value ? 'scale-button-selected' : ''}`,
                                    onClick: ()=>handleInputChange(value.toString()),
                                    children: value
                                }, value, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 381,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 379,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 374,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Questionnaire.tsx",
            lineNumber: 336,
            columnNumber: 7
        }, this);
    };
    const renderSectionHeader = ()=>{
        const header = sectionHeaders[currentQuestionIndex];
        if (!header) return null;
        // Map section index to real image URLs
        const headerImages = {
            0: 'https://images.unsplash.com/photo-1528150177503-8f58dc9669c8?q=80&w=2070&auto=format&fit=crop',
            3: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2070&auto=format&fit=crop',
            5: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
            13: 'https://images.unsplash.com/photo-1549921296-3c9f59aa73e7?q=80&w=2070&auto=format&fit=crop',
            19: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2070&auto=format&fit=crop'
        };
        const imgUrl = headerImages[currentQuestionIndex];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 text-center animate-fade-in-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl md:text-3xl font-display font-semibold text-[var(--foreground)] mb-2",
                    children: header.title
                }, void 0, false, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, this),
                header.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[var(--foreground)] opacity-70 mb-4",
                    children: header.subtitle
                }, void 0, false, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 414,
                    columnNumber: 29
                }, this),
                imgUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 w-full h-40 md:h-56 overflow-hidden rounded-xl shadow-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imgUrl,
                        alt: header.title,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 417,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 416,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Questionnaire.tsx",
            lineNumber: 412,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-background",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full py-5 px-6 md:px-10 flex justify-between items-center bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-2xl font-display font-semibold text-accent transition hover:opacity-80",
                        children: "Sun & Stories"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-gray-600",
                        children: [
                            "Question ",
                            currentQuestionIndex + 1,
                            " / ",
                            questions.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Questionnaire.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-6 md:px-10 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "progress-bar-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-bar-fill",
                        style: {
                            width: `${progress}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 438,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Questionnaire.tsx",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl bg-background p-6 sm:p-8 md:p-10 rounded-xl shadow-xl",
                    children: [
                        renderSectionHeader(),
                        renderQuestion(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-12 pt-6 border-t border-neutral-dark/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePreviousQuestion,
                                    disabled: currentQuestionIndex === 0,
                                    className: `btn btn-outline ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent-dark'}`,
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: currentQuestionIndex === questions.length - 1 ? handleSubmit : handleNextQuestion,
                                    disabled: loading || !answers[currentQuestion.id],
                                    className: `btn btn-accent ${!answers[currentQuestion.id] ? 'opacity-60 cursor-not-allowed' : '' // Normal hover state is handled by .btn-accent:hover
                                    }`,
                                    children: loading ? 'Submitting...' : currentQuestionIndex === questions.length - 1 ? 'Finish & Submit' : 'Next Question'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 453,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 448,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Questionnaire.tsx",
                lineNumber: 447,
                columnNumber: 7
            }, this),
            ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-1.5 rounded-md text-xs shadow-lg opacity-90",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Q: ",
                            currentQuestionIndex + 1,
                            " (",
                            currentQuestion.id,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 492,
                        columnNumber: 11
                    }, this),
                    answers[currentQuestion.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "A: ",
                            answers[currentQuestion.id]
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 493,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Questionnaire.tsx",
                lineNumber: 491,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Questionnaire.tsx",
        lineNumber: 425,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8be5e760._.js.map