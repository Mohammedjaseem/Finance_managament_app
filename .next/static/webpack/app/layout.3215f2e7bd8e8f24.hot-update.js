"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/components/protected-route.tsx":
/*!********************************************!*\
  !*** ./app/components/protected-route.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProtectedRoute: () => (/* binding */ ProtectedRoute)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/auth-context */ \"(app-pages-browser)/./app/context/auth-context.tsx\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading */ \"(app-pages-browser)/./app/loading.tsx\");\n// src/components/ProtectedRoute.tsx\n/* __next_internal_client_entry_do_not_use__ ProtectedRoute auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProtectedRoute(param) {\n    let { children } = param;\n    _s();\n    const { user, isLoading } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_3__.useAuth)() // error removed from here\n    ;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Ensures the effect is only run on the client\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ProtectedRoute.useEffect\": ()=>{\n            setMounted(true);\n        }\n    }[\"ProtectedRoute.useEffect\"], []);\n    // Redirect logic after hydration\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ProtectedRoute.useEffect\": ()=>{\n            if (!isLoading && user === null && mounted) {\n                router.replace('/login');\n            }\n        }\n    }[\"ProtectedRoute.useEffect\"], [\n        user,\n        isLoading,\n        router,\n        mounted\n    ]);\n    if (!mounted || isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/jassy/Documents/Projects/financial-management-app/app/components/protected-route.tsx\",\n        lineNumber: 27,\n        columnNumber: 37\n    }, this);\n    // Handle error logic, for example showing an error message if user is null\n    if (user === null) {\n        // Show error message or redirect\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error: Authentication failed. Please log in.\"\n        }, void 0, false, {\n            fileName: \"/Users/jassy/Documents/Projects/financial-management-app/app/components/protected-route.tsx\",\n            lineNumber: 32,\n            columnNumber: 12\n        }, this);\n    }\n    return user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false) : null;\n}\n_s(ProtectedRoute, \"BCYTh47aPiuD85X1KNwCptYyB4U=\", false, function() {\n    return [\n        _context_auth_context__WEBPACK_IMPORTED_MODULE_3__.useAuth,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProtectedRoute;\nvar _c;\n$RefreshReg$(_c, \"ProtectedRoute\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Byb3RlY3RlZC1yb3V0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9DQUFvQzs7O0FBR087QUFDQTtBQUNNO0FBQ2pCO0FBRXpCLFNBQVNLLGVBQWUsS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQzs7SUFDN0IsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRSxHQUFHTCw4REFBT0EsR0FBRywwQkFBMEI7O0lBQ2hFLE1BQU1NLFNBQVNQLDBEQUFTQTtJQUV4QixNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkMsK0NBQStDO0lBQy9DRCxnREFBU0E7b0NBQUM7WUFDUlcsV0FBVztRQUNiO21DQUFHLEVBQUU7SUFFTCxpQ0FBaUM7SUFDakNYLGdEQUFTQTtvQ0FBQztZQUNSLElBQUksQ0FBQ1EsYUFBYUQsU0FBUyxRQUFRRyxTQUFTO2dCQUMxQ0QsT0FBT0csT0FBTyxDQUFDO1lBQ2pCO1FBQ0Y7bUNBQUc7UUFBQ0w7UUFBTUM7UUFBV0M7UUFBUUM7S0FBUTtJQUVyQyxJQUFJLENBQUNBLFdBQVdGLFdBQVcscUJBQU8sOERBQUNKLGdEQUFPQTs7Ozs7SUFFMUMsMkVBQTJFO0lBQzNFLElBQUlHLFNBQVMsTUFBTTtRQUNqQixpQ0FBaUM7UUFDakMscUJBQU8sOERBQUNNO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLE9BQU9OLHFCQUFPO2tCQUFHRDt3QkFBZTtBQUNsQztHQTNCZ0JEOztRQUNjRiwwREFBT0E7UUFDcEJELHNEQUFTQTs7O0tBRlZHIiwic291cmNlcyI6WyIvVXNlcnMvamFzc3kvRG9jdW1lbnRzL1Byb2plY3RzL2ZpbmFuY2lhbC1tYW5hZ2VtZW50LWFwcC9hcHAvY29tcG9uZW50cy9wcm90ZWN0ZWQtcm91dGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21wb25lbnRzL1Byb3RlY3RlZFJvdXRlLnRzeFxuJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9jb250ZXh0L2F1dGgtY29udGV4dCdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2xvYWRpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm90ZWN0ZWRSb3V0ZSh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IHsgdXNlciwgaXNMb2FkaW5nIH0gPSB1c2VBdXRoKCkgLy8gZXJyb3IgcmVtb3ZlZCBmcm9tIGhlcmVcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyBFbnN1cmVzIHRoZSBlZmZlY3QgaXMgb25seSBydW4gb24gdGhlIGNsaWVudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSlcbiAgfSwgW10pXG5cbiAgLy8gUmVkaXJlY3QgbG9naWMgYWZ0ZXIgaHlkcmF0aW9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0xvYWRpbmcgJiYgdXNlciA9PT0gbnVsbCAmJiBtb3VudGVkKSB7XG4gICAgICByb3V0ZXIucmVwbGFjZSgnL2xvZ2luJylcbiAgICB9XG4gIH0sIFt1c2VyLCBpc0xvYWRpbmcsIHJvdXRlciwgbW91bnRlZF0pXG5cbiAgaWYgKCFtb3VudGVkIHx8IGlzTG9hZGluZykgcmV0dXJuIDxMb2FkaW5nIC8+XG5cbiAgLy8gSGFuZGxlIGVycm9yIGxvZ2ljLCBmb3IgZXhhbXBsZSBzaG93aW5nIGFuIGVycm9yIG1lc3NhZ2UgaWYgdXNlciBpcyBudWxsXG4gIGlmICh1c2VyID09PSBudWxsKSB7XG4gICAgLy8gU2hvdyBlcnJvciBtZXNzYWdlIG9yIHJlZGlyZWN0XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IEF1dGhlbnRpY2F0aW9uIGZhaWxlZC4gUGxlYXNlIGxvZyBpbi48L2Rpdj5cbiAgfVxuXG4gIHJldHVybiB1c2VyID8gPD57Y2hpbGRyZW59PC8+IDogbnVsbFxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlQXV0aCIsIkxvYWRpbmciLCJQcm90ZWN0ZWRSb3V0ZSIsImNoaWxkcmVuIiwidXNlciIsImlzTG9hZGluZyIsInJvdXRlciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwicmVwbGFjZSIsImRpdiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/protected-route.tsx\n"));

/***/ })

});