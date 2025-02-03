import { api } from "./api";

// Crear una nueva categoría
export const createCategory = async (categoryData) => {
  try {
    const response = await api.post("/api/categories", categoryData);
    return response.data;
  } catch (error) {
    console.error("Error creando categoría:", error);
    return null;
  }
};

// Obtener todas las categorías
export const getAllCategories = async () => {
  try {
    const response = await api.get("/api/categories/search");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo categorías:", error);
    return [];
  }
};

// Obtener categoría por ID
export const getCategoryById = async (id) => {
  try {
    const response = await api.get(`/api/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo categoría:", error);
    return null;
  }
};

// Actualizar categoría por ID
export const updateCategory = async (id, categoryData) => {
  try {
    const response = await api.put(`/api/categories/update/${id}`, categoryData);
    return response.data;
  } catch (error) {
    console.error("Error actualizando categoría:", error);
    return null;
  }
};

// Eliminar categoría por ID
export const deleteCategory = async (id) => {
  try {
    const response = await api.delete(`/api/categories/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error eliminando categoría:", error);
    return null;
  }
};
