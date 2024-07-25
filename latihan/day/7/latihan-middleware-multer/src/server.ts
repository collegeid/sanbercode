// src/server.ts
import express from 'express';
import path from 'path';
import router from './route';


const app = express();
const port = process.env.PORT || 3000;

// Static files
app.use(express.static(path.join(__dirname, 'views')));

// Routes

app.use('/', router);
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
