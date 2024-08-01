"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Yup = __importStar(require("yup"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const encryption_1 = require("..//utils/encryption");
const env_1 = require("../config/env");
const validateRegisterSchema = Yup.object().shape({
    fullName: Yup.string().required(),
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), ""], "Passwords must match"),
});
const validateLoginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});
const validateProfileSchema = Yup.object().shape({
    fullName: Yup.string().required(),
    password: Yup.string().required(),
    passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), ""], "Passwords must match"),
    profilePicture: Yup.string(),
});
exports.default = {
    async profile(req, res) {
        const userId = req.user.id;
        try {
            await validateProfileSchema.validate(req.body);
            await user_model_1.default.updateOne({ _id: userId }, { ...req.body });
            const updatedProfile = await user_model_1.default.findById(userId);
            res.status(200).json({
                message: "Profile updated successfully",
                data: updatedProfile,
            });
        }
        catch (error) {
            if (error instanceof Yup.ValidationError) {
                return res.status(400).send({
                    message: "Validation failed",
                    error: error.errors,
                });
            }
            const _err = error;
            res.status(500).json({
                message: "Error updating profile",
                data: _err.message,
            });
        }
    },
    async me(req, res) {
        const userId = req.user.id;
        try {
            const user = await user_model_1.default.findById(userId);
            res.status(200).json({
                message: "User details",
                data: user,
            });
        }
        catch (error) {
            const _err = error;
            res.status(500).json({
                message: "Error getting user details",
                data: _err.message,
            });
        }
    },
    async login(req, res) {
        const { email, password } = req.body;
        try {
            await validateLoginSchema.validate({
                email,
                password,
            });
            const userByEmail = await user_model_1.default.findOne({ email });
            if (!userByEmail) {
                throw new Error("User not found");
            }
            const decryptPassword = (0, encryption_1.decrypt)(env_1.SECRET, userByEmail.password);
            if (password !== decryptPassword) {
                throw new Error("Email and Password do not match");
            }
            const token = jsonwebtoken_1.default.sign({ id: userByEmail._id, role: userByEmail.role }, env_1.SECRET, {
                expiresIn: "6h",
            });
            res.json({
                message: "User logged in successfully",
                data: token,
            });
        }
        catch (error) {
            if (error instanceof Yup.ValidationError) {
                return res.status(400).send({
                    message: "Validation failed",
                    error: error.errors,
                });
            }
            const _err = error;
            res.status(500).json({
                message: "Error logging in user",
                data: _err.message,
            });
        }
    },
    async register(req, res) {
        const { fullName, username, email, password } = req.body;
        try {
            await validateRegisterSchema.validate({
                fullName,
                username,
                email,
                password,
            });
            const user = await user_model_1.default.create({
                fullName,
                username,
                email,
                password,
                role: "user", // default role
            });
            res.json({
                message: "User registered successfully",
                data: user,
            });
        }
        catch (error) {
            if (error instanceof Yup.ValidationError) {
                return res.status(400).send({
                    message: "Validation failed",
                    error: error.errors,
                });
            }
            const _err = error;
            res.status(500).json({
                message: "Error registering user",
                data: _err.message,
            });
        }
    },
};
