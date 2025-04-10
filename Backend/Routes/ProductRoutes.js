const express = require('express');
const multer = require('multer');
const path = require('path');
const Product = require('../models/Product');

const router = express.Router(); // <-- Missing in your code

// Ensure 'uploads' folder exists
const fs = require('fs');
const uploadPath = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Get all products (with optional filters)
router.get('/', async (req, res) => {
  const filters = {};
  if (req.query.category) filters.category = req.query.category;
  if (req.query.minPrice) filters.price = { $gte: req.query.minPrice };
  if (req.query.maxPrice) filters.price = { ...filters.price, $lte: req.query.maxPrice };
  const products = await Product.find(filters);
  res.json(products);
});

// Add new product with image
router.post('/', upload.single('image'), async (req, res) => {
  const { name, description, price, category } = req.body;
  const image = req.file ? req.file.filename : '';
  const product = new Product({ name, description, price, category, image });
  await product.save();
  res.json(product);
});

// Update product (optionally update image)
router.put('/:id', upload.single('image'), async (req, res) => {
  const updateData = {
    ...req.body,
  };
  if (req.file) {
    updateData.image = req.file.filename;
  }
  const updated = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
  res.json(updated);
});

// Delete product
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});

module.exports = router;
