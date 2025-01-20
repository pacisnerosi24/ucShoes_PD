const { Product, Category } = require('../models/associations');

// Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: 'category',  // Usar el alias 'category'
        attributes: ['name'],  // Solo el nombre de la categoría
      },
    });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: {
        model: Category,
        as: 'category',  // Usar el alias 'category'
        attributes: ['name'],  // Solo el nombre de la categoría
      },
    });

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  try {
    const {
      productName,
      image,
      size,
      price,
      color,
      description,
      accessories,
      productCode,
      launchDate,
      brand,
      productStatus,
      categoryId,
    } = req.body;

    const newProduct = await Product.create({
      productName,
      image,
      size,
      price,
      color,
      description,
      accessories,
      productCode,
      launchDate,
      brand,
      productStatus,
      categoryId,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Actualizar un producto existente
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const {
      productName,
      image,
      size,
      price,
      color,
      description,
      accessories,
      productCode,
      launchDate,
      brand,
      productStatus,
      categoryId,
    } = req.body;

    await product.update({
      productName,
      image,
      size,
      price,
      color,
      description,
      accessories,
      productCode,
      launchDate,
      brand,
      productStatus,
      categoryId,
    });

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    await product.destroy();
    res.status(200).json({ message: 'Producto eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
