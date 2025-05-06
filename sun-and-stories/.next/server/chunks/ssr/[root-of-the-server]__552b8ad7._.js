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
"[project]/src/components/PlaceholderImage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const PlaceholderImage = ({ width = 400, height = 300, text = 'Image Placeholder', bgColor = 'var(--neutral-light)', textColor = 'var(--foreground)', className = '' })=>{
    // Updated random color function to use new palette
    const getRandomColorFromPalette = ()=>{
        const colors = [
            'var(--primary)',
            'var(--secondary)',
            'var(--accent)',
            'var(--neutral-light)',
            'var(--neutral-medium)',
            '#fec89a',
            '#e0aaff',
            '#caffbf',
            '#9bf6ff',
            '#ffadad' // Pastel Red/Pink
        ];
        // If a specific bgColor is provided and it's not the default, use it.
        // Otherwise, pick a random one from our new palette.
        return bgColor !== 'var(--neutral-light)' ? bgColor : colors[Math.floor(Math.random() * colors.length)];
    };
    const finalBgColor = getRandomColorFromPalette();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-center ${className}`,
        style: {
            width: '100%',
            height: '100%',
            backgroundColor: finalBgColor,
            color: textColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '1rem',
            borderRadius: 'inherit',
            border: `1px solid ${textColor === 'var(--foreground)' ? 'var(--neutral-dark)' : 'transparent'}` // Subtle border if using default text color
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/src/components/PlaceholderImage.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = PlaceholderImage;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__552b8ad7._.js.map