import { Request, Response } from "express";
import CategoriesModel from "../models/categories.model";

export default {
  async create(req: Request, res: Response) {
    try {
      const result = await CategoriesModel.create(req.body);
      res.status(201).json({
        data: result,
        message: "Success create category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create category",
      });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const result = await CategoriesModel.find();
      res.status(200).json({
        data: result,
        message: "Success get all categories",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all categories",
      });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const result = await CategoriesModel.findOne({
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
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one category",
      });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const result = await CategoriesModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );
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
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update category",
      });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const result = await CategoriesModel.findOneAndDelete({
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
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete category",
      });
    }
  },
};
