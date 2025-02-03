import { api } from "./api";

// Crear un nuevo producto
export const createProduct = async (productData) => {
  try {
    const response = await api.post("/api/products", productData);
    return response.data;
  } catch (error) {
    console.error("Error creando producto:", error);
    return null;
  }
};

// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    const response = await api.get("/api/products/all");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
};

// Obtener producto por ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    return null;
  }
};

// Actualizar producto por ID
export const updateProduct = async (id, productData) => {
  try {
    const response = await api.put(`/api/products/update/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error("Error actualizando producto:", error);
    return null;
  }
};

// Eliminar producto por ID
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/api/products/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error eliminando producto:", error);
    return null;
  }
};
