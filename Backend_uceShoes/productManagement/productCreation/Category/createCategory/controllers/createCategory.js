const  Category  = require('../models/Category');



const createCategory = async (req, res) => {
  try {
    let { name } = req.body;
    let newName = name;

    let count = 1;
    let existingCategory = await Category.findOne({ where: { name: newName } });
    while (existingCategory) {
      newName = `${name}${count}`;
      existingCategory = await Category.findOne({ where: { name: newName } });
      count++;
    }

    const category = await Category.create({ name: newName });
    return res.status(201).json(category);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = createCategory;
