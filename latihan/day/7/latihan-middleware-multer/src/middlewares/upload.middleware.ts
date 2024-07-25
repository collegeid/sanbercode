// src/middlewares/upload.middleware.ts
import multer from 'multer';
import path from 'path';

// Konfigurasi penyimpanan multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Menentukan folder penyimpanan
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Menentukan nama file
  }
});

const upload = {
  single: multer({ storage }).single('file'),
  multiple: multer({ storage }).array('files') // Perhatikan penggunaan 'files' sesuai dengan nama field
};

export default upload;
