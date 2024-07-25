const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Dummy data
let categories = [
  { id: 1, name: 'Elektronik' },
  { id: 2, name: 'Perabotan' }
];

let products = [
  { id: 1, name: 'Laptop', category: 'Elektronik' },
  { id: 2, name: 'Meja', category: 'Perabotan' }
];

// Route GET yang mengembalikan daftar semua kategori produk
app.get('/categories', (req, res) => {
  res.json(categories);
});

// Route GET yang mengembalikan detail kategori berdasarkan ID
app.get('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find(cat => cat.id === id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: 'Kategori tidak ditemukan' });
  }
});

// Route POST yang menambahkan kategori baru ke array
app.post('/categories', (req, res) => {
  const newCategory = { id: categories.length + 1, ...req.body };
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

// Route PUT yang memperbarui kategori berdasarkan ID
app.put('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = categories.findIndex(cat => cat.id === id);
  if (index !== -1) {
    categories[index] = { id, ...req.body };
    res.json(categories[index]);
  } else {
    res.status(404).json({ message: 'Kategori tidak ditemukan' });
  }
});

// Route DELETE yang menghapus kategori berdasarkan ID
app.delete('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = categories.findIndex(cat => cat.id === id);
  if (index !== -1) {
    const deletedCategory = categories.splice(index, 1);
    res.json(deletedCategory);
  } else {
    res.status(404).json({ message: 'Kategori tidak ditemukan' });
  }
});

// Route GET dengan query string untuk mencari produk berdasarkan nama
app.get('/products', (req, res) => {
  const { name } = req.query;
  if (name) {
    const filteredProducts = products.filter(prod => prod.name.toLowerCase().includes(name.toLowerCase()));
    res.json(filteredProducts);
  } else {
    res.json(products);
  }
});

// Route GET dengan parameter dan query string untuk mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama
app.get('/categories/:category/products', (req, res) => {
  const { category } = req.params;
  const { name } = req.query;
  let filteredProducts = products.filter(prod => prod.category.toLowerCase() === category.toLowerCase());

  if (name) {
    filteredProducts = filteredProducts.filter(prod => prod.name.toLowerCase().includes(name.toLowerCase()));
  }

  res.json(filteredProducts);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

