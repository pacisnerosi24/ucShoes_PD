const express = require('express');
const { getAllProducts } = require('../controllers/getAllProductsController');

const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     description: Fetch all products from the database.
 *     responses:
 *       200:
 *         description: A list of all products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   productId:
 *                     type: integer
 *                     description: The unique ID of the product.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The name of the product.
 *                     example: Running Shoes
 *                   price:
 *                     type: number
 *                     description: The price of the product.
 *                     example: 79.99
 *                   description:
 *                     type: string
 *                     description: A brief description of the product.
 *                     example: High-quality running shoes for all terrains.
 *                   stock:
 *                     type: integer
 *                     description: The number of items in stock.
 *                     example: 100
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Something went wrong
 */
router.get('/', getAllProducts);

module.exports = router;
