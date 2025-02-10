const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080; // API Gateway en el puerto 8080

app.use(cors());
app.use(express.json());

// 📌 Construir las URLs dinámicamente desde las variables de entorno
const services = {
  createProduct: `http://${process.env.EC2_HOST_PRODUCT_CREATE}:${process.env.SERVER_PORT_CREATE_PRODUCT}`,
  getAllProducts: `http://${process.env.EC2_HOST_PRODUCT_GETALL}:${process.env.SERVER_PORT_GET_ALL_PRODUCTS}`,
  getProductById: `http://${process.env.EC2_HOST_PRODUCT_GETBYID}:${process.env.SERVER_PORT_GET_PRODUCT_BY_ID}`,
  updateProduct: `http://${process.env.EC2_HOST_PRODUCT_UPDATE}:${process.env.SERVER_PORT_UPDATE_PRODUCT}`,
  deleteProduct: `http://${process.env.EC2_HOST_PRODUCT_DELETE}:${process.env.SERVER_PORT_DELETE_PRODUCT}`,

  createCategory: `http://${process.env.EC2_HOST_CREATE_CATEGORY}:${process.env.SERVER_PORT_CREATE_CATEGORY}`,
  getAllCategories: `http://${process.env.EC2_HOST_GET_ALL_CATEGORIES}:${process.env.SERVER_PORT_GET_ALL_CATEGORIES}`,
  getCategoryById: `http://${process.env.EC2_HOST_GET_CATEGORY_BY_ID}:${process.env.SERVER_PORT_GET_CATEGORY_BY_ID}`,
  updateCategory: `http://${process.env.EC2_HOST_UPDATE_CATEGORY}:${process.env.SERVER_PORT_UPDATE_CATEGORY}`,

  graphql: `http://${process.env.EC2_HOST_GRAPHQL}:${process.env.SERVER_PORT_GRAPHQL}`,
};

// 📌 Función para crear rutas dinámicas en el API Gateway
const setupProxy = (route, target) => {
  if (!target.includes('undefined')) { // Evita configurar proxys con valores incorrectos
    app.use(route, createProxyMiddleware({ target, changeOrigin: true }));
  } else {
    console.warn(`❌ WARNING: No target defined for route ${route}`);
  }
};

// 📌 Configurar las rutas del API Gateway
setupProxy('/api/products/create', services.createProduct);
setupProxy('/api/products', `${services.getAllProducts}/api/products`);
setupProxy('/api/products/:id', services.getProductById);
setupProxy('/api/products/update/:id', services.updateProduct);
setupProxy('/api/products/delete/:id', services.deleteProduct);

setupProxy('/api/categories/create', services.createCategory);
setupProxy('/api/categories/search', services.getAllCategories);
setupProxy('/api/categories/:id', services.getCategoryById);
setupProxy('/api/categories/update/:id', services.updateCategory);

setupProxy('/graphql', services.graphql);

// 📌 Iniciar el API Gateway
app.listen(PORT, () => {
  console.log(`🚀 API Gateway running on http://localhost:${PORT}`);
});