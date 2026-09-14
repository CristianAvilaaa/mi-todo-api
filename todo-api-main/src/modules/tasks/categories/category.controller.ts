import Category from './category.model.js';

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    // 1. Validar que venga el nombre
    if (!name) {
      return res.status(400).json({ message: 'El nombre es obligatorio' });
    }

    // 2. Verificar si la categoría ya existe en la base de datos
    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
      return res.status(400).json({ message: 'La categoría ya existe' });
    }

    // 3. Crear y guardar la nueva categoría
    const newCategory = new Category({ name, description });
    const savedCategory = await newCategory.save();

    // 4. Responder con éxito
    return res.status(201).json(savedCategory);
  } catch (error) {
    return res.status(500).json({ 
      message: 'Error al crear la categoría', 
      error: error.message 
    });
  }
};