"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/my-bookings",{

/***/ "./pages/MyBookingsList.jsx":
/*!**********************************!*\
  !*** ./pages/MyBookingsList.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyBookingsList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(\"https://your-project-url.supabase.co\", \"your-anon-key\");\nfunction MyBookingsList() {\n    _s();\n    const [bookings, setBookings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchBookings();\n    }, []);\n    async function fetchBookings() {\n        const { data: user , error: userError  } = await supabase.auth.getUser();\n        if (userError || !(user === null || user === void 0 ? void 0 : user.user)) {\n            console.error(\"Error fetching user:\", userError);\n            return;\n        }\n        const { data , error  } = await supabase.from(\"bookings\").select(\"*\").eq(\"user_id\", user.user.id);\n        if (error) {\n            console.error(\"Error fetching bookings:\", error);\n        } else {\n            setBookings(data);\n        }\n        setLoading(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold mb-4\",\n                children: \"List View\"\n            }, void 0, false, {\n                fileName: \"/Users/webriq/Code/room-booking-app-full-2/pages/MyBookingsList.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/webriq/Code/room-booking-app-full-2/pages/MyBookingsList.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this) : bookings.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No bookings available.\"\n            }, void 0, false, {\n                fileName: \"/Users/webriq/Code/room-booking-app-full-2/pages/MyBookingsList.jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n                children: bookings.map((booking)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded-lg p-4 shadow-md bg-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-semibold\",\n                                children: [\n                                    \"Room: \",\n                                    booking.room_type\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/webriq/Code/room-booking-app-full-2/pages/MyBookingsList.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Start Date: \",\n                                    booking.start_date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/webriq/Code/room-booking-app-full-2/pages/MyBookingsList.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"End Date: \",\n                                    booking.end_date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/webriq/Code/room-booking-app-full-2/pages/MyBookingsList.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Total Price: €\",\n                                    booking.total_price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/webriq/Code/room-booking-app-full-2/pages/MyBookingsList.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, booking.id, true, {\n                        fileName: \"/Users/webriq/Code/room-booking-app-full-2/pages/MyBookingsList.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/webriq/Code/room-booking-app-full-2/pages/MyBookingsList.jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/webriq/Code/room-booking-app-full-2/pages/MyBookingsList.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(MyBookingsList, \"PE5FI0kJoD0YQqBBR2XHHfm8FkE=\");\n_c = MyBookingsList;\nvar _c;\n$RefreshReg$(_c, \"MyBookingsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NeUJvb2tpbmdzTGlzdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUM0QztBQUNTO0FBRXJELE1BQU1HLFdBQVdELG1FQUFZQSxDQUFDLHdDQUF3QztBQUV2RCxTQUFTRSxpQkFBaUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RTO0lBQ0YsR0FBRyxFQUFFO0lBRUwsZUFBZUEsZ0JBQWdCO1FBQzdCLE1BQU0sRUFBRUMsTUFBTUMsS0FBSSxFQUFFQyxPQUFPQyxVQUFTLEVBQUUsR0FBRyxNQUFNVixTQUFTVyxJQUFJLENBQUNDLE9BQU87UUFDcEUsSUFBSUYsYUFBYSxDQUFDRixDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1BLElBQUksR0FBRTtZQUM1QkssUUFBUUosS0FBSyxDQUFDLHdCQUF3QkM7WUFDdEM7UUFDRixDQUFDO1FBRUQsTUFBTSxFQUFFSCxLQUFJLEVBQUVFLE1BQUssRUFBRSxHQUFHLE1BQU1ULFNBQzNCYyxJQUFJLENBQUMsWUFDTEMsTUFBTSxDQUFDLEtBQ1BDLEVBQUUsQ0FBQyxXQUFXUixLQUFLQSxJQUFJLENBQUNTLEVBQUU7UUFFN0IsSUFBSVIsT0FBTztZQUNUSSxRQUFRSixLQUFLLENBQUMsNEJBQTRCQTtRQUM1QyxPQUFPO1lBQ0xOLFlBQVlJO1FBQ2QsQ0FBQztRQUNERixXQUFXLEtBQUs7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ2E7OzBCQUNDLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBeUI7Ozs7OztZQUN0Q2hCLHdCQUNDLDhEQUFDaUI7MEJBQUU7Ozs7O3VCQUNEbkIsU0FBU29CLE1BQU0sS0FBSyxrQkFDdEIsOERBQUNEOzBCQUFFOzs7OztxQ0FFSCw4REFBQ0g7Z0JBQUlFLFdBQVU7MEJBQ1psQixTQUFTcUIsR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDTjt3QkFFQ0UsV0FBVTs7MENBRVYsOERBQUNLO2dDQUFHTCxXQUFVOztvQ0FBZ0I7b0NBQU9JLFFBQVFFLFNBQVM7Ozs7Ozs7MENBQ3RELDhEQUFDTDs7b0NBQUU7b0NBQWFHLFFBQVFHLFVBQVU7Ozs7Ozs7MENBQ2xDLDhEQUFDTjs7b0NBQUU7b0NBQVdHLFFBQVFJLFFBQVE7Ozs7Ozs7MENBQzlCLDhEQUFDUDs7b0NBQUU7b0NBQWVHLFFBQVFLLFdBQVc7Ozs7Ozs7O3VCQU5oQ0wsUUFBUVAsRUFBRTs7Ozs7Ozs7O29CQVV0Qjs7Ozs7OztBQUdQLENBQUM7R0FwRHVCaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTXlCb29raW5nc0xpc3QuanN4P2NlNDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5cbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KCdodHRwczovL3lvdXItcHJvamVjdC11cmwuc3VwYWJhc2UuY28nLCAneW91ci1hbm9uLWtleScpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUJvb2tpbmdzTGlzdCgpIHtcbiAgY29uc3QgW2Jvb2tpbmdzLCBzZXRCb29raW5nc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hCb29raW5ncygpO1xuICB9LCBbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hCb29raW5ncygpIHtcbiAgICBjb25zdCB7IGRhdGE6IHVzZXIsIGVycm9yOiB1c2VyRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuICAgIGlmICh1c2VyRXJyb3IgfHwgIXVzZXI/LnVzZXIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXI6JywgdXNlckVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oJ2Jvb2tpbmdzJylcbiAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgLmVxKCd1c2VyX2lkJywgdXNlci51c2VyLmlkKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va2luZ3M6JywgZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRCb29raW5ncyhkYXRhKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPkxpc3QgVmlldzwvaDI+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICkgOiBib29raW5ncy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxwPk5vIGJvb2tpbmdzIGF2YWlsYWJsZS48L3A+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICB7Ym9va2luZ3MubWFwKChib29raW5nKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17Ym9va2luZy5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgcC00IHNoYWRvdy1tZCBiZy13aGl0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Um9vbToge2Jvb2tpbmcucm9vbV90eXBlfTwvaDM+XG4gICAgICAgICAgICAgIDxwPlN0YXJ0IERhdGU6IHtib29raW5nLnN0YXJ0X2RhdGV9PC9wPlxuICAgICAgICAgICAgICA8cD5FbmQgRGF0ZToge2Jvb2tpbmcuZW5kX2RhdGV9PC9wPlxuICAgICAgICAgICAgICA8cD5Ub3RhbCBQcmljZTog4oKse2Jvb2tpbmcudG90YWxfcHJpY2V9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZSIsIk15Qm9va2luZ3NMaXN0IiwiYm9va2luZ3MiLCJzZXRCb29raW5ncyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hCb29raW5ncyIsImRhdGEiLCJ1c2VyIiwiZXJyb3IiLCJ1c2VyRXJyb3IiLCJhdXRoIiwiZ2V0VXNlciIsImNvbnNvbGUiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJpZCIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwicCIsImxlbmd0aCIsIm1hcCIsImJvb2tpbmciLCJoMyIsInJvb21fdHlwZSIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInRvdGFsX3ByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/MyBookingsList.jsx\n"));

/***/ })

});