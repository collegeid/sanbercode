import { Request, Response } from 'express';
import { CategoryModel } from '../models/category.model';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = new CategoryModel(req.body);
    const result = await category.save();
    res.status(201).json({ data: result, message: 'Category created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create category', error: (error as Error).message });
  }
};

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find();
    res.status(200).json({ data: categories, message: 'Categories retrieved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve categories', error: (error as Error).message });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ data: category, message: 'Category retrieved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve category', error: (error as Error).message });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ data: category, message: 'Category updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update category', error: (error as Error).message });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ data: category, message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete category', error: (error as Error).message });
  }
};
