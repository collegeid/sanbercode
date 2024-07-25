const express = require('express');
const app = express();

// Middleware logging
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// Route untuk /hello
app.get('/hello', (req, res) => {
  res.json({
    message: 'Success fetch message',
    data: 'Hello World!'
  });
});

// Route untuk /user
app.get('/user', (req, res) => {
  res.json({
    message: 'Success fetch user',
    data: {
      id: 1,
      name: 'Budi',
      username: 'budidu',
      email: 'budidu@mail.com'
    }
  });
});

// Serve file static dari direktori public
app.use(express.static('public'));

// Mulai server di port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

