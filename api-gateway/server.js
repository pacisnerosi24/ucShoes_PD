const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080; // API Gateway in the port 8080

app.use(cors());
app.use(express.json());

// 📌 ports
const services = {
  createProduct: 'http://localhost:3000',
  getAllProducts: 'http://localhost:3004',
  getProductById: 'http://localhost:3001',
  updateProduct: 'http://localhost:3011',
  deleteProduct: 'http://localhost:3003',

  createCategory: 'http://localhost:3005',
  getAllCategories: 'http://localhost:3006',
  getCategoryById: 'http://localhost:3007',
  updateCategory: 'http://localhost:3008',
  deleteCategory: 'http://localhost:3009',

  graphql: 'http://localhost:3010',
};

// 📌 Rutas para productos
app.use('/api/products', createProxyMiddleware({ target: services.createProduct, changeOrigin: true }));
app.use('/api/products', createProxyMiddleware({ target: services.getAllProducts, changeOrigin: true }));
app.use('/api/products/:id', createProxyMiddleware({ target: services.getProductById, changeOrigin: true }));
app.use('/api/products/update/:id', createProxyMiddleware({ target: services.updateProduct, changeOrigin: true }));
app.use('/api/products/delete/:id', createProxyMiddleware({ target: services.deleteProduct, changeOrigin: true }));

// 📌 Rutas para categorías
app.use('/api/categories', createProxyMiddleware({ target: services.createCategory, changeOrigin: true }));
app.use('/api/categories/search', createProxyMiddleware({ target: services.getAllCategories, changeOrigin: true }));
app.use('/api/categories/:id', createProxyMiddleware({ target: services.getCategoryById, changeOrigin: true }));
app.use('/api/categories/update/:id', createProxyMiddleware({ target: services.updateCategory, changeOrigin: true }));
app.use('/api/categories/delete/:id', createProxyMiddleware({ target: services.deleteCategory, changeOrigin: true }));

// 📌 Rutas para GraphQL
app.use('/graphql', createProxyMiddleware({ target: services.graphql, changeOrigin: true }));

// 📌 Servidor corriendo
app.listen(PORT, () => {
  console.log(`🚀 API Gateway run in http://localhost:${PORT}`);
});
