"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/supabaseClient */ \"./lib/supabaseClient.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Navigation() {\n    _s();\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // Reference for the dropdown menu\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Fetch user info on load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUser = async ()=>{\n            const { data  } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getUser();\n            if (data === null || data === void 0 ? void 0 : data.user) {\n                setUser(data.user);\n            } else {\n                setUser(null);\n            }\n        };\n        getUser();\n    }, []);\n    // Close the dropdown if clicking outside\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n                setDropdownOpen(false);\n            }\n        };\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, []);\n    // Handle logout\n    const handleLogout = async ()=>{\n        await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signOut();\n        router.push(\"/auth\"); // Redirect to login page\n    };\n    // Get first name and initial\n    const getFirstName = ()=>{\n        var _user_user_metadata;\n        return (user === null || user === void 0 ? void 0 : (_user_user_metadata = user.user_metadata) === null || _user_user_metadata === void 0 ? void 0 : _user_user_metadata.first_name) || \"User\";\n    };\n    const getInitial = ()=>getFirstName().charAt(0).toUpperCase();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-blue-800 text-white py-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-xl font-bold\",\n                    children: \"Booking App\"\n                }, void 0, false, {\n                    fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>router.push(\"/\"),\n                            className: \"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors\",\n                            children: \"Create Booking\"\n                        }, void 0, false, {\n                            fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative flex items-center space-x-4\",\n                            ref: dropdownRef,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center space-x-2 cursor-pointer\",\n                                    onClick: ()=>setDropdownOpen(!dropdownOpen),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white font-medium\",\n                                            children: [\n                                                \"Hi, \",\n                                                user ? getFirstName() : \"User\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-center w-10 h-10 bg-white text-blue-800 font-bold rounded-full\",\n                                            children: user ? getInitial() : \"U\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            className: \"w-4 h-4 text-white transition-transform transform \".concat(dropdownOpen ? \"rotate-180\" : \"\"),\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            stroke: \"currentColor\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: \"2\",\n                                                d: \"M19 9l-7 7-7-7\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                dropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg w-48 z-50\",\n                                    style: {\n                                        top: \"calc(100% + 0.5rem)\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>router.push(\"/my-bookings\"),\n                                                    className: \"block w-full text-left px-4 py-2 hover:bg-gray-100\",\n                                                    children: \"My Bookings\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: handleLogout,\n                                                    className: \"block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600\",\n                                                    children: \"Logout\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                                                lineNumber: 108,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/webriq/Code/room-booking-app-full-2/components/NavBar.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Navigation, \"E1PNllYHmn+1Z3omAD/xL85Rc6A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyw0RUFBQ2pCO29EQUNDQyxTQUFTLElBQU16QixPQUFPYyxJQUFJLENBQUM7b0RBQzNCUSxXQUFVOzhEQUNYOzs7Ozs7Ozs7OzswREFJSCw4REFBQ21COzBEQUNDLDRFQUFDakI7b0RBQ0NDLFNBQVNiO29EQUNUVSxXQUFVOzhEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZckIsQ0FBQztHQXZIdUI1Qjs7UUFJUEYsa0RBQVNBOzs7S0FKRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL2xpYi9zdXBhYmFzZUNsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBkcm9wZG93blJlZiA9IHVzZVJlZihudWxsKTsgLy8gUmVmZXJlbmNlIGZvciB0aGUgZHJvcGRvd24gbWVudVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBGZXRjaCB1c2VyIGluZm8gb24gbG9hZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuICAgICAgaWYgKGRhdGE/LnVzZXIpIHtcbiAgICAgICAgc2V0VXNlcihkYXRhLnVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGdldFVzZXIoKTtcbiAgfSwgW10pO1xuXG4gIC8vIENsb3NlIHRoZSBkcm9wZG93biBpZiBjbGlja2luZyBvdXRzaWRlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZHJvcGRvd25SZWYuY3VycmVudCAmJiAhZHJvcGRvd25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHNldERyb3Bkb3duT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIC8vIEhhbmRsZSBsb2dvdXRcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbk91dCgpO1xuICAgIHJvdXRlci5wdXNoKCcvYXV0aCcpOyAvLyBSZWRpcmVjdCB0byBsb2dpbiBwYWdlXG4gIH07XG5cbiAgLy8gR2V0IGZpcnN0IG5hbWUgYW5kIGluaXRpYWxcbiAgY29uc3QgZ2V0Rmlyc3ROYW1lID0gKCkgPT4gdXNlcj8udXNlcl9tZXRhZGF0YT8uZmlyc3RfbmFtZSB8fCAnVXNlcic7XG4gIGNvbnN0IGdldEluaXRpYWwgPSAoKSA9PiBnZXRGaXJzdE5hbWUoKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctYmx1ZS04MDAgdGV4dC13aGl0ZSBweS00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICB7LyogTG9nbyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPkJvb2tpbmcgQXBwPC9kaXY+XG5cbiAgICAgICAgey8qIFJpZ2h0IHNpZGUgLSBDcmVhdGUgQm9va2luZyBidXR0b24gYW5kIFVzZXIgRHJvcGRvd24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgey8qIENyZWF0ZSBCb29raW5nIEJ1dHRvbiAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfSAvLyBOYXZpZ2F0ZSB0byB0aGUgY3JlYXRlIGJvb2tpbmcgcGFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTcwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3JlYXRlIEJvb2tpbmdcbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIHsvKiBVc2VyIERyb3Bkb3duICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCIgcmVmPXtkcm9wZG93blJlZn0+XG4gICAgICAgICAgICB7LyogSW5pdGlhbCBCYWRnZSAqL31cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RHJvcGRvd25PcGVuKCFkcm9wZG93bk9wZW4pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgSGksIHt1c2VyID8gZ2V0Rmlyc3ROYW1lKCkgOiAnVXNlcid9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTEwIGgtMTAgYmctd2hpdGUgdGV4dC1ibHVlLTgwMCBmb250LWJvbGQgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAge3VzZXIgPyBnZXRJbml0aWFsKCkgOiAnVSd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogR3JlZXRpbmcgKi99XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7LyogRHJvcGRvd24gSWNvbiAqL31cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNCBoLTQgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0cmFuc2Zvcm0gJHtcbiAgICAgICAgICAgICAgICAgIGRyb3Bkb3duT3BlbiA/ICdyb3RhdGUtMTgwJyA6ICcnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0xOSA5bC03IDctNy03XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIERyb3Bkb3duIE1lbnUgKi99XG4gICAgICAgICAgICB7ZHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgbXQtMiBiZy13aGl0ZSB0ZXh0LWdyYXktODAwIHJvdW5kZWQtbGcgc2hhZG93LWxnIHctNDggei01MFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiAnY2FsYygxMDAlICsgMC41cmVtKScgfX0gLy8gUG9zaXRpb24gYmVsb3cgdGhlIGJhZGdlXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL215LWJvb2tpbmdzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHRleHQtbGVmdCBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgTXkgQm9va2luZ3NcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCB0ZXh0LWxlZnQgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMTAwIHRleHQtcmVkLTYwMFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJzdXBhYmFzZSIsIk5hdmlnYXRpb24iLCJkcm9wZG93bk9wZW4iLCJzZXREcm9wZG93bk9wZW4iLCJ1c2VyIiwic2V0VXNlciIsImRyb3Bkb3duUmVmIiwicm91dGVyIiwiZ2V0VXNlciIsImRhdGEiLCJhdXRoIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlTG9nb3V0Iiwic2lnbk91dCIsInB1c2giLCJnZXRGaXJzdE5hbWUiLCJ1c2VyX21ldGFkYXRhIiwiZmlyc3RfbmFtZSIsImdldEluaXRpYWwiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJzcGFuIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJzdHlsZSIsInRvcCIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.js\n"));

/***/ })

});