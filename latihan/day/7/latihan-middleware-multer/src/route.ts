// src/route.ts
import express from 'express';
import upload from './middlewares/upload.middleware';
import cloudinary from 'cloudinary';
import path from 'path';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
// Konfigurasi Cloudinary
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Cloudinary configuration is missing');
}

cloudinary.v2.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

const router = express.Router();

// Rute untuk menyajikan halaman HTML
router.get('/single', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'views', 'single.html'));
});
  
router.get('/multiple', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'views', 'multiple.html'));
});

// Route untuk upload file single
router.post('/upload/single', upload.single, async (req: Request, res: Response) => {
    if (req.file) {
        console.log('File received:', req.file); // Log file info
        try {
            const result = await cloudinary.v2.uploader.upload(req.file.path);
            console.log('Cloudinary upload result:', result); // Log Cloudinary result
            res.json({ 
                success: true, 
                message: 'File uploaded successfully', 
                file: result 
            });
        } catch (error) {
            console.error('Cloudinary upload error:', (error as Error).message); // Log error
            res.status(500).json({ 
                success: false, 
                message: 'Failed to upload file', 
                error: (error as Error).message 
            });
        }
    } else {
        res.json({ success: false, message: 'No file uploaded' });
    }
});

// Route untuk upload file multiple
router.post('/upload/multiple', upload.multiple, async (req: Request, res: Response) => {
    if (req.files && Array.isArray(req.files)) {
        console.log('Files received:', req.files); // Log files info
        try {
            const uploadPromises = (req.files as Express.Multer.File[]).map(file =>
                cloudinary.v2.uploader.upload(file.path)
            );
            const results = await Promise.all(uploadPromises);
            console.log('Cloudinary upload results:', results); // Log Cloudinary results
            res.json({ 
                success: true, 
                message: 'Files uploaded successfully', 
                files: results 
            });
        } catch (error) {
            console.error('Cloudinary upload error:', (error as Error).message); // Log error
            res.status(500).json({ 
                success: false, 
                message: 'Failed to upload files', 
                error: (error as Error).message 
            });
        }
    } else {
        res.json({ success: false, message: 'No files uploaded' });
    }
});




export default router;
