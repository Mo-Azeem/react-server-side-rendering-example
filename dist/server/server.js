"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const server_1 = __importDefault(require("react-dom/server"));
const home_1 = __importDefault(require("../client/components/home"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    fs_1.default.readFile(path_1.default.resolve("./public/index.html"), "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("An error Occured");
        }
        return res.send(data.replace(`<div id="root"></div>`, `<div id="root">${server_1.default.renderToString((0, jsx_runtime_1.jsx)(home_1.default, {}))}</div>`));
    });
});
app.use(express_1.default.static(path_1.default.resolve(__dirname, ".", "dist"), { maxAge: "30d" }));
app.listen(4000, () => {
    console.log("Listening to http://localhost:4000");
});
