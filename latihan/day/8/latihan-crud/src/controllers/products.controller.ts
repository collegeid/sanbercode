import { Request, Response } from 'express';
import { ProductsModel } from '../models/product.model';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new ProductsModel(req.body);
    const result = await product.save();
    res.status(201).json({ data: result, message: 'Product created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error: (error as Error).message });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductsModel.find().populate('category');
    res.status(200).json({ data: products, message: 'Products retrieved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve products', error: (error as Error).message });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductsModel.findById(req.params.id).populate('category');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ data: product, message: 'Product retrieved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve product', error: (error as Error).message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('category');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ data: product, message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product', error: (error as Error).message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductsModel.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ data: product, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product', error: (error as Error).message });
  }
};
