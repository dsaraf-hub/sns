(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Questionnaire.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Questionnaire)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Define all the questions based on the provided questionnaire
const questions = [
    {
        id: 'location',
        type: 'radio',
        question: 'Where would you love to brunch this Sunday?',
        options: [
            {
                value: 'sobo',
                label: 'SoBo'
            },
            {
                value: 'west',
                label: 'West Mumbai (Bandra / Khar / Juhu / Andheri)'
            }
        ],
        required: true
    },
    {
        id: 'name',
        type: 'text',
        question: 'What\'s your name?',
        placeholder: 'Your name',
        required: true
    },
    {
        id: 'age',
        type: 'text',
        question: 'How old are you (or how young do you feel 😁)?',
        placeholder: 'Your age',
        required: true
    },
    {
        id: 'social',
        type: 'instagram',
        question: 'Drop your Instagram or LinkedIn, if you\'re cool with it.',
        placeholder: 'Your Instagram or LinkedIn handle'
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
        required: true
    },
    {
        id: 'work_life',
        type: 'scale',
        question: 'Are you happy with your current work/life vibe?',
        required: true
    },
    {
        id: 'stress',
        type: 'scale',
        question: 'Do you feel stressed often?',
        required: true
    },
    {
        id: 'loneliness',
        type: 'scale',
        question: 'Do you often feel lonely?',
        required: true
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
// Image backgrounds for question types
const backgroundImages = {
    general: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    location: "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=1974&auto=format&fit=crop",
    personality: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=2072&auto=format&fit=crop",
    food: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop"
};
function Questionnaire() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [backgroundImage, setBackgroundImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(backgroundImages.general);
    const [transitionClass, setTransitionClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const currentQuestion = questions[currentQuestionIndex];
    const progress = (currentQuestionIndex + 1) / questions.length * 100;
    // Set background image based on question type
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Questionnaire.useEffect": ()=>{
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
        }
    }["Questionnaire.useEffect"], [
        currentQuestion
    ]);
    const handleNextQuestion = ()=>{
        console.log("Next button clicked, current index:", currentQuestionIndex);
        if (currentQuestionIndex < questions.length - 1) {
            setTransitionClass("opacity-0 transform translate-x-10");
            // Use setTimeout to create a smooth transition effect
            setTimeout(()=>{
                setCurrentQuestionIndex((prevIndex)=>prevIndex + 1);
                setTransitionClass("");
            }, 300);
            console.log("Moving to question index:", currentQuestionIndex + 1);
        } else {
            handleSubmit();
        }
    };
    const handlePreviousQuestion = ()=>{
        console.log("Back button clicked, current index:", currentQuestionIndex);
        if (currentQuestionIndex > 0) {
            setTransitionClass("opacity-0 transform -translate-x-10");
            setTimeout(()=>{
                setCurrentQuestionIndex((prevIndex)=>prevIndex - 1);
                setTransitionClass("");
            }, 300);
            console.log("Moving back to question index:", currentQuestionIndex - 1);
        }
    };
    const handleInputChange = (value)=>{
        console.log("Input changed for question:", currentQuestion.id, "value:", value);
        setAnswers((prev)=>({
                ...prev,
                [currentQuestion.id]: value
            }));
    };
    const handleSubmit = async ()=>{
        console.log("Submitting answers:", answers);
        setLoading(true);
        // In a real application, you would send the answers to your backend
        // Simulate API call
        await new Promise((resolve)=>setTimeout(resolve, 1500));
        // Redirect to confirmation page
        router.push('/confirmation');
    };
    const canProceed = !currentQuestion.required || !!answers[currentQuestion.id];
    const renderQuestion = ()=>{
        switch(currentQuestion.type){
            case 'text':
            case 'email':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: currentQuestion.type,
                    value: answers[currentQuestion.id] || '',
                    onChange: (e)=>handleInputChange(e.target.value),
                    placeholder: currentQuestion.placeholder,
                    className: "w-full p-4 text-lg border border-muted rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                }, void 0, false, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 309,
                    columnNumber: 11
                }, this);
            case 'instagram':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: answers[currentQuestion.id] || '',
                            onChange: (e)=>handleInputChange(e.target.value),
                            placeholder: currentQuestion.placeholder,
                            className: "w-full p-4 pl-10 text-lg border border-muted rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 321,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-accent",
                            children: "@"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 320,
                    columnNumber: 11
                }, this);
            case 'radio':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 w-full",
                    children: currentQuestion.options?.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleInputChange(option.value),
                            className: `p-4 border ${answers[currentQuestion.id] === option.value ? 'border-primary bg-primary bg-opacity-5 shadow-md' : 'border-muted shadow-sm'} rounded-xl cursor-pointer hover:border-primary hover:shadow-md transition-all duration-300`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-5 h-5 rounded-full border-2 flex items-center justify-center ${answers[currentQuestion.id] === option.value ? 'border-primary' : 'border-foreground border-opacity-30'}`,
                                        children: answers[currentQuestion.id] === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full bg-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Questionnaire.tsx",
                                            lineNumber: 354,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Questionnaire.tsx",
                                        lineNumber: 346,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg",
                                        children: option.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Questionnaire.tsx",
                                        lineNumber: 357,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Questionnaire.tsx",
                                lineNumber: 345,
                                columnNumber: 17
                            }, this)
                        }, option.value, false, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 336,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 334,
                    columnNumber: 11
                }, this);
            case 'scale':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "10"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between gap-2",
                            children: [
                                ...Array(10)
                            ].map((_, i)=>{
                                const value = (i + 1).toString();
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>handleInputChange(value),
                                    className: `flex-1 h-12 rounded-full flex items-center justify-center cursor-pointer text-lg font-medium transition-colors ${answers[currentQuestion.id] === value ? 'bg-primary text-white shadow-md transform scale-110' : 'bg-muted hover:bg-primary hover:bg-opacity-20'}`,
                                    children: i + 1
                                }, i, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 375,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 371,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 366,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: backgroundImage,
                        alt: "Background",
                        fill: true,
                        className: "object-cover opacity-10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-background/80 to-background/95"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Questionnaire.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full py-4 px-6 md:px-10 flex justify-between items-center border-b border-muted bg-background/80 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-xl font-medium text-accent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display font-bold",
                            children: "Sun & Stories"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium",
                        children: [
                            "Question ",
                            currentQuestionIndex + 1,
                            " of ",
                            questions.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Questionnaire.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-1 bg-muted",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-primary transition-all duration-500 ease-in-out",
                    style: {
                        width: `${progress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 422,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Questionnaire.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl mx-auto bg-background/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-8 transition-all duration-300 ease-in-out ${transitionClass}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl md:text-3xl font-display font-bold mb-8",
                                    children: currentQuestion.question
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: renderQuestion()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePreviousQuestion,
                                    disabled: currentQuestionIndex === 0,
                                    className: `px-6 py-3 rounded-full transition ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-muted'}`,
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 441,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNextQuestion,
                                    disabled: !canProceed || loading,
                                    className: `px-8 py-3 bg-accent text-white rounded-full transition shadow-md ${canProceed && !loading ? 'hover:bg-opacity-90 hover:shadow-lg transform hover:scale-105' : 'opacity-50 cursor-not-allowed'}`,
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "animate-spin h-5 w-5 text-white",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        className: "opacity-25",
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10",
                                                        stroke: "currentColor",
                                                        strokeWidth: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Questionnaire.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        className: "opacity-75",
                                                        fill: "currentColor",
                                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Questionnaire.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Questionnaire.tsx",
                                                lineNumber: 463,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Processing..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Questionnaire.tsx",
                                                lineNumber: 467,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Questionnaire.tsx",
                                        lineNumber: 462,
                                        columnNumber: 17
                                    }, this) : currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Questionnaire.tsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Questionnaire.tsx",
                            lineNumber: 440,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Questionnaire.tsx",
                    lineNumber: 430,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Questionnaire.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-2 right-2 bg-black/80 text-white p-2 rounded text-xs max-w-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Current Question: ",
                            currentQuestionIndex + 1
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 482,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Question ID: ",
                            currentQuestion.id
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 483,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Answer: ",
                            answers[currentQuestion.id] || 'none'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Questionnaire.tsx",
                        lineNumber: 484,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Questionnaire.tsx",
                lineNumber: 481,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Questionnaire.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, this);
}
_s(Questionnaire, "NKmgTIw2PtAN1xJlQcPW9tD/+DE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Questionnaire;
var _c;
__turbopack_context__.k.register(_c, "Questionnaire");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_Questionnaire_tsx_bd58003d._.js.map