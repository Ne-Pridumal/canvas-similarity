"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const file_reader_1 = require("./file-reader");
const appRoot = path_1.default.resolve();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 1337;
const data = (0, file_reader_1.readData)("data.csv");
app.get('/', (req, res) => {
    res.status(200).send(data);
});
app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});
