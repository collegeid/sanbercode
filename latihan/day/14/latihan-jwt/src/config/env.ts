import dotenv from 'dotenv';
dotenv.config();


// env.ts
export const DATABASE_URL = '';



export const SECRET: string = process.env.SECRET || "secret";

// Misalnya, jika Anda memiliki variabel lain yang diperlukan oleh aplikasi
export const PORT = process.env.PORT || 3000;

