"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("../config/env");
const connect = async () => {
    try {
        await mongoose_1.default.connect(env_1.DATABASE_URL, {
            autoIndex: true,
            dbName: "sanber-be-58",
            connectTimeoutMS: 10000,
        });
        console.log("Database connected");
    }
    catch (error) {
        console.log(error);
        console.log("Error connecting to database");
    }
};
exports.default = connect;
