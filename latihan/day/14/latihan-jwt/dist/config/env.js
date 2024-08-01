"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET = exports.PORT = exports.DATABASE_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// env.ts
exports.DATABASE_URL = 'mongodb+srv://febrid:HVclmw4PQ9XOvP7X@febrian.jz8kdvu.mongodb.net/?retryWrites=true&w=majority&appName=Febrian';
// Misalnya, jika Anda memiliki variabel lain yang diperlukan oleh aplikasi
exports.PORT = process.env.PORT || 3000;
exports.SECRET = process.env.SECRET || "secret";
