"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readData = void 0;
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const readData = (path) => {
    const res = [];
    fs_1.default.createReadStream(path)
        .pipe((0, csv_parser_1.default)())
        .on('data', (data) => res.push(data))
        .on('end', () => {
        // [
        //   { NAME: 'Daffy Duck', AGE: '24' },
        //   { NAME: 'Bugs Bunny', AGE: '22' }
        // ]
    });
    return res;
};
exports.readData = readData;
