"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function home() {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Hello Server Side Rendering" }), (0, jsx_runtime_1.jsx)("p", { children: "This is a basic implementation of react server side rendering, no hydration no what so ever" })] })));
}
exports.default = home;
