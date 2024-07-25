import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import categoryRoutes from './routes/category.routes';
import productRoutes from './routes/product.routes';
import routes from './routes';


const app = express();

app.use(bodyParser.json());
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/', routes); // Serve HTML pages


const MONGO_URI = '';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

export default app;
