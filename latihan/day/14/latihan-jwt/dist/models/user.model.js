"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const encryption_1 = require("../utils/encryption");
const env_1 = require("../config/env");
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    profilePicture: {
        type: String,
        default: "default.jpg",
    },
}, {
    timestamps: true,
});
UserSchema.pre("save", async function (next) {
    const user = this;
    user.password = (0, encryption_1.encrypt)(env_1.SECRET, user.password);
    next();
});
UserSchema.pre("updateOne", async function (next) {
    const user = this._update;
    user.password = (0, encryption_1.encrypt)(env_1.SECRET, user.password);
    next();
});
UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};
const UserModel = mongoose_1.default.model("User", UserSchema);
exports.default = UserModel;
