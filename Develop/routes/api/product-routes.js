// routes/api/product-routes.js file: 
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');


// GET /api/products 
// This route will return all products including their associated category and tag data
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: Category },
        { model: Tag, through: ProductTag }
      ]
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/products/:id
// This route will return a single product by its id including its associated category and tag data
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.id },
      include: [
        { model: Category },
        { model: Tag, through: ProductTag }
      ]
    });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE /api/products/:id
// This route will allow a user to delete a product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.destroy({ 
      where: { id: req.params.id }
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;






