"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_model_1 = __importDefault(require("../models/categories.model"));
exports.default = {
    async create(req, res) {
        try {
            const result = await categories_model_1.default.create(req.body);
            res.status(201).json({
                data: result,
                message: "Success create category",
            });
        }
        catch (error) {
            const err = error;
            res.status(500).json({
                data: err.message,
                message: "Failed create category",
            });
        }
    },
    async findAll(req, res) {
        try {
            const result = await categories_model_1.default.find();
            res.status(200).json({
                data: result,
                message: "Success get all categories",
            });
        }
        catch (error) {
            const err = error;
            res.status(500).json({
                data: err.message,
                message: "Failed get all categories",
            });
        }
    },
    async findOne(req, res) {
        try {
            const result = await categories_model_1.default.findOne({
                _id: req.params.id,
            });
            if (!result) {
                return res.status(404).json({
                    data: null,
                    message: "Category not found",
                });
            }
            res.status(200).json({
                data: result,
                message: "Success get one category",
            });
        }
        catch (error) {
            const err = error;
            res.status(500).json({
                data: err.message,
                message: "Failed get one category",
            });
        }
    },
    async update(req, res) {
        try {
            const result = await categories_model_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, {
                new: true,
            });
            if (!result) {
                return res.status(404).json({
                    data: null,
                    message: "Category not found",
                });
            }
            res.status(200).json({
                data: result,
                message: "Success update category",
            });
        }
        catch (error) {
            const err = error;
            res.status(500).json({
                data: err.message,
                message: "Failed update category",
            });
        }
    },
    async delete(req, res) {
        try {
            const result = await categories_model_1.default.findOneAndDelete({
                _id: req.params.id,
            });
            if (!result) {
                return res.status(404).json({
                    data: null,
                    message: "Category not found",
                });
            }
            res.status(200).json({
                data: result,
                message: "Success delete category",
            });
        }
        catch (error) {
            const err = error;
            res.status(500).json({
                data: err.message,
                message: "Failed delete category",
            });
        }
    },
};
